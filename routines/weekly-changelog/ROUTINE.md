# Weekly Changelog

Owner: **changelog**. Skill: `draft-changelog`. Cadence: Fridays 14:00 in the Bot timezone.

Official shape from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations). Confirm: owning Bot, schedule and timezone, input source, expected result, approval boundary, missing-source policy.

## Prompt to paste

> Run draft-changelog for merged PRs since the last tag. Group breaking, added, fixed, internal. Rewrite titles into user language and keep PR numbers as links. Do not tag or publish.


## Expected result

Draft changelog markdown grouped breaking / added / fixed / internal, with PR links, plus a list of PRs omitted as internal. Unpublished. No tag created.


## Approval boundary

Do not publish a GitHub release. Do not tag the repository. Do not edit CHANGELOG.md on main without approval.


## Missing source

If GitHub is not connected, or there is no tag and no previous heading, report the failure and stop. Do not invent PRs or fill with "various improvements".


## Test first

**Test run is mandatory.** A test run performs real work. It can navigate websites, change files, and call connected tools. Use safe inputs. Keep write actions behind approval.

Then open the Bot → **View conversation details** → **Routines**.
