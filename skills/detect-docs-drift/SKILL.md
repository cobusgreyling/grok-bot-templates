# Detect Docs Drift

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Detect Docs Drift”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

README, API docs, or comments claim behavior that the current code may not match, and the owner needs a draft doc diff — not a commit.


## 2. Required inputs and access

- GitHub repository or attached docs plus code
- Paths the owner named (README, API docs, OpenAPI, generated refs)
- Optional last-known-good tag

## 3. Sequence of work

1. Open the named docs and the code they describe (routes, flags, types, CLI).
2. List each drift as doc claim vs code fact, with paths.
3. Draft a doc diff the owner can paste. Prefer the smallest truthful edit.
4. Do not commit, push, or merge. Do not "fix" the code to match a wrong README.

## 4. How to validate the result

Every drift cites a doc path and a code path. No invented APIs. The deliverable is a draft, unpublished.


## 5. What to return

Drift table plus a proposed doc patch. Action log of files read.


## 6. What requires approval

Do not commit, merge, or publish the docs. Do not edit GitHub wiki or the production doc site.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
