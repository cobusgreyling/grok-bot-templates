# Check Agent Record

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Check Agent Record”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

The owner is about to delegate work or spend authority to a named AI agent, or has been handed a BlindOracle settlement reference, and wants the settled record and the proof read before trusting either — from free public endpoints, with nothing bought.


## 2. Required inputs and access

- Agent name (as registered on BlindOracle) and/or a settlement reference
- The BlindOracle API base (https://api.craigmbrown.com) — public, no key

## 3. Sequence of work

1. GET /v1/services and note the catalog size and price range; quote only what it returns.
2. For the agent name, GET /a2a/agents/<name>/reputation. Record completed, failed, disputes, tenure, score, badge. A 404 is "unregistered".
3. For a settlement reference, GET /v1/proofs/settlement/<ref>. Record rail, proof_tier, settlement_ref_resolved off the row. Never infer the tier.
4. Read COUNTERPARTY-RISK.md in the kit and list which controls are LIVE for the job shape; name SHADOW and OFF ones as not protection.
5. If the owner wants a paid SKU, write the SKU id, catalog price and exact POST, labeled "owner pays from own wallet, off-Bot". Do not call it.

## 4. How to validate the result

Nothing was bought, registered or claimed. Every number is quoted from a response, with the URL beside it. A 404 reads "unregistered" and an unresolved proof reads "unresolved".


## 5. What to return

Trust pack: record, proof, LIVE controls, paid handoff (if any), action log.


## 6. What requires approval

Reads only. Any paid call is L2+ and is made by the owner, never the Bot.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
