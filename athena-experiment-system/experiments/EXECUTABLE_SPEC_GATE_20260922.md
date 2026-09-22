# Executable Experiment Specification Gate — 2026-09-22

## Status

**BLOCKED — specification reconciliation required before a new model cohort is run.**

This record is a bounded engineering/scientific gate, not a new experiment definition.

## Authority inspected

- Canonical SSOT: `ATHENA — CANONICAL SOURCE OF TRUTH`
- Canonical method: `07 — Evaluation & Experimental Method`
- Live experiment registry: `Athena Experiment & Evaluation Registry`
- Execution SOP: `SOP — Autonomous Experiment Execution & External Verification`
- Model-control SOP: `SOP — Model-Controlled Experiment Execution & Worker Certification`
- Experimental Lab control board and worker instructions
- Repository state on `main`

## What is established

1. The canonical baseline is **raw base model + frozen synthetic scenario**.
2. Athena prompt, memory, retrieval, orchestration and hidden behavioural scaffolding must not enter the baseline.
3. The canonical experimental sequence is:
   1. repeated raw-model baseline;
   2. failure map;
   3. select high-value failures;
   4. single-capability prompt additions against the same baseline cases;
   5. replicate promising effects across independent scenario families;
   6. combine only capabilities with demonstrated marginal value;
   7. longitudinal/outcome-driven testing.
4. The live registry currently contains **EXP-001 through EXP-005**. EXP-003, EXP-004 and EXP-005 are proposed and not yet run.
5. Execution must use an exact model lock, preserve raw provider evidence, separate execution from evaluation, checkpoint per scenario, and never silently substitute models.
6. Missing required inputs are **BLOCKED**, not PASS.

## Historical material deliberately not promoted

Historical pages reference an 18-job screening cohort, a 20-run screening design for 12 binary candidate mechanisms, prior provider/model checkpoints including Gemini 3.5 Flash-Lite, and older A-D/I-J execution infrastructure.

These are historical evidence and implementation lessons. They do **not** by themselves define the current canonical cohort.

## Missing executable fields

The current live registry plus current canonical method do not provide a complete frozen manifest for a new cohort. Before execution, an authoritative specification must explicitly lock:

| Field | Current state |
|---|---|
| experiment/cohort ID | partially defined at registry level |
| objective | defined per registry item |
| exact scenario fixture IDs/version | unresolved for the new cohort |
| scenario ground truth / expected outputs | unresolved for the new cohort |
| exact model ID | not locked by the current registry/method |
| provider | not locked by the current registry/method |
| generation parameters | unresolved |
| prompt/version under test | unresolved for each future cohort |
| repetition/sample count | unresolved for the current canonical programme |
| evaluator model/version | not locked for the current programme |
| evaluator rubric/check set | principles defined; experiment-specific checks not fully frozen |
| held-out validation set | unresolved |
| stopping/completion criteria | unresolved at cohort level |
| cohort ordering / batching | unresolved |
| run manifest schema/version | execution SOP defines required evidence fields, but no current frozen cohort manifest was found |
| acceptance/promotion rule | general gates exist; experiment-specific acceptance criteria remain to be frozen |

## Consequence

Do **not** infer the historical 18-job or 20-run design is current; infer Gemini 3.5 Flash-Lite is the current locked model; invent generation parameters, scenario counts, evaluator settings or stopping rules; or start scarce model execution against an unfrozen specification.

## Next gate

Create one authoritative executable experiment specification from the current canonical programme, with explicit provenance for every locked field. Then freeze immutable per-run manifests and proceed to infrastructure preflight/smoke testing.

Infrastructure debugging may proceed independently, but must not alter scientific variables or be treated as experiment execution.
