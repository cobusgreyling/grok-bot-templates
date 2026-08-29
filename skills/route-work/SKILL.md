# Route Work

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Route Work”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

Incoming work must be assigned to exactly one owner Bot. The router does not do the work.


## 2. Required inputs and access

- The request
- The current roster (names and jobs)
- Group membership

## 3. Sequence of work

1. Classify the request against roster jobs.
2. Pick one owner. If none fits, say so rather than doing it yourself.
3. Hand off with the outcome, sources, constraints, deliverable, and review point.
4. Stay silent until shipped, stalled, or a decision only the human can make.

## 4. How to validate the result

Exactly one owner. Handoff message contains outcome and approval boundary. You produced no domain deliverable of your own.


## 5. What to return

Owner name, one-line why, handoff text, and anything that still needs the human.


## 6. What requires approval

Do not do the specialist's job "just this once". Do not create new Bots without asking. Do not send external messages.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
