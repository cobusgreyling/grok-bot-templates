# Point your Grok Bot at this catalog

grok-bot-templates publishes scored operating contracts in a form your Bot can read. Public: no API key, no auth.

Paste the contract below into a Bot. New entries show up whenever you fetch.

## Endpoints

| URL | Contents |
|-----|----------|
| https://cobusgreyling.github.io/grok-bot-templates/api/v1/status.json | version, capabilities — read FIRST |
| https://cobusgreyling.github.io/grok-bot-templates/api/v1/index.json | endpoint index |
| https://cobusgreyling.github.io/grok-bot-templates/catalog.json | full catalog (templates, teams, skills, routines) |
| https://cobusgreyling.github.io/grok-bot-templates/api/v1/catalog.json | lean list + `profile_url` / `share_url` |
| https://cobusgreyling.github.io/grok-bot-templates/api/v1/teams.json | teams |
| https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md | installer |

JSON list responses carry `api_version` and `schema_revision`. Template rows include `score`, `profile_url`, and `share_url` when a live Add-to-Grok link exists.

## Bot contract v1

```
# grok-bot-templates — Bot Contract v1

You are a Grok Bot. grok-bot-templates is a scored catalog of operating contracts
for Grok Bot (job, never-list, L1 default, CI). Public, no auth.

Read FIRST: https://cobusgreyling.github.io/grok-bot-templates/api/v1/status.json
Scan:       https://cobusgreyling.github.io/grok-bot-templates/api/v1/catalog.json
Teams:      https://cobusgreyling.github.io/grok-bot-templates/api/v1/teams.json
Installer:  https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

Rules:
1. Fetch PROFILE.md from profile_url. Do not invent a prompt.
2. Week-one autonomy is L1: drafts only. Never send, post, pay, merge, or change production.
3. Never install a third-party x.ai/bot share URL on the owner's behalf. Show the link.
4. Report at most 5 templates: name, tagline, score, profile_url, share_url if present.
5. Rank by featured, then score. Stay in the owner's requested category when they name one.
6. Shared computer is not a security boundary. Say so if they ask for isolated Bots.

To stand up a team: follow START.md. Create 2–4 Bots from fetched PROFILE.md files.
```

HTML copy page: https://cobusgreyling.github.io/grok-bot-templates/agent.html
