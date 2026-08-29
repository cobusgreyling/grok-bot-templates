# Garden Memory

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Garden Memory”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A Bot (this one or another) is acting on stale preferences or invented standing facts, and the owner wants memory corrected without wiping the role.


## 2. Required inputs and access

- The stale claim the Bot keeps using
- The source of truth that contradicts it
- Which Bot owns the memory

## 3. Sequence of work

1. Quote the stale claim and the contradicting source.
2. Propose the corrected standing fact in description-ready language.
3. List anything that should be forgotten vs updated vs moved to a source system.
4. Ask the owner to confirm. Then, only if they own this Bot, update the description.

## 4. How to validate the result

Corrections cite a source. You did not delete unrelated boundaries. Changing facts were not stored as memory — they were pointed at the source system.


## 5. What to return

Diff of proposed description changes and a "do not remember" list.


## 6. What requires approval

Do not edit another Bot's description without the owner asking. Do not scrape private conversations for gossip.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
