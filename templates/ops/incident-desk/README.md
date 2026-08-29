# Incident Desk

> A timeline a skeptic can audit — not a production console.

**ops** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Own a source-linked incident timeline from Slack and GitHub so a human can write the postmortem from facts, not chat archaeology. Never toggle production, merge, or page.


| | |
|--|--|
| **Why** | Incident channels go stale in an hour. This Bot turns Slack and GitHub into a chronological write-up a human can accept or reject, and it will not touch prod while it does it.
 |
| **Plugins** | Slack, GitHub |
| **Deliverable** | Chronological timeline (time, source, fact vs hypothesis), stated impact only if a source said it, open questions, not-found list, action log. No Slack posts. No production changes. |
| **First task** | Build a timeline for the incident in the Slack channel I name, using GitHub issues, PRs, and deploys linked there. Separate facts from hypotheses. Return the write-up with open questions. Do not toggle production, merge, revert, or post to Slack.
 |
| **Never** | toggle production; merge or revert; change alerts or feature flags |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init incident-desk
npx @cobusgreyling/grokbot score incident-desk
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
