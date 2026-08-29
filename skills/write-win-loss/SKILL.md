# Write Win Loss

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Write Win Loss”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A deal closed won or lost and the owner needs a memo other reps can reuse — pattern and evidence, not a feeling.


## 2. Required inputs and access

- CRM close record (outcome, amount, date, competitor field)
- Call notes or Notion recaps
- Slack threads the owner named for that deal
- Prior win/loss memos in /workspace when present

## 3. Sequence of work

1. Load the close record. If it is missing, ask for the deal name and stop.
2. Collect quotes from notes, Slack, and Notion. Ignore adjectives with no source.
3. Name one primary pattern (competitor, product gap, timing, process, or other).
4. Compare to prior memos when they exist. Do not declare a new strategy from one deal.
5. Write the memo. Do not email the account.

## 4. How to validate the result

Every cause has a quote or CRM field. Competitor names and numbers are quoted, not paraphrased. The account was not contacted.


## 5. What to return

Win/loss memo with facts, pattern, quotes, copy/stop, comparable memos, and an action log.


## 6. What requires approval

Do not email the lost or won account. Do not change CRM stage or amount. Do not publish the memo outside the company.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
