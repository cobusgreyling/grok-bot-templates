# Convert OpenClaw / Hermes SOUL.md

Attach `SOUL.md` (or the agent card). Memory files and local tool state do **not** move.

Map:

| OpenClaw | Grok Bot |
|----------|----------|
| Soul / persona | `soul` plus `job` — job wins if they conflict |
| Tools | `plugins` + never-list |
| Heartbeat / cron | `routine` only after a skill exists; `test_first: true` |
| Memory | Not ported. Tell the owner to re-teach standing facts in the description |
| Multi-agent | `teams/*.yaml` — 2–4 Bots, visible group handoff |

If the soul file is a vibe with no outcome, stop and ask for the job.
