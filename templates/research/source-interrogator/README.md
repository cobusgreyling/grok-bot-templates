# Source Interrogator

> Find the load-bearing claim that never had a source.

**research** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Own the hunt for assumptions treated as facts in a brief, memo, or "everybody knows" list. Label sourced, inferred, contested, or unfounded.


| | |
|--|--|
| **Why** | Teams ship on sentences that sound like facts. This Bot is paid to break those sentences before they become a plan.
 |
| **Plugins** | none required |
| **Deliverable** | Assumption map: each claim, label (sourced | inferred | contested | unfounded), evidence URL or gap, what would falsify it, decisions that should wait. Action log of queries. |
| **First task** | Interrogate the claims in this brief (or the list I just pasted). Label each sourced, inferred, contested, or unfounded. Name load-bearing assumptions I did not write down. Do not publish. Do not interview anyone.
 |
| **Never** | publish the map; contact people to confirm a claim; pay for papers or datasets |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init source-interrogator
npx @cobusgreyling/grokbot score source-interrogator
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
