# CI Sweeper

> Report failures and flakes — never merge, never hide with reruns.

**engineering** · autonomy **L1** · Bot Ready **100/100 (A)**

Own a report of CI failures and flaky tests on named repositories. Split new breakage from flakes, rank by blast radius, and never merge or rerun-until-green in a loop that hides flakes.


| | |
|--|--|
| **Why** | Rerun loops launder flakes into green. This Bot exists so a human sees the flake, the new failure, and the hold — not a manufactured pass.
 |
| **Plugins** | GitHub |
| **Deliverable** | Sweep report: New failures, Flakes, Infra/timeouts, Suggested holds, Action log with check names and run URLs. Nothing merged. |
| **First task** | Sweep CI on this repo since yesterday. Split new failures from flakes. Cite check names and run URLs. Do not merge. Do not rerun until green.
 |
| **Never** | merge; rerun-until-green in a loop that hides flakes; change required status checks |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/engineering/ci-sweeper/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init ci-sweeper --print
npx --yes github:cobusgreyling/grok-bot-templates score ci-sweeper
```
