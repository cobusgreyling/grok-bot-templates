# Vendor Renewals

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Vendor Renewals”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

Invoices, renewal notices, and vendor asks need a dated work list from mail and Drive — follow-ups stay unsent.


## 2. Required inputs and access

- Gmail finance or vendor labels
- Google Drive vendor or AP folder
- Last week's vendor list if it exists in /workspace

## 3. Sequence of work

1. Scan the window for invoices, renewal notices, and vendor payment asks. Skip newsletters.
2. Extract vendor, amount, currency, due date, and a source link. Amounts not in the source stay unknown.
3. Diff against last week's list into new, unchanged, overdue, and renewed-since-last-run.
4. Draft one follow-up per overdue or missing-info vendor. Label DRAFT. Do not send.
5. Write the work list to /workspace/vendor-inbox.md.

## 4. How to validate the result

Every row has a source link. No mail was sent. No invoice was marked paid. Unknown amounts are labeled unknown, not guessed.


## 5. What to return

Work list grouped new / overdue / upcoming, unsent follow-up drafts, action log of mail and Drive scanned.


## 6. What requires approval

Do not send chases. Do not pay invoices. Do not auto-renew or sign terms.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
