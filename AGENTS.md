# Athena Agent Contract

This is the first-stop contract for every agent working in this repository.

## Before work
1. **Synchronize with GitHub first.** Do not trust a stale clone, Codespace, sandbox, agent memory, or prior chat. Reconcile local/external work with the current repository.
2. Read `WORKSPACE.md`, `CURRENT_STATE.md`, `WORK_COORDINATION.md`, and `CONTINUE.md`.
3. Inspect relevant constitution/source hierarchy, current canonical SSOT/manifest, open PRs/issues, and recent changes.
4. Establish authority, ownership, scope, definition of done, and stopping conditions before editing.
5. Claim shared work before editing.

## Authority
Use `athena-experiment-system/constitution/06-source-hierarchy.md`.

1. Current explicit decision in the canonical Athena SSOT.
2. Current canonical experiment specification/manifest.
3. Current repository constitution.
4. Current implementation/tests/evidence.
5. Historical material.

Never silently resolve conflicts by choosing a lower-level source.

## Operating contract
The full reusable workflow is in **`AGENT_OPERATIONS.md`**. It is mandatory for all agents and execution environments.

Key rules:
- GitHub is the durable coordination spine; local/external state becomes durable only when reconciled.
- Keep one canonical home for each kind of information.
- Use isolated branches for substantive work and explicit claims for concurrency.
- Do not let governance replace authorized execution.
- Preserve provenance and raw evidence.
- Never change scientific variables merely to make infrastructure pass.
- Convert repeated failures into durable tests/tools/SOPs rather than prompt-only reminders.

## CONTINUE
When asked to CONTINUE, follow `CONTINUE.md`. Continue through all authorized, non-conflicting work rather than stopping merely because a previous task ended. Stop only at a real authority, safety, access, evidence, collision, or rollback boundary.

## Handoff
Before finishing, synchronize durable work to GitHub and update the appropriate current-state/claim/evidence/task records. A future agent must not need chat history to understand what happened or what to do next.

Never put secrets in source, prompts, logs, artifacts, issues, or commits.
