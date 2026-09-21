# Athena Agentic Security Threat Model

## Trust boundaries
1. User intent -> agent reasoning.
2. Untrusted content -> agent context.
3. Agent -> tool/MCP.
4. Agent identity -> external authorization.
5. Agent -> another agent.
6. Agent -> shared state/memory.
7. Agent -> deployment/runtime.
8. Runtime -> user data.
9. Development -> production.

Crossing a boundary requires explicit policy, not prompt instructions alone.

## Threat classes
- goal/intent hijacking;
- indirect prompt injection through webpages, files, issues, tool output or memory;
- tool misuse and excessive agency;
- identity/privilege abuse;
- confused deputy;
- memory/context poisoning;
- insecure inter-agent communication;
- supply-chain/MCP/tool poisoning;
- unexpected code execution;
- cascading multi-agent failures;
- data exfiltration;
- destructive or duplicate side effects;
- benchmark/evaluation manipulation;
- denial of service/quota exhaustion.

OWASP's 2026 Agentic Applications guidance highlights goal hijacking, tool misuse, identity/privilege abuse, supply-chain vulnerabilities, unexpected code execution, memory/context manipulation and multi-agent risks. citeturn1search4turn1search8

## Controls
### Untrusted data
Tool output, retrieved pages, documents, repository text, issue text and memory are untrusted data. They cannot override system/agent authority or security policy.

### Tool authorization
Tool availability is not permission. Bind tools/actions to the current task and risk tier. Prefer allowlists for consequential actions. Research on tool-risk mitigation supports per-step least-privilege filtering. citeturn1academia32

### Agent identity
Every production agent should have a distinct, attributable identity. Avoid shared credentials. Use scoped, revocable and preferably time-limited access. Current security guidance recommends treating agents as first-class principals with explicit roles, scopes, tool bindings and fast revocation. citeturn1search1turn1search2

### Memory
Memory is data with provenance, not authority. Guard against poisoning, stale facts, cross-user leakage and privilege escalation through memory.

### Inter-agent communication
Agents must authenticate consequential messages. Record sender, recipient, task/run ID, provenance and authorization context. Natural-language claims of authority are insufficient.

### MCP/integration supply chain
Pin/verify important servers and versions where practical. Record capabilities and permissions. Treat dynamic tool descriptions and returned content as untrusted. Review newly added MCPs before granting consequential permissions. MCP's 2026 specification work includes authorization hardening and long-running Tasks, so integrations should track protocol changes. citeturn1search13turn1search16

### External side effects
Use idempotency, preconditions, authorization checks, read-after-write verification and compensating actions where possible. A timeout does not prove a side effect did not occur.

### Kill switch and containment
Maintain a control path that can revoke/disable agent execution and external side effects without deleting evidence. Use sandboxing for code/browser/tool execution where practical and separate development, staging and production credentials.

## Required security tests
Before meaningful production autonomy:
- indirect prompt-injection tests;
- malicious document/webpage/tool-output tests;
- tool permission boundary tests;
- confused-deputy tests;
- credential revocation tests;
- memory-poisoning tests;
- cross-agent authorization tests;
- duplicate-side-effect/timeout tests;
- MCP/tool supply-chain tests;
- data-exfiltration tests;
- runaway/cascading-failure tests;
- kill-switch tests.

## Security posture rule
Prompt-level instructions are not a security boundary. Deterministic authorization, isolation and policy enforcement must sit beneath the model wherever consequences matter.
