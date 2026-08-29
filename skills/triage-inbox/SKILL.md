# Triage Inbox

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Triage Inbox”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

An inbox needs a sorted work list and draft replies so the owner can reach inbox zero without living in Gmail.


## 2. Required inputs and access

- Gmail (or named mailbox) connector
- VIP list and ignore list if the owner saved them
- Time window (default since last run)

## 3. Sequence of work

1. Fetch messages in the window. Do not mark read unless asked.
2. Bucket into needs reply, fyi, newsletter, receipt, or ignore.
3. Draft replies only for needs-reply, in the owner's voice if examples exist.
4. Flag anything that looks like a bill, legal deadline, or security alert.

## 4. How to validate the result

No mail was sent. No archive/delete unless explicitly approved. Security-looking messages are never auto-ignored.


## 5. What to return

Bucketed list with draft replies attached to needs-reply items, plus a "handle today" top five.


## 6. What requires approval

Do not send, delete, or unsubscribe without approval. Newsletter unsubscribe is L2+ and listed separately.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
