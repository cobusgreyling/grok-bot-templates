import fs from "node:fs";
import path from "node:path";
import { parse as parseYaml } from "yaml";
import { dirs } from "./paths.mjs";

export function readYaml(file) {
  const raw = fs.readFileSync(file, "utf8");
  try {
    return { file, raw, data: parseYaml(raw) };
  } catch (err) {
    err.message = `${file}: ${err.message}`;
    throw err;
  }
}

function walkYaml(dir, filename) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkYaml(full, filename));
    else if (entry.name === filename) out.push(full);
  }
  return out;
}

export function loadAll(root) {
  const d = dirs(root);
  const templates = walkYaml(d.templates, "template.yaml").map((file) => {
    const { data, raw } = readYaml(file);
    return {
      ...data,
      _file: file,
      _dir: path.dirname(file),
      _rel: path.relative(d.root, path.dirname(file)),
      _raw: raw,
    };
  });
  const teams = walkYaml(d.teams, "team.yaml").map((file) => ({
    ...readYaml(file).data,
    _file: file,
  }));
  const skills = walkYaml(d.skills, "skill.yaml").map((file) => ({
    ...readYaml(file).data,
    _file: file,
  }));
  const routines = walkYaml(d.routines, "routine.yaml").map((file) => ({
    ...readYaml(file).data,
    _file: file,
  }));
  const patterns = walkYaml(d.patterns, "pattern.yaml").map((file) => ({
    ...readYaml(file).data,
    _file: file,
  }));
  templates.sort((a, b) =>
    `${a.category}/${a.id}`.localeCompare(`${b.category}/${b.id}`)
  );
  return { templates, teams, skills, routines, patterns, dirs: d };
}

export function findTemplate(loaded, query) {
  const q = String(query || "").trim().toLowerCase();
  return (
    loaded.templates.find((t) => t.id === q) ||
    loaded.templates.find((t) => `${t.category}/${t.id}` === q) ||
    loaded.templates.find((t) => t.name.toLowerCase() === q) ||
    loaded.templates.find((t) => t._rel.endsWith(q))
  );
}
