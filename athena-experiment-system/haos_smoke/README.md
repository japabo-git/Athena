# HAOS Inspect Smoke Harness

This is the minimum smoke-test surface for the HAOS Phase 2.5 experimental programme.

It is deliberately **not** the HAOS experiment runner and does not define E1-E6 scientific variables.

## Purpose

Verify that:

1. Inspect can load the HAOS fixture corpus.
2. A task can execute through the Inspect evaluation path.
3. Fixture metadata survives into the task samples.
4. Exact scoring works.
5. Inspect logs are produced for the run.

The fixtures are deliberately tiny. They are wiring tests, not evidence about HAOS performance.

## Fixtures

The initial set covers the minimum HAOS-specific dimensions identified by Phase 2.5:

- `handoff_resume` — continuation requires explicit task context.
- `authority_boundary` — execution authority is distinct from knowledge/recommendation.
- `provenance` — derived information has recoverable source identity.
- `lifecycle` — current and superseded information must remain distinguishable.
- `portability` — durable meaning includes relationships and state, not only text.
- `failure_recovery` — execution failure must leave enough state to resume.

## Run

Install Inspect in the active Python environment, then:

    inspect eval athena-experiment-system/haos_smoke/smoke.py --model <provider/model> --epochs 1

For a smoke run, do not use a large model sweep. The purpose is to verify the harness.

## Expected result

All six samples should receive an exact-match score of 1 when the model follows the fixture instruction.

A failure here is an infrastructure/fixture failure, not an HAOS experimental result.

## Boundary

Do not add retrieval engines, databases, agent frameworks, lifecycle services, or orchestration here. Those belong to later experiments only if their necessity is demonstrated.