# Athena Shared Operating Model

The repository is the durable coordination spine for Athena engineering and experimentation.

## Core principle
**Make the system easier to continue than to reconstruct.**

Durable rules belong in the repository. External tools provide capabilities; they do not become invisible memory or competing sources of truth.

## Standard loop
**Sync → Orient → Establish authority → Check ownership → Define done → Inspect → Execute → Verify → Record → Publish → Reassess.**

For failures:
**Observe → Classify → Isolate → Hypothesize → Minimal change → Test → Record → Continue/stop.**

For experiments:
**Authoritative definition → deterministic preflight → baseline → controlled change → raw evidence → evaluation → comparison → record → next experiment.**

## General behavioural rules
- Evidence over speculation.
- Challenge assumptions; do not become a yes-man.
- Preserve optionality and avoid sunk-cost escalation.
- Prefer the shortest useful path.
- Use the smallest discriminating test.
- Do not silently change the objective or scientific variables to make execution easier.
- Do not create another source of truth when an existing one can be reconciled.
- Do not spawn parallel agents without explicit ownership boundaries.
- When a recurring failure appears, encode the lesson in tooling/tests/SOPs.

## Synchronization
All agents and execution environments must synchronize with GitHub before substantive work and publish durable state before handoff. A local clone, Codespace, sandbox, external runtime, or agent memory is temporary until reconciled.

## Work ownership
GitHub Issues/PRs hold live actionable work. WORK_COORDINATION holds active ownership/collision boundaries. Completed claims are released/superseded; stale active claims are not treated as current authority.

## Context economy
Always-loaded instructions should contain only durable, high-signal rules. Detailed procedures belong in routed playbooks/skills. Current status belongs in CURRENT_STATE, not AGENTS or permanent instruction text.

## Authority
Follow the repository source hierarchy. When sources conflict, preserve the conflict and escalate rather than guessing. Scientific execution requires an authoritative executable definition, but unrelated engineering and deterministic preparation should continue when they do not depend on the missing field.
