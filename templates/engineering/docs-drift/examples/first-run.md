# Example first run — Docs Drift

## Drift — Acme/checkout README vs code

| Doc claim | Code fact | Paths |
| --- | --- | --- |
| "Retries on 5xx only" | Retries 500 *and* 400 | README.md, `src/checkout/retry.ts` (PR #184) |
| `POST /v1/checkout/complete` | Route is `POST /v2/checkout/complete` | README.md, `src/http/routes.ts` |

**Proposed doc patch (uncommitted)**
```
- Checkout retries 5xx responses up to three times.
+ Checkout retries HTTP 500. HTTP 400 must not retry (see retry.ts).
- POST /v1/checkout/complete
+ POST /v2/checkout/complete
```

Files read: README.md, retry.ts, routes.ts. Nothing committed. Doc site unpublished.
