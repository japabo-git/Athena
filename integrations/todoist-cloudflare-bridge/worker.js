/**
 * Athena Todoist -> Cloudflare bridge (minimal proof).
 *
 * POST /webhooks/todoist
 * - verifies Todoist HMAC using TODOIST_CLIENT_SECRET
 * - deduplicates by X-Todoist-Delivery-ID using KV
 * - enqueues a compact job
 * - returns HTTP 200 quickly
 *
 * Queue consumer:
 * - processes the proof job
 * - optionally posts a result comment to the originating Todoist task
 *
 * Required bindings:
 *   TODOIST_CLIENT_SECRET (secret)
 *   TODOIST_API_TOKEN (secret) -- only needed for result comments
 *   TODOIST_DEDUP (KV namespace)
 *   ATHENA_QUEUE (Queue)
 */

const encoder = new TextEncoder();

async function hmacBase64(secret, body) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(body));
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

async function timingSafeEqual(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function extractTaskId(event) {
  const data = event?.event_data;
  return data?.id ?? data?.task_id ?? data?.item_id ?? null;
}

async function addTodoistComment(token, taskId, content) {
  if (!token || !taskId) return;
  const response = await fetch("https://api.todoist.com/api/v1/comments", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task_id: String(taskId), content }),
  });
  if (!response.ok) {
    throw new Error(`Todoist comment failed: HTTP ${response.status}`);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({ ok: true, service: "athena-todoist-bridge" });
    }

    if (url.pathname !== "/webhooks/todoist" || request.method !== "POST") {
      return new Response("Not found", { status: 404 });
    }

    const body = await request.text();
    const supplied = request.headers.get("X-Todoist-Hmac-SHA256");
    const expected = await hmacBase64(env.TODOIST_CLIENT_SECRET, body);

    if (!(await timingSafeEqual(supplied, expected))) {
      return new Response("Invalid signature", { status: 401 });
    }

    const deliveryId = request.headers.get("X-Todoist-Delivery-ID");
    if (!deliveryId) {
      return new Response("Missing delivery ID", { status: 400 });
    }

    // Todoist retries a failed delivery with the same delivery ID.
    // Treat a previously accepted delivery as already processed.
    const seen = await env.TODOIST_DEDUP.get(deliveryId);
    if (seen) {
      return new Response("Already accepted", { status: 200 });
    }

    const event = JSON.parse(body);
    const taskId = extractTaskId(event);

    await env.ATHENA_QUEUE.send({
      kind: "todoist.webhook.proof",
      deliveryId,
      eventName: event.event_name ?? null,
      userId: event.user_id ?? null,
      taskId,
      receivedAt: new Date().toISOString(),
      event,
    });

    // Mark only after the queue accepted the message.
    await env.TODOIST_DEDUP.put(deliveryId, "queued", { expirationTtl: 86400 });

    return new Response("Accepted", { status: 200 });
  },

  async queue(batch, env) {
    for (const message of batch.messages) {
      const job = message.body;

      try {
        if (job.kind === "todoist.webhook.proof") {
          const result =
            `ATHENA BRIDGE TEST PASSED\\n\\nTodoist event received by Cloudflare and consumed from Queue.\\nDelivery: ${job.deliveryId}\\nEvent: ${job.eventName ?? "unknown"}\\nReceived: ${job.receivedAt}`;

          await addTodoistComment(
            env.TODOIST_API_TOKEN,
            job.taskId,
            result,
          );
        }

        message.ack();
      } catch (error) {
        console.error("Queue processing failed", error);
        message.retry();
      }
    }
  },
};
