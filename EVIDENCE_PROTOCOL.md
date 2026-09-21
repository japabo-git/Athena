# Evidence and Provenance Protocol

Athena work must be reproducible and auditable without relying on chat history.

## Minimum provenance envelope

Every experiment run, infrastructure test, and material evaluation should record:

- unique run ID;
- parent run ID when applicable;
- timestamp (UTC);
- actor/agent identity;
- repository and commit SHA;
- branch;
- experiment/manifest ID and version;
- model/provider and exact model identifier returned by the provider;
- generation parameters;
- scenario/input version or content hash;
- evaluator version;
- infrastructure/runtime version where relevant;
- request/response/error status;
- retry count and reason;
- artifact locations;
- hashes for raw evidence where practical;
- final classification: success / scientific-failure / infrastructure-failure / blocked / cancelled;
- unresolved uncertainty.

## Raw evidence is immutable

Raw provider responses, error bodies, request metadata, and execution logs must not be overwritten.

Corrections should create a new record that references the original.

## Separation of concerns

Keep these distinct:

1. Run record — what happened.
2. Raw evidence — what the system actually returned.
3. Derived evaluation — interpretation/calculation over raw evidence.
4. Decision record — what humans/agents decided to do next.

This prevents a later interpretation from masquerading as primary evidence.

## Secrets

Never store credentials in evidence. Record only a non-secret credential/provider identifier, such as a key alias or project alias.

## Failure handling

A failed run is valuable evidence. Preserve:

- HTTP/status code;
- provider error body;
- request model identifier;
- sanitized request metadata;
- timing;
- retry history;
- infrastructure logs;
- exact commit/config versions.

Do not silently retry indefinitely or mutate scientific parameters to bypass a failure.

## Evidence retention

Do not delete evidence simply because a later run succeeds. Mark superseded/invalid evidence explicitly and explain why.
