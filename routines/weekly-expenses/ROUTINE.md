# Weekly Expenses

Owner: **expense-manager**. Skill: `reconcile-expenses`. Cadence: Mondays 09:00 in the Bot timezone.

Official shape from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations). Confirm: owning Bot, schedule and timezone, input source, expected result, approval boundary, missing-source policy.

## Prompt to paste

> Run reconcile-expenses for this week. Total the source system first, match receipts, cite policy on every exception, and draft one unsent follow-up per owner. Return the summary and drafts. Do not send messages or change reimbursements.


## Expected result

Weekly summary whose total equals the source (or an explained gap), exception table with policy citations, one unsent follow-up draft per owner. Nothing sent. No reimbursements changed.


## Approval boundary

Do not send follow-ups. Do not change reimbursements. Do not approve spend or pay vendors.


## Missing source

If the signed policy is missing, report the failure and stop. If the expense system is unavailable, say so and do not treat last week's file as this week's total.


## Test first

**Test run is mandatory.** A test run performs real work. It can navigate websites, change files, and call connected tools. Use safe inputs. Keep write actions behind approval.

Then open the Bot → **View conversation details** → **Routines**.
