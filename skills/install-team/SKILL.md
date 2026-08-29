# Install Team

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Install Team”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

The owner wants a named starter team from this catalog stood up as real Grok Bots plus one group, without dumping the whole catalog.


## 2. Required inputs and access

- Team id (eng, sales, success, ops, marketing, product, loop, research, personal, meta)
- Confirmation that week one is L1

## 3. Sequence of work

1. Resolve the team yaml. Never invent extra Bots.
2. Create at most four Bots. Name = profile name. Description = PROFILE.md body fetched from this repo, not paraphrased.
3. Report the union of plugins to connect in Settings → Plugins.
4. Put the new Bots in one group.
5. Paste the group's kickoff as the first group message draft — do not send external messages.

## 4. How to validate the result

Bot count is 2–4. Each description is the catalog PROFILE, not a summary. No Bot has a routine enabled. No connector was authenticated by you pretending to be the owner.


## 5. What to return

Roster table (name, job, plugins), group name, kickoff text, and the first task for the lead Bot.


## 6. What requires approval

Do not send, post, pay, or contact anyone. Do not connect plugins yourself if a browser login or 2FA is required — ask the owner to take over.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
