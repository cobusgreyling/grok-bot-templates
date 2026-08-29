# Recommend Media Realloc

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Recommend Media Realloc”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

Current paid-media spend and performance must be compared with monthly budget and target CAC, then turned into unsent realloc recommendations and a Slack draft.


## 2. Required inputs and access

- Advertising platform export or connector
- Analytics the owner named
- Monthly budget spreadsheet in Google Drive
- Pinned target CAC

## 3. Sequence of work

1. Load budget spreadsheet and target CAC. If either is missing, ask and stop.
2. Pull current spend and performance by campaign. If a platform is down, name it; do not reuse last week's file silently.
3. Reconcile totals to the spreadsheet.
4. Recommend hold / shift / stop with before/after numbers.
5. Draft a Slack update labeled DRAFT. Do not change budgets. Do not send.

## 4. How to validate the result

Totals reconcile to the spreadsheet. Every recommendation has supporting numbers. No campaign control was touched. Slack was not sent.


## 5. What to return

Realloc memo, table of spend vs budget vs CAC, Slack DRAFT, action log.


## 6. What requires approval

Do not change budgets, bids, or campaign status. Do not send the Slack message. Do not create or pause ads. Do not spend or move money.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
