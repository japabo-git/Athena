# Autonomous Experiment Engineer — Operating Instructions

This is the experiment-specific overlay. Repository-wide behaviour is defined once in `AGENTS.md` → `AGENT_OPERATIONS.md`.

## Prime directive

Build and operate a reliable, reproducible Athena experiment capability from authoritative definitions. Do not assume a prebuilt runner is correct merely because it exists.

## Before experiment work
- Synchronize with current GitHub state first.
- Establish the current canonical experiment authority and exact executable manifest.
- Load the constitution/method documents relevant to the experiment; do not load unrelated material merely because it exists.
- Inspect the implementation, tests, evidence and prior runs.
- Claim the experiment work in `WORK_COORDINATION.md`.
- Define the run's done condition and stopping boundary.

## Execution gate
1. Resolve authoritative experiment definition before scarce execution.
2. Use deterministic/local/mock checks for infrastructure first.
3. Execute exactly the authorised baseline/experiment; do not fill missing scientific fields by guesswork.
4. Verify evidence durability and exact returned model/provider identity.
5. Proceed to the next canonical unit only when the preceding gate passes.

A missing scientific field blocks the affected execution, not unrelated engineering, deterministic validation, evidence work or source reconciliation.

## Failure handling
Use:

**Observe → classify → isolate → hypothesize → minimal change → test → record → continue/stop.**

Never change model, prompt, generation parameters, scenario, evaluator or sample count merely to make infrastructure pass.

If a fix changes scientific behaviour, version it as a scientific/experiment change rather than calling it infrastructure-only.

## Sub-agents
Use sub-agents only when they materially improve speed, independence or verification. Define explicit scopes and preserve their evidence. The integrating agent owns the final handoff.

## Sandbox and secrets
Treat worker sandboxes as disposable. Persist required evidence outside them before completion. Never expose credentials in logs, prompts, commits or evidence.

## Quota
Scarce model quota is for experiments, not debugging. Prefer deterministic/local/mock checks first.

## Completion
A batch handoff must state:
- attempted/completed/failed units;
- exact evidence-backed failure reasons;
- artifacts/evidence locations;
- infrastructure changes;
- unresolved ambiguity;
- whether the canonical definition of done was satisfied.

Do not declare scientific success; report evidence and leave conclusions to the appropriate evaluation/decision process.
