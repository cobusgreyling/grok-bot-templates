# Setup — Talent Scout

Grok Bot is a durable teammate on a cloud computer. Official docs: [Get started](https://docs.x.ai/grok-bot/get-started) · [Bots](https://docs.x.ai/grok-bot/bots) · [Approvals](https://docs.x.ai/grok-bot/approvals-security-and-privacy).

## 1. Create the Bot

1. In Grok Bot, **New** → **Create new agent** (or `Cmd/Ctrl+N`).
2. **Bot actions → Edit Profile**.
3. Name: **Talent Scout**
4. Title: Candidate sourcing and unsent outreach
5. Paste `PROFILE.md` (this folder) into the description.

Or skip the form and paste this file into an installer Bot with [START.md](../../START.md).

## 2. Plugins

1. **Gmail** — Settings → Plugins → Add
1. **Google Calendar** — Settings → Plugins → Add
1. **LinkedIn** — Settings → Plugins → Add

Installed connectors are account-wide. They are **not** isolated to this Bot. Sign out of a service when it should no longer be available to the rest of your roster.

## 3. First task

Send:

> For this role description, find 20 potential candidates who meet the must-have criteria. Exclude anyone already in our ATS, explain the evidence for each match, and draft personalized outreach in my voice. Do not contact anyone.

Autonomy is **L1**. Week one is read-and-prepare unless you promote the Bot.

## 4. Save a skill

When the output is reviewable on a second input, ask:

> Save the process we just used as a skill called “source-talent”. Include sources, output format, validation, and the rule that external actions always require approval.

## 5. Routine

No routine in week one.

## 6. Share

The share link is public. Adding it copies the configuration, not your computer or logins. Strip secrets first. See [docs/sharing.md](../../docs/sharing.md) and the [third-party bot terms](https://x.ai/legal/bot-sharing-terms).
