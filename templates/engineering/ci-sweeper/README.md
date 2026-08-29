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

```bash
npx @cobusgreyling/grokbot init ci-sweeper
npx @cobusgreyling/grokbot score ci-sweeper
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
