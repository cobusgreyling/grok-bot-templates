# Example first run — Issue Drafter

## Issue preview — unsent

**Repo:** Acme/checkout
**Title:** Checkout retries on HTTP 400 and loops the spinner

**Body (bug template)**
- Actual: spinner retries on 400 after PR #184.
- Expected: retry on 500 only; 400 surfaces the form error.
- Steps: from Bug Reproduction pack (staging, fresh test account).
- Environment: Chrome, Acme staging. Console: four POSTs, last 400.
- Links: Slack thread, repro pack.

**Labels (suggested):** bug, checkout
**PII:** none found

Ready to file: ☐
Not created. Slack unread-by-me. Nothing merged.
