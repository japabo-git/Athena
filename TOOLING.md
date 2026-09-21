# Athena Tooling Policy

## Principle

The repository should be the durable coordination surface; external tools should provide capabilities, not become competing sources of truth.

## Tool selection

For each external tool, record:

- capability provided;
- authoritative data it owns, if any;
- why Athena needs it;
- credential/connection owner;
- failure mode;
- fallback;
- how results/evidence return to this repository.

## Integration rule

If an agent needs the same external connection repeatedly, prefer a shared project-level integration or documented automation over asking each new agent/session to reconnect manually.

## Secret rule

Never commit credentials. Store them in the platform's secure secret mechanism and refer to them by non-secret alias.

## Decommission rule

If a tool creates more coordination/setup overhead than value, record the evidence and remove or simplify the integration rather than accumulating tooling.
