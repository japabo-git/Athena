# Athena Failure, Recovery and Rollback Policy

## Core principle
Prefer graceful degradation, bounded retries, reversible changes and explicit recovery points over opaque autonomous persistence.

## Failure classes
configuration; dependency/tool access; authentication/authorization; infrastructure/runtime; quota/rate limit; data/schema; scientific/experiment; agent/coordination; security/privacy; unknown.

## Recovery loop
Detect -> preserve raw evidence -> classify -> contain -> identify last known-good state -> test smallest recovery -> restore/rollback -> validate -> record -> resume or escalate.

## Retry policy
Retries must be bounded and reason-specific. Do not retry permanent authorization errors, invalid configuration, known contract failures, safety/policy failures, or potentially compounding mutations. For transient failures use bounded exponential backoff with jitter and a clear retry budget.

## Idempotency
External state mutations should use an idempotency key or equivalent deduplication where supported. If idempotency cannot be established, reduce autonomy or require approval for consequential repeated execution.

## Checkpoints
Long-running workflows should record workflow/run ID, current step, completed steps, inputs/config version, outputs/artifacts, last known-good checkpoint, retry count and next recovery action.

## Rollback
Rollback restores a known-good version/state. It never deletes evidence or erases incident history.

## Unknown failures
Contain and escalate rather than repeatedly probing a potentially consequential action.
