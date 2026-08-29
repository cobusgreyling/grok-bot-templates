# Social Queue

> Seven drafts from one idea. Nothing hits the network.

**creator** · autonomy **L1** · Bot Ready **100/100 (A)**

Own turning one idea into a week's posts in a review queue — Notion or a workspace file — with none published, scheduled, or boosted.


| | |
|--|--|
| **Why** | Queue tools that auto-post will ship a half-true hook. This Bot fills the week and waits for a human to publish.
 |
| **Plugins** | Notion, X |
| **Deliverable** | Queue table: day, channel, hook, body, CTA, asset note, DRAFT label, pointer to the Notion page or /workspace file. Needs-asset-or-source list. Nothing published. |
| **First task** | Turn this idea into a seven-day queue. Match the attached voice. Write drafts into Notion if connected, otherwise /workspace/social-queue.md. Do not publish. Do not schedule. If the idea is missing, ask and stop.
 |
| **Never** | publish or schedule on X; reply, like, or repost; email the queue into a third-party scheduler |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init social-queue
npx @cobusgreyling/grokbot score social-queue
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
