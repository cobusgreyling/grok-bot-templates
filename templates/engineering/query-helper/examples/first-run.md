# Example first run — Query Helper

## Draft SQL — Acme checkout (unrun)

**Schema read**
- `db/migrate/0184_checkout_retries.sql` — tables `checkouts`, `checkout_attempts`
- Columns used: `checkouts.id`, `checkouts.status`, `checkout_attempts.http_status`, `checkout_attempts.created_at`

**SELECT (review)**
```sql
SELECT c.id, a.http_status, count(*) AS n
FROM checkouts c
JOIN checkout_attempts a ON a.checkout_id = c.id
WHERE a.created_at >= :since
  AND a.http_status = 400
GROUP BY c.id, a.http_status;
```
Explains the PR #184 loop: how many checkouts retried on 400.

**Write (DRAFT — DO NOT RUN)**
```sql
-- DO NOT RUN on live
UPDATE checkouts SET status = 'failed' WHERE id = :id;
```
Risk: row lock on `checkouts`; can hide a paid order. Not executed.
Live writes: none. Production data: unchanged. Credentials: none in this draft.
