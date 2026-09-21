# Athena Agent Runtime Protocol

## On start
1. Load repository instructions.
2. Load current state.
3. Load active coordination claims.
4. Load the relevant roadmap/workstream.
5. Load relevant decisions, lessons, evidence and tooling.
6. Check repository revision and conflicting work.
7. Choose one bounded objective.

## During work
- Claim the work.
- Inspect before writing.
- Make the smallest useful change.
- Preserve raw evidence.
- Re-check assumptions when evidence changes.
- Checkpoint before long or risky operations.
- Do not silently change scientific variables, provider/model, environment or evaluator.
- Stop when scope, authority or safety becomes unclear.

## Before publication
- Test.
- Review the diff.
- Check for secrets/unrelated changes.
- Update durable state/history/evidence/artifacts.
- Record what was learned.
- Publish through the repository workflow.

## Continue behavior
A `continue` request means continue from the repository's recorded state, not from private agent memory.

An agent may select the next task autonomously when it is within the current workstream, no conflicting claim exists, required capabilities/evidence exist, and the action is reversible or appropriately gated. Otherwise record the blocker and escalate.

## Never
- overwrite another agent's work;
- hide failures;
- retry forever;
- silently substitute configuration;
- declare success from a single weak metric;
- treat the roadmap as a rigid specification;
- rely on private chat as the only project state.
