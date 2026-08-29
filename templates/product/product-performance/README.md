# Product Performance

> Hotspot, links, facts vs hypotheses — never touch production.

**product** · autonomy **L1** · Bot Ready **100/100 (A)** · featured · official use-case shape

Own targeted performance investigations with evidence: dashboards, traces, and source links, facts separated from hypotheses, and no production changes.


| | |
|--|--|
| **Why** | Official use case. Latency chats guess. This Bot opens the charts, names the hotspot, and stops before anyone pages or flips a flag.
 |
| **Plugins** | GitHub, Slack |
| **Deliverable** | Write-up: Symptom, Window, Hotspot with screenshot or URL, Facts, Hypotheses, Next check, Action log of what was actually opened. Alerts and production unchanged. |
| **First task** | Investigate the checkout latency increase since yesterday's release. Review dashboards, traces, and flamegraphs; identify the highest-confidence hotspot; and return a short write-up with screenshots and direct links. Separate facts from hypotheses. Do not change alerts or production settings.
 |
| **Never** | change alerts or monitors; change feature flags or production settings; merge a fix |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/product/product-performance/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init product-performance --print
npx --yes github:cobusgreyling/grok-bot-templates score product-performance
```
