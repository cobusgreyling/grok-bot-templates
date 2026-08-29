# Setup — Product Performance

Grok Bot is a durable teammate on a cloud computer. Official docs: [Get started](https://docs.x.ai/grok-bot/get-started) · [Bots](https://docs.x.ai/grok-bot/bots) · [Approvals](https://docs.x.ai/grok-bot/approvals-security-and-privacy).

## 1. Create the Bot

1. In Grok Bot, **New** → **Create new agent** (or `Cmd/Ctrl+N`).
2. **Bot actions → Edit Profile**.
3. Name: **Product Performance**
4. Title: Evidence-backed performance investigations
5. Paste `PROFILE.md` (this folder) into the description.

Or skip the form and paste this file into an installer Bot with [START.md](../../START.md).

## 2. Plugins

1. **GitHub** — Settings → Plugins → Add
1. **Slack** — Settings → Plugins → Add

Installed connectors are account-wide. They are **not** isolated to this Bot. Sign out of a service when it should no longer be available to the rest of your roster.

## 3. First task

Send:

> Investigate the checkout latency increase since yesterday's release. Review dashboards, traces, and flamegraphs; identify the highest-confidence hotspot; and return a short write-up with screenshots and direct links. Separate facts from hypotheses. Do not change alerts or production settings.

Autonomy is **L1**. Week one is read-and-prepare unless you promote the Bot.

## 4. Save a skill

When the output is reviewable on a second input, ask:

> Save the process we just used as a skill called “investigate-perf”. Include sources, output format, validation, and the rule that external actions always require approval.

## 5. Routine

Only after two good skill runs:

> Every weekdays 09:00 in the Bot timezone, run the investigate-perf skill. Confirm timezone in Settings → Agent before enabling. Keep the routine report-only. Post the result in this conversation. If the source is unavailable, report the failure instead of using old data. Do not take external actions.

Then **Test run**. A test run performs real work.

## 6. Share

The share link is public. Adding it copies the configuration, not your computer or logins. Strip secrets first. See [docs/sharing.md](../../docs/sharing.md) and the [third-party bot terms](https://x.ai/legal/bot-sharing-terms).
