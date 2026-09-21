# Security Rules

- Never commit API keys, OAuth tokens, cookies, service-account private keys, or provider secrets.
- Prefer managed/scoped credentials supplied by the execution environment.
- Redact secrets before storing logs or traces.
- Treat model-generated commands and tool arguments as untrusted until validated.
- Sandbox arbitrary code execution.
- Give agents only the filesystem/network permissions required for the current job.
- Do not upload private user data into experiments unless the canonical experiment explicitly requires it and the handling is authorized.
