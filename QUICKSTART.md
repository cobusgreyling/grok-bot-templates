# Quickstart — 5 minutes

You need [Grok Bot](https://x.ai/bot) (desktop app; eligible Cursor / SuperGrok plan). This catalog does not run the Bot for you. It gives you an operating contract to paste.

## Option A — one Bot

```bash
npx @cobusgreyling/grokbot list
npx @cobusgreyling/grokbot init pr-reviewer --print
```

1. In Grok Bot: **New → Create new agent**
2. **Bot actions → Edit Profile**
3. Name `PR Reviewer`. Paste the printed profile into the description
4. Connect **GitHub** under Settings → Plugins if you have it
5. Send the first task at the bottom of the profile
6. Do not enable a routine until two runs look right

## Option B — a team

```bash
npx @cobusgreyling/grokbot init --team eng --out ./eng-bots
```

Create the three Bots from `./eng-bots/*/PROFILE.md`, put them in one group, paste `TEAM.md` kickoff.

## Option C — installer Bot

1. Create a Bot named `Setup`
2. Paste https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md
3. Tap a team
4. Connect the plugins it lists
5. Stay at L1 for a week

## Option D — score a contract you wrote

```bash
npx @cobusgreyling/grokbot new onboard-ledger --category ops
# edit templates/ops/onboard-ledger/template.yaml
npx @cobusgreyling/grokbot score onboard-ledger
npx @cobusgreyling/grokbot validate
```

Ready means **≥ 80** and a declared autonomy level.

## What "week one" means

Read-and-prepare. Drafts, not sends. Official sequence: job in the description → one real task → correct it → save a skill → test a second input → then maybe a routine.

Details: [SPEC.md](./SPEC.md) · [docs/autonomy.md](./docs/autonomy.md) · [docs/safety.md](./docs/safety.md)
