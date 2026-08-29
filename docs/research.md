# Research notes (2026-08-29)

Grok Bot is a durable teammate on a **shared cloud computer**, shipped as a macOS/Windows desktop app (and iOS), authenticated with a Cursor account, with Bots, groups, plugins (connectors), skills, routines, Auto Review, and public **Share as Template** links (`x.ai/bot/<id>`).

## Product facts (from docs.x.ai)

- A Bot has a name, a job, a conversation, and working context. Catch-all "General Helper" jobs produce weak memory.
- Description = standing rules. Message = this task.
- Account cap: 50 Bots and group chats combined. A Bot may own 50 routines; 20 recent run records are kept.
- Groups: 2–6 Bots, visible handoffs, `@` mentions. Bot-to-group handoffs are text-only.
- One computer per user account: cookies, files, CLI credentials shared. Separate Bots are not isolation. Duplicate a Bot for **scope** (e.g. one Account Health per region), not for security.
- Share link is public. Copy of config; no computer, no logins, no history. Third-party terms apply.
- Official use cases are all **read-and-prepare first**: Sales Outbound, Talent Scout, Paid Media, Expense Manager, Product Performance, Bug Reproduction, Account Health, Chief of Staff.
- Skills have six fields. Routines need timezone, missing-source policy, and a **test run that performs real work**.
- Consequential actions: send, publish, pay, delete, permissions, production, legal terms — behind approval.

## Landscape the week templates shipped

- **xAI** announced shareable Bot templates. Public IDs look like `https://x.ai/bot/sQDD87Gp6VLT0m99tFpzu`.
- **grokbot.dev** — open directory, CORS `*`, `{generated_at, count, items}` envelope. On this date: **130** shareable templates (personal-heavy: chefs, shoppers, chiefs of staff, plus engineering foundries and routers).
- **bots.new/grok/templates** — 110 named roles (Atlas, Forge, Ledger, Marlowe, Quill, …) as cards with optional Add-to-Grok links.
- **mergisi/awesome-grokbot** — 56 copy-paste profiles, START.md installer, OpenClaw/Hermes convert, CC0.
- **Anil-matcha/awesome-grok-bot** — README list of prompts, thinner on structure.
- **Forge (x.ai/bot/uF_uodOFUz9mdv6XDWE70)** — keyword → recipe, PCTCE method.
- Community "Projects Manager" pattern: one Bot that spawns coder/designer/researcher/writer against Notion as source of truth.

## Gap this repo fills

Directories optimize for **more cards**. Engineering kits (this author's [loop-engineering](https://github.com/cobusgreyling/loop-engineering)) optimize for **spec, score, week-one report-only, CI**. Nobody had applied that to Grok Bot templates yet:

1. A schema that **fails** a persona without a job
2. Autonomy L0–L3 matching official "draft then routine"
3. Skills and routines as artifacts, not bullets in a README
4. Teams as 2–4 Bot DAGs with kickoff text
5. A CLI that prints a paste-ready PROFILE and a score
6. Share-safe by construction (secret scan in CI)

## Sources

- https://docs.x.ai/grok-bot/get-started
- https://docs.x.ai/grok-bot/bots
- https://docs.x.ai/grok-bot/use-cases
- https://docs.x.ai/grok-bot/skills-routines-and-automations
- https://docs.x.ai/grok-bot/computer-and-apps
- https://docs.x.ai/grok-bot/approvals-security-and-privacy
- https://docs.x.ai/grok-bot/chat-and-collaboration
- https://docs.x.ai/grok-bot/files-and-results
- https://docs.x.ai/grok-bot/settings-and-notifications
- https://x.ai/bot
- https://x.ai/legal/bot-sharing-terms
- https://grokbot.dev/api/v1/templates.json
- https://github.com/mergisi/awesome-grokbot
- https://github.com/cobusgreyling/loop-engineering
