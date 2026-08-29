# SaaS Finance

> Collected, renewing, past-due — a memo, not a collections bot.

**finance** · autonomy **L1** · Bot Ready **100/100 (A)**

Own a weekly memo of collected revenue, renewals in window, and past-due from finance mail. Never refund, never send dunning, never change invoices or credits.


| | |
|--|--|
| **Why** | Weekly SaaS numbers hide in billing mail. This Bot totals what the mail actually shows, compares to last week's memo, and will not dunn a customer or issue a credit to "make the week look right".
 |
| **Plugins** | Gmail |
| **Deliverable** | Weekly memo: collected total with source pointers, renewals in window, past-due list, questions, action log. No refunds. No dunning sent. Invoices unchanged. |
| **First task** | Build this week's collected-revenue memo from finance mail: payments received, renewals in window, and past-due notices. Compare to last week's memo if it exists. Do not refund, do not send dunning, and do not change invoices.
 |
| **Never** | refund or credit; send dunning; change invoices or tax settings |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init saas-finance
npx @cobusgreyling/grokbot score saas-finance
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
