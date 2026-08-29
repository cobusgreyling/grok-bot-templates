# Nightly Outbound Research

Owner: **sales-outbound**. Skill: `research-accounts`. Cadence: weeknights 18:00 in the Bot timezone.

Official shape from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations). Confirm: owning Bot, schedule and timezone, input source, expected result, approval boundary, missing-source policy.

## Prompt to paste

> Run research-accounts on the named account list. Score against ICP and current intent with URLs, identify up to three contacts, draft email and LinkedIn outreach in the attached style, skip active sequences. Return a review list. Do not send or enroll anyone.


## Expected result

A review list with ICP score, intent evidence, up to three contacts, and DRAFT outreach. Nothing sent. Nobody enrolled.


## Approval boundary

Do not send email or LinkedIn messages. Do not enroll anyone in a sequence. Do not create CRM records unless the owner later names that.


## Missing source

If there is no account list, report the failure and stop. If ICP is undefined, do not invent one — leave the run failed until the owner answers. Do not reuse last night's scores as live intent.


## Test first

**Test run is mandatory.** A test run performs real work. It can navigate websites, change files, and call connected tools. Use safe inputs. Keep write actions behind approval.

Then open the Bot → **View conversation details** → **Routines**.
