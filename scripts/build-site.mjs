#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadAll } from "../lib/load.mjs";
import { scoreTemplate } from "../lib/score.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const loaded = loadAll(root);
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

const cats = [
  "meta",
  "engineering",
  "product",
  "sales",
  "marketing",
  "ops",
  "support",
  "research",
  "personal",
  "legal",
  "finance",
  "creator",
];

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const cards = loaded.templates
  .map((t) => {
    const s = scoreTemplate(t);
    return `<a class="card" data-cat="${esc(t.category)}" data-q="${esc(
      [t.id, t.name, t.tagline, t.job, ...(t.tags || [])].join(" ").toLowerCase()
    )}" href="https://github.com/cobusgreyling/grok-bot-templates/tree/main/${esc(
      t._rel
    )}">
  <div class="row"><span class="cat">${esc(t.category)}</span><span class="lvl">${esc(
      t.autonomy
    )}</span><span class="score">${s.earned}</span></div>
  <h3>${esc(t.name)}</h3>
  <p>${esc(t.tagline)}</p>
</a>`;
  })
  .join("\n");

const teamCards = loaded.teams
  .map(
    (t) => `<div class="card team">
  <div class="row"><span class="cat">team</span><span class="lvl">${esc(
    t.autonomy || "L1"
  )}</span></div>
  <h3>${esc(t.name)}</h3>
  <p>${esc(t.why)}</p>
  <p class="bots">${t.bots.map(esc).join(" · ")}</p>
</div>`
  )
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Templates for Grok Bot</title>
  <meta name="description" content="The engineering kit for Grok Bot templates. Spec, Bot Ready score, teams, skills, routines." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <style>
    :root {
      --bg: #1a1c16;
      --card: #23251d;
      --ink: #f4f1ea;
      --mute: #9aa08c;
      --line: #3a3d32;
      --accent: #e8e4d9;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;
      background: var(--bg); color: var(--ink); line-height: 1.45;
    }
    header.hero { position: relative; }
    header.hero img { width: 100%; display: block; max-height: 360px; object-fit: cover; }
    .wrap { max-width: 1100px; margin: 0 auto; padding: 32px 20px 80px; }
    h1 { font-size: 2rem; font-weight: 650; margin: 0 0 8px; }
    .lede { color: var(--mute); max-width: 46rem; }
    .bar { display: flex; gap: 12px; flex-wrap: wrap; margin: 24px 0 16px; }
    input[type=search] {
      flex: 1; min-width: 200px; background: var(--card); color: var(--ink);
      border: 1px solid var(--line); border-radius: 8px; padding: 10px 12px; font-size: 15px;
    }
    .chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
    .chips button {
      background: transparent; color: var(--mute); border: 1px solid var(--line);
      border-radius: 999px; padding: 4px 10px; cursor: pointer;
    }
    .chips button.on, .chips button:hover { color: var(--ink); border-color: var(--ink); }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; }
    a.card, .card {
      display: block; background: var(--card); border: 1px solid var(--line);
      border-radius: 12px; padding: 16px; color: inherit; text-decoration: none;
    }
    a.card:hover { border-color: var(--accent); }
    .row { display: flex; gap: 8px; align-items: center; margin-bottom: 8px; font-size: 12px; color: var(--mute); }
    .lvl { border: 1px solid var(--line); border-radius: 999px; padding: 0 6px; }
    .score { margin-left: auto; }
    h3 { margin: 0 0 6px; font-size: 1.05rem; }
    .card p { margin: 0; color: var(--mute); font-size: 0.92rem; }
    .bots { margin-top: 8px !important; font-size: 0.8rem !important; }
    .hidden { display: none !important; }
    footer { margin-top: 48px; color: var(--mute); font-size: 0.9rem; }
    code { background: #111; padding: 2px 6px; border-radius: 4px; }
    .install { background: #111; border: 1px solid var(--line); border-radius: 10px; padding: 14px 16px; overflow-x: auto; }
  </style>
</head>
<body>
  <header class="hero">
    <img src="header.jpg" alt="Templates for Grok Bot" />
  </header>
  <div class="wrap">
    <h1>Templates for Grok Bot</h1>
    <p class="lede">Stop pasting vibes. Design the Bot. Get a score. ${loaded.templates.length} operating contracts, ${loaded.teams.length} teams, ${loaded.skills.length} skills, ${loaded.routines.length} routines — aligned with the official Grok Bot docs. v${esc(pkg.version)}.</p>
    <pre class="install">npx @cobusgreyling/grokbot list
npx @cobusgreyling/grokbot init pr-reviewer --print
npx @cobusgreyling/grokbot init --team eng --out ./eng-bots</pre>
    <div class="bar">
      <input id="q" type="search" placeholder="Search jobs, plugins, taglines…" />
    </div>
    <div class="chips" id="chips">
      <button data-cat="" class="on">all</button>
      ${cats.map((c) => `<button data-cat="${c}">${c}</button>`).join("\n")}
    </div>
    <h2>Catalog</h2>
    <div class="grid" id="grid">${cards}</div>
    <h2 style="margin-top:48px">Teams</h2>
    <div class="grid">${teamCards}</div>
    <footer>
      <p>MIT · <a href="https://github.com/cobusgreyling/grok-bot-templates" style="color:var(--accent)">GitHub</a> · Not affiliated with xAI. Grok Bot is a product of xAI / Cursor. Templates are operating contracts you paste into your own account.</p>
    </footer>
  </div>
  <script>
    const q = document.getElementById('q');
    const chips = document.getElementById('chips');
    let cat = '';
    function apply() {
      const needle = (q.value || '').toLowerCase().trim();
      document.querySelectorAll('#grid .card').forEach(el => {
        const okCat = !cat || el.dataset.cat === cat;
        const okQ = !needle || (el.dataset.q || '').includes(needle);
        el.classList.toggle('hidden', !(okCat && okQ));
      });
    }
    q.addEventListener('input', apply);
    chips.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      cat = b.dataset.cat;
      chips.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
      apply();
    });
  </script>
</body>
</html>
`;

const docs = path.join(root, "docs");
fs.mkdirSync(docs, { recursive: true });
fs.writeFileSync(path.join(docs, "index.html"), html);
fs.copyFileSync(path.join(root, "assets", "header.jpg"), path.join(docs, "header.jpg"));
console.log("docs/index.html");
