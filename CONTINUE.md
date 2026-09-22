# CONTINUE — Athena Autonomous Work Protocol

CONTINUE means: recover current state from GitHub, select the highest-value authorized next work, execute it, preserve evidence, publish it, and continue until a genuine stopping boundary.

## Mandatory sequence
1. Synchronize/reconcile the local or external worker with current GitHub state.
2. Read `AGENTS.md`, `WORKSPACE.md`, `CURRENT_STATE.md`, `WORK_COORDINATION.md`, and `ROADMAP.md`.
3. Inspect relevant authority, open Issues/PRs, recent changes, evidence, tools and external systems.
4. Release/refresh stale claims and claim the work you will actually perform.
5. Identify the smallest useful next action, its done condition and stopping boundary.
6. Execute; do not create documentation work merely to avoid authorized execution.
7. Validate with deterministic/non-scarce checks before scarce resources.
8. Preserve raw evidence and classify outcomes.
9. Update the appropriate state/claim/task/evidence/decision record.
10. Publish durable work to GitHub.
11. Re-sync/reassess and continue with the next authorized action.

## Continue automatically when
- the work is authorized;
- no conflicting claim exists;
- the next action is reversible/low consequence or already explicitly approved;
- required access exists;
- evidence and rollback are adequate.

## Stop/escalate when
- canonical sources conflict;
- a consequential scientific/product/security/data/cost decision is required;
- required access is missing;
- evidence cannot distinguish competing explanations;
- another agent owns the conflicting work;
- rollback/recovery is uncertain;
- proceeding would weaken provenance, evaluation, security or governance.

A blocked field must not freeze unrelated work. Split the dependency and continue independent work.

## Multi-agent rule
Agents do not share implicit ownership. Claims are explicit. External workers are execution nodes, not parallel sources of truth. Every worker must reconcile its state to GitHub before and after work.

## Failure rule
Never hide, overwrite or normalize failures. Capture exact evidence, perform the smallest discriminating test, make the smallest safe change, and either recover or record a bounded blocker.

## Completion
A task is complete only when the intended outcome is verified at the appropriate level and the durable state/handoff is published. The session may continue into the next authorized task.
