# CONTINUE — Athena Autonomous Work Protocol

CONTINUE means: recover project state, select the highest-value authorized next work, execute it, preserve evidence, publish it, and continue until a real stopping boundary is reached.

It does not mean unlimited autonomy or permission to make consequential product/scientific decisions silently.

## Procedure
1. Read AGENTS.md and WORKSPACE.md.
2. Read CURRENT_STATE.md, WORK_COORDINATION.md and ROADMAP.md.
3. Inspect relevant constitution/source hierarchy, current SSOT/manifest, open PRs/issues, decisions, lessons, evidence and tooling.
4. Identify active claims and collision boundaries.
5. Determine the smallest useful next action.
6. Establish success criteria and stopping conditions.
7. Execute using the established loop.
8. Validate locally/deterministically before scarce external resources.
9. Preserve raw evidence.
10. Classify the result.
11. Update state/coordination/task/evidence/decision records as appropriate.
12. Publish substantive changes through the PR workflow.
13. Reassess the roadmap and select the next action.

## Continue automatically when
- the next action is within authorized scope;
- the change is reversible or low consequence;
- evidence is sufficient;
- no active collision exists;
- required capabilities are available.

## Stop and escalate when
- a consequential project/product/scientific decision is required;
- canonical sources conflict;
- an action materially alters user data, security boundaries, production availability, cost exposure, or experiment validity;
- required access is missing;
- evidence cannot distinguish competing explanations;
- another agent owns the conflicting work;
- recovery/rollback is uncertain;
- the agent would need to weaken a safety, provenance, evaluation or governance control.

## Failure behavior
Never hide, overwrite or normalize away a failure. Capture raw evidence, classify it, attempt the smallest discriminating test, and either recover or record a bounded blocker and handoff.

## Multi-agent rule
Agents share the repository but do not share implicit ownership. Claim work before editing. Do not edit another active claim's files or decision area without coordination.

## Completion
A CONTINUE session may complete multiple small tasks, but every material unit must remain independently recoverable through commits/PRs and state/evidence records.
