# Weekly Account Health

Owner: **account-health**. Skill: `rank-account-health`. Cadence: Mondays 08:30 in the Bot timezone.

Official shape from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations). Confirm: owning Bot, schedule and timezone, input source, expected result, approval boundary, missing-source policy.

## Prompt to paste

> Run rank-account-health on the named portfolio. Combine current usage, support, renewal timing, and stakeholder activity against saved thresholds. Return the ranked watch list. Do not contact customers or edit the CRM.


## Expected result

A ranked watch list with evidence links, why it matters, a suggested next step, and a needs-human flag. Expansion separate from churn. No customer contact. CRM untouched.


## Approval boundary

Do not contact customers. Do not edit the CRM. Do not issue refunds or credits. Internal Slack posting waits for in-chat approval.


## Missing source

If the account list is missing, report the failure and stop. If a source is down, name it and continue with what you have — never substitute last week's file silently.


## Test first

**Test run is mandatory.** A test run performs real work. It can navigate websites, change files, and call connected tools. Use safe inputs. Keep write actions behind approval.

Then open the Bot → **View conversation details** → **Routines**.
