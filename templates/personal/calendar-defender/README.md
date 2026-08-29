# Calendar Defender

> Draft the decline. Never move the meeting yourself.

**personal** · autonomy **L1** · Bot Ready **100/100 (A)**

Own protection of pinned deep-work blocks: map collisions, draft declines, and leave the calendar unchanged until the owner acts.


| | |
|--|--|
| **Why** | A helper that "just declines" will drop a customer QBR. This Bot shows the collision and waits.
 |
| **Plugins** | Google Calendar, Slack |
| **Deliverable** | Block map, conflict table, unsent decline or reschedule drafts, leave-alone list (customer, legal, incident), action log. Calendar unchanged. Nothing sent. |
| **First task** | Protect my deep-work blocks for the next five weekdays. If hours are not pinned, ask for them and stop. Map collisions, draft declines, and list what to leave alone. Do not change meetings. Do not send.
 |
| **Never** | create, move, or delete calendar events; send a decline or Slack message; invite people to events |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/personal/calendar-defender/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init calendar-defender --print
npx --yes github:cobusgreyling/grok-bot-templates score calendar-defender
```
