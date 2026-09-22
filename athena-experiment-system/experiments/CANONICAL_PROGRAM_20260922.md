# Canonical Experiment Programme — Reconciled 2026-09-22

## Authority

Current experiment authority remains the Notion workspace **ATHENA — CANONICAL SOURCE OF TRUTH**.

- Canonical page: `3e2c0fac-9048-812b-b029-e6c6076c76bd`
- Evaluation method: `07 — Evaluation & Experimental Method`
- Experiment registry: `Athena Experiment & Evaluation Registry`
- Registry data source: `collection://a38c8b3d-ae83-4fbf-8ef0-a4666993242a`
- Reconciled: 2026-09-22 UTC

GitHub is the durable engineering workspace, but this file is a synchronized record of canonical experiment information, not a replacement authority.

## Current experimental method

The canonical baseline is:

**raw base model + frozen synthetic scenario**

The baseline must not silently include:
- Athena-specific prompt
- memory system
- retrieval
- orchestration
- hidden behavioural scaffolding

Canonical sequence:

1. Establish repeated raw-model baseline.
2. Build a failure map across behavioural capabilities.
3. Select highest-value failures for intervention.
4. Test single-capability prompt additions against the same baseline cases.
5. Replicate promising effects across independent scenario families.
6. Combine only capabilities with demonstrated marginal value.
7. Test longitudinal scenarios and outcome-driven updating.

Evaluation must preserve raw outputs, prefer atomic observable checks, use deterministic checks where possible, separate generator/evaluator where practical, and expose uncertainty/evaluator disagreement.

## Current canonical registry

The live canonical registry currently contains **five** records. No additional experiment definitions are inferred from historical references to larger cohorts.

| ID | Status | Current purpose |
|---|---|---|
| EXP-001 | PASS | Canonical representation A-D / I-J structural validation |
| EXP-002 | PARTIAL | Worker-lab correction after independent review |
| EXP-003 | PROPOSED | Stated goal vs genuinely desired target |
| EXP-004 | PROPOSED | Athena can be wrong and recover |
| EXP-005 | PROPOSED | Cross-agent SSOT accessibility and editability |

### EXP-001

**Capability:** Epistemic separation, stable identity, historical replay, multi-track/risk representation.

**Hypotheses:** Representation is sufficient vs representation loses critical distinctions.

**Evidence:** Executable fixtures, deterministic checks, reproducible failures and fixes.

**Recorded result:** Real experiment found and corrected stable-ID and source-fidelity defects; establishes structural properties only.

**Important boundary:** This does not establish Athena effectiveness or user-outcome improvement.

### EXP-002

**Capability:** Whether worker instructions prevent recurrence of methodological errors.

**Hypotheses:** Stronger governance reduces methodological drift vs governance adds overhead without increasing evidence quality.

**Evidence:** Changed protocols, stronger schemas, adversarial checks, change record.

**Recorded result:** Independent review identified substantive gaps; corrective work was redirected into the new meta-harness rather than treated as proof of effectiveness.

**Important boundary:** Worker/process success is not Athena effectiveness.

### EXP-003

**Capability:** Distinguish a stated goal from a deeper or competing target; test rather than prematurely accept the stated goal.

**Hypotheses:** Stated goal is genuinely desired vs proxy for another target vs multiple targets conflict.

**Evidence:** Evidence chain from initial statement through discriminating investigation/experiment to outcome and target-state update.

**Status:** PROPOSED; not yet run.

**Underlying outcome:** Whether the resulting target better reflects what the person genuinely wants and improves subsequent decision/intervention.

### EXP-004

**Capability:** Generate a plausible Athena hypothesis, encounter disconfirming evidence, and update without rationalization.

**Hypotheses:** Athena explanation is correct vs user explanation is correct vs third explanation is correct.

**Evidence:** Initial model, disconfirming evidence, updated model, changed intervention, outcome.

**Status:** PROPOSED; not yet run.

**Underlying outcome:** Better subsequent understanding/intervention after Athena's model is shown to be wrong.

### EXP-005

**Capability:** Whether ChatGPT and an independent worker agent can discover, inspect, modify and verify the same authoritative artifacts without a hidden second source of truth.

**Hypotheses:** Notion+Floot split is workable vs a single editable artifact workspace is required vs another shared store is better.

**Evidence:** Independent agent reads current decision, edits a bounded test artifact, records provenance, and ChatGPT independently verifies and detects divergence.

**Status:** PROPOSED; not yet run.

**Underlying outcome:** Durable project record that remains coherent across agents and sessions.

## Deliberate unresolved items

The canonical material currently does **not** provide enough authority to silently construct a complete executable manifest for all experiments. In particular, this synchronized record does not invent:

- exact model ID for future runs;
- exact generation parameters;
- exact scenario fixture set/version;
- repetitions/sample counts;
- evaluator model/version;
- run-specific stopping criteria;
- cohort/program membership beyond the five registry records.

Those fields must be supplied by a current canonical specification before an experiment runner treats a record as executable.

## Historical programme references

Historical/evidence material contains references to larger screening cohorts, including an 18-job cohort and a 20-run screening design. Those records remain evidence of prior work, not current experiment definitions.

A 21 September execution checkpoint records provider HTTP 402 blocking on Gemini 3.5 Flash-Lite and states that no model substitution was made. That is an execution finding, not permission to change the current experiment definition.

## Execution rule

Do not run or implement a runner that fills the unresolved fields by guesswork. The next scientific gate is to obtain/reconcile the current executable experiment specification from canonical Notion, then freeze manifests before scarce model execution.

## Provenance

This file was generated from direct inspection of the current canonical Notion pages/database on 2026-09-22 and is intended to make the reconciliation state recoverable for future agents.
