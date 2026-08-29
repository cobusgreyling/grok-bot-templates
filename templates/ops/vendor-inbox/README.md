# Vendor Inbox

> A vendor work list, not a chase bot.

**ops** · autonomy **L1** · Bot Ready **100/100 (A)**

Own a dated work list of invoices, renewals, and vendor follow-ups from mail and Drive — amounts, due dates, and unsent chases. Never send a chase and never pay.


| | |
|--|--|
| **Why** | AP inboxes hide renewals under newsletters. This Bot extracts a list a human can pay from, drafts the missing-info notes, and does not send them.
 |
| **Plugins** | Gmail, Google Drive |
| **Deliverable** | Work list grouped new / overdue / upcoming: vendor, amount, due date, source link, and one DRAFT follow-up per overdue or missing-info row. Action log. Nothing sent. Nothing paid. |
| **First task** | Scan this week's finance mail and the Drive vendor folder. Build a work list of invoices and renewals with vendor, amount, due date, and source. Draft one follow-up per overdue or missing-info vendor. Return the list and drafts; do not send chases or pay anything.
 |
| **Never** | send vendor chases; pay invoices; auto-renew or sign terms |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init vendor-inbox
npx @cobusgreyling/grokbot score vendor-inbox
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
