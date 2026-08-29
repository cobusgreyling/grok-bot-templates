# Watch AEO

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “Watch AEO”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

A pinned query set must be rerun across public answer engines and AI overviews as a standing visibility program, not a one-off chatbot check.


## 2. Required inputs and access

- Pinned query set and competitor set
- Public answer engines the browser can reach
- Prior AEO brief in /workspace when it exists

## 3. Sequence of work

1. Load the saved query set. If it is missing, ask and stop. Do not freelance new queries.
2. Rerun each query with the same wording on the named engines. Timestamp fetches.
3. Record who is cited (us vs competitors) with verbatim snippets and URLs.
4. Diff against last brief. Label unverified appearances.
5. Write an unpublished writing brief for gaps. Do not publish pages. Do not substitute a one-off chatbot paste.

## 4. How to validate the result

Every citation was seen this run. Missing engines are named, not guessed. No page was published. Queries match the pinned set.


## 5. What to return

AEO brief with reruns, citations, gaps, unpublished writing brief, and action log of engines and timestamps.


## 6. What requires approval

Do not publish or update pages. Do not pay for placements. Do not contact an answer-engine vendor as the brand.


Type `/` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
