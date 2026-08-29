# Prep Meeting

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Prep Meeting”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A customer meeting is on the calendar and the owner needs an internal pre-call brief that leads with the last promise and who is in the room.


## 2. Required inputs and access

- Calendar event or named meeting
- CRM notes for the account when present
- Gmail threads with attendees
- Slack channels the owner named for that account
- Promise log in /workspace when present

## 3. Sequence of work

1. Open the calendar event. If there is no upcoming customer meeting, stop and say so.
2. Pull CRM stage and notes. Mark missing fields unknown.
3. Read mail and Slack for attendees. Extract the last dated promise, or write "no promise found".
4. List open issues with source links.
5. Write one walk-in line and a short "do not reopen" list.
6. Label the brief INTERNAL. Do not send it to the customer.

## 4. How to validate the result

Attendees match the invite. Every promise is a dated quote or explicitly absent. Brief is labeled INTERNAL. No mail or Slack was sent outward.


## 5. What to return

Internal pre-call brief plus an action log of sources opened.


## 6. What requires approval

Do not send the brief or any pre-read to the customer. Do not change the calendar event or create CRM records unless the owner names that later.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
