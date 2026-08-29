# Example first run — CI Sweeper

## CI sweep — Acme/checkout since yesterday 09:00

**New failures**
- `test / checkout-retry` red on PR #184. Run URL. Assertion: 400 must not retry. Not in known-flake list.

**Flakes**
- `e2e / spinner` failed then passed on `main` without a code change (two runs). Labeled flake — not "fixed".

**Infra**
- `lint` timed out once; log truncated. One rerun requested, still pending. Not treated as green.

**Suggested holds**
- Do not merge PR #184 until the 400 assertion is triaged.

Action log: opened Actions, read two run logs, no merge, no mute.
Rerun-until-green: not done.
