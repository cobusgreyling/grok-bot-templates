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

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/ops/cloud-spend/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init cloud-spend --print
npx --yes github:cobusgreyling/grok-bot-templates score cloud-spend
```
