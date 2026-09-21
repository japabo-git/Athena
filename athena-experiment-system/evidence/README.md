# Evidence Contract

The directory is a schema/documentation boundary. Large generated evidence should normally live in durable external storage or a dedicated artifact store, with immutable identifiers referenced here.

Recommended run record:

```json
{
  "run_id": "immutable-id",
  "experiment_id": "canonical-experiment-id",
  "experiment_version": "version",
  "scenario_version": "version",
  "evaluator_version": "version",
  "runner_version": "git-commit-or-equivalent",
  "provider": "provider-id",
  "requested_model": "exact-id",
  "returned_model": "exact-id-or-null",
  "generation_config": {},
  "started_at": "RFC3339",
  "finished_at": "RFC3339",
  "status": "COMPLETE|BLOCKED|INFRASTRUCTURE_FAILURE|EXPERIMENT_FAILURE|EVALUATION_FAILURE",
  "retry_count": 0,
  "raw_request_uri": "durable-location",
  "raw_response_uri": "durable-location",
  "trace_uri": "durable-location",
  "evaluation_uri": "durable-location",
  "error_uri": "durable-location-or-null",
  "sha256": "integrity-hash-or-null"
}
```

Do not put secrets in any evidence artifact.
