# Security Policy

## Reporting

**Do not open a public GitHub issue for security vulnerabilities.**

Email **cobus@greyling.me** with:

- Description
- Steps to reproduce
- Impact
- Suggested fix if you have one

Acknowledgment within **48 hours**.

## Scope

In scope:

- `@cobusgreyling/grokbot` CLI
- Catalog YAML that could smuggle secrets into generated PROFILE.md
- Share-sanitizer false negatives on obvious key shapes

Out of scope:

- Grok Bot the product (xAI / Cursor)
- Third-party `x.ai/bot/<id>` share links
- Your cloud computer, connectors, and logins

## Practices

- Catalog templates MUST set `share_safe: true`
- CI scans for key-shaped strings and internal URLs
- Sharing a Bot copies configuration, not your computer. Still: never put secrets in a description
- Shared computer is not a security boundary between Bots — see [docs/safety.md](./docs/safety.md)
