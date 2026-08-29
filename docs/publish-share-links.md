# Publish Add-to-Grok share links

xAI share links (`https://x.ai/bot/<id>`) are the native one-click install. This catalog stays git-reviewable; share links are an extra door.

Do this from a **clean Grok Bot account** with no customer data, keys, or internal URLs.

## First five (priority)

| Template | Why first |
|----------|-----------|
| `installer` (Setup) | Hero path |
| `bug-reproduction` | Eng team |
| `issue-drafter` | Eng team |
| `pr-reviewer` | Eng team |
| `chief-of-staff` | Most-requested job |

## Steps per Bot

1. Create the Bot. Paste the raw `PROFILE.md` into **Edit Profile**.
2. Connect only the plugins the profile names. Do not sign into personal mail.
3. Run [Share Sanitizer](../templates/meta/sanitizer/) against the profile and memories.
4. Copy the share link. Open it in a private window. Confirm no secrets.
5. Add the id → URL pair to `catalog/share-links.json`:

```json
{
  "links": {
    "pr-reviewer": "https://x.ai/bot/REPLACE"
  }
}
```

6. `npm run build` and commit. Pages cards will show **Add to Grok**.
7. Post the five links on X in one thread (see [LAUNCH.md](./LAUNCH.md)). grokbot.dev scouts X.

Never ask Setup to add a third-party share URL on the owner's behalf. Show it. Let them click.

## Checks

- [ ] Link opens a preview on x.ai
- [ ] Preview matches the PROFILE job and never-list
- [ ] No customer names, keys, or internal hosts
- [ ] `share_safe: true` still holds on the YAML
