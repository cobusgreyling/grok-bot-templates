# AGENTS.md

## Test commands

```bash
npm test
npm run lint
npm run ci
```

There is no separate linter yet — `npm run ci` is validate + test + doctor + render drift check.

## Loop conventions

- Report-only week one (L1) before enabling auto-fix (L2) — same as loop-engineering.
- Templates: edit `template.yaml` only, then `npm run render`.
- Never commit secrets. `share_safe: true` is mandatory.
- Do not push generated PROFILE drift; CI fails if markdown is dirty.

## Layout

- `templates/<category>/<id>/template.yaml` — source of truth
- `skills/`, `routines/`, `teams/`, `patterns/` — first-class contracts
- `bin/grokbot.mjs` — CLI
- `SPEC.md` — binding schema in prose
