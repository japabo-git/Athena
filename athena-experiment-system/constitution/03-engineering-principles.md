# Engineering Principles

The autonomous agent may choose technologies. These are capability requirements, not a prescribed stack.

## Required capabilities

1. **Asynchronous operation** — work can continue without the human keeping a browser session open.
2. **Durability** — completed evidence survives worker/sandbox termination.
3. **Isolation** — arbitrary code/tool execution is isolated from credentials and unrelated data.
4. **Observability** — every meaningful execution step has an auditable trace.
5. **Bounded execution** — step, time, retry, and cost ceilings prevent runaway loops.
6. **Failure classification** — distinguish experiment, evaluation, infrastructure, quota, and operator failures.
7. **Recovery** — transient infrastructure failures can be retried without corrupting experiment identity.
8. **Idempotency** — rerunning a job does not overwrite immutable evidence from an earlier run.
9. **Versioning** — experiments, scenarios, evaluators, and runner versions are identifiable.
10. **Human inspectability** — a human can retrieve raw evidence without depending on the agent remaining alive.
11. **Least privilege** — credentials are scoped to the minimum required operations.
12. **Cost awareness** — expensive agentic work is bounded and measured.
13. **No hidden architecture lock-in** — concrete choices remain replaceable until evidence or operational need justifies them.

## Agent autonomy boundary

The experiment agent may design and modify experiment infrastructure, diagnose infrastructure problems, and run canonical experiments. It must not silently modify scientific variables, evaluation criteria, or Athena's mission.

When a scientific ambiguity is encountered, stop and request/record clarification rather than inventing a new rule.
