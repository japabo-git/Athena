# Canonical State

## Established working direction

- Athena is intended to be tenant-agnostic and future-user compatible.
- Athena is primarily an inquiry-first mentor/advisor, not an execution agent.
- Athena itself should not directly execute real-world tasks; execution belongs to the user and/or a separate execution/Chief-of-Staff layer when that layer is explicitly designed.
- A dedicated asynchronous memory watcher is conceptually separate from Athena dialogue and execution.
- Memory work should distinguish facts, hypotheses, assumptions, uncertainty, conflicts, gaps, and temporal validity.
- User-perceived hypotheses and Athena working hypotheses should be separately trackable, including convergence/divergence and later outcomes.
- Development should follow Build → Test → Observe → Improve, with synthetic experiments before production use where appropriate.

## Current experiment state

- The current programme has a baseline plus 18 initial experiments.
- The baseline and experiments must use a consistent model/parameter regime within a cohort unless the canonical experiment definition explicitly changes a variable.
- The current planned first experimental model is Gemini 3.5 Flash-Lite; do not substitute another model silently.
- A later model cohort may be run separately; do not mix cohorts when interpreting results.
- The programme is intended to produce evidence about Athena's effectiveness, not merely demonstrate that infrastructure runs.
- Independent evaluation and held-out validation are required before making efficacy claims.

## Important uncertainty

This package does **not** invent the exact 18 experiment definitions. Before execution, synchronize the canonical experiment manifests from the current SSOT and record their source/version.

If the SSOT changes the model, experiment count, scenarios, or evaluation criteria, the SSOT wins and this file must be updated.
