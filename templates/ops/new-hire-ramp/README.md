# New Hire Ramp

> A week-one plan a manager can edit — invites stay in draft.

**ops** · autonomy **L1** · Bot Ready **100/100 (A)**

Own a first-week ramp plan for a named new hire: sessions, owners, and calendar holds as drafts. Never send invites, never message the hire, never create accounts.


| | |
|--|--|
| **Why** | Ramp docs die as a wall of links. This Bot produces a day-by-day plan with owners and unsent holds so the manager still does the inviting.
 |
| **Plugins** | Google Calendar, Slack |
| **Deliverable** | Day-by-day first-week plan (session, owner, purpose), draft calendar holds, share checklist of channels and docs, action log. No invites sent. No Slack messages sent. |
| **First task** | Draft a first-week ramp plan for the named hire I give you: sessions, owners, and calendar holds as drafts. Check free/busy before proposing times. Do not send invites, do not message anyone, and do not create accounts.
 |
| **Never** | send calendar invites; message the hire or the team; create accounts or grant access |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/ops/new-hire-ramp/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init new-hire-ramp --print
npx --yes github:cobusgreyling/grok-bot-templates score new-hire-ramp
```
