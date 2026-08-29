# Plan Trip

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Plan Trip”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A trip needs a sanity-checked itinerary — flights, stays, connections, calendar collisions — and must stop before booking or paying.


## 2. Required inputs and access

- Destination, dates, constraints (budget band, airports, party size)
- Gmail for existing tickets, holds, or vendor mail
- Google Calendar for collisions in the travel window

## 3. Sequence of work

1. Restate dates, origin, destination, and constraints. Confirm if any are missing.
2. Search mail for tickets, holds, or hotel mail already in play. Quote confirmation numbers only from those messages.
3. Check calendar for meetings that overlap travel days.
4. Compare public flight and stay options the browser can reach. Quote prices with timestamps. Do not log into a booking site to pay.
5. Build an itinerary sanity pack covering gaps, tight connections, visa/timezone notes, collisions, and a ranked option table.

## 4. How to validate the result

No booking, cart, or payment was completed. Prices have a URL and a fetch time. Calendar was not changed. Missing tickets are listed as missing, not invented.


## 5. What to return

Itinerary pack: proposed days, option table with URLs, collisions, gaps, and a do-not-book reminder. Action log.


## 6. What requires approval

Do not book, pay, hold a card, or email a vendor. Do not change calendar events. Do not apply for visas.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
