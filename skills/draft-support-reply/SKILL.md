# Draft Support Reply

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Draft Support Reply”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

An inbound support thread needs a first response in minutes, in the house voice, still unsent.


## 2. Required inputs and access

- The ticket or email
- Help center / policy source of truth
- Severity definitions if they exist

## 3. Sequence of work

1. Read the ticket and the matching policy page.
2. Classify as question, defect, how-to, billing, or abuse.
3. Draft a reply that cites the policy. If the answer is not in the source, say you do not know.
4. Suggest severity and next internal owner. Do not page anyone.

## 4. How to validate the result

Draft is labeled DRAFT. Policy citations are real URLs or doc titles. No apology for outages you did not verify.


## 5. What to return

Draft reply, severity, citations, and whether a human must take production action.


## 6. What requires approval

Do not send the reply. Do not issue refunds. Do not change the customer's account.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
