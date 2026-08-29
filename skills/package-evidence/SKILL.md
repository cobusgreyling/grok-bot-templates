# Package Evidence

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Package Evidence”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

An agent or Bot run finished and a human needs an evidence pack before a ship/block verdict — what happened, what was verified, what was not.


## 2. Required inputs and access

- Run notes, logs, diffs, or conversation
- The original request and constraints
- Test or review output when it exists

## 3. Sequence of work

1. Restate the request and the claimed outcome.
2. Collect artifacts that actually exist (links, files, command output).
3. Mark each claim verified / unverified / contradicted.
4. List residual risk and what a human still has to look at.
5. Do not issue the verdict. That is the human's job.

## 4. How to validate the result

No claim is marked verified without an artifact pointer. Missing tests are listed as missing, not implied by a green story.


## 5. What to return

Evidence pack: Request, Artifacts, Verified, Unverified, Residual risk, Questions for the verdict.


## 6. What requires approval

Do not merge, deploy, or tag a release. Do not write the human's rationale for them.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
