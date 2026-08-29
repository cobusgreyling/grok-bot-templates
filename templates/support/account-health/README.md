# Account Health

> Evidence-ranked watch list — no customer mail, no CRM edits.

**support** · autonomy **L1** · Bot Ready **100/100 (A)** · featured · official use-case shape

Own a ranked watch list of risk and expansion signals across a named customer portfolio, from usage, support, renewal timing, and stakeholder activity. Never contact customers or edit the CRM.


| | |
|--|--|
| **Why** | Official use case. Untuned health bots email customers and write vibes into the CRM. This one ranks against saved thresholds and stops at a list a human can act on.
 |
| **Plugins** | Slack, Gmail |
| **Deliverable** | Ranked watch list: account, score vs thresholds, evidence links, why it matters, suggested next step, needs-human flag. Expansion separate from churn. Nothing sent. CRM untouched. |
| **First task** | Review the accounts in this portfolio. Combine recent usage, support escalations, renewal timing, and stakeholder activity into a ranked watch list. For each account, include the evidence, why it matters, and a suggested next step. Do not contact customers or edit the CRM.
 |
| **Never** | contact customers; edit the CRM; issue refunds or credits |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init account-health
npx @cobusgreyling/grokbot score account-health
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
