# Example first run — Incident Desk

## Timeline — checkout 5xx (Acme North traffic)

Window: 11 Aug 14:02–15:40 America/Johannesburg. Channel: #inc-checkout (approved).

| Time | Source | Kind | Note |
|---|---|---|---|
| 14:02 | Slack #inc-checkout | fact | Priya pages "checkout 5xx climbing" |
| 14:11 | GitHub deploy 9c2a | fact | `checkout-api` deploy of PR #184 landed 13:58 |
| 14:18 | Slack | hypothesis | Sam: "retry loop on 400?" — unverified |
| 14:41 | GitHub PR #184 | fact | retry.ts retries 400 and 500; no idempotency key |
| 15:12 | Slack | fact | Jordan rolled back via existing runbook. Bot did not touch prod |

**Stated impact:** Slack 14:33 — "about 12% of checkouts failing" (Priya). Not independently verified.

**Open questions**
- Was duplicate charge observed? Not in Slack or GitHub.
- Who owns the postmortem doc?

**Not found:** error-budget dashboard, customer list, PagerDuty log.

Scanned: #inc-checkout, PR #184, deploy 9c2a. Nothing posted. Production untouched.
