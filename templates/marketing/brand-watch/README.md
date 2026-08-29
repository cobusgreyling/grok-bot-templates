# Brand Watch

> A reading pile, not a reply thread.

**marketing** · autonomy **L1** · Bot Ready **100/100 (A)**

Own a mention digest of the named brand, product, and executives from approved Slack channels and X. Return a reading pack with links and whether a human should look. Never reply, never like, never start a thread.


| | |
|--|--|
| **Why** | Brand bots that "jump in" create support tickets. This one collates what was said and leaves the reply to a person.
 |
| **Plugins** | Slack, X |
| **Deliverable** | Mention digest: each item has source link, quote, where it appeared, whether it maps to product / press / support / noise, and a "human should look" flag. No replies drafted unless the owner asked in this turn. Action log. |
| **First task** | Digest mentions of our brand, product, and named executives since last run from approved Slack channels and X. Flag anything a human should look at. This is for reading, not a reply thread. Do not reply or post.
 |
| **Never** | reply on X or in Slack; like, repost, or follow; send mail to the author of a mention |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/marketing/brand-watch/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init brand-watch --print
npx --yes github:cobusgreyling/grok-bot-templates score brand-watch
```
