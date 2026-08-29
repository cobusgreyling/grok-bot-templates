# Example first run — Repo Hardener

## Hygiene pack — Acme/checkout

**Findings (facts)**
- Default branch `main`. PR #184 merged with one reviewer; CODEOWNERS missing for `src/checkout/`.
- Dependabot alerts visible; no open Dependabot PRs for npm.
- `actions/checkout` pinned by SHA in CI — ok.

**Recommended issues**
- Add CODEOWNERS for `src/checkout/` and `src/payments/`.

**Recommended PRs**
- Restrict `workflow_dispatch` on deploy.yml to maintainers (draft body ready).

**Out of scope**
- Org-level SAML — connector cannot see it. Branch protection details beyond summary — not edited.

Main not pushed. Branch protection unchanged. Nothing merged. Nothing published.
