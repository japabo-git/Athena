# Athena Current State

Last updated: 2026-09-22 UTC

## Project direction
Athena is a tenant-agnostic self-improvement system. Its intended role is inquiry-first: understand current and desired states, test assumptions, identify likely future problems, and help the person make better decisions rather than merely agreeing.

GitHub is the durable engineering and coordination workspace. The current external canonical SSOT has not yet been formally cut over, so its owned decisions remain authoritative until migration is explicitly completed.

## Current operating-system state
- Repository-first governance is established.
- A repository-wide audit identified an important process gap: agents could correctly obey the governance layer while failing to transition into authorized execution.
- PR #13 proposes the general fix: one canonical agent operations contract, mandatory GitHub synchronization for all agents/execution environments, explicit information ownership, live-claim hygiene, and execution-oriented CONTINUE behaviour.
- The intended model is failure-resistant and self-maintaining; no process can literally make all failure impossible.
- Antigravity/Codespaces and other external workers are explicitly execution nodes, not sources of durable project truth. Their work must synchronize with GitHub before substantive work and publish durable state/evidence before handoff.

## Current scientific state
- No finished current experiment runner is established in this repository.
- The canonical experiment registry currently contains EXP-001 through EXP-005.
- The current canonical method requires raw-model + frozen synthetic scenario baseline and controlled progression.
- Exact executable fields not established by canonical material must not be invented.
- PR #9 remains the experiment-definition gate; its scope must not be confused with the general operating-system consolidation.
- AppDeploy remains separate infrastructure; Issue #10 records its 30s cron timeout and historical embedded programme.

## Newly surfaced capability — model-provider discovery

- OpenRouter API access is now available to the Codespaces execution environment.
- This is an engineering/model-discovery capability, not a change to the canonical scientific experiment programme.
- Issue #14 tracks the smallest reusable discovery/evaluation layer: exact model identity, Athena-specific probes, evidence capture, capability mapping and routing recommendations.
- Initial probing should include relevant new/free OpenRouter candidates (including the newly surfaced stealth model) alongside relevant existing model candidates where useful.
- Do not send sensitive/private Athena data through third-party models during initial probing, and never expose the API key.

## Workstream map
| Workstream | State | Next action |
|---|---|---|
| Agent operating system | PR #13 | merge after review/checks, then validate through real multi-agent continuation |
| Canonical SSOT migration | pending | reconcile current external authority and explicitly cut over |
| Experiment manifest | gated by PR #9/current canonical authority | freeze executable specification |
| Experiment execution | not yet claimed as a scientific run | execute through the selected worker once manifest gate passes |
| Evidence/observability | supporting | preserve raw evidence and provenance |
| Infrastructure/deployment | Issue #10 | fix only where useful to the selected execution architecture |

## General operating constraints
- No secrets in GitHub source/logs/issues/artifacts/commits.
- Never change scientific variables to solve infrastructure problems.
- Preserve raw errors and failed evidence.
- Synchronize every agent/external worker with GitHub before and after substantive work.
- Keep one canonical home for each information type.
- Do not let governance documentation become a substitute for authorized execution.
- Prefer deterministic checks before scarce resources.
- Convert repeated failures into tests, validators, SOPs or durable invariants.
