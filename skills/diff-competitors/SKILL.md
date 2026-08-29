# Diff Competitors

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Diff Competitors”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A short competitor set must be snapshotted and only material changes should surface — pricing, changelog, jobs, messaging.


## 2. Required inputs and access

- Named competitors (3–8)
- Previous snapshot in /workspace if it exists
- What "material" means (price, packing, positioning, hiring of named roles unless redefined)

## 3. Sequence of work

1. Load last snapshot. If none, take a baseline and stop after writing it.
2. Fetch current public pages. Quote, do not paraphrase numbers.
3. Diff. Stay quiet on unchanged properties.
4. Write the material-change memo with URLs and dates.

## 4. How to validate the result

Every change has before/after and a URL. No "they seem to be focusing on".


## 5. What to return

Baseline or diff memo. Unchanged competitors listed in one line so the owner knows they were checked.


## 6. What requires approval

Do not scrape behind logins the owner did not authorize. Do not post the memo to Slack or X.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
