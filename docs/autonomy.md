# Autonomy — L0 to L3

Copied in spirit from loop-engineering's L1 report-only week. Official Grok Bot docs say the same thing in different words: start with read-and-prepare work, review the result, then add approved actions or a routine.

| Level | Name | Week one? | May | Must not |
|-------|------|-----------|-----|----------|
| L0 | Observe | Yes, for watchers | Read, report | Sendable drafts |
| L1 | Draft | **Default** | Review-ready artifacts | Send, post, pay, merge, publish, production |
| L2 | Approved action | After the draft is trusted | Named writes after in-chat approval | Anything not named |
| L3 | Scheduled | After two good skill runs + test run | Routine runs the skill | Writes still follow `approval_never` unless the routine names an exception |

## Promote in public

Put the level in the Bot **description**, not only in a pinned message. Description-level rules survive new threads. Message-level rules do not.

When you promote L1 → L2, name the action:

> You may post the GitHub review comment after I type "post it". You still may not merge.

When you promote L2 → L3, name the missing-source policy:

> If GitHub is down, report the failure. Do not review yesterday's cached diff.

## Test run is real work

Official docs: a routine **test run** navigates websites, changes files, and calls connectors. Use safe inputs. Keep writes behind approval even on the test run.
