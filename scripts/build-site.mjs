#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadAll } from "../lib/load.mjs";
import { scoreTemplate } from "../lib/score.mjs";
import { PAGES, GH, START_URL, profileUrl, treeUrl, teamUrl } from "../lib/urls.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const loaded = loadAll(root);
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const shareFile = path.join(root, "catalog", "share-links.json");
const shareLinks = fs.existsSync(shareFile)
  ? JSON.parse(fs.readFileSync(shareFile, "utf8")).links || {}
  : {};

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

function shareFor(t) {
  return t.share_url || shareLinks[t.id] || "";
}

const cards = loaded.templates
  .map((t) => {
    const s = scoreTemplate(t);
    const raw = profileUrl(t);
    const share = shareFor(t);
    const add = share
      ? `<a class="add" href="${esc(share)}">Add to Grok</a>`
      : "";
    return `<article class="card" data-cat="${esc(t.category)}" data-q="${esc(
      [t.id, t.name, t.tagline, t.job, ...(t.tags || [])].join(" ").toLowerCase()
    )}">
  <div class="row"><span class="cat">${esc(t.category)}</span><span class="lvl">${esc(
      t.autonomy
    )}</span><span class="score">${s.earned}</span></div>
  <h3>${esc(t.name)}</h3>
  <p>${esc(t.tagline)}</p>
  <div class="actions">
    <button type="button" class="copy" data-copy="${esc(raw)}">Copy PROFILE URL</button>
    <a href="${esc(raw)}">raw</a>
    <a href="${esc(treeUrl(t))}">contract</a>
    ${add}
  </div>
</article>`;
  })
  .join("\n");

const teamCards = loaded.teams
  .map(
    (t) => `<article class="card team">
  <div class="row"><span class="cat">team</span><span class="lvl">${esc(
    t.autonomy || "L1"
  )}</span></div>
  <h3>${esc(t.name)}</h3>
  <p>${esc(t.why)}</p>
  <p class="bots">${t.bots.map(esc).join(" · ")}</p>
  <p class="hint">Paste START.md into Setup, then tap <strong>${esc(t.name)}</strong>.</p>
  <div class="actions">
    <button type="button" class="copy" data-copy="${esc(t.name)}">Copy team name</button>
    <a href="${esc(teamUrl(t))}">yaml</a>
  </div>
</article>`
  )
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Templates for Grok Bot</title>
  <meta name="description" content="Stop pasting vibes. Design the Bot. Get a score. ${loaded.templates.length} operating contracts for Grok Bot — paste START.md, tap a team." />
  <link rel="canonical" href="${PAGES}/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Templates for Grok Bot" />
  <meta property="og:description" content="Stop pasting vibes. Design the Bot. Get a score. Paste START.md into a Bot named Setup." />
  <meta property="og:url" content="${PAGES}/" />
  <meta property="og:image" content="${PAGES}/header.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Templates for Grok Bot" />
  <meta name="twitter:description" content="Paste START.md. Tap a team. Stay at L1." />
  <meta name="twitter:image" content="${PAGES}/header.jpg" />
  <link rel="icon" href="badge.svg" type="image/svg+xml" />
  <style>
    :root {
      --bg: #1a1c16;
      --card: #23251d;
      --ink: #f4f1ea;
      --mute: #9aa08c;
      --line: #3a3d32;
      --accent: #e8e4d9;
      --ok: #8fbf7a;
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
    h2 { font-size: 1.25rem; margin: 40px 0 12px; }
    .lede { color: var(--mute); max-width: 46rem; }
    .install-hero {
      background: var(--card); border: 1px solid var(--line);
      border-radius: 12px; padding: 18px 20px; margin: 24px 0 8px;
    }
    .install-hero h2 { margin: 0 0 10px; }
    .install-hero ol { margin: 0; padding-left: 1.2rem; }
    .install-hero li { margin: 8px 0; }
    .copyrow {
      display: flex; gap: 8px; align-items: center; flex-wrap: wrap;
      margin-top: 6px; background: #111; border: 1px solid var(--line);
      border-radius: 8px; padding: 8px 10px;
    }
    .copyrow code { font-size: 13px; word-break: break-all; color: var(--accent); }
    button.copy, .actions a, a.add {
      background: transparent; color: var(--ink); border: 1px solid var(--line);
      border-radius: 999px; padding: 4px 10px; cursor: pointer; font-size: 12px;
      text-decoration: none;
    }
    button.copy:hover, .actions a:hover { border-color: var(--accent); }
    a.add { border-color: var(--ok); color: var(--ok); }
    details.cli { margin: 12px 0 0; color: var(--mute); }
    details.cli pre {
      background: #111; border: 1px solid var(--line); border-radius: 8px;
      padding: 10px 12px; overflow-x: auto; color: var(--ink);
    }
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
    .card {
      display: flex; flex-direction: column; background: var(--card);
      border: 1px solid var(--line); border-radius: 12px; padding: 16px; color: inherit;
    }
    .card:hover { border-color: var(--accent); }
    .row { display: flex; gap: 8px; align-items: center; margin-bottom: 8px; font-size: 12px; color: var(--mute); }
    .lvl { border: 1px solid var(--line); border-radius: 999px; padding: 0 6px; }
    .score { margin-left: auto; }
    h3 { margin: 0 0 6px; font-size: 1.05rem; }
    .card p { margin: 0; color: var(--mute); font-size: 0.92rem; }
    .bots { margin-top: 8px !important; font-size: 0.8rem !important; }
    .hint { margin-top: 8px !important; font-size: 0.8rem !important; }
    .actions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; }
    .hidden { display: none !important; }
    footer { margin-top: 48px; color: var(--mute); font-size: 0.9rem; }
    footer a { color: var(--accent); }
    .api { font-size: 0.85rem; }
  </style>
</head>
<body>
  <header class="hero">
    <img src="header.jpg" alt="Templates for Grok Bot" />
  </header>
  <div class="wrap">
    <h1>Templates for Grok Bot</h1>
    <p class="lede">Stop pasting vibes. Design the Bot. Get a score. ${loaded.templates.length} operating contracts, ${loaded.teams.length} teams, ${loaded.skills.length} skills, ${loaded.routines.length} routines — aligned with the official Grok Bot docs. v${esc(pkg.version)}.</p>

    <section class="install-hero" id="install">
      <h2>Install in 60 seconds — no Node</h2>
      <ol>
        <li>In Grok Bot: <strong>New → Create new agent</strong>. Name it <strong>Setup</strong>.</li>
        <li>Paste this URL and send:
          <div class="copyrow">
            <code id="start-url">${esc(START_URL)}</code>
            <button type="button" class="copy" data-copy="${esc(START_URL)}">Copy</button>
          </div>
        </li>
        <li>Tap a team. Try <strong>Eng</strong> (Bug Reproduction + Issue Drafter + PR Reviewer).</li>
        <li>Connect the plugins it lists. Stay at <strong>L1</strong> for a week — drafts, not sends.</li>
      </ol>
      <details class="cli">
        <summary>Prefer the CLI?</summary>
        <pre>npx --yes github:cobusgreyling/grok-bot-templates list
npx --yes github:cobusgreyling/grok-bot-templates init pr-reviewer --print
npx --yes github:cobusgreyling/grok-bot-templates init --team eng --out ./eng-bots
npx --yes github:cobusgreyling/grok-bot-templates score pr-reviewer --badge</pre>
        <p>Scoped package <code>@cobusgreyling/grokbot</code> publishes on the next npm release. GitHub npx works today.</p>
      </details>
    </section>

    <div class="bar">
      <input id="q" type="search" placeholder="Search jobs, plugins, taglines…" />
    </div>
    <div class="chips" id="chips">
      <button data-cat="" class="on">all</button>
      ${cats.map((c) => `<button data-cat="${c}">${c}</button>`).join("\n")}
    </div>
    <h2>Catalog</h2>
    <p class="lede">Each card copies the raw PROFILE.md URL. Paste it into Edit Profile, or let Setup fetch it.</p>
    <div class="grid" id="grid">${cards}</div>
    <h2>Teams</h2>
    <div class="grid">${teamCards}</div>
    <footer>
      <p>MIT · <a href="${GH}">GitHub</a> · <a href="agent.html">Bot contract</a> · <a href="${GH}/blob/main/SPEC.md">SPEC</a> · Not affiliated with xAI. Grok Bot is a product of xAI / Cursor. Templates are operating contracts you paste into your own account.</p>
      <p class="api">Machine API: <a href="catalog.json">catalog.json</a> · <a href="api/v1/index.json">api/v1</a> · <a href="llms.txt">llms.txt</a> · <a href="badge.svg">bot-ready badge</a></p>
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
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('button.copy');
      if (!btn) return;
      const text = btn.getAttribute('data-copy') || '';
      const prev = btn.textContent;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = 'Copied';
      } catch {
        window.prompt('Copy', text);
      }
      setTimeout(() => { btn.textContent = prev; }, 1200);
    });
  </script>
</body>
</html>
`;

const docs = path.join(root, "docs");
fs.mkdirSync(docs, { recursive: true });
fs.writeFileSync(path.join(docs, "index.html"), html);
fs.copyFileSync(path.join(root, "assets", "header.jpg"), path.join(docs, "header.jpg"));

const agentHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bot contract · grok-bot-templates</title>
  <meta name="description" content="Paste this into a Grok Bot so it can list, fetch, and install scored templates from this catalog." />
  <link rel="canonical" href="${PAGES}/agent.html" />
  <style>
    :root { --bg:#1a1c16; --ink:#f4f1ea; --mute:#9aa08c; --line:#3a3d32; --card:#23251d; --accent:#e8e4d9; }
    body { margin:0; font-family:ui-sans-serif,system-ui,sans-serif; background:var(--bg); color:var(--ink); line-height:1.5; }
    .wrap { max-width:760px; margin:0 auto; padding:40px 20px 80px; }
    a { color:var(--accent); }
    pre { background:#111; border:1px solid var(--line); border-radius:10px; padding:14px 16px; overflow-x:auto; white-space:pre-wrap; }
    .copyrow { display:flex; gap:8px; align-items:center; margin:12px 0; }
    button { background:transparent; color:var(--ink); border:1px solid var(--line); border-radius:999px; padding:4px 10px; cursor:pointer; }
    .mute { color:var(--mute); }
  </style>
</head>
<body>
  <div class="wrap">
    <p class="mute"><a href="./">← catalog</a></p>
    <h1>Point your Grok Bot at this catalog</h1>
    <p>Paste the contract below into a Bot. It will list scored templates, fetch PROFILE.md, and never invent prompts.</p>
    <div class="copyrow">
      <button type="button" id="copy">Copy contract</button>
      <a href="${START_URL}">START.md (installer)</a>
    </div>
    <pre id="contract">${esc(`# grok-bot-templates — Bot Contract v1

You are a Grok Bot. grok-bot-templates is a scored catalog of operating contracts
for Grok Bot (job, never-list, L1 default, CI). Public, no auth.

Read FIRST: ${PAGES}/api/v1/status.json
Scan:       ${PAGES}/api/v1/catalog.json
Teams:      ${PAGES}/api/v1/teams.json
Installer:  ${START_URL}

Rules:
1. Fetch PROFILE.md from profile_url. Do not invent a prompt.
2. Week-one autonomy is L1: drafts only. Never send, post, pay, merge, or change production.
3. Never install a third-party x.ai/bot share URL on the owner's behalf. Show the link.
4. Report at most 5 templates: name, tagline, score, profile_url, share_url if present.
5. Rank by featured, then score. Stay in the owner's requested category when they name one.
6. Shared computer is not a security boundary. Say so if they ask for isolated Bots.

To stand up a team: follow START.md. Create 2–4 Bots from fetched PROFILE.md files.
`)}</pre>
    <p class="mute">Raw markdown: <a href="${GH}/blob/main/docs/agent.md">docs/agent.md</a> · JSON: <a href="api/v1/index.json">api/v1</a></p>
  </div>
  <script>
    document.getElementById('copy').addEventListener('click', async (e) => {
      const t = document.getElementById('contract').innerText;
      const btn = e.currentTarget;
      const prev = btn.textContent;
      try { await navigator.clipboard.writeText(t); btn.textContent = 'Copied'; }
      catch { window.prompt('Copy', t); }
      setTimeout(() => { btn.textContent = prev; }, 1200);
    });
  </script>
</body>
</html>
`;
fs.writeFileSync(path.join(docs, "agent.html"), agentHtml);
console.log("docs/index.html  docs/agent.html");
