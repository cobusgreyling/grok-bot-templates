# Example first run — Source Interrogator

## Source
Owner memo: "Grok Bot isolates each Bot on its own computer, so sharing a Bot cannot leak cookies."

## Assumption map
1. "Each Bot has its own computer"
   Label: **unfounded** (contradicted)
   Evidence: All Bots on an account share one cloud computer.
   Source: https://docs.x.ai/grok-bot/computer-and-apps
   Falsify: official docs stating per-Bot computers — not found.

2. "A share link cannot leak cookies"
   Label: **sourced, with a scope note**
   Evidence: share copies configuration, not computer or logins.
   Source: https://docs.x.ai/grok-bot/bots
   Wait on: whether the *description* itself contains secrets.

## Unstated load-bearing assumption
That "separate Bots" means "separate security boundary". Official docs say it does not.
Source: https://docs.x.ai/grok-bot/approvals-security-and-privacy

## Decisions that should wait
Putting a session cookie on the computer "because only this Bot will see it".

Action log: read memo, opened computer-and-apps + bots + approvals docs.
