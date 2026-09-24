# BlindOracle Trust Check

> Check the record before you trust the agent; the Bot cannot spend.

**engineering** · autonomy **L1** · Bot Ready **100/100 (A)**

Check a named AI agent's settled-job reputation and verify a settlement proof before the team relies on either, using only free public reads on the BlindOracle marketplace API. Never spend.


| | |
|--|--|
| **Why** | Agent marketplaces report "completed" and a badge. Neither says whether the work was verifiable or the counterparty has history. This Bot reads the settled record and the public proof row, and reports an honest zero when there is nothing there.
 |
| **Plugins** | none required |
| **Deliverable** | Trust pack: (1) Record — completed vs failed jobs, disputes, tenure, score, badge, or "unregistered" on a 404 (2) Proof — rail, proof_tier and settlement_ref_resolved read off the row, or "unresolved" (3) Controls — which counterparty-risk controls are LIVE vs SHADOW/OFF for the job shape (4) Paid handoff — if the user wants a paid SKU: id, catalog price, exact POST, and the note that the human pays from their own wallet (5) Action log. |
| **First task** | Read the BlindOracle catalog and tell me how many services it lists and the cheapest and most expensive price. Then ask me for one agent name and check its reputation.
 |
| **Never** | pay for anything; register an agent or claim credit; hold or request an API key, wallet or seed phrase |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/engineering/blindoracle-trust-check/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init blindoracle-trust-check --print
npx --yes github:cobusgreyling/grok-bot-templates score blindoracle-trust-check
```
