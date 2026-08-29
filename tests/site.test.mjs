import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { resolveRoot } from "../lib/paths.mjs";

const root = resolveRoot();
const html = fs.readFileSync(path.join(root, "docs/index.html"), "utf8");
const profiles = JSON.parse(
  fs.readFileSync(path.join(root, "docs/profiles.json"), "utf8")
);

test("catalog copies PROFILE body and START.md", () => {
  assert.match(html, /Copy PROFILE/);
  assert.match(html, /Copy START\.md/);
  assert.match(html, /How to install this Bot/);
  assert.match(html, /profiles\.json/);
  assert.match(html, /START\.md/);
});

test("catalog is color-coded by category", () => {
  assert.match(html, /--c-engineering/);
  assert.match(html, /--c-sales/);
  assert.match(html, /--c-marketing/);
  assert.match(html, /data-plugin="GitHub"/);
  assert.match(html, /Start here/);
});

test("profiles.json has gold templates", () => {
  assert.match(profiles["pr-reviewer"], /You are \*\*PR Reviewer\*\*/);
  assert.match(profiles["inbox-triage"], /You are \*\*Inbox Triage\*\*/);
  assert.match(profiles["installer"], /You are \*\*Setup\*\*/);
  assert.ok(Object.keys(profiles).length >= 49);
});

test("every catalog card has plugins and a first task", () => {
  assert.match(html, /data-plugins="GitHub"/);
  assert.match(html, /Copy first task/);
  assert.match(html, /id="bot-pr-reviewer"/);
});
