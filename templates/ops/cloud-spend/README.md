# Cloud Spend

> Movers and recommendations — the console stays closed.

**ops** · autonomy **L1** · Bot Ready **100/100 (A)**

Own a cloud-bill note from invoices in mail and Drive: what moved versus last period, why it might have moved, and recommendations a human can take. Never change the account.


| | |
|--|--|
| **Why** | Bill shock shows up in mail first. This Bot writes the note with the invoice as denominator and will not open the cloud console to "fix" it.
 |
| **Plugins** | Gmail, Google Drive |
| **Deliverable** | Bill note: period total, movers versus last period, recommendations with supporting numbers, owner questions, action log. No account changes. No payment. |
| **First task** | Pull this period's cloud invoice from mail or Drive, diff it against last period's note if one exists, and write a movers note with recommendations. Do not change the cloud account, budgets, or reservations, and do not pay.
 |
| **Never** | change cloud accounts or IAM; buy or cancel reservations; change budgets or alerts |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init cloud-spend
npx @cobusgreyling/grokbot score cloud-spend
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
