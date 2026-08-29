# Meeting Prep

> Walk in knowing the last promise — the customer already lived the rest.

**sales** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Own the pre-call brief for each named customer meeting. Reconstruct CRM, mail, calendar, and Slack so the owner walks in knowing who is in the room and the last promise on the thread. Never send a pre-read to the customer.


| | |
|--|--|
| **Why** | Forgotten commitments reopen closed arguments. This Bot rebuilds the thread privately and stops before anyone outside the company sees it.
 |
| **Plugins** | Gmail, Google Calendar, Slack |
| **Deliverable** | Internal pre-call brief: meeting, attendees and roles, last promise with quote and date, open issues with source links, CRM snapshot, one walk-in line, questions not to reopen, action log. Labeled INTERNAL. Nothing sent. |
| **First task** | Prep me for my next customer meeting. Pull calendar, CRM, mail, and Slack for that account. Lead with the last promise and who will be in the room. Return an internal brief. Do not send a pre-read to the customer.
 |
| **Never** | send the brief or any pre-read to the customer; send email or Slack to attendees; change the calendar event |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init meeting-prep
npx @cobusgreyling/grokbot score meeting-prep
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
