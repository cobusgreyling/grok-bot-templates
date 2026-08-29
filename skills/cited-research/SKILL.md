# Cited Research

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Cited Research”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A question needs a brief that a skeptic could audit: claims, sources, disagreements, and what was not found.


## 2. Required inputs and access

- The question
- Scope limits (dates, domains, what not to use)
- Preferred primary sources when the owner named them

## 3. Sequence of work

1. Restate the question and the scope. Confirm before a long run if ambiguous.
2. Search for primary sources. Prefer docs, papers, official pages, and filings over recaps.
3. For contested claims, find at least two independent sources or label the claim unverified.
4. Separate facts, inferences, and open questions.
5. List what you could not find. That list is part of the deliverable.

## 4. How to validate the result

Every non-trivial claim has a URL. No unsourced statistics. Disagreements are represented, not averaged away.


## 5. What to return

A brief with Claims, Evidence, Disagreements, Not found, and Recommended next read.


## 6. What requires approval

Do not contact people for interviews. Do not pay for papers or datasets. Do not publish the brief.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
