# Design Bot Template

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Design Bot Template”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

The owner describes a job, a pain, or a keyword and needs a share-safe Grok Bot operating contract that would pass this repository's schema and Bot Ready score, not a cute persona.


## 2. Required inputs and access

- Outcome the Bot must own (one sentence)
- Sources and plugins that actually exist for this owner
- Autonomy target (default L1)
- Approval boundary (what must never happen)

## 3. Sequence of work

1. Parse the outcome. Reject catch-all jobs such as general helper.
2. Diagnose missing sources, missing deliverable shape, hallucination risk, and autonomy drift.
3. Fill every required template.yaml field from SPEC.md.
4. Write PROFILE-ready description text with job, sources, how, deliverable, never-list, first task, no-data policy.
5. Score it mentally against Bot Ready. If under 80, rewrite before showing it.

## 4. How to validate the result

Every required SPEC field is present. approval_never has at least three items including one of send/pay/merge/publish/production. No secrets or internal URLs. First task is runnable on an empty chat.


## 5. What to return

A complete template.yaml (or PROFILE.md) the owner can paste, plus the Bot Ready checklist with pass/fail per item.


## 6. What requires approval

Do not create Bots on the owner's account until they say to create them. Do not enable routines. Do not attach a logo.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
