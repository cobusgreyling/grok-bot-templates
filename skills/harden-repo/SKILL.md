# Harden Repo

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Harden Repo”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A repository needs a security and hygiene review that recommends issues and PRs without touching main or branch protection.


## 2. Required inputs and access

- GitHub repository
- Org or repo settings the connector can read
- Optional prior harden notes in /workspace/repo-hardener/

## 3. Sequence of work

1. Read default branch, protection summary, CODEOWNERS, secret scanning, Dependabot, and workflow permissions as the connector exposes them.
2. List concrete gaps with paths or setting names. Separate facts (what is off) from inferences (what an attacker could do).
3. Draft recommended issues and PR titles/bodies. Do not open them.
4. Never push to main. Never change branch protection, required reviewers, or org policies.

## 4. How to validate the result

Each finding cites a setting, file, or workflow. No invented scanners. Main is untouched. Branch protection is unchanged.


## 5. What to return

Hygiene pack: Findings, Recommended issues, Recommended PRs, Out of scope, Action log.


## 6. What requires approval

Do not push, merge, publish, or change production. Do not edit branch protection or org security settings. Filing issues waits for the owner.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
