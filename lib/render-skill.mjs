import fs from "node:fs";
import path from "node:path";

export function renderSkillMd(s) {
  return `# ${s.name}

Paste this into Grok Bot after a successful run:

> Save the process we just used as a skill called “${s.name}”.

A useful skill states the six fields from [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## 1. When to use it

${s.when_to_use}

## 2. Required inputs and access

${(s.inputs || []).map((x) => `- ${x}`).join("\n")}

## 3. Sequence of work

${(s.sequence || []).map((x, i) => `${i + 1}. ${x}`).join("\n")}

## 4. How to validate the result

${s.validate}

## 5. What to return

${s.returns}

## 6. What requires approval

${s.approval}

Type \`/\` in the composer to reference a saved skill. If it does not appear, open **Settings → Plugins → Yours** and enable it for this Bot.
`;
}

export function writeSkillDocs(s) {
  const dir = path.dirname(s._file);
  fs.writeFileSync(path.join(dir, "SKILL.md"), renderSkillMd(s));
}
