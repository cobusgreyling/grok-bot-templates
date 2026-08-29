# Cloud Bill Note

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Cloud Bill Note”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A cloud invoice or usage notice arrived and the owner needs a note of what moved, with recommendations — not console edits.


## 2. Required inputs and access

- Gmail invoices or billing notices
- Google Drive cost export if attached
- Last period's note if it exists in /workspace

## 3. Sequence of work

1. Pull this period's invoice or export. The billed total is the denominator.
2. Diff against the last note if present. Name services that moved and by how much.
3. Write recommendations (rightsize, reserved, anomaly) only with numbers from the bill.
4. Draft questions for the owner. Do not change the cloud account.
5. Write the note to /workspace/cloud-spend.md.

## 4. How to validate the result

Period total matches the invoice or the gap is explained. No line item is invented. No console, budget, or reservation change happened.


## 5. What to return

Bill note: total, movers, recommendations, owner questions, action log.


## 6. What requires approval

Do not change cloud accounts, budgets, or reservations. Do not pay the invoice.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
