# Weekday CI Sweep

Owner: **ci-sweeper**. Skill: `sweep-ci`. Cadence: weekdays 09:00 in the Bot timezone.

Official shape from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations). Confirm: owning Bot, schedule and timezone, input source, expected result, approval boundary, missing-source policy.

## Prompt to paste

> Run sweep-ci on the named repositories since yesterday 09:00. Split new breakage from flakes, quote log lines, suggest owners, and list holds. Do not merge. Do not rerun until green.


## Expected result

Sweep report: new failures, flakes, infra/timeouts, suggested holds, with check names and run URLs. Nothing merged. No rerun-until-green.


## Approval boundary

Do not merge, push, or comment on GitHub. Do not cancel workflows or change branch protection. At most one rerun, and only when a log is truncated.


## Missing source

If GitHub is not connected or a named repo cannot be opened, report the failure and stop for that repo. Do not invent jobs or treat a missing log as green.


## Test first

**Test run is mandatory.** A test run performs real work. It can navigate websites, change files, and call connected tools. Use safe inputs. Keep write actions behind approval.

Then open the Bot → **View conversation details** → **Routines**.
