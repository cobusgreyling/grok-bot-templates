# Remix Content

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Remix Content”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

One source draft must become review-ready social and email variants that stay unpublished.


## 2. Required inputs and access

- Source draft (Notion, chat, or attached file)
- Brand voice examples if the owner attached them
- Named channels (default X, LinkedIn, email, short page)

## 3. Sequence of work

1. Read the source. If it is missing, ask and stop.
2. Extract claims. Do not add statistics the source does not contain.
3. Write one variant per named channel, inside that channel's limits.
4. Map each variant sentence back to a source claim.
5. Label every variant DRAFT. Do not publish, schedule, or send.

## 4. How to validate the result

Every variant is labeled DRAFT. Every claim traces to the source. Nothing was posted, scheduled, or mailed.


## 5. What to return

Remix pack with source claims, per-channel DRAFT variants, character counts, and an action log.


## 6. What requires approval

Do not publish or schedule. Do not post to X, LinkedIn, Slack, or a CMS. Do not send the email variant. Do not edit the live source page unless named.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
