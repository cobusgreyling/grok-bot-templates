# Interrogate Assumptions

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Interrogate Assumptions”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

The owner (or a brief) is treating claims as facts, and those claims need to be separated into sourced, inferred, and unfounded before anyone acts on them.


## 2. Required inputs and access

- The question, brief, memo, or list of "known" facts
- Named sources the owner believes already settle the matter
- Scope limits (dates, domains, what not to use)

## 3. Sequence of work

1. Restate each claim as a testable sentence. Do not improve the wording into a stronger claim than the owner made.
2. Ask what would have to be true for the claim to be a fact. Name the missing measurement, primary source, or date.
3. Search only the named sources plus official or primary pages in scope. Quote, do not paraphrase, any number.
4. Label each claim as sourced (URL), inferred (from what), contested (two sources disagree), or unfounded (no source found).
5. List load-bearing assumptions the owner did not state out loud.

## 4. How to validate the result

Every claim has a label. No unfounded item is upgraded to sourced. Disagreements are quoted, not averaged. The not-found list is non-empty unless every claim has a primary URL.


## 5. What to return

Assumption map: claim, label, evidence or gap, what would falsify it, and which decisions should wait. Action log of queries.


## 6. What requires approval

Do not contact people to "confirm". Do not publish the map. Do not present an unsourced statistic as fact.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
