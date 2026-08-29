import fs from "node:fs";
import path from "node:path";
import Ajv from "ajv";
import { dirs } from "./paths.mjs";
import { findSecrets, INTERNAL_URL_RE } from "./secrets.mjs";

const ajv = new Ajv({ allErrors: true, strict: false });

function loadSchema(root, name) {
  const file = path.join(dirs(root).schema, name);
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function compileValidators(root) {
  return {
    template: ajv.compile(loadSchema(root, "template.schema.json")),
    team: ajv.compile(loadSchema(root, "team.schema.json")),
    skill: ajv.compile(loadSchema(root, "skill.schema.json")),
    routine: ajv.compile(loadSchema(root, "routine.schema.json")),
    pattern: ajv.compile(loadSchema(root, "pattern.schema.json")),
  };
}

function ajvErrors(validate) {
  return (validate.errors || []).map((e) => {
    const loc = e.instancePath || "/";
    return `${loc} ${e.message}`.trim();
  });
}

function stripPrivate(obj) {
  const copy = { ...obj };
  for (const k of Object.keys(copy)) if (k.startsWith("_")) delete copy[k];
  return copy;
}

export function validateLoaded(loaded) {
  const v = compileValidators(loaded.dirs.root);
  const errors = [];
  const warnings = [];
  const ids = new Map();

  for (const t of loaded.templates) {
    if (!v.template(stripPrivate(t))) {
      for (const msg of ajvErrors(v.template)) {
        errors.push({ file: t._file, msg });
      }
    }
    if (ids.has(t.id)) {
      errors.push({
        file: t._file,
        msg: `duplicate id '${t.id}' (also ${ids.get(t.id)})`,
      });
    } else ids.set(t.id, t._file);

    if (t.share_safe !== true) {
      errors.push({ file: t._file, msg: "share_safe must be true for catalog templates" });
    }
    if (t.autonomy === "L3" && !t.routine) {
      warnings.push({
        file: t._file,
        msg: "L3 templates should declare a routine or stay at L1/L2",
      });
    }
    const blob = t._raw || JSON.stringify(t);
    for (const hit of findSecrets(blob, t._file)) {
      errors.push({ file: t._file, msg: `secret-like pattern: ${hit.pattern}` });
    }
    if (INTERNAL_URL_RE.test(blob)) {
      errors.push({ file: t._file, msg: "internal or localhost URL is not share-safe" });
    }
    const dirName = path.basename(t._dir);
    if (dirName !== t.id) {
      errors.push({
        file: t._file,
        msg: `folder name '${dirName}' must match id '${t.id}'`,
      });
    }
    const catDir = path.basename(path.dirname(t._dir));
    if (catDir !== t.category) {
      errors.push({
        file: t._file,
        msg: `parent folder '${catDir}' must match category '${t.category}'`,
      });
    }
  }

  const skillIds = new Set(loaded.skills.map((s) => s.id));
  for (const s of loaded.skills) {
    if (!v.skill(stripPrivate(s))) {
      for (const msg of ajvErrors(v.skill)) errors.push({ file: s._file, msg });
    }
  }
  for (const t of loaded.templates) {
    for (const sid of t.skills || []) {
      if (!skillIds.has(sid)) {
        errors.push({
          file: t._file,
          msg: `unknown skill '${sid}'`,
        });
      }
    }
  }

  const templateIds = new Set(loaded.templates.map((t) => t.id));
  for (const team of loaded.teams) {
    if (!v.team(stripPrivate(team))) {
      for (const msg of ajvErrors(v.team)) errors.push({ file: team._file, msg });
    }
    if (!templateIds.has(team.lead)) {
      errors.push({ file: team._file, msg: `lead '${team.lead}' is not a template` });
    }
    if (!team.bots.includes(team.lead)) {
      errors.push({ file: team._file, msg: "lead must be listed in bots" });
    }
    if (team.bots.length > team.max_bots) {
      errors.push({
        file: team._file,
        msg: `bots (${team.bots.length}) exceed max_bots (${team.max_bots})`,
      });
    }
    for (const id of team.bots) {
      if (!templateIds.has(id)) {
        errors.push({ file: team._file, msg: `unknown bot '${id}'` });
      }
    }
  }

  for (const r of loaded.routines) {
    if (!v.routine(stripPrivate(r))) {
      for (const msg of ajvErrors(v.routine)) errors.push({ file: r._file, msg });
    }
    if (r.owner && !templateIds.has(r.owner)) {
      errors.push({ file: r._file, msg: `owner '${r.owner}' is not a template` });
    }
    if (r.skill && !skillIds.has(r.skill)) {
      errors.push({ file: r._file, msg: `unknown skill '${r.skill}'` });
    }
    if (r.test_first !== true) {
      errors.push({
        file: r._file,
        msg: "test_first must be true — official docs require a test run before enabling",
      });
    }
  }

  for (const p of loaded.patterns) {
    if (!v.pattern(stripPrivate(p))) {
      for (const msg of ajvErrors(v.pattern)) errors.push({ file: p._file, msg });
    }
  }

  for (const t of loaded.templates) {
    for (const h of t.handoffs || []) {
      if (!templateIds.has(h.to)) {
        warnings.push({
          file: t._file,
          msg: `handoff target '${h.to}' is not in this catalog (allowed for planned bots)`,
        });
      }
    }
  }

  return { errors, warnings, counts: {
    templates: loaded.templates.length,
    teams: loaded.teams.length,
    skills: loaded.skills.length,
    routines: loaded.routines.length,
    patterns: loaded.patterns.length,
  } };
}
