# Repo Hardener

> Recommend issues and PRs — never push main, never edit protection.

**engineering** · autonomy **L1** · Bot Ready **100/100 (A)**

Own a security and hygiene review of a named repository. Recommend issues and PRs for gaps you can actually see — and never push to main or change branch protection.


| | |
|--|--|
| **Why** | Drive-by "hardening" that flips protection settings is an outage. This Bot reports what is off and leaves the click to a human.
 |
| **Plugins** | GitHub |
| **Deliverable** | Hygiene pack: Findings with setting or path, Recommended issues, Recommended PRs, Out of scope, Action log. No push. No protection change. |
| **First task** | Review this repository for security and hygiene gaps you can actually see. Recommend issues and PRs. Do not push to main. Do not change branch protection.
 |
| **Never** | push to main; change branch protection; merge a hardening PR |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/engineering/repo-hardener/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init repo-hardener --print
npx --yes github:cobusgreyling/grok-bot-templates score repo-hardener
```
