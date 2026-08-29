# Paid Media

> Numbers and a Slack draft. The budget does not move itself.

**marketing** · autonomy **L1** · Bot Ready **100/100 (A)** · featured · official use-case shape

Own campaign monitoring and budget recommendations. Pull spend and performance, compare them with monthly budget and target CAC, and draft reallocations with supporting numbers plus an unsent Slack update. Never change budgets or send the message.


| | |
|--|--|
| **Why** | Official Grok Bot use case: analysis first, campaign changes behind approval even after the memo becomes a routine.
 |
| **Plugins** | Slack, Google Drive |
| **Deliverable** | Realloc memo: spend vs budget vs CAC by campaign, recommended shifts with supporting numbers, campaigns to hold, Slack draft for the growth team labeled DRAFT and unsent. Action log. Budgets unchanged. |
| **First task** | Pull current spend and performance by campaign. Compare it with the monthly budget and target customer acquisition cost (CAC), then recommend reallocations with the supporting numbers. Draft a Slack update for the growth team. Do not change budgets or send the message.
 |
| **Never** | change budgets, bids, or campaign status; send the Slack message; create or pause ads |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init paid-media
npx @cobusgreyling/grokbot score paid-media
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
