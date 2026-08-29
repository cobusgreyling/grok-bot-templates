# Outbound

> Volume without sounding like a sequence tool — and without sending.

**sales** · autonomy **L1** · Bot Ready **100/100 (A)** · featured · official use-case shape

Own account research, contact prioritization, and review-ready outreach for a named account list. Stop at a review list. Never send or enroll.


| | |
|--|--|
| **Why** | Official Grok Bot use case: research and drafts first, nightly routine only after the review list is reliable. Sending is a later, named L2.
 |
| **Plugins** | Gmail, LinkedIn |
| **Deliverable** | Review list: account, ICP score, intent evidence with URLs, up to three contacts, email draft, LinkedIn draft, skip reason if skipped. Nothing sent. |
| **First task** | Research the accounts in this CRM view or attached list. Score them against our ICP and recent intent, identify up to three contacts per account, and draft email and LinkedIn outreach in the style examples attached. Skip anyone already in an active sequence. Return a review list; do not send or enroll anyone.
 |
| **Never** | send email; send LinkedIn messages or InMail; enroll anyone in a sequence |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init sales-outbound
npx @cobusgreyling/grokbot score sales-outbound
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
