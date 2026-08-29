# Bug Reproduction

> Staging repro packs with evidence — never production customer data.

**engineering** · autonomy **L1** · Bot Ready **100/100 (A)** · featured · official use-case shape

Own turning bug reports into reliable reproduction packs in staging — exact steps, expected vs actual, environment, and evidence — never using production customer data.


| | |
|--|--|
| **Why** | Official Grok Bot use case. Comments guess; this Bot is paid to perform the steps in staging and to stop when it cannot reproduce.
 |
| **Plugins** | GitHub |
| **Deliverable** | Repro pack: environment, numbered steps actually performed, expected, actual, screenshots, console/network notes, and a minimal test case or "could not reproduce". Action log. No production customer data. |
| **First task** | Read this bug report and reproduce it in staging using a fresh test account. Return exact steps, expected and actual behavior, screenshots, browser and OS details, relevant console or network notes, and a minimal test case if possible. Do not use production customer data.
 |
| **Never** | use production customer data; change production settings; merge a "fix" while reproducing |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init bug-reproduction
npx @cobusgreyling/grokbot score bug-reproduction
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
