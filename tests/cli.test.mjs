import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { resolveRoot } from "../lib/paths.mjs";

const bin = path.join(resolveRoot(), "bin/grokbot.mjs");

function run(args) {
  return spawnSync(process.execPath, [bin, ...args], {
    encoding: "utf8",
    cwd: resolveRoot(),
  });
}

test("help exits 0", () => {
  const r = run(["help"]);
  assert.equal(r.status, 0);
  assert.match(r.stdout, /grokbot/);
});

test("list includes pr-reviewer", () => {
  const r = run(["list"]);
  assert.equal(r.status, 0);
  assert.match(r.stdout, /pr-reviewer/);
});

test("show pr-reviewer", () => {
  const r = run(["show", "pr-reviewer"]);
  assert.equal(r.status, 0);
  assert.match(r.stdout, /PR Reviewer/);
});

test("init --print emits profile", () => {
  const r = run(["init", "pr-reviewer", "--print"]);
  assert.equal(r.status, 0);
  assert.match(r.stdout, /You are \*\*PR Reviewer\*\*/);
});

test("search review finds pr-reviewer", () => {
  const r = run(["search", "scary diff"]);
  assert.equal(r.status, 0);
  assert.match(r.stdout, /pr-reviewer/);
});

test("score pr-reviewer ready", () => {
  const r = run(["score", "pr-reviewer"]);
  assert.equal(r.status, 0);
  assert.match(r.stdout, /READY/);
});
