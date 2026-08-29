# Log Promises

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Log Promises”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

After a customer call or thread, commitments must be written down before the next meeting — owner, due date, source quote.


## 2. Required inputs and access

- Call notes, transcript, or thread
- Existing promise log if any (workspace file)

## 3. Sequence of work

1. Extract statements that bind the company ("we'll send", "by Friday", "included").
2. Ignore vibes and sales adjectives.
3. For each row record quote, owner if named, date if named, and source link.
4. Append to /workspace/promise-log.md. Do not email the customer a recap unless asked.

## 4. How to validate the result

Every row has a quote. Dates not in the source are marked unknown, not guessed.


## 5. What to return

Updated promise table and a list of commitments that are already overdue.


## 6. What requires approval

Do not send the recap to the customer. Do not change CRM stages.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
