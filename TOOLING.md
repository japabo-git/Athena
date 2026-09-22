# Athena Tooling Policy

## Principle
GitHub is the durable coordination surface. External tools are capability providers, not competing memory.

## Every integration must define
- capability;
- authority/data it owns, if any;
- why Athena needs it;
- connection/credential owner;
- failure mode;
- fallback;
- durable return path into GitHub.

## Agent synchronization
Every connected agent/execution environment must start from current GitHub state and publish durable changes/evidence back to GitHub before handoff. Repeated manual setup should be replaced by a shared project integration or documented automation where supported.

## Execution environments
Antigravity/Codespaces, AppDeploy/Hatchable, sandboxes and similar systems are workers. They may execute work, but their local state, logs or memory are not authoritative until reconciled.

## Secrets
Never commit credentials. Use secure secret mechanisms and non-secret aliases.

## Decommission
If a tool adds more coordination/setup cost than durable value, record the evidence and simplify/remove it rather than accumulating integrations.

## Maintenance
When an integration's capability, owner, failure mode or return path changes, update this registry in the same change. Do not maintain stale connection instructions.
