# Weekday CoS Digest

Owner: **chief-of-staff**. Skill: `daily-digest`. Cadence: weekdays 08:00 in the Bot timezone.

Official shape from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations). Confirm: owning Bot, schedule and timezone, input source, expected result, approval boundary, missing-source policy.

## Prompt to paste

> Run daily-digest for the window since yesterday 08:00 in the Bot timezone. Return only items that map to the pinned priorities. For each item include source, why it matters, proposed next step, and whether I owe a decision. Do not send messages or change meetings.


## Expected result

A source-linked digest of items that map to stated priorities, plus a Decisions needed section. Nothing sent. No meetings changed.


## Approval boundary

Do not send messages, change meetings, file tickets, or invite people. Drafts stay in this conversation until the owner asks to post.


## Missing source

If the priority document is missing, report the failure and stop. If a named channel is unavailable, list it in the action log and continue with the rest. Never reuse yesterday's digest as if it were current.


## Test first

**Test run is mandatory.** A test run performs real work. It can navigate websites, change files, and call connected tools. Use safe inputs. Keep write actions behind approval.

Then open the Bot → **View conversation details** → **Routines**.
