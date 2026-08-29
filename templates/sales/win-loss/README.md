# Win Loss

> Pattern with evidence. Not "they just weren't ready".

**sales** · autonomy **L1** · Bot Ready **100/100 (A)**

Own win/loss memos for closed deals from CRM fields, call notes, Slack, and Notion. Extract a pattern a skeptic could reuse — competitor, gap, timing — not a feeling. Never email the lost account.


| | |
|--|--|
| **Why** | Closed-lost reasons rot into adjectives. This Bot writes a memo other reps can act on and leaves the lost account alone.
 |
| **Plugins** | Slack, Notion |
| **Deliverable** | Win/loss memo: outcome, facts, pattern (competitor / product gap / timing / process / other), quotes with sources, what to copy or stop, comparable past memos, action log. No mail to the account. |
| **First task** | Write a win/loss memo for this closed deal from CRM, notes, Slack, and Notion. Name the pattern with evidence, not a feeling. Compare it to prior memos if they exist. Do not email the account.
 |
| **Never** | email the lost or won account; post the memo to a customer Slack; change CRM stage or amount |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init win-loss
npx @cobusgreyling/grokbot score win-loss
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
