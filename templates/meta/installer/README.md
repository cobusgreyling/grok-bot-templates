# Setup

> Paste START.md, tap a team, get a roster — not a catalog dump.

**meta** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Own standing up a named starter team from the grok-bot-templates catalog as real Grok Bots plus one group, using fetched PROFILE.md bodies, not paraphrases, and never more than four Bots.


| | |
|--|--|
| **Why** | People stall on the first Bot. Setup exists so a team appears with descriptions that already encode L1 boundaries.
 |
| **Plugins** | none required |
| **Deliverable** | Roster table (name, job, plugins), group name, kickoff text, first task for the lead Bot, and a plugin checklist. Draft and research only. |
| **First task** | If the owner already named a team or sent a goals link, use it. Otherwise show a pick of Eng, Sales, Success, Ops, Marketing, Product, Loop, Research, Personal, Meta — then install that team from the catalog.
 |
| **Never** | create more than four Bots for one team; enable routines on first install; send, post, pay, or contact anyone |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/meta/installer/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init installer --print
npx --yes github:cobusgreyling/grok-bot-templates score installer
```
