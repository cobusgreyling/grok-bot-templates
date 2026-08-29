import test from "node:test";
import assert from "node:assert/strict";
import { loadAll } from "../lib/load.mjs";
import { validateLoaded } from "../lib/validate.mjs";
import { scoreAll, scoreTemplate } from "../lib/score.mjs";
import { resolveRoot } from "../lib/paths.mjs";
import { renderProfile } from "../lib/render.mjs";
import { findSecrets } from "../lib/secrets.mjs";

const loaded = loadAll(resolveRoot());

test("catalog loads templates", () => {
  assert.ok(loaded.templates.length >= 6, "expected at least the gold templates");
});

test("validate has no errors", () => {
  const r = validateLoaded(loaded);
  assert.equal(
    r.errors.length,
    0,
    r.errors.map((e) => `${e.file}: ${e.msg}`).join("\n")
  );
});

test("every stable template is Bot Ready (>=80)", () => {
  const weak = scoreAll(loaded.templates).filter(
    (s) => loaded.templates.find((t) => t.id === s.id)?.status === "stable" && !s.ready
  );
  assert.equal(
    weak.length,
    0,
    weak.map((s) => `${s.id} ${s.earned}`).join(", ")
  );
});

test("ids unique and folder-aligned", () => {
  const ids = loaded.templates.map((t) => t.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("gold templates exist", () => {
  for (const id of [
    "foundry",
    "installer",
    "pr-reviewer",
    "sales-outbound",
    "chief-of-staff",
    "research-desk",
  ]) {
    assert.ok(
      loaded.templates.some((t) => t.id === id),
      `missing gold template ${id}`
    );
  }
});

test("PROFILE render includes standing boundary", () => {
  const t = loaded.templates.find((x) => x.id === "pr-reviewer");
  const md = renderProfile(t);
  assert.match(md, /Approval boundary/);
  assert.match(md, /- merge/);
  assert.match(md, /L1 Draft/);
});

test("no secret-like strings in catalog yaml", () => {
  const hits = [];
  for (const t of loaded.templates) {
    hits.push(...findSecrets(t._raw, t._file));
  }
  assert.equal(hits.length, 0, JSON.stringify(hits));
});

test("featured templates have example first runs", () => {
  for (const t of loaded.templates.filter((x) => x.featured)) {
    assert.ok(
      (t.example_first_run || "").length >= 80,
      `${t.id} featured without example`
    );
  }
});

test("teams reference real bots and include lead", () => {
  const ids = new Set(loaded.templates.map((t) => t.id));
  for (const team of loaded.teams) {
    assert.ok(team.bots.includes(team.lead), team.id);
    for (const b of team.bots) {
      assert.ok(ids.has(b), `${team.id} unknown bot ${b}`);
    }
    assert.ok(team.bots.length <= team.max_bots, team.id);
  }
});

test("routines require test_first and known owners", () => {
  const ids = new Set(loaded.templates.map((t) => t.id));
  const skills = new Set(loaded.skills.map((s) => s.id));
  for (const r of loaded.routines) {
    assert.equal(r.test_first, true, r.id);
    if (r.owner) assert.ok(ids.has(r.owner), r.owner);
    if (r.skill) assert.ok(skills.has(r.skill), r.skill);
  }
});

test("scoreTemplate is 100 max", () => {
  const t = loaded.templates[0];
  const s = scoreTemplate(t);
  assert.equal(s.max, 100);
});
