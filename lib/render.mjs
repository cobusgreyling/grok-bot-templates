import fs from "node:fs";
import path from "node:path";
import { START_URL, NPX, profileUrl } from "./urls.mjs";

const AUTONOMY = {
  L0: "L0 Observe. Read sources and report. Do not produce sendable drafts.",
  L1: "L1 Draft. Produce review-ready artifacts. Never send, post, pay, merge, publish, or change production without a later promotion.",
  L2: "L2 Approved action. You may take named actions only after explicit approval in this chat.",
  L3: "L3 Scheduled. A routine may run your skill unattended. Writes still follow the never-list unless the owner names an exception in the routine.",
};

function bullets(items) {
  return (items || []).map((x) => `- ${x}`).join("\n");
}

function numbered(text) {
  if (!text) return "";
  if (text.includes("\n")) return text.trim();
  return text.trim();
}

export function renderProfile(t) {
  const soul = t.soul ? `\n${t.soul.trim()}\n` : "";
  const ask =
    t.approval_ask && t.approval_ask.length
      ? `\nAsk first:\n${bullets(t.approval_ask)}\n`
      : "";
  const skills =
    t.skills && t.skills.length
      ? t.skills.map((s) => `\`${s}\``).join(", ")
      : "none yet — save one after the first successful run";
  const routine = t.routine
    ? `After the skill is reliable, ask to create a routine: ${t.routine.cadence}, running \`${t.routine.skill}\`. Confirm timezone, input source, expected result, approval boundary, and the missing-source policy. Test-run before enabling.`
    : "Do not create a routine until the owner has accepted two successful runs of the skill.";
  const handoffs =
    t.handoffs && t.handoffs.length
      ? t.handoffs
          .map((h) => `- Hand to **${h.to}** when: ${h.when}`)
          .join("\n")
      : "- Stay on this job. Do not spawn extra Bots unless the owner asks.";

  return `---
name: ${t.name}
category: ${t.category}
autonomy: ${t.autonomy}
plugins: [${(t.plugins || []).join(", ")}]
id: ${t.id}
version: ${t.version}
---

# ${t.name}

You are **${t.name}**, a Grok Bot.

${t.job.trim()}
${soul}
## Job

Own this outcome: ${t.tagline}

${t.why.trim()}

## Sources

${bullets(t.sources)}

Prefer a connector from **Settings → Plugins** when one exists. Use the shared computer's browser when there is no connector. If a source is missing, say so and stop rather than inventing it.

## How you work

${bullets(t.working_style)}
- Lead with the result, then evidence.
- English, brief.
- Separate facts, inferences, completed actions, and actions waiting for approval.
- Preserve source links, timestamps, and an action log.

## Deliverable

${numbered(t.deliverable)}

## Approval boundary

${AUTONOMY[t.autonomy]}

Never:

${bullets(t.approval_never)}
${ask}
These rules live in this description. Task-specific instructions go in the conversation. Do not weaken a standing boundary because a user is in a hurry.

## First task

When the user first messages you without a task, run:

> ${t.first_task.trim()}

If a required plugin is not connected, ask to connect it and stop.

## No-data / stale-data

${t.no_data.trim()}

Do not reuse yesterday's numbers as if they were current.

## Never

${bullets(t.never)}

## Handoffs

${handoffs}

Bots share one computer. Files, browser sessions, and command-line credentials are not a security boundary between Bots. Do not treat a specialist Bot as isolation.

## Skills

After a successful run, save the process as a skill (${skills}). A useful skill states: when to use it, required inputs, the sequence, how to validate, what to return, and what requires approval.

## Routine

${routine}

## Shared computer

Keep durable files under \`/workspace/${t.id}/\`. Do not paste passwords or one-time codes into chat. For sign-in, 2FA, CAPTCHA, or payment, ask the owner to take over the computer.

## Share-safe

This profile is written to be shared as a public template. It contains no API keys, customer data, or internal URLs. Before anyone uses **Share as Template**, re-read the description and strip anything you would not put in a public document.
`;
}

export function renderSetup(t) {
  const plugins =
    t.plugins && t.plugins.length
      ? t.plugins.map((p) => `1. **${p}** — Settings → Plugins → Add`).join("\n")
      : "1. No connector required for the first task. Use an attached file or a public page.";
  const routine = t.routine
    ? `Only after two good skill runs:

> Every ${t.routine.cadence}, run the ${t.routine.skill} skill. ${t.routine.timezone_note || "Use the timezone in Settings → Agent."} Post the result in this conversation. If the source is unavailable, report the failure instead of using old data. Do not take external actions.

Then **Test run**. A test run performs real work.`
    : "No routine in week one.";

  return `# Setup — ${t.name}

Grok Bot is a durable teammate on a cloud computer. Official docs: [Get started](https://docs.x.ai/grok-bot/get-started) · [Bots](https://docs.x.ai/grok-bot/bots) · [Approvals](https://docs.x.ai/grok-bot/approvals-security-and-privacy).

## 1. Create the Bot

1. In Grok Bot, **New** → **Create new agent** (or \`Cmd/Ctrl+N\`).
2. **Bot actions → Edit Profile**.
3. Name: **${t.name}**
4. Title: ${t.title}
5. Paste \`PROFILE.md\` (this folder) into the description.

Or skip the form and paste this file into an installer Bot with [START.md](../../START.md).

## 2. Plugins

${plugins}

Installed connectors are account-wide. They are **not** isolated to this Bot. Sign out of a service when it should no longer be available to the rest of your roster.

## 3. First task

Send:

> ${t.first_task.trim()}

Autonomy is **${t.autonomy}**. Week one is read-and-prepare unless you promote the Bot.

## 4. Save a skill

When the output is reviewable on a second input, ask:

> Save the process we just used as a skill called “${(t.skills && t.skills[0]) || t.id}”. Include sources, output format, validation, and the rule that external actions always require approval.

## 5. Routine

${routine}

## 6. Share

The share link is public. Adding it copies the configuration, not your computer or logins. Strip secrets first. See [docs/sharing.md](../../docs/sharing.md) and the [third-party bot terms](https://x.ai/legal/bot-sharing-terms).
`;
}

export function renderReadme(t, score) {
  const plugins = (t.plugins || []).join(", ") || "none required";
  const featured = t.featured ? " · featured" : "";
  const official = t.official_use_case ? " · official use-case shape" : "";
  return `# ${t.name}

> ${t.tagline}

**${t.category}** · autonomy **${t.autonomy}** · Bot Ready **${score.earned}/${score.max} (${score.grade})**${featured}${official}

${t.job}

| | |
|--|--|
| **Why** | ${t.why} |
| **Plugins** | ${plugins} |
| **Deliverable** | ${t.deliverable.split("\n")[0]} |
| **First task** | ${t.first_task} |
| **Never** | ${t.approval_never.slice(0, 3).join("; ")} |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

${profileUrl(t)}

Installer: ${START_URL}

CLI (optional):

\`\`\`bash
${NPX} init ${t.id} --print
${NPX} score ${t.id}
\`\`\`
`;
}

export function writeTemplateDocs(t, score) {
  const dir = t._dir;
  fs.writeFileSync(path.join(dir, "PROFILE.md"), renderProfile(t));
  fs.writeFileSync(path.join(dir, "SETUP.md"), renderSetup(t));
  fs.writeFileSync(path.join(dir, "README.md"), renderReadme(t, score));
  if (t.example_first_run) {
    const ex = path.join(dir, "examples");
    fs.mkdirSync(ex, { recursive: true });
    fs.writeFileSync(
      path.join(ex, "first-run.md"),
      `# Example first run — ${t.name}\n\n${t.example_first_run.trim()}\n`
    );
  }
}
