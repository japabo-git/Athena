# Canonical SSOT Synchronization Status

Last verified: 2026-09-22 UTC

## Authoritative source

Current Athena authority remains the Notion page **ATHENA — CANONICAL SOURCE OF TRUTH**.

- Notion page: `3e2c0fac-9048-812b-b029-e6c6076c76bd`
- Retrieved: 2026-09-22 during continuation session
- Notion state: ACTIVE — canonical rebuild
- Version: 0.1
- Notion explicitly states that canonical Notion pages are current authority and external copies are exports/reference.

## Canonical requirements verified

- Experimental baseline: raw base model + frozen synthetic scenario.
- Baseline excludes Athena-specific prompt, memory, retrieval, orchestration and hidden behavioural scaffolding unless explicitly introduced by an experiment.
- Experimental sequence begins with repeated raw-model baseline, then failure mapping, then controlled single-capability interventions, replication, combination only after demonstrated marginal value, and longitudinal/outcome testing.
- Raw outputs and execution evidence must be preserved; evaluator disagreement/uncertainty must remain visible.
- Old experiment matrices and old architecture/runtime choices are historical unless explicitly promoted.

## Experiment registry currently visible through the connected Notion database

The connected **Athena Experiment & Evaluation Registry** currently exposes five records (EXP-001 through EXP-005). The repository must not invent additional definitions from the general statement that an earlier programme contained more experiments.

The current canonical registry records:
- EXP-001: PASS
- EXP-002: PARTIAL
- EXP-003: PROPOSED
- EXP-004: PROPOSED
- EXP-005: PROPOSED

## Current execution evidence relevant to the next engineering step

A later canonical/historical execution checkpoint reports that the controlled baseline cohort was blocked by HTTP 402, with zero valid model observations, and that no model substitution was made. A separate provider-access checkpoint reports HTTP 402 for Gemini 3.5 Flash-Lite, Gemini 3.1 Flash-Lite and Groq Qwen 3.8 27B smoke/cohort calls.

These are execution findings, not new experiment definitions.

## Important unresolved point

The repository's current state says "baseline plus 18 initial experiments", while the canonical historical SOP describes a 20-run screening design for 12 binary candidate mechanisms, and the current Notion registry exposes only five experiment records. These are not sufficient grounds to choose one programme silently.

Required next step: reconcile the current canonical experiment programme/manifest from Notion, including exact baseline, scenarios, configurations, model lock and cohort definition, before implementing or running the experiment runner.

## Reference boundary

`athena-experiment-system/reference/Agent_Execution_Lifecycle___Architecture_Guide.md` remains reference material. It does not override the canonical Notion hierarchy.

## Provenance

Sources inspected in this continuation:
- ATHENA — CANONICAL SOURCE OF TRUTH
- 07 — Evaluation & Experimental Method
- 13 — Agent Handoff / Quick Start
- 14 — Source Registry & Provenance
- Athena Experiment & Evaluation Registry
- SOP — Autonomous Experiment Execution & External Verification
- SOP — Model-Controlled Experiment Execution & Worker Certification

No canonical Notion content was modified by this session.
