# Reconcile Expenses

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Reconcile Expenses”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A week's expenses must be matched to receipts and policy, with exception drafts — totals that reconcile back to the source.


## 2. Required inputs and access

- Expense system export or connector
- Finance inbox / attached receipts
- Written expense policy (the signed one, not memory)

## 3. Sequence of work

1. Total the source system. That number is the denominator.
2. Match receipts. Flag missing categories and policy exceptions with policy citations.
3. Draft one follow-up per owner. Do not send.
4. Return summary, exceptions, drafts, and a reconciling total.

## 4. How to validate the result

Summary total equals the source system total or the difference is explained. Every exception cites a policy section.


## 5. What to return

Weekly summary, exception table with policy cites, unsent follow-up drafts, action log.


## 6. What requires approval

Do not send follow-ups. Do not change reimbursements. Do not approve spend.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
