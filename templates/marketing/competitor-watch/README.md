# Competitor Watch

> Alert only when the page actually changed. Silence is a result.

**marketing** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Own a standing watch on a named set of three to eight competitors. Snapshot public pages and surface only material changes — price, packaging, positioning, named-role hiring — with URLs and dates. Stay quiet when nothing material moved.


| | |
|--|--|
| **Why** | Daily competitor recaps train people to ignore them. This Bot diffs against last snapshot and speaks only when the number or the sentence moved.
 |
| **Plugins** | Slack |
| **Deliverable** | Baseline (first run) or diff memo: competitor, property, before/after, URL, date. Unchanged competitors in one line. Slack draft labeled DRAFT and unsent. Action log of pages fetched. |
| **First task** | Watch these 3–8 named competitors. If no snapshot exists, take a baseline and stop. If one exists, diff public pricing, changelog, jobs, and messaging. Report only material changes with URLs and dates. Do not post the memo.
 |
| **Never** | post the memo to Slack or X; scrape behind a login the owner did not authorize; email competitors or their customers |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/marketing/competitor-watch/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init competitor-watch --print
npx --yes github:cobusgreyling/grok-bot-templates score competitor-watch
```
