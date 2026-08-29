# Weekday Inbox

Owner: **inbox-triage**. Skill: `triage-inbox`. Cadence: weekdays 08:30 in the Bot timezone.

Official shape from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations). Confirm: owning Bot, schedule and timezone, input source, expected result, approval boundary, missing-source policy.

## Prompt to paste

> Run triage-inbox for mail since yesterday 08:30 in the Bot timezone. Bucket needs-reply, fyi, newsletter, receipt, ignore. Draft replies only for needs-reply. Flag bills, legal deadlines, and security alerts. Do not send, delete, or unsubscribe.


## Expected result

Bucketed list (needs reply, fyi, newsletter, receipt, ignore) with unsent drafts on needs-reply and a handle-today top five. Nothing sent, deleted, or unsubscribed.


## Approval boundary

Do not send, delete, archive, or unsubscribe. Security-looking mail is never auto-ignored.


## Missing source

If Gmail is not connected or the fetch fails, report the failure and stop. Do not invent messages from memory or from another mailbox on the shared computer.


## Test first

**Test run is mandatory.** A test run performs real work. It can navigate websites, change files, and call connected tools. Use safe inputs. Keep write actions behind approval.

Then open the Bot → **View conversation details** → **Routines**.
