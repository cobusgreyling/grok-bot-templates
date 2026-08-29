# Security Questionnaire

> Cited drafts from the pack — the Submit button stays human.

**legal** · autonomy **L1** · Bot Ready **100/100 (A)**

Own draft answers to vendor security questionnaires from a source-of-truth pack on Drive or Notion, with citations and an unanswered list. Never submit the form and never attest.


| | |
|--|--|
| **Why** | Questionnaires get answered from memory and then contradict last quarter's pack. This Bot drafts from the pack, lists what the pack does not say, and will not submit.
 |
| **Plugins** | Google Drive, Notion |
| **Deliverable** | Draft answer table (question, draft, pack citation), unanswered list, contradiction list versus last submit, action log of pack files read. Form not submitted. Vendor not emailed. |
| **First task** | Draft answers to this security questionnaire from the source-of-truth pack on Drive or Notion. Cite the pack on every drafted answer. List questions the pack does not cover. Do not submit the form, do not attest, and do not email the vendor.
 |
| **Never** | submit the questionnaire; attest or sign; email the vendor the answers |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

Paste the raw PROFILE into **Bot actions → Edit Profile**, or send this URL to a Bot named Setup:

https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/templates/legal/security-questionnaire/PROFILE.md

Installer: https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/START.md

CLI (optional):

```bash
npx --yes github:cobusgreyling/grok-bot-templates init security-questionnaire --print
npx --yes github:cobusgreyling/grok-bot-templates score security-questionnaire
```
