# Athena Memory System

This repository is the durable project memory and operating memory. It is not a replacement for Athena's eventual runtime/user memory store.

## Memory layers

1. Project memory — mission, constitution, architecture decisions, canonical specifications.
2. Operational memory — current state, active work, task history, incidents, runbooks and handoffs.
3. Evidence memory — raw requests/responses/errors/logs and derived evaluations with provenance.
4. Learning memory — lessons, reusable patterns, skills and anti-patterns.
5. Integration memory — tools, MCPs, external systems, credentials metadata and recovery paths.
6. Artifact memory — durable outputs and their provenance.
7. Athena runtime memory — user/session/memory-watcher state held by the application datastore. It must have its own schema, lifecycle, access controls and audit trail; GitHub should hold the design/specification and selected non-sensitive operational summaries, not raw personal runtime data by default.

## Runtime memory principles

Athena's runtime memory should distinguish at minimum:
- user-stated facts;
- observations;
- user hypotheses;
- Athena working hypotheses;
- assumptions;
- uncertainty/confidence;
- time bounds and validity;
- conflicts;
- open questions/gaps;
- decisions and their provisional/final status;
- outcomes and later accuracy/consequence observations;
- provenance and source event.

Memory extraction must be separate from the dialogue/execution path when implemented, so memory processing cannot silently rewrite the conversation's scientific/decision state.

## Lifecycle

Capture -> classify -> validate -> timestamp -> store -> retrieve -> reconcile conflicts -> observe outcomes -> revise/supersede.

Never silently delete or overwrite important historical memory. Supersede it with provenance when its validity changes.

## Privacy/security

Do not copy personal runtime memory, credentials, secrets or sensitive user data into GitHub merely for convenience. Store them in the appropriate secured runtime system and record only the architecture, schema, non-sensitive identifiers and recovery procedures needed by future agents.

## Repository role

GitHub stores the design and operational record needed to understand and maintain the memory system. The runtime datastore stores live application memory. The two must not be confused.
