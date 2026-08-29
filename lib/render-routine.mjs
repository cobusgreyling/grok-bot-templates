import fs from "node:fs";
import path from "node:path";

export function renderRoutineMd(r) {
  return `# ${r.name}

Owner: **${r.owner}**. Skill: \`${r.skill}\`. Cadence: ${r.cadence}.

Official shape from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations). Confirm: owning Bot, schedule and timezone, input source, expected result, approval boundary, missing-source policy.

## Prompt to paste

> ${r.prompt}

## Expected result

${r.expected_result}

## Approval boundary

${r.approval_boundary}

## Missing source

${r.missing_source}

## Test first

**Test run is mandatory.** A test run performs real work. It can navigate websites, change files, and call connected tools. Use safe inputs. Keep write actions behind approval.

Then open the Bot → **View conversation details** → **Routines**.
`;
}

export function writeRoutineDocs(r) {
  const dir = path.dirname(r._file);
  fs.writeFileSync(path.join(dir, "ROUTINE.md"), renderRoutineMd(r));
}
