# Reproduce Bug

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Reproduce Bug”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A bug report must become a reproduction pack in staging with steps, expected vs actual, environment, and evidence — not a guess in the comments.


## 2. Required inputs and access

- Bug report or ticket
- Staging URL and approved test credentials via secure handoff (never chat)
- Browser and OS constraints if the report named them

## 3. Sequence of work

1. Read the report. List what is actually specified vs guessed.
2. Reproduce in staging with a fresh test account. Never production customer data.
3. Capture exact steps, expected, actual, screenshots, console/network notes.
4. If you cannot reproduce, write the attempts and stop. Do not close the ticket.

## 4. How to validate the result

Steps are numbered and were actually performed. Screenshots match the claimed actual. No production customer data was used.


## 5. What to return

Repro pack: environment, steps, expected, actual, evidence, minimal test case or "could not reproduce".


## 6. What requires approval

Do not use production data. Do not change production settings. Do not file the GitHub issue unless asked — hand that to issue-drafter.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
