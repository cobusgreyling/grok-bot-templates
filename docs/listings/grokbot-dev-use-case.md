---
type: use-case
slug: scored-grok-bot-templates
headline: Paste one URL, tap Eng, get a scored Grok Bot team
summary: "cobusgreyling/grok-bot-templates is a scored catalog of operating contracts for Grok Bot — job, never-list, L1 default, CI. Paste START.md into a Bot named Setup, tap a team, and it fetches PROFILE.md instead of inventing prompts."
categories: [engineering, work]
format: use-case
source_tweets:
  - url: REPLACE_WITH_LAUNCH_TWEET_URL
    author_handle: REPLACE
    excerpt: "Stop pasting vibes into Grok Bot."
    posted_at: "2026-08-29T00:00:00Z"
author:
  handle: cobusgreyling
  url: https://github.com/cobusgreyling
  platform: github
prompt_provenance: author
replicability: "Create a Bot named Setup, paste the START.md raw URL, tap Eng. No Node required. Stay at L1."
added_at: "2026-08-29T00:00:00Z"
updated_at: "2026-08-29T00:00:00Z"
status: proposed
---

## How it's set up

1. Install Grok Bot and create a Bot named **Setup**.
2. Paste `https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md` and send.
3. Tap **Eng**. Setup creates Bug Reproduction, Issue Drafter, and PR Reviewer from fetched PROFILE.md files — it does not invent prompts.
4. Connect GitHub under Settings → Plugins.
5. Stay at L1 for a week: review-ready artifacts, no merge, no GitHub comments from the Bot.
6. Optional: browse https://cobusgreyling.github.io/grok-bot-templates/ and copy a raw PROFILE URL for a single Bot.

## Prompt

```text
https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md
```

## Why it's cool

Most Grok Bot directories optimize for discovery. This one fails CI if a persona ships without a job, a never-list, and a first task. The installer is one paste, the contracts are git-reviewable, and week one is drafts on purpose.
