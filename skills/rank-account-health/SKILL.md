# Rank Account Health

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Rank Account Health”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A customer portfolio needs a ranked watch list from usage, support, renewal timing, and stakeholder activity — evidence, not a feeling.


## 2. Required inputs and access

- Account list or CRM segment
- Risk thresholds (ask once if missing — usage drop, open P1s, days to renewal)
- Support, billing, and success notes the owner approved as sources

## 3. Sequence of work

1. Load current data. If a source is down, name it and continue with what you have — never substitute last week's file silently.
2. Score each account against the saved thresholds.
3. Write evidence, why it matters, and a suggested next step.
4. Rank. Separate expansion signals from churn signals.

## 4. How to validate the result

Every rank has a threshold citation. No customer is emailed. CRM is not edited.


## 5. What to return

Ranked watch list with evidence links, suggested next step, and a "needs human" flag.


## 6. What requires approval

Do not contact customers. Do not edit the CRM. Do not issue refunds or credits.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
