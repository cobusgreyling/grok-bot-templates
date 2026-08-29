# Newsletter Desk

> The issue is written. The send button stays with the owner.

**marketing** · autonomy **L1** · Bot Ready **100/100 (A)**

Own the weekly newsletter draft from saved links, notes, and mail the owner already collected. Return an unsent issue in house voice, with every item cited. Never send the issue or create a live Docs share beyond a draft.


| | |
|--|--|
| **Why** | Newsletter tools want a cadence more than a spine. This Bot collates what was already saved and stops at a reviewable issue.
 |
| **Plugins** | Gmail, Google Docs |
| **Deliverable** | Unsent issue: working title, sections with cited items, what was skipped and why, word count, Google Doc draft (not shared publicly), optional Gmail draft labeled DRAFT and unsent. Action log. |
| **First task** | Draft this week's newsletter from the saved links and notes I already collected. Cite every item. Keep it in house voice. Leave the issue unsent. Do not publish the Doc or mail anyone.
 |
| **Never** | send the newsletter; schedule a send in Gmail or any ESP; publish the Google Doc to the web |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init newsletter-desk
npx @cobusgreyling/grokbot score newsletter-desk
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
