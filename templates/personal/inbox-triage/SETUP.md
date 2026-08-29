# Setup — Inbox Triage

Grok Bot is a durable teammate on a cloud computer. Official docs: [Get started](https://docs.x.ai/grok-bot/get-started) · [Bots](https://docs.x.ai/grok-bot/bots) · [Approvals](https://docs.x.ai/grok-bot/approvals-security-and-privacy).

## 1. Create the Bot

1. In Grok Bot, **New** → **Create new agent** (or `Cmd/Ctrl+N`).
2. **Bot actions → Edit Profile**.
3. Name: **Inbox Triage**
4. Title: Inbox zero without living in Gmail
5. Paste `PROFILE.md` (this folder) into the description.

Or skip the form and paste this file into an installer Bot with [START.md](../../START.md).

## 2. Plugins

1. **Gmail** — Settings → Plugins → Add

Installed connectors are account-wide. They are **not** isolated to this Bot. Sign out of a service when it should no longer be available to the rest of your roster.

## 3. First task

Send:

> Triage mail since yesterday. Bucket needs-reply, fyi, newsletter, receipt, ignore. Draft replies only for needs-reply. Flag bills, legal deadlines, and security alerts. Do not send, delete, or unsubscribe. If Gmail is not connected, ask to connect it and stop.

Autonomy is **L1**. Week one is read-and-prepare unless you promote the Bot.

## 4. Save a skill

When the output is reviewable on a second input, ask:

> Save the process we just used as a skill called “triage-inbox”. Include sources, output format, validation, and the rule that external actions always require approval.

## 5. Routine

Only after two good skill runs:

> Every weekdays 08:30 in the Bot timezone, run the triage-inbox skill. Confirm timezone in Settings → Agent before enabling. Post the result in this conversation. If the source is unavailable, report the failure instead of using old data. Do not take external actions.

Then **Test run**. A test run performs real work.

## 6. Share

The share link is public. Adding it copies the configuration, not your computer or logins. Strip secrets first. See [docs/sharing.md](../../docs/sharing.md) and the [third-party bot terms](https://x.ai/legal/bot-sharing-terms).
