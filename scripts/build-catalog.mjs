#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadAll } from "../lib/load.mjs";
import { scoreTemplate } from "../lib/score.mjs";
import { validateLoaded } from "../lib/validate.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const loaded = loadAll(root);
const result = validateLoaded(loaded);
if (result.errors.length) {
  for (const e of result.errors) console.error(e.file, e.msg);
  process.exit(1);
}
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const catalog = {
  generated_at: new Date().toISOString(),
  version: pkg.version,
  spec: "https://github.com/cobusgreyling/grok-bot-templates/blob/main/SPEC.md",
  counts: result.counts,
  templates: loaded.templates.map((t) => {
    const s = scoreTemplate(t);
    return {
      id: t.id,
      name: t.name,
      title: t.title,
      category: t.category,
      autonomy: t.autonomy,
      tagline: t.tagline,
      why: t.why,
      plugins: t.plugins,
      featured: !!t.featured,
      official_use_case: !!t.official_use_case,
      path: t._rel,
      profile_url: `https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/${t._rel}/PROFILE.md`,
      score: s.earned,
      grade: s.grade,
      tags: t.tags || [],
    };
  }),
  teams: loaded.teams.map((t) => ({
    id: t.id,
    name: t.name,
    lead: t.lead,
    bots: t.bots,
    why: t.why,
  })),
  skills: loaded.skills.map((s) => ({ id: s.id, name: s.name })),
  routines: loaded.routines.map((r) => ({
    id: r.id,
    name: r.name,
    owner: r.owner,
    cadence: r.cadence,
  })),
  patterns: loaded.patterns.map((p) => ({ id: p.id, name: p.name, summary: p.summary })),
};
const dir = path.join(root, "catalog");
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, "catalog.json"), JSON.stringify(catalog, null, 2) + "\n");
console.log(`catalog.json  ${catalog.templates.length} templates`);
