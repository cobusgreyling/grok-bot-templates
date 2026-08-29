# Safety

Grok Bot is designed to complete work while keeping sensitive inputs and consequential actions under your control. This catalog encodes that as standing `approval_never` lists.

## Hard rules for every template

- No API keys, tokens, customer data, or internal URLs in YAML or PROFILE.md
- Default L1
- `share_safe: true`
- Shared computer is **not** a security boundary ([computer and apps](https://docs.x.ai/grok-bot/computer-and-apps), [approvals](https://docs.x.ai/grok-bot/approvals-security-and-privacy))
- Passwords, 2FA, CAPTCHA, payments: owner takes over the computer. Never paste codes into chat
- Production, send, pay, merge, publish, delete stay behind approval

## Auto Review

If Auto Review is available, add **Require Approval** rules for sending mail and changing production. Require Approval wins over Always Allow. Do not write "allow everything in the browser".

## Local computer

Default is ask every time. Use **Never allowed** unless a Bot has a specific reason to touch the Mac/Windows machine in front of you. Cloud computer access is separate.

## Sharing

A public share link copies identity, description, skills, and routines. It does not copy your computer or logins. Recipients accept [third-party bot terms](https://x.ai/legal/bot-sharing-terms). Run the **Share Sanitizer** Bot before you copy the link.

## Least privilege

Connect only the tools a workflow needs. Start read-only. Pause routines when the source system changes. Preserve source links and an action log.

## What this repo will not ship

- Unattended production changers
- "It can buy it" shoppers as L3
- Broad event listeners ("every new Slack message")
- Templates that treat extra Bots as isolation
