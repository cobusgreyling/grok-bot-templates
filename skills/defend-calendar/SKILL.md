# Defend Calendar

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Defend Calendar”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

Deep-work blocks are being eaten by meetings, and the owner needs a protection pack: conflict map and unsent decline drafts, calendar left untouched.


## 2. Required inputs and access

- Google Calendar for the named window
- Pinned deep-work hours or a priorities note
- Slack (or mail) where the meeting request arrived, if connected

## 3. Sequence of work

1. Load the calendar window and the pinned deep-work hours. If hours are missing, ask once and stop.
2. List events that overlap a deep-work block or stack more than the owner's stated meeting cap.
3. For each conflict, draft a decline or reschedule note in the owner's voice. Label it DRAFT. Do not send.
4. Propose a hold the owner could accept. Do not create, move, or delete events.
5. Flag anything that looks like a customer, legal, or incident meeting so it is not auto-declined in a draft.

## 4. How to validate the result

No event was created, moved, or deleted. Every draft names the event and the block it would protect. Customer/legal/incident items are called out, not declined by default.


## 5. What to return

Block map, conflict table, unsent decline drafts, and a "leave these alone" list. Action log of calendars scanned.


## 6. What requires approval

Do not change meetings, send declines, or invite anyone. Do not decline customer, legal, or incident events without asking.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
