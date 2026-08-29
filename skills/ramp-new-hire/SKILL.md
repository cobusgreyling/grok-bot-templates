# Ramp New Hire

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Ramp New Hire”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A named new hire starts soon and needs a first-week plan with owners and calendar holds as drafts — invites stay unsent.


## 2. Required inputs and access

- Hire name, role, start date, and manager
- Team roster or org notes the owner attached
- Google Calendar and approved Slack channels

## 3. Sequence of work

1. Confirm name, start date, role, and manager. If any are missing, ask and stop.
2. Draft a day-by-day first-week plan with session, owner, purpose, and the Slack or doc they need.
3. Draft calendar holds for each session. Do not invite anyone.
4. Build a share checklist (channels, docs). Do not send Slack DMs or channel posts.
5. Write the plan to /workspace/new-hire-ramp.md.

## 4. How to validate the result

Every session has a named owner. No invites were sent. No Slack messages were sent. Unknown owners are labeled unknown, not filled with the manager.


## 5. What to return

First-week plan, draft holds, onboarding checklist, action log.


## 6. What requires approval

Do not send calendar invites. Do not message the hire or the team. Do not create accounts or grant access.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
