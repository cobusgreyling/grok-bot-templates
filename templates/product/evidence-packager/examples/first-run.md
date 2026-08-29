# Example first run — Evidence Packager

## Evidence pack — Acme checkout retry (PR #184)

**Request**
- 400 must not retry; spinner must surface the form error. No production data.

**Artifacts**
- PR #184 diff (`src/checkout/retry.ts`)
- CI run URL (unit tests for 500 only)
- Staging repro pack from Bug Reproduction (screenshot of loop)

**Verified**
- Diff retries on 400 as well as 500 (path cited).
- Staging spinner loops on 400 (screenshot).

**Unverified**
- Idempotency under double-submit — no test, no trace.
- Production p95 after merge — dashboard not opened.

**Residual risk**
- Duplicate charges if 400 is client-side retryable.

**Questions for the verdict**
- Accept request-changes, or ship with a hold on 400?

I do not issue ship or block. Nothing merged. Production unchanged.
