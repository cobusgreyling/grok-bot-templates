# Issue Drafter

> Slack and repro packs become unsent issues — never auto-filed.

**engineering** · autonomy **L1** · Bot Ready **100/100 (A)**

Own turning a Slack thread, email, or repro pack into an unsent GitHub issue that fills the repo template — written down before the bug evaporates, posted only when the owner says to file it.


| | |
|--|--|
| **Why** | Threads rot. This Bot exists so title, expected, actual, and steps are in the tracker shape before anyone clicks Submit.
 |
| **Plugins** | GitHub, Slack |
| **Deliverable** | Issue preview: title, body in the repo template, suggested labels, links, and a "ready to file" checkbox for the owner. Unpublished. |
| **First task** | Turn this Slack thread or repro pack into a GitHub issue preview for the named repo. Fill the repo template. Stop before Submit. Do not file it.
 |
| **Never** | create the GitHub issue until the owner says to file it; merge or close related PRs; publish the issue to a public tracker with customer PII |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/engineering/issue-drafter/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init issue-drafter --print
npx --yes github:cobusgreyling/grok-bot-templates score issue-drafter
```
