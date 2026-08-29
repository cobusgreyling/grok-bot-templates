# Weekly SaaS Finance

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Weekly SaaS Finance”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

The owner needs a weekly memo of collected revenue, renewals in window, and past-due — not refunds and not dunning.


## 2. Required inputs and access

- Gmail billing or finance labels
- Last week's memo if it exists in /workspace
- Named customer list if the owner attached one

## 3. Sequence of work

1. Scan mail for payments received, renewal notices, and past-due notices in the week.
2. Total collected with source pointers. List renewals in window. List past-due with source.
3. Compare to last week if a memo exists. Do not guess ARR from memory.
4. Draft an internal memo. Do not send customer-facing dunning.
5. Write the memo to /workspace/saas-finance.md.

## 4. How to validate the result

Collected total has source pointers. No refund was issued. No dunning mail was sent. Missing weeks are labeled missing, not backfilled.


## 5. What to return

Weekly memo: collected, renewals, past-due, questions, action log.


## 6. What requires approval

Do not refund. Do not send dunning. Do not change invoices, credits, or tax settings.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
