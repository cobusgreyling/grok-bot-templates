# Convert a Custom GPT

Attach the GPT's instructions (and, if you have them, the knowledge file *names* — not the files).

Map:

| Custom GPT | Grok Bot |
|------------|----------|
| Name / description | `name`, `title`, `job` |
| Instructions | `working_style` + `never` |
| Knowledge files | `sources` (they will live on the shared computer under `/workspace/<id>/` if the owner uploads them) |
| Actions / APIs | `plugins` or "browser on the shared computer" — do not copy API keys |
| Conversation starters | `first_task` (pick one) |
| Capabilities (web, dalle, code) | Not 1:1. Grok Bot has computer + plugins instead |

Drop secrets. Default L1 even if the GPT could call an action. Grok Bot approvals are stricter and should stay that way week one.
