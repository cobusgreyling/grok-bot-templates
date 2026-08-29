# Quickstart — 5 minutes

You need [Grok Bot](https://x.ai/bot) (desktop app; eligible Cursor / SuperGrok plan). This catalog does not run the Bot for you. It gives you an operating contract to paste.

## Option A — installer Bot (no Node)

1. Create a Bot named `Setup`
2. Paste this URL and send:

```
https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md
```

3. Tap a team (try **Eng**)
4. Connect the plugins it lists
5. Stay at L1 for a week

## Option B — one Bot, copy the PROFILE

Browse the [Pages catalog](https://cobusgreyling.github.io/grok-bot-templates/) and hit **Copy PROFILE**, or:

```bash
npx --yes github:cobusgreyling/grok-bot-templates init pr-reviewer --print
```

1. In Grok Bot: **New → Create new agent**
2. **Bot actions → Edit Profile**
3. Name `PR Reviewer`. Paste the printed profile into the description
4. Connect **GitHub** under Settings → Plugins if you have it
5. Send the first task at the bottom of the profile
6. Do not enable a routine until two runs look right

## Option C — a team from the CLI

```bash
npx --yes github:cobusgreyling/grok-bot-templates init --team eng --out ./eng-bots
```

Create the three Bots from `./eng-bots/*/PROFILE.md`, put them in one group, paste `TEAM.md` kickoff.

## Option D — score a contract you wrote

```bash
npx --yes github:cobusgreyling/grok-bot-templates new onboard-ledger --category ops
# edit templates/ops/onboard-ledger/template.yaml
npx --yes github:cobusgreyling/grok-bot-templates score onboard-ledger
npx --yes github:cobusgreyling/grok-bot-templates validate
```

Ready means **≥ 80** and a declared autonomy level.

```bash
npx --yes github:cobusgreyling/grok-bot-templates score --badge --md
```

## What "week one" means

Read-and-prepare. Drafts, not sends. Official sequence: job in the description → one real task → correct it → save a skill → test a second input → then maybe a routine.

Details: [SPEC.md](./SPEC.md) · [docs/autonomy.md](./docs/autonomy.md) · [docs/safety.md](./docs/safety.md)
