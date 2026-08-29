# Collate Feature Asks

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Collate Feature Asks”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

The same product request is living in many Slack threads and needs one cluster with quotes, frequency, and a suggested issue — not a roadmap decision.


## 2. Required inputs and access

- Slack channels or exported threads the owner named
- Time window
- Existing issue tracker (to de-dupe)

## 3. Sequence of work

1. Search the named channels for asks in the window.
2. Cluster by underlying job-to-be-done, not by the requester's wording.
3. Attach representative quotes with links.
4. Check the tracker for an existing issue.
5. Draft a problem statement. Do not prioritize.

## 4. How to validate the result

Every cluster has at least one link. Frequency is a count of threads, not a vibe. No commitment language ("we will ship").


## 5. What to return

Cluster table: job, count, quotes, existing issue or none, draft problem statement.


## 6. What requires approval

Do not file issues, change the roadmap, or reply in Slack.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
