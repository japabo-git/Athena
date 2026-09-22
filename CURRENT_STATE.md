# Athena Current State

Last updated: 2026-09-22 UTC

## Project direction
Athena is a tenant-agnostic self-improvement system. Its intended role is inquiry-first: understand current and desired states, test assumptions, identify likely future problems, and help the person make better decisions rather than merely agreeing.

GitHub is now the primary durable operational workspace. The current external canonical SSOT has not yet been formally cut over, so its owned decisions remain authoritative until migration is explicitly completed.

## Current status
- Repository-first governance/workspace layer is published on main.
- Operating-layer SOTA audit and hardening are published on main via PR #2 (merge 7e3d84cd0e6848bc8a80f82523d0b7b7c4532850).
- Agentic security threat model, integrity CI and SOTA gap audit are published via PR #3 (merge 205d347c594a49a38d23b7b7c4532850).
- No finished experiment runner is established in this repository.
- Baseline and initial experiment cohort remain the scientific workstream; do not invent or silently alter definitions.
- Repository integrity CI was repaired in PR #5 and verified successful on main in Actions run #39.
- App/deployment infrastructure remains separate from scientific experiment changes.
- Runtime/user memory remains an application concern; MEMORY_SYSTEM.md defines the boundary.

## Continuation checkpoint — 2026-09-22

- Repository `japabo-git/Athena` was reloaded from `main` and the published operating contract was followed.
- Main is clean with no open PRs/issues requiring collision handling.
- The committed `Athena_Canonical_Source_of_Truth_Notion_Export.zip` is present in the repository. During this continuation, the live canonical Notion page was also directly inspected, so the current authority was verified; GitHub has **not** been cut over as the authoritative decision source.
- The committed `athena-experiment-system/reference/Agent_Execution_Lifecycle___Architecture_Guide.md` is available as reference material only; it must not override the constitution or canonical SSOT.
- No experiment definitions were invented. The repository still requires canonical manifest synchronization before baseline execution.
- Active continuation claim: `WC-20260922-02` on branch `agent/continue-ssot-reconciliation-20260922`.
- Next executable action: reconcile the canonical experiment programme/manifest into repository-native records. The current Notion registry exposes EXP-001 through EXP-005, while other canonical/historical material references an 18-job cohort and a 20-run screening design; do not silently choose between these until the authoritative current programme is identified.

## Workstreams
| Workstream | Status | Next action |
|---|---|---|
| Workspace consolidation | complete for operating layer | use workspace as default bootstrap |
| Canonical SSOT migration | pending | inspect/export/reconcile, then explicitly cut over |
| Experiment manifests | pending | synchronize canonical definitions |
| Experiment runner | pending | implement after manifests/execution contract |
| Evidence/observability | active | durable raw evidence and run records |
| Infrastructure/deployment | pending | verify current AppDeploy/Hatchable state separately |
| Agent operating system | active | reuse and improve published playbooks/lessons |

## Constraints
- No secrets in GitHub source, logs, issues, artifacts or commits.
- Do not change scientific variables to solve infrastructure problems.
- Preserve raw errors and failed evidence.
- Avoid duplicate/overlapping work.
- Prefer shortest useful path and observable evidence.
- Promote proven methods to SOPs/playbooks/skills; record failed approaches as anti-patterns.


## Experiment-program reconciliation — 2026-09-22
- Current canonical Notion registry was queried directly and contains five records: EXP-001 through EXP-005.
- The canonical evaluation method was re-read: baseline is raw base model + frozen synthetic scenario; experiment sequence proceeds from repeated baseline through failure mapping, single-capability interventions, replication, combination, and longitudinal/outcome testing.
- Historical 18-job/20-run references were not promoted into the current programme.
- A repository-native reconciliation record has been added at `athena-experiment-system/experiments/CANONICAL_PROGRAM_20260922.md`.
- Executable manifest fields not established by current canonical material remain explicitly unresolved.
- Next action: reconcile/freeze the authoritative executable specification before implementing or running the new experiment cohort.


## AppDeploy infrastructure preflight — 2026-09-22
- AppDeploy runner `athena-experiment-runner-6gnl2p` was verified deployed/ready; frontend/backend QA error lists are empty.
- Cron `empirical-program-tick` is enabled every 5 minutes (Asia/Ho_Chi_Minh) but its latest executions returned HTTP 504 with `runner_task_timeout` after the 30,000 ms handler limit; failure_count reported as 3.
- Source inspection shows the tick can perform multiple model/evaluator calls, 12-second inter-call delays, database checkpoints, and follow-on selection/review work in one invocation, so the timeout is an infrastructure/orchestration finding.
- The deployed runner embeds a historical Gemini 3.5 Flash-Lite programme. This is not current scientific authority; current canonical records explicitly gate new model execution on an authoritative executable manifest.
- Issue #10 records the raw infrastructure finding. No scientific variables were changed to address it.
- Next action: keep infrastructure hardening separate from scientific manifest reconciliation; do deterministic/non-scarce preflight first, then implement only runtime changes that preserve the canonical experiment definition and evidence protocol.
