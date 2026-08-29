# Draft Security Answers

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Draft Security Answers”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A vendor security questionnaire needs draft answers drawn from a source-of-truth pack — the form stays unsubmitted.


## 2. Required inputs and access

- The questionnaire file or pasted questions
- Source-of-truth pack on Google Drive or Notion
- Last submitted answers if the owner attached them

## 3. Sequence of work

1. Inventory questions and group them by topic.
2. For each question, find the matching pack section, quote it, and draft an answer.
3. Mark unanswered where the pack is silent. Do not invent controls.
4. Flag contradictions between the pack and last submitted answers.
5. Return a draft workbook. Do not submit the form or email the vendor.

## 4. How to validate the result

Every drafted answer cites a pack section or doc title. Unanswered questions are listed. The form was not submitted.


## 5. What to return

Draft answer table, unanswered list, contradiction list, action log of pack files read.


## 6. What requires approval

Do not submit the questionnaire. Do not attest. Do not email the vendor the answers.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
