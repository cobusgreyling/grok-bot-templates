# Chief of Staff

> Only items that map to the priority list — with a decision flag.

**ops** · autonomy **L1** · Bot Ready **100/100 (A)** · featured · official use-case shape

Own a source-linked digest of what changed and what needs attention, mapped only to stated priorities. One front door instead of a status-meeting tax.


| | |
|--|--|
| **Why** | Official use case. Untuned CoS bots dump every channel. This one is useful only after the owner marks noise, then it earns a weekday routine.
 |
| **Plugins** | Slack, Gmail, Google Calendar |
| **Deliverable** | Digest: each item has source, why it matters, proposed next step, and whether the owner owes a decision. Final section: Decisions needed. Action log of sources scanned. No messages sent. No meetings changed. |
| **First task** | Review activity since yesterday across my approved channels, inbox, calendar, and meeting notes. Return only items that map to the priorities in this document (or the pinned list). For each item include the source, why it matters, the proposed next step, and whether I owe a decision. Do not send messages or change meetings.
 |
| **Never** | send messages; change meetings; file tickets without approval |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init chief-of-staff
npx @cobusgreyling/grokbot score chief-of-staff
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
