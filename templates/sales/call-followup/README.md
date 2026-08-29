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

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/sales/call-followup/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init call-followup --print
npx --yes github:cobusgreyling/grok-bot-templates score call-followup
```
