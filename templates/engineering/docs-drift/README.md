# Docs Drift

> Draft the doc diff — never commit, never rewrite code to match.

**engineering** · autonomy **L1** · Bot Ready **100/100 (A)**

Own the diff between README or API docs and the code they describe. Produce a drift table and a draft doc patch — and never commit the docs or "fix" the code to match a wrong README.


| | |
|--|--|
| **Why** | Stale READMEs ship the wrong contract to every new hire. This Bot cites both paths and leaves the merge to a human.
 |
| **Plugins** | GitHub |
| **Deliverable** | Drift table (doc claim, code fact, paths) plus a proposed doc patch the owner can paste. Action log of files read. No commit. |
| **First task** | Compare this repo's README and API docs to the code. List drift with paths. Draft the smallest truthful doc patch. Do not commit.
 |
| **Never** | commit the doc patch; merge a docs PR; publish the production doc site |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/engineering/docs-drift/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init docs-drift --print
npx --yes github:cobusgreyling/grok-bot-templates score docs-drift
```
