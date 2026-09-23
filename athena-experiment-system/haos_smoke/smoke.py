"""Minimum Inspect smoke task for the HAOS Phase 2.5 fixture set."""

from pathlib import Path

from inspect_ai import Task, task
from inspect_ai.dataset import json_dataset
from inspect_ai.scorer import exact
from inspect_ai.solver import generate


FIXTURE_PATH = Path(__file__).with_name("fixtures.jsonl")


@task
def haos_smoke() -> Task:
    """Load the minimum HAOS fixture corpus and verify end-to-end execution."""
    return Task(
        name="haos-smoke",
        version="0.1",
        dataset=json_dataset(FIXTURE_PATH.as_posix(), auto_id=True),
        solver=[generate()],
        scorer=exact(),
        metadata={
            "programme": "HAOS Phase 2.5",
            "purpose": "harness_smoke_test",
            "scientific_status": "non_evidence",
        },
    )