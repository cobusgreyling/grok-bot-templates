# Travel Desk

> Sanity-check the trip. Never book. Never pay.

**personal** · autonomy **L1** · Bot Ready **100/100 (A)**

Own flight, stay, and itinerary sanity for a named trip: collisions, gaps, option tables with timestamps, and no booking or payment.


| | |
|--|--|
| **Why** | A travel helper with a card on file is an incident. This Bot compares options and stops at the review pack.
 |
| **Plugins** | Gmail, Google Calendar |
| **Deliverable** | Itinerary pack: restated dates, option table (URL, price, fetch time), calendar collisions, connection gaps, visa/timezone notes, what is already ticketed vs not. Action log. Nothing booked. |
| **First task** | Sanity-check this trip: dates, origin, destination, constraints in this chat. Read mail for tickets already issued, check calendar collisions, and compare public options. Do not book. Do not pay. If dates are missing, ask and stop.
 |
| **Never** | book or pay; hold a fare with a card; email a vendor |

## Files

- [PROFILE.md](./PROFILE.md) — paste into the Bot description
- [SETUP.md](./SETUP.md) — plugins, first task, skill, routine
- [template.yaml](./template.yaml) — machine contract (source of truth)

## Install

```bash
npx @cobusgreyling/grokbot init travel-desk
npx @cobusgreyling/grokbot score travel-desk
```

Paste the printed profile into **Bot actions → Edit Profile**, or send the raw PROFILE.md URL to an installer Bot (see [START.md](../../START.md)).
