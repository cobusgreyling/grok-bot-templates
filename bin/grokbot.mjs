#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { stringify as stringifyYaml } from "yaml";
import { resolveRoot, packageRoot } from "../lib/paths.mjs";
import { loadAll, findTemplate } from "../lib/load.mjs";
import { validateLoaded } from "../lib/validate.mjs";
import { scoreTemplate, scoreAll } from "../lib/score.mjs";
import { badgeSvg, badgeMarkdown, catalogScore } from "../lib/badge.mjs";
import { START_URL } from "../lib/urls.mjs";
import { renderProfile, writeTemplateDocs } from "../lib/render.mjs";
import { writeSkillDocs } from "../lib/render-skill.mjs";
import { writeRoutineDocs } from "../lib/render-routine.mjs";

const VERSION = JSON.parse(
  fs.readFileSync(new URL("../package.json", import.meta.url), "utf8")
).version;

function args(argv) {
  const out = { _: [], flags: {} };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--") {
      out._.push(...argv.slice(i + 1));
      break;
    }
    if (a.startsWith("--")) {
      const [k, v] = a.slice(2).split("=");
      if (v !== undefined) out.flags[k] = v;
      else if (argv[i + 1] && !argv[i + 1].startsWith("-")) out.flags[k] = argv[++i];
      else out.flags[k] = true;
    } else if (a.startsWith("-") && a.length === 2) {
      out.flags[a.slice(1)] = true;
    } else out._.push(a);
  }
  return out;
}

function help() {
  return `grokbot ${VERSION} — engineering kit for Grok Bot templates

Install a team (no Node):
  1. Create a Bot named Setup
  2. Paste ${START_URL}
  3. Tap Eng. Stay at L1.

Usage:
  grokbot list [--category C] [--autonomy L] [--featured] [--json]
  grokbot show <id>
  grokbot init <id> [--out DIR] [--print]
  grokbot init --team <id> [--out DIR]
  grokbot teams [--json]
  grokbot search <query>
  grokbot score [id|--all] [--badge] [--md] [--out FILE]
  grokbot validate [path]
  grokbot doctor
  grokbot start
  grokbot new <slug> --category <cat> [--out DIR]
  grokbot catalog
  grokbot version

CLI:
  npx --yes github:cobusgreyling/grok-bot-templates start
  npx --yes github:cobusgreyling/grok-bot-templates init pr-reviewer --print

Docs: https://github.com/cobusgreyling/grok-bot-templates
Site: https://cobusgreyling.github.io/grok-bot-templates/
Grok Bot: https://x.ai/bot  ·  https://docs.x.ai/grok-bot/get-started
`;
}

function load(cwd) {
  return loadAll(resolveRoot(cwd));
}

function printTable(rows, headers) {
  const cols = headers.map((h, i) =>
    Math.max(h.length, ...rows.map((r) => String(r[i] ?? "").length))
  );
  const line = (r) => r.map((c, i) => String(c ?? "").padEnd(cols[i])).join("  ");
  console.log(line(headers));
  console.log(cols.map((n) => "-".repeat(n)).join("  "));
  for (const r of rows) console.log(line(r));
}

function cmdList(a, loaded) {
  let items = loaded.templates;
  const cat = a.flags.category;
  const aut = a.flags.autonomy;
  if (cat) items = items.filter((t) => t.category === cat);
  if (aut) items = items.filter((t) => t.autonomy === aut);
  if (a.flags.featured) items = items.filter((t) => t.featured);
  if (a.flags.json) {
    console.log(
      JSON.stringify(
        items.map((t) => ({
          id: t.id,
          name: t.name,
          category: t.category,
          autonomy: t.autonomy,
          tagline: t.tagline,
          plugins: t.plugins,
          featured: !!t.featured,
        })),
        null,
        2
      )
    );
    return 0;
  }
  printTable(
    items.map((t) => [
      t.id,
      t.category,
      t.autonomy,
      t.featured ? "*" : "",
      t.tagline,
    ]),
    ["ID", "CATEGORY", "LVL", "★", "TAGLINE"]
  );
  console.log(`\n${items.length} templates. grokbot show <id> · grokbot init <id>`);
  return 0;
}

function cmdShow(a, loaded) {
  const id = a._[1];
  if (!id) {
    console.error("usage: grokbot show <id>");
    return 1;
  }
  const t = findTemplate(loaded, id);
  if (!t) {
    console.error(`not found: ${id}`);
    return 1;
  }
  if (a.flags.json) {
    const copy = { ...t };
    delete copy._raw;
    console.log(JSON.stringify(copy, null, 2));
    return 0;
  }
  const s = scoreTemplate(t);
  console.log(`# ${t.name}  (${t.category}/${t.id})`);
  console.log(`${t.tagline}\n`);
  console.log(`Autonomy: ${t.autonomy}   Bot Ready: ${s.earned}/${s.max} ${s.grade}`);
  console.log(`Plugins:  ${(t.plugins || []).join(", ") || "none"}`);
  console.log(`PROFILE:  https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/${t._rel}/PROFILE.md`);
  if (t.share_url) console.log(`Share:    ${t.share_url}`);
  console.log(`Job:      ${t.job}\n`);
  console.log("Never:");
  for (const n of t.approval_never) console.log(`  - ${n}`);
  console.log(`\nFirst task:\n  ${t.first_task}`);
  console.log(`\nFiles: ${t._rel}/PROFILE.md`);
  return 0;
}

function copyTemplate(t, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const name of ["template.yaml", "PROFILE.md", "SETUP.md", "README.md"]) {
    const src = path.join(t._dir, name);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(dest, name));
  }
  const ex = path.join(t._dir, "examples");
  if (fs.existsSync(ex)) {
    fs.mkdirSync(path.join(dest, "examples"), { recursive: true });
    for (const f of fs.readdirSync(ex)) {
      fs.copyFileSync(path.join(ex, f), path.join(dest, "examples", f));
    }
  }
}

function cmdInit(a, loaded) {
  const teamId = a.flags.team;
  const out = a.flags.out;
  if (teamId) {
    const team = loaded.teams.find((t) => t.id === teamId);
    if (!team) {
      console.error(`unknown team: ${teamId}`);
      return 1;
    }
    const dest = path.resolve(out || path.join(process.cwd(), "grok-bots", team.id));
    fs.mkdirSync(dest, { recursive: true });
    fs.writeFileSync(path.join(dest, "TEAM.md"), renderTeam(team, loaded));
    for (const id of team.bots) {
      const t = findTemplate(loaded, id);
      if (!t) continue;
      copyTemplate(t, path.join(dest, t.id));
    }
    console.log(`Wrote team ${team.name} → ${dest}`);
    console.log("Open TEAM.md, create the Bots, paste each PROFILE.md, put them in one group.");
    console.log("\nGroup kickoff:\n");
    console.log(team.group_kickoff);
    return 0;
  }
  const id = a._[1];
  if (!id) {
    console.error("usage: grokbot init <id> | grokbot init --team <id>");
    return 1;
  }
  const t = findTemplate(loaded, id);
  if (!t) {
    console.error(`not found: ${id}`);
    return 1;
  }
  if (a.flags.print || !out) {
    process.stdout.write(renderProfile(t));
    if (!out) {
      console.error(
        `\n# copied nothing. re-run with --out DIR to write files, or pipe this into a file.`
      );
    }
  }
  if (out) {
    const dest = path.resolve(out);
    copyTemplate(t, dest);
    console.error(`Wrote ${t.id} → ${dest}`);
  }
  return 0;
}

function renderTeam(team, loaded) {
  const rows = team.bots
    .map((id) => {
      const t = findTemplate(loaded, id);
      return `- **${t ? t.name : id}** (${id}) — ${t ? t.tagline : ""}`;
    })
    .join("\n");
  return `# ${team.name}

${team.why}

Lead: **${team.lead}**. Max Bots: ${team.max_bots}. Autonomy: ${team.autonomy || "L1"}.

## Roster

${rows}

## Plugins

${(team.plugins || []).map((p) => `- ${p}`).join("\n") || "- none"}

## Group kickoff

Create 2–${team.max_bots} Bots from this folder, put them in one group, then send:

${team.group_kickoff}

Do not send, post, pay, merge, or contact anyone on the first run.
`;
}

function cmdTeams(a, loaded) {
  if (a.flags.json) {
    console.log(JSON.stringify(loaded.teams.map((t) => ({ id: t.id, name: t.name, bots: t.bots })), null, 2));
    return 0;
  }
  printTable(
    loaded.teams.map((t) => [t.id, t.bots.length, t.lead, t.name]),
    ["ID", "N", "LEAD", "NAME"]
  );
  return 0;
}

function cmdSearch(a, loaded) {
  const q = a._.slice(1).join(" ").toLowerCase();
  if (!q) {
    console.error("usage: grokbot search <query>");
    return 1;
  }
  const hits = loaded.templates.filter((t) =>
    [t.id, t.name, t.tagline, t.job, t.why, ...(t.tags || []), t.category]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
  if (!hits.length) {
    console.log("no matches");
    return 1;
  }
  printTable(
    hits.map((t) => [t.id, t.category, t.tagline]),
    ["ID", "CATEGORY", "TAGLINE"]
  );
  return 0;
}

function emitBadge(payload, a) {
  if (a.flags.md || a.flags.markdown) {
    console.log(badgeMarkdown(payload));
    return payload.ready ? 0 : 1;
  }
  const svg = badgeSvg(payload);
  if (a.flags.out) {
    const dest = path.resolve(a.flags.out);
    fs.writeFileSync(dest, svg);
    console.error(`Wrote ${dest}`);
    return payload.ready ? 0 : 1;
  }
  process.stdout.write(svg);
  return payload.ready ? 0 : 1;
}

function cmdScore(a, loaded) {
  const wantAll = a.flags.all || a._[1] === "--all" || (a.flags.badge && !a._[1]);
  if (wantAll) {
    const rows = scoreAll(loaded.templates);
    if (a.flags.badge) return emitBadge(catalogScore(rows), a);
    if (a.flags.json) {
      console.log(JSON.stringify(rows, null, 2));
      return 0;
    }
    printTable(
      rows.map((s) => [s.id, s.autonomy, `${s.earned}/${s.max}`, s.grade, s.ready ? "ready" : ""]),
      ["ID", "LVL", "SCORE", "GRADE", ""]
    );
    const avg = Math.round(rows.reduce((n, s) => n + s.earned, 0) / (rows.length || 1));
    console.log(`\n${rows.length} templates. average ${avg}/100`);
    return rows.every((s) => s.ready) ? 0 : 1;
  }
  const id = a._[1];
  if (!id) {
    console.error("usage: grokbot score <id> | grokbot score --all | grokbot score --badge");
    return 1;
  }
  const t = findTemplate(loaded, id);
  if (!t) {
    console.error(`not found: ${id}`);
    return 1;
  }
  const s = scoreTemplate(t);
  if (a.flags.badge) return emitBadge(s, a);
  if (a.flags.json) {
    console.log(JSON.stringify(s, null, 2));
    return 0;
  }
  console.log(`${t.name}  ${s.earned}/${s.max}  ${s.grade}  ${s.ready ? "READY" : "NOT READY"}`);
  for (const c of s.checks) {
    console.log(`  ${c.ok ? "✓" : "✗"} ${String(c.earned).padStart(2)}/${c.points}  ${c.id} — ${c.detail}`);
  }
  return s.ready ? 0 : 1;
}

function cmdValidate(a, loaded) {
  const result = validateLoaded(loaded);
  if (a.flags.json) {
    console.log(JSON.stringify(result, null, 2));
    return result.errors.length ? 1 : 0;
  }
  for (const w of result.warnings) console.error(`warn  ${w.file}: ${w.msg}`);
  for (const e of result.errors) console.error(`error ${e.file}: ${e.msg}`);
  const c = result.counts;
  console.log(
    `${c.templates} templates, ${c.teams} teams, ${c.skills} skills, ${c.routines} routines, ${c.patterns} patterns`
  );
  console.log(
    result.errors.length
      ? `FAIL ${result.errors.length} errors, ${result.warnings.length} warnings`
      : `OK ${result.warnings.length} warnings`
  );
  return result.errors.length ? 1 : 0;
}

function cmdDoctor(a, loaded) {
  const result = validateLoaded(loaded);
  const scores = scoreAll(loaded.templates);
  const weak = scores.filter((s) => !s.ready);
  const start = path.join(loaded.dirs.root, "START.md");
  const startOk = fs.existsSync(start);
  const header = path.join(loaded.dirs.root, "assets", "header.jpg");
  console.log("grokbot doctor");
  console.log(`  catalog     ${result.errors.length ? "FAIL" : "ok"}  (${result.counts.templates} templates)`);
  console.log(`  start.md    ${startOk ? "ok" : "MISSING"}`);
  console.log(`  header      ${fs.existsSync(header) ? "ok" : "MISSING"}`);
  console.log(`  bot-ready   ${weak.length ? `${weak.length} below 80` : "ok"}`);
  console.log(`  share-safe  ${loaded.templates.every((t) => t.share_safe) ? "ok" : "FAIL"}`);
  if (weak.length) {
    console.log("\nBelow 80:");
    for (const s of weak) console.log(`  ${s.id} ${s.earned}/${s.max}`);
  }
  if (result.errors.length) {
    console.log("\nErrors:");
    for (const e of result.errors.slice(0, 20)) console.log(`  ${e.msg}  (${e.file})`);
  }
  const fail = result.errors.length > 0 || !startOk || weak.length > 0;
  console.log(fail ? "\nFAIL" : "\nOK — catalog is Bot Ready");
  return fail ? 1 : 0;
}

function cmdStart(loaded) {
  const file = path.join(loaded.dirs.root, "START.md");
  if (!fs.existsSync(file)) {
    console.error("START.md missing");
    return 1;
  }
  console.log(fs.readFileSync(file, "utf8"));
  console.log(`\n# paste the raw URL into a new Grok Bot named Setup:\n# ${START_URL}`);
  return 0;
}

function cmdNew(a) {
  const slug = a._[1];
  const category = a.flags.category;
  if (!slug || !category) {
    console.error("usage: grokbot new <slug> --category <category>");
    return 1;
  }
  if (!/^[a-z][a-z0-9-]{1,62}$/.test(slug)) {
    console.error("slug: lowercase letters, digits, hyphens");
    return 1;
  }
  const dest = path.resolve(
    a.flags.out || path.join(resolveRoot(), "templates", category, slug)
  );
  fs.mkdirSync(dest, { recursive: true });
  const stub = {
    id: slug,
    name: slug
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" "),
    title: "Replace with a job title, not a vibe",
    category,
    version: "1.0.0",
    status: "draft",
    featured: false,
    official_use_case: false,
    job: "Own a repeatable outcome in one sentence that a stranger could score. Replace this stub before opening a PR — it must be at least sixty characters of operational language.",
    tagline: "Replace with a twelve-character-plus tagline.",
    why: "State the failure this Bot exists to prevent.",
    soul: "Optional identity paragraph. Write how the Bot thinks, not a personality costume.",
    autonomy: "L1",
    plugins: [],
    sources: ["Name the source of truth"],
    deliverable:
      "A reviewable artifact with headings, source links, and an action log. Facts separated from inferences.",
    approval_never: [
      "send messages",
      "publish or post",
      "change production systems",
    ],
    approval_ask: ["any external write"],
    first_task:
      "Describe a first task that produces a reviewable result in one pass.",
    no_data:
      "If the source is missing, say so and stop. Do not invent numbers or reuse stale data.",
    working_style: [
      "Lead with the result",
      "Cite sources",
      "Separate facts from inferences",
      "Stop at the approval boundary",
    ],
    never: [
      "Do not invent quotes or numbers",
      "Do not contact anyone",
      "Do not weaken standing boundaries",
    ],
    skills: [],
    routine: null,
    handoffs: [],
    team_role: "specialist",
    tags: [category],
    example_first_run:
      "## Example\n\nReplace this with a realistic first-run artifact so reviewers can see the shape of a good result.",
    share_safe: true,
    docs: ["https://docs.x.ai/grok-bot/use-cases"],
  };
  fs.writeFileSync(path.join(dest, "template.yaml"), stringifyYaml(stub));
  console.log(`Stub written: ${dest}/template.yaml`);
  console.log("Fill every field, then: grokbot validate && grokbot score " + slug);
  return 0;
}

function cmdCatalog(loaded) {
  const payload = {
    version: VERSION,
    api_version: "v1",
    start_url: START_URL,
    count: loaded.templates.length,
    items: loaded.templates.map((t) => ({
      id: t.id,
      name: t.name,
      category: t.category,
      autonomy: t.autonomy,
      tagline: t.tagline,
      plugins: t.plugins,
      featured: !!t.featured,
      path: t._rel,
      profile_url: `https://raw.githubusercontent.com/cobusgreyling/grok-bot-templates/main/${t._rel}/PROFILE.md`,
      share_url: t.share_url || null,
      score: scoreTemplate(t).earned,
    })),
    teams: loaded.teams.map((t) => ({ id: t.id, name: t.name, bots: t.bots })),
  };
  console.log(JSON.stringify(payload, null, 2));
  return 0;
}

function main(argv) {
  const a = args(argv);
  const cmd = a._[0] || "help";
  if (cmd === "help" || a.flags.help || a.flags.h) {
    console.log(help());
    return 0;
  }
  if (cmd === "version" || a.flags.version) {
    console.log(VERSION);
    return 0;
  }
  const loaded = load(process.cwd());
  switch (cmd) {
    case "list":
      return cmdList(a, loaded);
    case "show":
      return cmdShow(a, loaded);
    case "init":
      return cmdInit(a, loaded);
    case "teams":
      return cmdTeams(a, loaded);
    case "search":
      return cmdSearch(a, loaded);
    case "score":
      return cmdScore(a, loaded);
    case "validate":
      return cmdValidate(a, loaded);
    case "doctor":
      return cmdDoctor(a, loaded);
    case "start":
      return cmdStart(loaded);
    case "new":
      return cmdNew(a);
    case "catalog":
      return cmdCatalog(loaded);
    case "render": {
      const scores = new Map(scoreAll(loaded.templates).map((s) => [s.id, s]));
      for (const t of loaded.templates) writeTemplateDocs(t, scores.get(t.id));
      for (const s of loaded.skills) writeSkillDocs(s);
      for (const r of loaded.routines) writeRoutineDocs(r);
      console.log(
        `rendered ${loaded.templates.length} templates, ${loaded.skills.length} skills, ${loaded.routines.length} routines`
      );
      return 0;
    }
    default:
      console.error(`unknown command: ${cmd}\n`);
      console.log(help());
      return 1;
  }
}

process.exitCode = main(process.argv.slice(2));
void packageRoot;
