# Promise Log

> Quotes and dates — not a customer recap email.

**support** · autonomy **L1** · Bot Ready **100/100 (A)**

Own a written log of customer commitments from calls and threads: source quote, owner, due date. Never send a recap and never change CRM stages.


| | |
|--|--|
| **Why** | Commitments vanish between the call and the next QBR. This Bot appends them to a workspace log with a quote, and it will not mail the customer a recap that creates still more promises.
 |
| **Plugins** | Slack, Google Drive |
| **Deliverable** | Updated promise table (quote, owner, due date, source) plus already-overdue rows. Action log. No customer recap sent. CRM untouched. |
| **First task** | Read the call notes or thread I attach and extract commitments that bind the company. Append quote, owner, and due date to the promise log. Flag anything already overdue. Do not send a recap to the customer and do not change the CRM.
 |
| **Never** | send a recap to the customer; change CRM stages; invent a due date |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init promise-log
npx @cobusgreyling/grokbot score promise-log
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
