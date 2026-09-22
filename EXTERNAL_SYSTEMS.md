# Athena External Systems Registry

## Principle
GitHub is the durable project workspace. External systems are retained only when they provide a capability GitHub should not replace.

## Notion
Role: current canonical SSOT during migration.
Owns: decisions/state not yet formally migrated.
Return path: export and reconcile into this repository with source revision/date.
Cutover: explicit decision after reconciliation.
Status: migration pending.

## AppDeploy / Hatchable
Role: application deployment/runtime.
Owns: live runtime state while deployed.
Does not own: Athena decisions or experiment definitions.
Return path: deployment IDs, logs, config versions and outcomes into evidence.
Status: verified deployed/ready, but cron execution is currently timing out at the 30s handler limit; see GitHub issue #10. Runtime source also contains a historical experiment programme that must not be treated as current scientific authority.

## Google AI Studio / Gemini
Role: model provider.
Owns: provider execution and quota.
Does not own: Athena experiment definitions/evaluation/conclusions.
Return path: exact model ID, request/config identity, response/error body, timing and quota/failure metadata into experiment evidence.
Status: active by experiment.

## Decommission rule
Remove/downgrade an external system when its capability is no longer needed or its coordination cost exceeds its value. Record the decision first.
