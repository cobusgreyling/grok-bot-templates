# Authoring a template

1. `npx --yes github:cobusgreyling/grok-bot-templates new my-job --category ops`
2. Replace every stub string in `template.yaml`.
3. `npm run render && npx grokbot score my-job && npx grokbot validate`
4. Open a PR. CI re-renders and fails on drift or score < 80.

## Writing rules

- Own an **outcome**, not a department. "Ranked account-health watch list" beats "customer success helper".
- Default **L1**. L3 requires a routine with missing-source policy.
- Every never-list includes at least one of: send, pay, merge, publish, production.
- `example_first_run` looks like a real artifact a human could accept or reject.
- No secrets, no localhost, no customer names that look real. Use obvious fakes (`Acme North`, `PR #184`).
- Do not copy profiles from other GitHub catalogs. Write the operating contract from the official job shape.

## Official sources to keep open

- [Get started](https://docs.x.ai/grok-bot/get-started)
- [Bots](https://docs.x.ai/grok-bot/bots)
- [Use cases](https://docs.x.ai/grok-bot/use-cases)
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)
- [Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Approvals](https://docs.x.ai/grok-bot/approvals-security-and-privacy)
- [Chat and collaboration](https://docs.x.ai/grok-bot/chat-and-collaboration)
- [Files and results](https://docs.x.ai/grok-bot/files-and-results)
