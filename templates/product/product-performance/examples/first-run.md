# Example first run — Product Performance

## Symptom
Acme checkout p95 up since yesterday's release (owner report). Window: last 24h.

## Opened
- Service dashboard "checkout-web" (link) — p95 800ms → 2.4s after 14:10.
- Trace sample 8a21 (link) — time in `retry.ts`.
- PR #184 (link) — retries on 500 *and* 400.

## Hotspot
`src/checkout/retry.ts` retrying HTTP 400. Highest confidence: traces + diff.

## Facts
- p95 step-change at 14:10, same minute as PR #184 merge.
- 400s are 12% of checkout errors in the window (dashboard).

## Hypotheses
- 400 retry loop inflates wait time (not verified in prod logs).

## Next check
Confirm 400 volume in log query; do not change alerts.

Action log: opened two dashboards, one trace, one PR. Alerts untouched.
