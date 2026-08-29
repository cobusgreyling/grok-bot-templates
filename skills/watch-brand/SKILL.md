# Watch Brand

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Watch Brand”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

The owner needs a reading digest of brand, product, and executive mentions from approved Slack channels and X — not a reply thread.


## 2. Required inputs and access

- Pinned term list (brand, product, executives)
- Approved Slack channels
- X plugin access
- Ignore list if the owner saved one
- Time window (default since last run)

## 3. Sequence of work

1. Re-read the term list and ignore list. If terms or channels are missing, ask and stop.
2. Scan only approved Slack channels and X for the window.
3. Quote each mention. Bucket product / press / support / noise.
4. Flag "human should look" for support, legal, or press-level items only.
5. Dedup repeated URLs. Do not reply, like, or repost.

## 4. How to validate the result

Every item has a source link or message pointer. Unapproved channels were not scanned. No replies, likes, or posts were made.


## 5. What to return

Mention digest with buckets, human-look flags, and an action log of sources scanned.


## 6. What requires approval

Do not reply on X or Slack. Do not like, repost, or follow. Do not send mail to authors. Do not post a brand statement.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
