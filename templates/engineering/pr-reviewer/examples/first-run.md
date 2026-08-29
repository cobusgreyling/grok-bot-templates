# Example first run — PR Reviewer

## PR #184 — add retry to checkout

**Risk**
- `src/checkout/retry.ts` retries on 500 *and* 400. 400 will loop the user.
- Idempotency key is not sent; duplicate charges possible.

**Tests**
- CI found. Unit tests cover 500. No test for 400. No test for double-submit.

**Context gap**
- Description says "safe retries". Diff does not add idempotency.

**Nits**
- Magic number `3` — pull into a named constant.

**Verdict:** request changes

**Action log:** opened PR, read diff, opened CI, no files invented.
