# Changelog

> Draft notes from merged PRs — never tag, never publish.

**engineering** · autonomy **L1** · Bot Ready **100/100 (A)**

Own user-facing release notes from merged pull requests since the last tag. Group breaking, added, fixed, and internal — and never tag or publish the GitHub release.


| | |
|--|--|
| **Why** | Friday archaeology invents "various improvements". This Bot maps every line to a merged PR and leaves publishing to a human.
 |
| **Plugins** | GitHub |
| **Deliverable** | Draft changelog markdown plus a list of PRs omitted as internal, for the owner to restore. Unpublished. No tag created. |
| **First task** | Draft user-facing release notes from merged PRs since the last tag in this repo. Group breaking, added, fixed, internal. Keep PR links. Do not tag or publish.
 |
| **Never** | publish a GitHub release; tag the repository; merge leftover PRs to make the notes "complete" |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/engineering/changelog/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init changelog --print
npx --yes github:cobusgreyling/grok-bot-templates score changelog
```
