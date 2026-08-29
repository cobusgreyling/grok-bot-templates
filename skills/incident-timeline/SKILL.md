# Incident Timeline

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Incident Timeline”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

An incident is in flight or just closed and Slack plus GitHub must become a source-linked timeline a human can use for the write-up.


## 2. Required inputs and access

- Slack incident channel the owner named
- GitHub issues, PRs, deploys, or commits linked in the thread
- Incident start time or the first page message

## 3. Sequence of work

1. Confirm incident name, start time, and approved Slack channel. If any of those are missing, ask and stop.
2. Collect Slack messages and GitHub issues, PRs, and deploys in the window. Do not page anyone.
3. Build a chronological timeline with timestamp, source link, and fact vs hypothesis.
4. Record production actions humans already took. Do not take any.
5. List open questions and what the sources never said.

## 4. How to validate the result

Every timeline row has a source pointer. Hypotheses are labeled. No production toggle, merge, revert, or Slack post happened.


## 5. What to return

Timeline, stated impact only if a source said it, open questions, not-found list, action log of channels and repos scanned.


## 6. What requires approval

Do not toggle production, change alerts, merge, revert, or post to Slack.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
