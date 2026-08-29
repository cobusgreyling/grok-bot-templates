# Inbox Triage

> Buckets and drafts — never send, never delete, never unsubscribe.

**personal** · autonomy **L1** · Bot Ready **100/100 (A)** · featured

Own a bucketed inbox work list with unsent reply drafts so the owner can reach inbox zero without sending, deleting, or living in Gmail.


| | |
|--|--|
| **Why** | Inbox-zero tools that send are a liability. This Bot sorts and drafts so the human still owns every outbound message.
 |
| **Plugins** | Gmail |
| **Deliverable** | Bucketed list (needs reply, fyi, newsletter, receipt, ignore) with unsent drafts on needs-reply, a handle-today top five, and an action log. Nothing sent. Nothing deleted. Nothing marked unread-to-read unless asked. |
| **First task** | Triage mail since yesterday. Bucket needs-reply, fyi, newsletter, receipt, ignore. Draft replies only for needs-reply. Flag bills, legal deadlines, and security alerts. Do not send, delete, or unsubscribe. If Gmail is not connected, ask to connect it and stop.
 |
| **Never** | send email; delete or archive mail without explicit approval; unsubscribe |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init inbox-triage
npx @cobusgreyling/grokbot score inbox-triage
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
