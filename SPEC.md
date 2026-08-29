# Grok Bot Template Contract

This repository treats a Grok Bot template as an **operating contract**, not a persona.

A Bot is a durable AI teammate with a name, a job, its own conversation, and working context that develops over time. Official definition: [Create and manage Bots](https://docs.x.ai/grok-bot/bots).

## Why a contract

Grok Bot can use a browser, connectors, files, and a shared cloud computer. Shared Bots are public copies of configuration. A good template is therefore:

1. **One job** — a repeatable outcome, not a category of questions
2. **Named sources** — connectors or sites, not "the internet"
3. **A reviewable deliverable** — headings, links, action log
4. **A standing approval boundary** — never-do lives in the description
5. **A first task** — something that produces a result on an empty chat
6. **A no-data policy** — missing source ≠ invented source
7. **Share-safe** — no secrets, customer data, or internal URLs

Week one is **L1 Draft** unless the owner promotes the Bot. That is the same discipline as loop-engineering's report-only week.

## Autonomy

| Level | Name | Allowed | Forbidden until promoted |
|-------|------|---------|--------------------------|
| **L0** | Observe | Read, report | Sendable drafts |
| **L1** | Draft | Review-ready artifacts | Send, post, pay, merge, publish, production changes |
| **L2** | Approved action | Named writes after in-chat approval | Anything not named |
| **L3** | Scheduled | Routine runs the skill | Writes still follow `approval_never` unless the routine names an exception |

Official sequence ([Use cases](https://docs.x.ai/grok-bot/use-cases)):

1. Put the job, sources, output format, and standing boundaries in the description
2. Run one real task with a safe scope
3. Correct until it is reviewable
4. Save the process as a skill
5. Test on a second input
6. Create a routine only when retries and failure cases are defined
7. Keep consequential external actions behind approval

## Files

Every template lives at `templates/<category>/<id>/`:

| File | Role |
|------|------|
| `template.yaml` | Source of truth. Validated by `schema/template.schema.json`. |
| `PROFILE.md` | Paste into **Bot actions → Edit Profile**. Generated from YAML. |
| `SETUP.md` | Plugins, first task, skill, routine. Generated. |
| `README.md` | Catalog page. Generated. |
| `examples/first-run.md` | Realistic artifact. Generated from `example_first_run`. |

Do not hand-edit generated markdown. Change YAML, then `npm run render`.

## YAML fields

See `schema/template.schema.json`. Required:

- `id` — kebab-case, matches folder name
- `name` — the Bot's name (2–48 chars)
- `title` — job title, not a vibe
- `category` — one of the 12 catalog categories
- `job` — ≥60 characters, operational, not "general helper"
- `tagline` / `why`
- `autonomy` — `L0`–`L3`
- `plugins` — Settings → Plugins names, or `[]`
- `sources` — where truth lives
- `deliverable` — what a human reviews
- `approval_never` — ≥3 standing refusals
- `first_task` — the empty-chat default
- `no_data` — missing/stale policy
- `working_style` — ≥4 how-not-vibe bullets
- `never` — extra anti-patterns
- `share_safe: true`

Optional: `soul`, `skills`, `routine`, `handoffs`, `example_first_run`, `official_use_case`, `featured`.

## Skills

A skill is a reusable method. Official six fields ([Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)):

1. When to use it
2. Required inputs and access
3. Sequence of work
4. How to validate the result
5. What to return
6. What requires approval

Stored as `skills/<id>/skill.yaml`. Templates reference skills by id.

## Routines

A routine tells **one** Bot when to run a workflow. Required: owner, cadence, skill, expected result, approval boundary, missing-source policy, `test_first: true`.

Official: background routines can run while the laptop is closed. Test run performs real work. Broad listeners ("every new message") are forbidden.

## Teams

A team is 2–6 Bots plus a group kickoff. Max 4 is the default for installer bots — an account can have up to 50 Bots and group chats combined, but a small roster builds better context.

Lead Bot is listed in `bots`. Group kickoff uses `@Name` mentions and names the shared outcome. Handoffs are visible in the group; do not use extra Bots as a security boundary. All Bots share one computer.

## Bot Ready score

`grokbot score` is 100 points:

| Check | Points |
|-------|--------|
| Job (not a catch-all) | 10 |
| Named sources | 10 |
| Approval never-list | 15 |
| Reviewable deliverable | 10 |
| First task | 10 |
| Named skill | 10 |
| No-data policy | 5 |
| Autonomy declared | 5 |
| Example first-run | 5 |
| Routine discipline | 5 |
| Share-safe | 10 |
| Working style | 5 |

**Ready** means ≥80 and a declared autonomy level. Catalog CI fails if any stable template is not ready.

## Description vs message

From official docs:

- **Description** — rules that remain true ("Never send external messages without approval.")
- **Message** — this task ("Draft follow-ups for these twelve accounts.")

Templates encode description-level rules. First-task text is the only message we prescribe.

## Shared computer

Every Bot on an account uses the same cloud computer: cookies, files, CLI credentials. Separate Bots are **not** a security boundary. `/workspace/<id>/` is the convention for durable files.

## Sharing

A public share link copies identity, description, skills, and routines. It does not copy computer, logins, or history. Strip API keys, internal URLs, and customer data before sharing. Recipients accept the [third-party bot terms](https://x.ai/legal/bot-sharing-terms).

This catalog is designed so every template is already share-safe.

## What this catalog is not

- Not xAI official. Not affiliated.
- Not a dump of `x.ai/bot/<id>` share links (see grokbot.dev for those).
- Not a persona pack. Cute names without a job fail validation.
- Not permission to unattended production changes.

## Commands

```bash
npx @cobusgreyling/grokbot list
npx @cobusgreyling/grokbot init pr-reviewer --print
npx @cobusgreyling/grokbot score pr-reviewer
npx @cobusgreyling/grokbot validate
npx @cobusgreyling/grokbot doctor
npx @cobusgreyling/grokbot init --team eng --out ./eng-bots
```
