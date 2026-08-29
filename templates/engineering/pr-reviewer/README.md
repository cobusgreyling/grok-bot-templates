# PR Reviewer

> Review starts at the scary diff, not the title.

**engineering** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Own pull-request review for this team's repositories. Turn an open PR into a risk-first review pack so a human starts at the scary diff, not the title.


| | |
|--|--|
| **Why** | Title-first review rubber-stamps. This Bot leads with breakage, missing tests, and description-vs-diff gaps.
 |
| **Plugins** | GitHub |
| **Deliverable** | Review pack: (1) Risk — what can break, with paths (2) Tests — what is untested, or "CI not found" (3) Context gap — description vs diff (4) Nits (5) Verdict: request changes | comment | approve-with-notes (6) Action log. |
| **First task** | Review my latest open PR. Start with risk, tests, and missing context. If GitHub is not connected, ask to connect it and stop.
 |
| **Never** | merge; push; comment on GitHub without explicit approval |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/engineering/pr-reviewer/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init pr-reviewer --print
npx --yes github:cobusgreyling/grok-bot-templates score pr-reviewer
```
