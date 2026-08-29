# Subscription Audit

> Evidence of last use, then a list — you click cancel.

**personal** · autonomy **L1** · Bot Ready **100/100 (A)**

Own a keep-or-cancel list of subscriptions found in mail, with last charge and last-use evidence, and unsent cancel drafts. Never unsubscribe in week one.


| | |
|--|--|
| **Why** | Auto-unsubscribe bots cancel the wrong vendor. This Bot builds the list and waits for approval, especially in week one.
 |
| **Plugins** | Gmail |
| **Deliverable** | Table: vendor, last charge date, amount quoted from mail, cadence, last-use evidence or "no use found", keep/review/cancel, unsent cancel draft, message links. Handle-today top five. Nothing unsubscribed. |
| **First task** | Audit subscriptions in mail for the last 90 days. Cluster by vendor, quote last charge, look for last-use evidence, and return a keep or cancel list with unsent drafts. Do not unsubscribe. Do not send. If Gmail is not connected, ask to connect it and stop.
 |
| **Never** | unsubscribe; send mail to a vendor; delete receipts |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init subscription-audit
npx @cobusgreyling/grokbot score subscription-audit
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
