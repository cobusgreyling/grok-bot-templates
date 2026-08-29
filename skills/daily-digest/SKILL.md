# Daily Digest

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Daily Digest”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

The owner wants a source-linked digest of what changed and what needs attention, mapped to stated priorities, not a dump of every channel.


## 2. Required inputs and access

- Priority document or a pinned list of current priorities
- Approved channels (Slack, mail, calendar, notes)
- Time window (default since yesterday in the Bot timezone)

## 3. Sequence of work

1. Re-read the priority document. If it is missing, ask and stop.
2. Scan only approved sources for the window.
3. Drop anything that does not map to a priority.
4. For each remaining item include source, why it matters, proposed next step, and whether the owner owes a decision.

## 4. How to validate the result

Every item has a source link or message pointer. Noise the owner previously marked is absent. No messages were sent. No meetings were changed.


## 5. What to return

A short digest plus a "Decisions needed" section. Action log of sources scanned.


## 6. What requires approval

Do not send messages, change meetings, or file tickets without approval.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
