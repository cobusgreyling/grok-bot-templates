# Draft Newsletter

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Draft Newsletter”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A weekly issue must be collated from links and notes the owner already saved, and left unsent.


## 2. Required inputs and access

- Saved links and notes (Google Docs, a Gmail label, /workspace)
- Prior issues for voice
- Working title if the owner named one

## 3. Sequence of work

1. Open the saved pile. If it is empty or missing, say so and stop. Do not browse the open web to pad.
2. Drop dead links and duplicates into a skipped list.
3. Draft sections that cite each remaining item.
4. Match attached prior-issue voice. Keep length honest to the pile.
5. Leave a Google Doc draft unpublished. Do not send Gmail.

## 4. How to validate the result

Every used item has a citation. Skipped items are listed. No send, no public Doc share, no list change.


## 5. What to return

Unsent issue with title, cited sections, skipped list, word count, and action log.


## 6. What requires approval

Do not send the newsletter. Do not schedule a send. Do not publish the Google Doc. Do not add subscribers.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
