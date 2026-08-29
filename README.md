<p align="center">
  <img src="assets/header.jpg" alt="Templates for Grok Bot" width="100%" />
</p>

# Templates for Grok Bot

[![CI](https://github.com/cobusgreyling/grok-bot-templates/actions/workflows/ci.yml/badge.svg)](https://github.com/cobusgreyling/grok-bot-templates/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](package.json)
[![Docs](https://img.shields.io/badge/docs-GitHub%20Pages-blue)](https://cobusgreyling.github.io/grok-bot-templates/)

**Stop pasting vibes. Design the Bot. Get a score.**

Operating contracts for [Grok Bot](https://x.ai/bot) — xAI's durable AI teammate — with a spec, a Bot Ready score, teams, skills, routines, and a CLI.

Companion in spirit to [loop-engineering](https://github.com/cobusgreyling/loop-engineering) (inner loops) and [outerloop](https://github.com/cobusgreyling/outerloop) (evidence → verdict). This catalog is the **job → boundary → skill → routine → team** kit for Grok Bot.

> Not affiliated with xAI. Grok Bot is a product of xAI / Cursor. Templates here are contracts you paste into **your** account.

## The loop in 60 seconds

```
Job → Boundary → Skill → Routine → Team
who   never      how     when      handoff
```

A Bot is a durable teammate with a name, a job, a conversation, and working context. Official docs: [Get started](https://docs.x.ai/grok-bot/get-started) · [Bots](https://docs.x.ai/grok-bot/bots) · [Use cases](https://docs.x.ai/grok-bot/use-cases).

Week one is **L1 Draft** — review-ready artifacts, no send/post/pay/merge/production. Same discipline as loop-engineering's report-only week.

→ [SPEC.md](./SPEC.md) (binding) · [Quickstart](./QUICKSTART.md) · [What do you want to do?](./docs/jobs.md) · [vs alternatives](./docs/vs-alternatives.md) · [Research](./docs/research.md)

## Try it now

```bash
npx github:cobusgreyling/grok-bot-templates list
npx github:cobusgreyling/grok-bot-templates init pr-reviewer --print
npx github:cobusgreyling/grok-bot-templates score pr-reviewer
npx github:cobusgreyling/grok-bot-templates init --team eng --out ./eng-bots
```

Or clone:

```bash
git clone https://github.com/cobusgreyling/grok-bot-templates.git
cd grok-bot-templates && npm install && npm run ci
npx grokbot list
```

Paste the printed profile into **Bot actions → Edit Profile**. Connect the plugins it names. Send the first task. Do not enable a routine until two runs look right.

### Installer Bot (no CLI)

1. Create a Bot named **Setup**
2. Paste [START.md](https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md)
3. Tap a team. Setup creates 2–4 Bots from fetched PROFILE.md files — it does not invent prompts
4. Connect Settings → Plugins. Stay at L1

## Choose a door

| Persona | Start |
|---------|--------|
| **I have Grok Bot open** | [QUICKSTART](./QUICKSTART.md) or START.md |
| **I want a team** | `npx grokbot init --team eng` · [teams/](./teams/) |
| **I want to write a Bot** | `npx grokbot new my-job --category ops` · [authoring](./docs/authoring.md) |
| **I want to convert one** | [convert/](./convert/) |
| **I want to share one** | [sanitizer](./templates/meta/sanitizer/) · [sharing](./docs/sharing.md) |

## Autonomy

| Level | Name | Week one |
|-------|------|----------|
| **L0** | Observe | Read, report |
| **L1** | Draft | **Default.** Review-ready artifacts |
| **L2** | Approved action | Named writes after in-chat approval |
| **L3** | Scheduled | Routine + missing-source policy + test run |

→ [docs/autonomy.md](./docs/autonomy.md)

## Bot Ready score

`grokbot score <id>` is 100 points: job, sources, never-list, deliverable, first task, skill, no-data, autonomy, example, routine discipline, share-safe, working style.

**Ready** means ≥ 80. CI fails a stable template under that line.

## Catalog

**49 templates · 10 teams · 47 skills · 8 routines · 12 patterns.** All stable templates score **100/100** Bot Ready.

Generated from `template.yaml`. Browse on [GitHub Pages](https://cobusgreyling.github.io/grok-bot-templates/) or:

```bash
npx grokbot list
npx grokbot list --category engineering --featured
npx grokbot search "never send"
```

Official-shaped jobs (from xAI use cases) live alongside originals (Foundry, Router, Evidence Packager, Loop team).

## CLI essentials

| Command | Purpose |
|---------|---------|
| `list` | Catalog |
| `show <id>` | One contract |
| `init <id> --print` | Paste-ready PROFILE |
| `init --team <id>` | Roster + kickoff |
| `score` | Bot Ready |
| `validate` / `doctor` | Schema, secrets, drift |
| `start` | Print START.md |
| `new` | Scaffold a stub |

## Progressive adoption

| Level | What you get | Docs |
|-------|--------------|------|
| **1 — One Bot** | PROFILE + first task | [anatomy](./docs/anatomy.md) |
| **2 — Skill** | Six official fields | [SPEC](./SPEC.md) |
| **3 — Team** | 2–4 Bots, visible handoffs | [chat docs](https://docs.x.ai/grok-bot/chat-and-collaboration) |
| **4 — Routine** | After two good runs + test run | [skills & routines](https://docs.x.ai/grok-bot/skills-routines-and-automations) |

## Safety

Shared computer. Shared plugins. Share links are public. This catalog is share-safe by construction and scanned in CI.

→ [docs/safety.md](./docs/safety.md) · [SECURITY.md](./SECURITY.md)

## Status

**v1.0.0** — first public catalog.

→ [CHANGELOG.md](./CHANGELOG.md) · [ROADMAP.md](./ROADMAP.md)

## Development

```bash
git clone https://github.com/cobusgreyling/grok-bot-templates.git
cd grok-bot-templates
npm install
npm run ci
```

→ [CONTRIBUTING.md](./CONTRIBUTING.md) · [Code of Conduct](./CODE_OF_CONDUCT.md)

## Sources

- [Grok Bot docs](https://docs.x.ai/grok-bot/get-started)
- [Official use cases](https://docs.x.ai/grok-bot/use-cases)
- [Research notes](./docs/research.md)
- [loop-engineering](https://github.com/cobusgreyling/loop-engineering) (quality bar)

## License

MIT © 2026 Cobus Greyling
