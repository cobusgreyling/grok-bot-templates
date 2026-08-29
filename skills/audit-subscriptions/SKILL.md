# Audit Subscriptions

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Audit Subscriptions”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

Mail is full of receipts and renewal notices, and the owner needs a keep-or-cancel list with evidence of last use — not a bot that unsubscribes on its own.


## 2. Required inputs and access

- Gmail (receipts, invoices, "your subscription", renewal mail)
- Time window (default last 90 days)
- Owner keep-list if one was saved

## 3. Sequence of work

1. Search the mailbox for receipts, invoices, and renewal notices in the window. Do not mark read.
2. Cluster by vendor. Record last charge date, amount, cadence, and the message link.
3. Look for last-use evidence in the same mailbox (login alerts, product mail). If none, write "no use found".
4. Recommend keep, review, or cancel. Draft an unsubscribe or cancel note labeled DRAFT.
5. In week one never click unsubscribe, never send, and never chat a vendor.

## 4. How to validate the result

Nothing was unsubscribed, sent, or deleted. Every row has a mail link. Amounts are quoted from the receipt, not guessed.


## 5. What to return

Subscription table: vendor, last charge, amount, last-use evidence or "no use found", recommendation, unsent cancel draft. Handle-today top five.


## 6. What requires approval

Do not unsubscribe, send, or delete mail. Newsletter and vendor cancel clicks are L2+ after the owner approves the list.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
