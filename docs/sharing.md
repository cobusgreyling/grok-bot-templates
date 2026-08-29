# Sharing a Bot

Official flow ([Bots](https://docs.x.ai/grok-bot/bots#share-a-bot)):

1. Open the Bot and copy its share link (`https://x.ai/bot/<id>`)
2. Recipient opens a preview on x.ai and chooses **Add to Grok Bot**
3. They need the Grok Bot app to finish adding it

The link is public. Adding it creates a **copy** on their account. It does not give them your computer, logins, or history.

## Before you copy the link

Run [Share Sanitizer](../templates/meta/sanitizer/) or do the same review by hand:

- API keys and tokens
- Customer names and emails
- Internal hostnames and staging URLs
- Test passwords
- Anything you would not put in a public document

Keep the job, the never-list, the first task, and the no-data policy. Those are the point.

## This catalog vs share links

| | This repo | `x.ai/bot/<id>` |
|--|--|--|
| What you get | PROFILE.md + YAML + score | Live configuration copy |
| Reviewable in git | Yes | No |
| Skills/routines | Documented; you save them | Copied if the author included them |
| Trust | You read the contract | You still must read the preview — third-party terms apply |

Never ask an installer Bot to add a random share URL on the owner's behalf. Show it. Let them click.

## Directory of public share links

[grokbot.dev](https://grokbot.dev) indexes share URLs people posted on X. Useful for discovery. Not a spec. Not validated here.
