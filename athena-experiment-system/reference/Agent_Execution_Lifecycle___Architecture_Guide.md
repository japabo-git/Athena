# End-to-End Agent Execution Lifecycle Guide

---

## Stage 1: User Sends Prompt
The raw user message enters your application backend (e.g., Python/TypeScript server).

---

## Stage 2: Intent Classification & Routing
*Goal: Decide what type of prompt this is and how to process it without wasting money or latency.*

* **If you want sub-10ms, zero-cost deterministic routing:**
  * **Use:** **RegEx / Hardcoded Heuristics**
  * *When to use:* Check for specific triggers like `git clone`, `@db`, attached `.pdf` files, or strict slash commands (`/search`).
* **If you want sub-15ms semantic matching across broad categories:**
  * **Use:** **Vector Cosine Similarity (Embedding Classification)**
  * *When to use:* Compare prompt embedding against pre-computed cluster centroids (e.g., "Coding Task", "General Q&A", "Database Search").
* **If you want cheap, nuance-aware classification (handling ambiguity):**
  * **Use:** **Small Language Model (SLM) Classifier** (e.g., `gpt-4o-mini`, `claude-3-5-haiku`)
  * *When to use:* Output structured JSON describing complexity, domain, and required tool capabilities.

---

## Stage 3: Harness Selects the Execution Loop & Strategy
*Goal: Match the task type to the correct agent execution architecture.*

* **If you want low-latency, single-step conversational answers:**
  * **Use:** **Direct Call Loop (1-Shot)**
  * *Flow:* Send prompt directly to main LLM $\rightarrow$ Stream response back to client $\rightarrow$ Terminate turn.
* **If you want simple data retrieval before answering:**
  * **Use:** **RAG / Tool-First Sequential Loop**
  * *Flow:* Harness fetches context (via `pgvector` / API) $\rightarrow$ Injects context into prompt $\rightarrow$ LLM generates response $\rightarrow$ Terminate turn.
* **If you want complex multi-step reasoning or software execution:**
  * **Use:** **Plan-Act-Observe Agent Loop (ReAct / State Machine)**
  * *Flow:* Spin up a `while` loop that handles sequential tool calling, verification, and context management across multiple steps.
* **If you want isolated, specialized sub-tasks executed cleanly:**
  * **Use:** **Multi-Agent Orchestration / Supervisor Loop**
  * *Flow:* Parent agent delegates sub-tasks to child agents with isolated contexts $\rightarrow$ Children return summarized findings $\rightarrow$ Parent continues.

---

## Stage 4: Context Payload Assembly & Pre-Flight Security
*Goal: Construct a lean, highly relevant context window and protect against malicious input before invoking the LLM.*

* **If you need security & prompt injection defense (Harness Side):**
  * **Use:** **Input Sanitization & Boundary Delimiters**
  * *Action:* Strip system tags from user inputs, pass untrusted data inside explicit XML tags (e.g., `<user_data>...</user_data>`), and run prompt injection detection algorithms.
* **If you want to reduce latency & token costs (Harness Side):**
  * **Use:** **Prompt Caching Optimization**
  * *Action:* Keep system prompts, instructions, and static tool declarations byte-for-byte identical at the top of the prompt to hit API provider prefix caches (e.g., Anthropic/OpenAI prompt caching).
* **If you want to maintain static user preferences & parameters:**
  * **Use:** **Key-Value State Ingestion**
  * *Action:* Read structured JSON facts from database (e.g., Neon `user_states` table) and prepend to System Prompt.
* **If context length is exceeding limits (e.g., $> 15$ turns):**
  * **Use:** **Rolling Summarization & Pruning**
  * *Action:* Summarize messages $1 \rightarrow (N-5)$ into a single summary block using a cheap model; retain only the last 5 raw messages in working context.
* **If referencing past historical conversations:**
  * **Use:** **Episodic Vector Recall**
  * *Action:* Perform top-$K$ cosine similarity search on Neon `pgvector` store and inject relevant past snippets into context.

---

## Stage 5: Main LLM API Call & Thinking Mode
*Goal: Send context payload + declared tool schemas to the primary reasoning model.*

* **Send payload containing:**
  1. System Prompt + Extracted Facts
  2. Summary Block + Working Context (Last 5–10 messages)
  3. `tools` JSON Schema parameter defining available functions.
* **If handling complex multi-step logic (Model Side):**
  * **Use:** **Test-Time Compute / Chain-of-Thought Scratchpad**
  * *Action:* Let the model emit hidden reasoning tokens before outputting a tool request or final answer. The model mentally verifies edge cases, minimizing step-error propagation.

---

## Stage 6: Response Parsing, Tool Execution & Sandboxing
*Goal: Parse the LLM output safely and run real-world actions without crashing the server.*

* **Branch A: Model outputs standard text (`finish_reason: "stop"` or `tool_calls: null`)**
  * *Action:* The model has answered the user. Stream text to client and exit loop.
* **Branch B: Model requests tool execution (`finish_reason: "tool_calls"`)**
  * **Step 1:** Harness holds user turn status (e.g., UI streams `"Executing tool..."`).
  * **Step 2 (Harness Side):** **Schema Validation.** Check that the model's generated tool arguments conform to your JSON schema before running them.
  * **Step 3 (Harness Side):** **Sandbox Isolation.** Execute untrusted actions (e.g., arbitrary code execution, terminal commands) inside an isolated container (e.g., Docker, E2B, or WASM sandbox).
  * **Step 4:** Execute local code / API call (e.g., SQL query, web search).
  * **If Tool Output is HUGE (e.g., 5,000-line terminal log):**
    * *Use:* **Tool Output Compression / Offloading**
    * *Action:* Save full output to file/DB; return only head/tail errors or a 3-sentence summary back into the LLM context.
  * **Step 5:** Append `assistant` tool-call message and `tool` result message to working history.
  * **Step 6:** Loop back to **Stage 5 (Main LLM API Call)** for next turn.

---

## Stage 7: Exit Conditions & Guardrails (Loop Termination)
*Goal: Prevent runaway execution, infinite loops, and API bill blowouts.*

* **If execution hits a safety limit (Harness Side):**
  * **Use:** **Step / Cost Ceiling**
  * *Action:* If `current_turn > MAX_STEPS` or `session_cost > BUDGET_CAP`, terminate loop and return error to user.
* **If the agent is stuck repeating the same failed action (Harness Side):**
  * **Use:** **Doom Loop Detector**
  * *Action:* If identical tool arguments are detected $3\times$ consecutively, forcibly inject warning: *"You are repeating yourself. Stop and try a different approach."*
* **If verifying agent task quality (Harness Side):**
  * **Use:** **Deterministic Evaluator Gate / Verification Loop**
  * *Action:* Run automated test/linter. If tests pass $\rightarrow$ Exit loop. If tests fail $\rightarrow$ Pass stack trace into model context as next turn observation.

---

## Stage 8: Post-Turn Async Persistence & Memory Consolidation
*Goal: Store turn outputs and update long-term knowledge without delaying the response returned to the user.*

* **Background Task 1:** Write raw user message + LLM final output to Neon `chat_messages` log.
* **Background Task 2:** Generate embedding of turn and write to Neon `chat_embeddings` (`pgvector`).
* **Background Task 3 (Fact Extractor):** Run async LLM pass over the turn to extract newly learned facts/preferences into Neon `user_states` JSONB.
* **Background Task 4 (Harness Telemetry & Observability):**
  * **Use:** **Agent Tracing Tools** (e.g., LangSmith, LangFuse, OpenTelemetry).
  * *Action:* Log execution latency, step counts, token costs, and tool failure rates for offline debugging and fine-tuning datasets.