# Athena Todoist → Cloudflare Bridge Proof

This is intentionally a minimal end-to-end bridge proof.

## Flow

ChatGPT iOS → Todoist task → Todoist webhook → Cloudflare Worker → Queue → Worker consumer → Todoist comment.

Todoist remains the command/event surface. Cloudflare owns asynchronous execution. This proof does not yet introduce E2B, an LLM planner, or the production Athena orchestrator.

## Secrets

Set these as Cloudflare Worker secrets:

- `TODOIST_CLIENT_SECRET`: the client secret of the Todoist application that owns the webhook.
- `TODOIST_API_TOKEN`: the Todoist API token used only by the proof consumer to post a result comment.

Never commit either secret.

## Setup

1. Create a Cloudflare KV namespace and put its ID in `wrangler.toml`.
2. Create the `athena-todoist-jobs` Queue.
3. Deploy this Worker.
4. Confirm `GET /health` returns JSON with `ok: true`.
5. In the Todoist App Management Console, configure an HTTPS webhook pointing to:
   `https://<worker-host>/webhooks/todoist`
6. Subscribe to `item:added`.
7. Complete the Todoist OAuth flow for the webhook app so webhooks are activated for the account.
8. Create a test task in Todoist.
9. The task should produce a webhook, a queue message, and then a Todoist comment reading `ATHENA BRIDGE TEST PASSED`.

## Important reliability rules

Todoist states that webhook notifications can be delayed, reordered, or missed. The bridge therefore uses the webhook as a notification/event trigger, not as authoritative state. The eventual Athena control plane must reconcile against Todoist's API and maintain its own durable execution state.

The delivery ID is used for idempotency because Todoist reuses the same delivery ID when retrying a failed webhook delivery.
