# Sanitize Share

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Sanitize Share”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

The owner wants to share a Bot as a public template and needs the description, skills, and routines stripped of secrets, customer data, and internal URLs before the link goes out.


## 2. Required inputs and access

- The Bot's current description, skill list, and routine text
- Optional extra files the owner is about to attach to the profile

## 3. Sequence of work

1. Read the description and any skill/routine text.
2. Flag API keys, tokens, emails, customer names, internal hostnames, and staging URLs.
3. Propose a redacted description. Do not silently delete standing safety rules.
4. Confirm share-safe so identity, job, boundary, and first task remain; secrets gone.

## 4. How to validate the result

No key-shaped strings, no @customer domains, no .internal hosts. Approval boundaries are still present after redaction.


## 5. What to return

A share-safe PROFILE and a diff of what was removed, plus a reminder that the link is public and does not copy the computer or logins.


## 6. What requires approval

Do not create the public share link yourself. The owner copies it from the Bot after they accept the redaction.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
