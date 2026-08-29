import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

export const packageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);

export function resolveRoot(cwd = process.cwd()) {
  let dir = path.resolve(cwd);
  for (let i = 0; i < 8; i++) {
    if (fs.existsSync(path.join(dir, "schema", "template.schema.json"))) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return packageRoot;
}

export function dirs(root = resolveRoot()) {
  return {
    root,
    templates: path.join(root, "templates"),
    teams: path.join(root, "teams"),
    skills: path.join(root, "skills"),
    routines: path.join(root, "routines"),
    patterns: path.join(root, "patterns"),
    schema: path.join(root, "schema"),
    catalog: path.join(root, "catalog"),
    docs: path.join(root, "docs"),
    site: path.join(root, "docs"),
    convert: path.join(root, "convert"),
  };
}
