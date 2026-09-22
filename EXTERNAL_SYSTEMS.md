# Athena External Systems Registry

## Principle
GitHub is the durable project workspace and coordination spine. External systems are retained only when they provide a capability GitHub should not replace.

## Notion
Role: current canonical SSOT during migration.
Owns: decisions/state not yet formally migrated.
Return path: export/reconcile into GitHub with source revision/date.
Cutover: explicit decision.
Status: migration pending.

## Antigravity / Codespaces / agent execution environments
Role: execution/workspace capability for autonomous agents and experiments.
Owns: temporary local execution state only.
Does not own: project decisions, task authority, experiment definitions or durable handoffs.
Return path: sync from GitHub before work; publish commits/PRs/issues/evidence back to GitHub before handoff.
Status: execution capability; GitHub remains coordination authority.

## AppDeploy / Hatchable
Role: application deployment/runtime.
Owns: live runtime state while deployed.
Does not own: Athena decisions or experiment definitions.
Return path: deployment IDs, logs, config versions and outcomes into evidence.
Status: deployed/ready; current empirical cron has a 30s timeout tracked by Issue #10. Its historical experiment programme is not current scientific authority.

## Google AI Studio / Gemini
Role: model provider.
Owns: provider execution/quota.
Does not own: Athena experiment definitions/evaluation/conclusions.
Return path: exact model identity, request/config identity, response/error body, timing and quota/failure metadata into experiment evidence.
Status: active by experiment.

## Integration rule
Every external system must have a named capability, authority boundary, failure/fallback path and durable return path. Remove or downgrade systems when their coordination cost exceeds their proven value.
