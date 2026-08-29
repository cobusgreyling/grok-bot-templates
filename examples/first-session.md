# First session (worked example)

You installed Grok Bot. You do not want a mega-assistant.

```bash
npx @cobusgreyling/grokbot init --team eng --out ./eng-bots
```

Create three Bots from `./eng-bots/*/PROFILE.md`. Group them. Send the kickoff in `TEAM.md`.

**Minute 0–5.** Bug Reproduction gets a staging report. It returns a repro pack or "could not reproduce". Nothing is filed.

**Minute 5–10.** You @Issue Drafter with that pack. You get an unsent GitHub issue in the repo's template.

**Minute 10–15.** A PR exists. PR Reviewer returns risk / tests / context gap. You still click merge, or you don't.

**Day 8.** If the review pack was right all week, save `review-pr-risk` as a skill. Test it on a second PR. Only then talk about a weekday routine.

That is the whole product: Job → Boundary → Skill → Routine → Team.
