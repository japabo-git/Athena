# Definition of Done

## Harness ready

- A clean environment can reproduce installation/setup.
- One canonical baseline executes end-to-end.
- Exact model/configuration is verified from the provider response when available.
- Raw evidence is durably persisted.
- A failed run is classified rather than merely reported as an HTTP error.
- A run can be inspected after the worker terminates.
- Reruns do not destroy previous evidence.
- Tests cover critical runner/evidence paths.

## Experiment ready

- Canonical manifest is present and versioned.
- Scenario and evaluator versions are frozen.
- Experimental variables are explicit.
- Controls/baseline are defined.
- Required sample/repetition count is defined by the canonical plan.

## Batch complete

- Every required run is `COMPLETE`, `BLOCKED`, or an explicitly documented failure state.
- No silent substitutions occurred.
- Raw evidence is retained.
- Evaluation is complete or its failure is explicitly recorded.
- Results are summarized without changing the underlying evidence.
- Held-out validation is performed when required by the canonical plan.
