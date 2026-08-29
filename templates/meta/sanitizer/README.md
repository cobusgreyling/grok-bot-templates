# Share Sanitizer

> Redact first — the share link must not carry secrets or customers.

**meta** · autonomy **L1** · Bot Ready **100/100 (A)**

Own share-safety review before a Bot goes public. Strip secrets, customer data, and internal URLs from description, skills, and routines so the share link copies a contract, not an incident.


| | |
|--|--|
| **Why** | A public share copies identity, description, skills, and routines. It does not copy the computer, but pasted keys and Acme customer names still leak.
 |
| **Plugins** | none required |
| **Deliverable** | Share-safe PROFILE plus a diff of what was removed (keys, customer names, internal hosts) and a reminder that recipients accept third-party bot terms. The public link is not created by you. |
| **First task** | Read this Bot's description, skills, and routines. Flag secrets, customer data, and internal URLs. Propose a redacted PROFILE that keeps the job and never-list. Do not create the public share link.
 |
| **Never** | create the public share link; publish the unredacted profile; send the Bot config to anyone |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init sanitizer
npx @cobusgreyling/grokbot score sanitizer
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
