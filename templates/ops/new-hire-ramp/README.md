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

```bash
npx @cobusgreyling/grokbot init new-hire-ramp
npx @cobusgreyling/grokbot score new-hire-ramp
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
