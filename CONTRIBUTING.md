# Contributing

This repo is a **practical engineering reference** for Grok Bot templates, not a hype collection of personas.

**Maintainer response:** docs and small PRs get a first response within **48 hours**.

## Ways to contribute

| Contribution | Where |
|--------------|-------|
| New Bot template | `templates/<category>/<id>/template.yaml` |
| Team | `teams/<id>/team.yaml` |
| Skill | `skills/<id>/skill.yaml` |
| Routine | `routines/<id>/routine.yaml` |
| Design pattern | `patterns/<id>/pattern.yaml` |
| Convert guide | `convert/` |
| CLI / schema | `bin/`, `lib/`, `schema/` |

## Fast path

```bash
npx --yes github:cobusgreyling/grok-bot-templates new my-job --category ops
# edit template.yaml until:
npx --yes github:cobusgreyling/grok-bot-templates score my-job   # >= 80
npm run ci
```

Open a PR. Do not hand-edit `PROFILE.md` — CI regenerates it.

## Template requirements

Every new template must satisfy [SPEC.md](./SPEC.md) and `schema/template.schema.json`:

1. One job (repeatable outcome)
2. Named sources
3. Reviewable deliverable
4. Standing `approval_never` (include send/pay/merge/publish/production as relevant)
5. First task
6. No-data policy
7. `share_safe: true`
8. Example first-run artifact
9. Week-one autonomy **L1** unless you also ship a routine with a missing-source policy

## Writing rules

- Engineering over hype
- Failures and never-lists are first-class
- Original operating contracts — do not paste other catalogs
- Obvious fake names (`Acme North`, `PR #184`)
- No API keys, customer data, internal URLs

## Pull request checklist

- [ ] `npm run ci`
- [ ] Generated markdown committed
- [ ] Links from README or the catalog
- [ ] Safety-sensitive jobs reference [docs/safety.md](./docs/safety.md)

## Code of conduct

[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) (Contributor Covenant).

In short: engineering over hype; harassment is not tolerated.
