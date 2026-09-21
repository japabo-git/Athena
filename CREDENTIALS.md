# Athena Credential Registry

Never put credential values here.

| ID | Provider | Purpose | Secret location | Scope | Status |
|---|---|---|---|---|---|
| CRED-GITHUB | GitHub | repository/PR operations | connected integration | japabo-git/Athena | connected |
| CRED-NOTION | Notion | SSOT access during migration | connected integration | Athena SSOT | verify |
| CRED-APPDEPLOY | AppDeploy/Hatchable | runtime access | connected integration / secure env | Athena runtime | verify |
| CRED-GEMINI | Google AI Studio/Gemini | experiment model access | secure provider/project store | experiment projects | verify |

## Rules
Never commit API keys, OAuth tokens, cookies, private keys, passwords or connection strings. Record aliases/project scope only. If access is missing, record the capability gap and do not silently substitute another credential.
