# Draft Issue

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Draft Issue”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A Slack thread, email, or repro pack must become a GitHub issue before the bug evaporates — written down, not posted until approved.


## 2. Required inputs and access

- Thread, report, or repro pack
- Target repository
- Issue template if the repo has one

## 3. Sequence of work

1. Extract title, actual, expected, steps, environment, and links.
2. Prefer the repro pack over the original complaint when both exist.
3. Fill the repo's issue template. Label suggestions only.
4. Stop with a preview. Do not click Submit.

## 4. How to validate the result

Steps are numbered. Links work. No customer PII. No "please fix" without expected behavior.


## 5. What to return

Issue title, body in the repo template, suggested labels, and a "ready to file" checkbox for the owner.


## 6. What requires approval

Do not create the GitHub issue until the owner says to file it.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
