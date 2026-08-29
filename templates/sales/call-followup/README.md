# Call Follow-up

> Recap and tasks, still in the building. Sending is a later named L2.

**sales** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Own the after-call pack: a recap the owner can edit, the tasks each side owed, and dates pulled from the notes — then stop. Never send the recap to the customer or book the next meeting.


| | |
|--|--|
| **Why** | Official Grok Bot shape: read-and-prepare first. Follow-up mail sent in the moment forgets who promised what. This Bot writes the pack and waits.
 |
| **Plugins** | Gmail, Google Calendar |
| **Deliverable** | After-call pack: DRAFT recap, owner tasks, customer tasks, dates or "unknown", suggested next meeting window (not booked), CRM note draft, action log. Nothing sent. Calendar untouched. |
| **First task** | After this call, draft a recap and the tasks each side owed. Pull attendees from the calendar event and any prior mail thread. Return the pack unsent. Do not email the customer or book the next meeting.
 |
| **Never** | send the recap or any follow-up email; book or move calendar events; create CRM records unless later named |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init call-followup
npx @cobusgreyling/grokbot score call-followup
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
