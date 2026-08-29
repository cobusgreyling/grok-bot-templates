# Review PR Risk

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Review PR Risk”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

An open pull request needs a review that starts with what can break, what is untested, and what the description promised but the diff did not do.


## 2. Required inputs and access

- GitHub connector or a pasted PR URL
- Repository access on the shared computer if already cloned
- CI logs linked from the PR when present

## 3. Sequence of work

1. Open the PR. If you cannot, stop and say so.
2. Read the description, the diff, and CI — in that order.
3. List breakage risk with file paths.
4. List untested paths. If CI is missing, write "CI not found" rather than "tests look fine".
5. Diff the description against the diff (context gap).
6. Nits last. Verdict is one of request changes, comment, or approve-with-notes.

## 4. How to validate the result

Every risk cites a path. No invented files. No coverage percentages unless they appear in CI output. Facts and inferences are labeled.


## 5. What to return

A review pack with Risk, Tests, Context gap, Nits, Verdict, Action log. Not posted as a GitHub comment unless approved.


## 6. What requires approval

Never merge, push, comment on GitHub, request reviewers, or change status checks without explicit in-chat approval.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
