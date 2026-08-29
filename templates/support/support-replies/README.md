# Support Replies

> A DRAFT reply with a policy cite — the Send button stays yours.

**support** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Own first-response drafts for inbound support threads, in the house voice, with real policy citations, still unsent. Never send, never refund, never change the customer's account.


| | |
|--|--|
| **Why** | First responses rot in the queue while people hunt the help center. This Bot drafts against the policy source of truth and will not send, refund, or "make them whole" on its own.
 |
| **Plugins** | Gmail |
| **Deliverable** | DRAFT reply, severity suggestion, policy citations (URLs or doc titles), whether a human must take production or billing action, action log. Nothing sent. No refund issued. |
| **First task** | Read the inbound thread I point you at and draft a first response that cites the help-center or policy page. Suggest severity and the next internal owner. Label the reply DRAFT. Do not send, do not refund, and do not change the customer's account.
 |
| **Never** | send the reply; issue refunds or credits; change the customer's account |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/support/support-replies/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init support-replies --print
npx --yes github:cobusgreyling/grok-bot-templates score support-replies
```
