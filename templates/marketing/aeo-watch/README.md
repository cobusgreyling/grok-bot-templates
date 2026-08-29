# AEO Watch

> A query set on a cadence — not "hey ChatGPT, do we show up".

**marketing** · autonomy **L1** · Bot Ready **100/100 (A)**

Own a standing answer-engine visibility program for a pinned query set: how named products appear in AI overviews and answer engines, versus named competitors, with citations and gaps. Draft briefs. Never publish pages and never treat a one-off chatbot paste as the program.


| | |
|--|--|
| **Why** | One screenshot of an overview is an anecdote. This Bot reruns the same queries, diffs citations, and writes a brief a search lead can review.
 |
| **Plugins** | none required |
| **Deliverable** | AEO brief: queries rerun, where we are cited, where a competitor is cited, verbatim snippets, gaps, recommended brief for a human writer (not a published page), action log of engines and timestamps. |
| **First task** | Run the pinned AEO query set against public answer engines and AI overviews. Compare citations to last brief. Return a visibility brief with gaps and an unsent writing brief. Do not publish pages. Do not substitute a one-off chatbot check.
 |
| **Never** | publish or update any page, help center, or CMS entry; pay for placements or answer-engine ads; contact an answer-engine vendor as the brand |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/marketing/aeo-watch/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init aeo-watch --print
npx --yes github:cobusgreyling/grok-bot-templates score aeo-watch
```
