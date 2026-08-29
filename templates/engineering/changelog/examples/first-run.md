# Example first run — Changelog

## Draft notes — Acme checkout since v1.8.0 (unpublished)

### Breaking
- None.

### Fixed
- Checkout no longer loops the spinner on HTTP 400 (PR #184).

### Added
- Idempotency key on checkout POST (PR #191).

### Internal (omitted from user notes)
- CI timeout bump (PR #188). Restore if operators need it.

### Migration
- Clients that treated 400 as retryable should stop. See PR #184.

Not tagged. GitHub release not published. CHANGELOG.md on main untouched.
