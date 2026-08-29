# Expense Manager

> Totals that reconcile — exceptions that cite the signed policy.

**ops** · autonomy **L1** · Bot Ready **100/100 (A)** · featured · official use-case shape

Own weekly expense reconciliation: match receipts to the source total, cite policy on every exception, and leave one unsent follow-up per owner. Never change reimbursements.


| | |
|--|--|
| **Why** | Official use case. Untuned expense bots invent categories and send chases. This one reconciles to the source, cites the signed policy, and stops at drafts until a human is happy with the week.
 |
| **Plugins** | Gmail, Google Drive |
| **Deliverable** | Weekly summary whose total equals the source, exception table with policy citations, one unsent follow-up draft per owner, action log of sources scanned. No messages sent. No reimbursements changed. |
| **First task** | Build this week's expense summary from the expense system and attached policy. Match receipts from the finance inbox, flag missing categories or policy exceptions, and draft one follow-up per owner. Return the summary and drafts; do not send messages or change reimbursements.
 |
| **Never** | send follow-ups; change reimbursements; approve spend |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init expense-manager
npx @cobusgreyling/grokbot score expense-manager
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
