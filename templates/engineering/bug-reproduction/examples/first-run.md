# Example first run — Bug Reproduction

## Repro pack — Acme checkout retry loop

**Environment**
- Staging checkout, fresh test account `qa+184@acme.example`
- Browser: current Chrome, macOS. Report named Chrome.

**Steps** (performed)
1. Add one item, pay with test card.
2. On the confirmation spinner, drop the network once (500).
3. Restore network. Observe retries.

**Expected**
- Retry on 500 only; 400 is not retried.

**Actual**
- `retry.ts` (PR #184) retries 500 *and* 400. Spinner loops.

**Evidence**
- Screenshot of looping spinner. Console: four POSTs, last status 400.

**Minimal test case**
- Unit: 400 must not retry. Not in CI yet.

Production customer data: not used. Ticket not closed. Issue not filed.
