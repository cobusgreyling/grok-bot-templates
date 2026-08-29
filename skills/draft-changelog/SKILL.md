# Draft Changelog

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Draft Changelog”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

Merged pull requests since the last tag must become user-facing release notes without Friday archaeology.


## 2. Required inputs and access

- GitHub repo
- Previous tag or changelog heading
- Audience (users vs operators)

## 3. Sequence of work

1. List merged PRs since the last tag. Do not invent PRs.
2. Group as breaking, added, fixed, or internal.
3. Rewrite titles into user language. Keep PR numbers as links.
4. Call out anything that needs a migration note.

## 4. How to validate the result

Every entry maps to a merged PR or commit. No "various improvements" filler. Unpublished.


## 5. What to return

Draft changelog markdown and a list of PRs omitted as internal, for the owner to restore if needed.


## 6. What requires approval

Do not publish a GitHub release or tag. Do not edit CHANGELOG.md on main without approval.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
