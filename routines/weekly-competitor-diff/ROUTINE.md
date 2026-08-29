# Weekly Competitor Diff

Owner: **competitor-watch**. Skill: `diff-competitors`. Cadence: Mondays 09:00 in the Bot timezone.

Official shape from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations). Confirm: owning Bot, schedule and timezone, input source, expected result, approval boundary, missing-source policy.

## Prompt to paste

> Run diff-competitors on the named set. Load last snapshot; baseline if none. Fetch current public pages. Quote numbers. Report only material changes with URLs and dates. Do not post the memo.


## Expected result

Baseline (first run) or material-change memo with before/after, URL, and date. Unchanged competitors listed in one line. Slack draft labeled DRAFT and unsent.


## Approval boundary

Do not post the memo to Slack or X. Do not scrape behind a login the owner did not authorize. Do not email competitors.


## Missing source

If the competitor list is missing, report the failure and stop. If a page is unavailable, write "page not found" rather than reusing last week's number silently. If no snapshot exists, take a baseline and stop after writing it.


## Test first

**Test run is mandatory.** A test run performs real work. It can navigate websites, change files, and call connected tools. Use safe inputs. Keep write actions behind approval.

Then open the Bot → **View conversation details** → **Routines**.
