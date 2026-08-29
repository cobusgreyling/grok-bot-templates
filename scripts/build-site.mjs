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

const START_HERE = [
  "pr-reviewer",
  "inbox-triage",
  "chief-of-staff",
  "research-desk",
  "sales-outbound",
  "bug-reproduction",
  "competitor-watch",
  "installer",
];

const JOBS = [
  { label: "Review PRs", q: "pr reviewer github" },
  { label: "Triage email", q: "inbox gmail" },
  { label: "Weekly digest", q: "chief of staff" },
  { label: "Cited research", q: "research desk" },
  { label: "Sales outbound", q: "outbound" },
  { label: "Repro a bug", q: "bug reproduction" },
  { label: "Watch competitors", q: "competitor" },
  { label: "Stand up a team", q: "setup installer" },
];

const TEAM_CAT = {
  eng: "engineering",
  loop: "engineering",
  marketing: "marketing",
  meta: "meta",
  ops: "ops",
  personal: "personal",
  product: "product",
  research: "research",
  sales: "sales",
  success: "support",
};

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function flat(s) {
  return String(s || "")
    .replace(/\s+/g, " ")
    .trim();
}

function escAttr(s) {
  return esc(flat(s));
}

function shareFor(t) {
  return t.share_url || shareLinks[t.id] || "";
}

function pluginPills(plugins) {
  if (!plugins || !plugins.length) {
    return '<span class="pill plugin">browser</span>';
  }
  return plugins.map((p) => `<span class="pill plugin">${esc(p)}</span>`).join("");
}

function searchBlob(t) {
  return [
    t.id,
    t.name,
    t.title,
    t.tagline,
    t.job,
    t.why,
    ...(t.plugins || []).length ? t.plugins : ["browser"],
    ...(t.tags || []),
    t.first_task,
    t.featured ? "featured" : "",
  ]
    .join(" ")
    .toLowerCase();
}

function cardHtml(t, s, opts = {}) {
  const raw = profileUrl(t);
  const share = shareFor(t);
  const add = share ? `<a class="add" href="${esc(share)}">Add to Grok</a>` : "";
  const plugins = t.plugins || [];
  const pluginAttr = plugins.join(", ") || "browser";
  const never = (t.approval_never || []).slice(0, 3).join(" · ");
  const featured = t.featured
    ? '<span class="feat" title="Featured starter">featured</span>'
    : "";
  const idAttr = opts.id ? ` id="${esc(opts.id)}"` : "";
  return `<article class="card"${idAttr} data-cat="${esc(t.category)}" data-id="${esc(
    t.id
  )}" data-name="${escAttr(t.name)}" data-plugins="${escAttr(
    pluginAttr
  )}" data-task="${escAttr(t.first_task)}" data-featured="${
    t.featured ? "1" : "0"
  }" data-q="${esc(searchBlob(t))}">
  <div class="row">
    <span class="cat">${esc(t.category)}</span>
    <span class="lvl">${esc(t.autonomy)}</span>
    ${featured}
    <span class="score" title="Bot Ready score">${s.earned}</span>
  </div>
  <h3>${esc(t.name)}</h3>
  <p>${esc(t.tagline)}</p>
  <div class="pills">${pluginPills(plugins)}</div>
  <div class="actions">
    <button type="button" class="copy primary" data-profile="${esc(
      t.id
    )}" data-copy="${esc(raw)}">Copy PROFILE</button>
    <button type="button" class="copy" data-copy="${esc(raw)}">Copy URL</button>
    <a href="${esc(raw)}">raw</a>
    <a href="${esc(treeUrl(t))}">contract</a>
    ${add}
  </div>
  <details class="how">
    <summary>How to install this Bot</summary>
    <ol>
      <li>In Grok Bot: <strong>New → Create new agent</strong>. Name it <strong>${esc(
        t.name
      )}</strong>.</li>
      <li><strong>Bot actions → Edit Profile</strong>. Paste the PROFILE (button above copies it).</li>
      <li>Connect plugins: <strong>${esc(
        plugins.join(", ") || "none — browser is enough"
      )}</strong>.</li>
      <li>Stay at <strong>L1</strong>. Send the first task:
        <blockquote>${esc(flat(t.first_task))}</blockquote>
        <button type="button" class="copy" data-copy="${escAttr(
          t.first_task
        )}">Copy first task</button>
      </li>
    </ol>
    <p class="never"><strong>Never</strong> ${esc(never)}</p>
  </details>
</article>`;
}

const byId = Object.fromEntries(loaded.templates.map((t) => [t.id, t]));
const scores = Object.fromEntries(
  loaded.templates.map((t) => [t.id, scoreTemplate(t)])
);

const featuredCards = START_HERE.filter((id) => byId[id])
  .map((id) => cardHtml(byId[id], scores[id]))
  .join("\n");

const cards = loaded.templates
  .map((t) => cardHtml(t, scores[t.id], { id: `bot-${t.id}` }))
  .join("\n");

const plugins = [
  ...new Set(
    loaded.templates.flatMap((t) =>
      t.plugins && t.plugins.length ? t.plugins : ["browser"]
    )
  ),
].sort((a, b) => a.localeCompare(b));

const teamCards = loaded.teams
  .map((t) => {
    const cat = TEAM_CAT[t.id] || "meta";
    const botNames = (t.bots || [])
      .map((id) => byId[id]?.name || id)
      .join(" · ");
    const q = [t.id, t.name, t.why, botNames, ...(t.plugins || []), ...(t.bots || [])]
      .join(" ")
      .toLowerCase();
    return `<article class="card team" id="team-${esc(t.id)}" data-cat="${esc(
      cat
    )}" data-q="${esc(q)}">
  <div class="row"><span class="cat">${esc(cat)}</span><span class="lvl">${esc(
      t.autonomy || "L1"
    )}</span><span class="score">${(t.bots || []).length} bots</span></div>
  <h3>${esc(t.name)}</h3>
  <p>${esc(flat(t.why))}</p>
  <p class="bots">${esc(botNames)}</p>
  <div class="pills">${pluginPills(t.plugins)}</div>
  <p class="hint">Paste START.md into <strong>Setup</strong>, then tap <strong>${esc(
    t.name
  )}</strong>.</p>
  <div class="actions">
    <button type="button" class="copy primary" data-copy="${esc(
      t.name
    )}">Copy team name</button>
    <button type="button" class="copy" data-copy="${esc(
      START_URL
    )}">Copy START.md</button>
    <a href="${esc(teamUrl(t))}">yaml</a>
  </div>
</article>`;
  })
  .join("\n");

const CSS = `
    :root {
      --bg: #07080f;
      --bg2: #0d1020;
      --card: #12162a;
      --ink: #f6f7fb;
      --mute: #9aa3b8;
      --line: #2a3150;
      --accent: #5ce1e6;
      --ok: #b6ff3d;
      --c-meta: #c084fc;
      --c-engineering: #22d3ee;
      --c-product: #60a5fa;
      --c-sales: #fbbf24;
      --c-marketing: #f472b6;
      --c-ops: #2dd4bf;
      --c-support: #fb923c;
      --c-research: #a3e635;
      --c-personal: #38bdf8;
      --c-legal: #818cf8;
      --c-finance: #facc15;
      --c-creator: #fb7185;
      --radius: 16px;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    img { max-width: 100%; height: auto; }
    body {
      margin: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
      background:
        radial-gradient(1200px 600px at 10% -10%, rgba(34, 211, 238, 0.18), transparent 55%),
        radial-gradient(900px 500px at 90% 0%, rgba(244, 114, 182, 0.16), transparent 50%),
        radial-gradient(800px 500px at 50% 110%, rgba(163, 230, 53, 0.10), transparent 55%),
        var(--bg);
      color: var(--ink);
      line-height: 1.5;
      min-height: 100%;
      max-width: 100%;
    }
    a { color: var(--accent); }
    .skip {
      position: absolute; left: -999px; top: 0;
    }
    .skip:focus {
      left: 12px; top: 12px; z-index: 20;
      background: var(--accent); color: #07080f;
      padding: 8px 12px; border-radius: 999px;
    }
    html, body { overflow-x: hidden; }
    .nav {
      position: sticky; top: 0; z-index: 10;
      display: flex; gap: 14px; align-items: center; flex-wrap: nowrap;
      padding: 10px 20px;
      background: color-mix(in srgb, var(--bg) 82%, transparent);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--line);
    }
    .nav-links {
      display: flex; gap: 14px; align-items: center;
      overflow-x: auto; -webkit-overflow-scrolling: touch;
    }
    .nav-links a { white-space: nowrap; }
    .wordmark {
      font-weight: 750; letter-spacing: -0.03em; text-decoration: none;
      color: var(--ink); margin-right: auto; flex-shrink: 0;
    }
    .wordmark span { color: var(--accent); }
    .nav-links { flex: 1; min-width: 0; justify-content: flex-end; }
    .nav a { color: var(--mute); text-decoration: none; font-size: 0.92rem; }
    .nav a:hover { color: var(--ink); }
    header.banner {
      position: relative;
      display: grid;
      justify-items: center;
      background: #05060d;
      padding: 0 16px;
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }
    header.banner img {
      display: block;
      width: 100%;
      max-width: 1160px;
      min-width: 0;
      height: auto;
      margin: 0;
    }
    header.banner::after {
      content: "";
      position: absolute; left: 0; right: 0; bottom: 0;
      height: 72px;
      background: linear-gradient(transparent, var(--bg));
      pointer-events: none;
    }
    .wrap { max-width: 1160px; margin: 0 auto; padding: 8px 20px 96px; min-width: 0; }
    h1 { font-size: clamp(1.45rem, 3vw, 2.2rem); font-weight: 750; letter-spacing: -0.03em; margin: 8px 0 8px; overflow-wrap: anywhere; }
    h2 { font-size: 1.28rem; margin: 40px 0 10px; letter-spacing: -0.02em; }
    .lede { color: var(--mute); max-width: 46rem; margin: 0 0 18px; overflow-wrap: anywhere; }
    .stats {
      display: flex; gap: 10px; flex-wrap: wrap;
      list-style: none; padding: 0; margin: 18px 0 22px;
    }
    .stats li {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 999px;
      padding: 6px 12px;
      font-size: 0.88rem;
      color: var(--mute);
    }
    .stats strong { color: var(--ink); font-weight: 700; }
    .stats li:nth-child(1) strong { color: var(--c-engineering); }
    .stats li:nth-child(2) strong { color: var(--c-marketing); }
    .stats li:nth-child(3) strong { color: var(--c-research); }
    .stats li:nth-child(4) strong { color: var(--c-sales); }
    .stats li:nth-child(5) strong { color: var(--ok); }
    .doors {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin: 8px 0 28px;
    }
    .door {
      background: linear-gradient(180deg, rgba(255,255,255,0.04), transparent 40%), var(--card);
      border: 1px solid var(--line);
      border-radius: 20px;
      padding: 20px 22px 18px;
      position: relative;
      overflow: hidden;
      min-width: 0;
    }
    .door:first-child { box-shadow: inset 3px 0 0 var(--c-engineering); }
    .door:last-child { box-shadow: inset 3px 0 0 var(--c-marketing); }
    .kicker {
      margin: 0 0 6px;
      font-size: 0.75rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--mute);
    }
    .door h2 { margin: 0 0 10px; }
    .door ol { margin: 0; padding-left: 1.2rem; }
    .door li { margin: 8px 0; }
    .copyrow {
      display: flex; gap: 8px; align-items: center; flex-wrap: wrap;
      margin-top: 6px; background: #07080f; border: 1px solid var(--line);
      border-radius: 10px; padding: 8px 10px;
      max-width: 100%;
    }
    .copyrow code {
      font-size: 12.5px; color: var(--accent);
      overflow-wrap: anywhere; word-break: break-all;
      min-width: 0; flex: 1 1 12rem;
    }
    button.copy, .actions a, a.add, .btn {
      background: transparent; color: var(--ink); border: 1px solid var(--line);
      border-radius: 999px; padding: 6px 12px; cursor: pointer; font-size: 13px;
      text-decoration: none; display: inline-flex; align-items: center; gap: 6px;
      min-height: 36px; font-family: inherit;
    }
    button.copy:hover, .actions a:hover, .btn:hover { border-color: var(--accent); color: var(--ink); }
    button.copy.primary, .btn.primary {
      background: var(--accent); color: #07080f; border-color: transparent; font-weight: 700;
    }
    button.copy.primary:hover, .btn.primary:hover { filter: brightness(1.08); }
    .card button.copy.primary {
      background: var(--cat, var(--accent));
    }
    a.add { border-color: var(--ok); color: var(--ok); }
    details.cli { margin: 12px 0 0; color: var(--mute); }
    details.cli pre, details.how blockquote {
      background: #07080f; border: 1px solid var(--line); border-radius: 8px;
      padding: 10px 12px; overflow-x: auto; color: var(--ink);
    }
    .jobs { display: flex; gap: 8px; flex-wrap: wrap; margin: 0 0 28px; }
    .jobs button {
      background: color-mix(in srgb, var(--c-sales) 12%, transparent);
      color: var(--ink); border: 1px solid color-mix(in srgb, var(--c-sales) 40%, var(--line));
      border-radius: 999px; padding: 6px 12px; cursor: pointer; font-size: 13px;
      font-family: inherit;
    }
    .jobs button:hover { border-color: var(--c-sales); }
    .filters {
      position: sticky; top: 48px; z-index: 8;
      background: color-mix(in srgb, var(--bg) 88%, transparent);
      backdrop-filter: blur(12px);
      padding: 10px 0 8px;
      margin: 0 0 8px;
    }
    .bar { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; margin: 0 0 10px; }
    input[type=search] {
      flex: 1; min-width: 200px; background: var(--card); color: var(--ink);
      border: 1px solid var(--line); border-radius: 12px; padding: 12px 14px; font-size: 15px;
    }
    input[type=search]:focus { outline: 2px solid var(--accent); border-color: transparent; }
    .count { color: var(--mute); font-size: 0.9rem; white-space: nowrap; }
    .chips { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px; }
    .chips button {
      background: transparent; color: var(--mute); border: 1px solid var(--line);
      border-radius: 999px; padding: 5px 11px; cursor: pointer; font-family: inherit;
      --chip: var(--accent);
    }
    .chips button.on, .chips button:hover { color: #07080f; background: var(--chip); border-color: transparent; }
    .chips[data-kind="plugin"] button {
      --chip: var(--c-ops);
      font-size: 12px;
    }
    .chips button[data-cat="meta"] { --chip: var(--c-meta); }
    .chips button[data-cat="engineering"] { --chip: var(--c-engineering); }
    .chips button[data-cat="product"] { --chip: var(--c-product); }
    .chips button[data-cat="sales"] { --chip: var(--c-sales); }
    .chips button[data-cat="marketing"] { --chip: var(--c-marketing); }
    .chips button[data-cat="ops"] { --chip: var(--c-ops); }
    .chips button[data-cat="support"] { --chip: var(--c-support); }
    .chips button[data-cat="research"] { --chip: var(--c-research); }
    .chips button[data-cat="personal"] { --chip: var(--c-personal); }
    .chips button[data-cat="legal"] { --chip: var(--c-legal); }
    .chips button[data-cat="finance"] { --chip: var(--c-finance); }
    .chips button[data-cat="creator"] { --chip: var(--c-creator); }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
    .card {
      --cat: var(--accent);
      display: flex; flex-direction: column;
      background: linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.01)), var(--card);
      border: 1px solid var(--line); border-radius: var(--radius); padding: 16px;
      color: inherit; position: relative; overflow: hidden; min-height: 100%;
    }
    .card::before {
      content: ""; position: absolute; left: 0; top: 0; right: 0; height: 3px;
      background: var(--cat);
    }
    .card:hover {
      border-color: color-mix(in srgb, var(--cat) 55%, var(--line));
      box-shadow: 0 12px 40px rgba(0,0,0,.35);
    }
    .card:target { outline: 2px solid var(--cat); }
    .card[data-cat="meta"] { --cat: var(--c-meta); }
    .card[data-cat="engineering"] { --cat: var(--c-engineering); }
    .card[data-cat="product"] { --cat: var(--c-product); }
    .card[data-cat="sales"] { --cat: var(--c-sales); }
    .card[data-cat="marketing"] { --cat: var(--c-marketing); }
    .card[data-cat="ops"] { --cat: var(--c-ops); }
    .card[data-cat="support"] { --cat: var(--c-support); }
    .card[data-cat="research"] { --cat: var(--c-research); }
    .card[data-cat="personal"] { --cat: var(--c-personal); }
    .card[data-cat="legal"] { --cat: var(--c-legal); }
    .card[data-cat="finance"] { --cat: var(--c-finance); }
    .card[data-cat="creator"] { --cat: var(--c-creator); }
    .row { display: flex; gap: 8px; align-items: center; margin-bottom: 8px; font-size: 12px; color: var(--mute); flex-wrap: wrap; }
    .cat, .lvl, .feat, .score, .pill {
      border: 1px solid var(--line); border-radius: 999px; padding: 1px 8px;
    }
    .cat { color: var(--cat); border-color: color-mix(in srgb, var(--cat) 45%, var(--line)); }
    .feat { color: #07080f; background: var(--ok); border-color: transparent; font-weight: 700; }
    .score { margin-left: auto; color: var(--ok); border-color: color-mix(in srgb, var(--ok) 40%, var(--line)); }
    h3 { margin: 0 0 6px; font-size: 1.08rem; letter-spacing: -0.02em; }
    .card p { margin: 0; color: var(--mute); font-size: 0.92rem; flex: 1; }
    .pills { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
    .pill.plugin { font-size: 11px; color: var(--ink); background: rgba(255,255,255,0.04); }
    .bots { margin-top: 8px !important; font-size: 0.8rem !important; color: var(--ink) !important; }
    .hint { margin-top: 8px !important; font-size: 0.8rem !important; }
    .actions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; }
    .how { margin-top: 12px; color: var(--mute); font-size: 0.86rem; }
    .how summary { cursor: pointer; color: var(--ink); }
    .how ol { padding-left: 1.15rem; }
    .how blockquote { margin: 8px 0; font-size: 0.84rem; }
    .never { margin: 8px 0 0; }
    .hidden { display: none !important; }
    .empty {
      display: none; margin: 12px 0 24px; padding: 18px; border: 1px dashed var(--line);
      border-radius: 12px; color: var(--mute);
    }
    .empty.show { display: block; }
    .toast {
      position: fixed; bottom: 18px; left: 50%; transform: translateX(-50%) translateY(80px);
      background: var(--ok); color: #07080f; padding: 10px 16px; border-radius: 999px;
      font-weight: 700; font-size: 0.9rem; opacity: 0; pointer-events: none;
      transition: transform .2s ease, opacity .2s ease; z-index: 30; max-width: 90vw;
      text-align: center;
    }
    .toast.on { opacity: 1; transform: translateX(-50%) translateY(0); }
    footer { margin-top: 56px; color: var(--mute); font-size: 0.9rem; }
    footer a { color: var(--accent); }
    .api { font-size: 0.85rem; }
    @media (max-width: 800px) {
      .doors { grid-template-columns: 1fr; }
      .nav { gap: 8px; padding: 10px 12px; }
      .nav-links { gap: 10px; }
      .wordmark span { display: none; }
      .nav a { font-size: 0.82rem; }
      .filters { position: static; }
      .copyrow { flex-direction: column; align-items: stretch; }
      .copyrow code { font-size: 11.5px; flex: 0 1 auto; }
      .copyrow .copy { align-self: flex-start; }
      button.copy, .actions a { width: auto; }
      .card .actions .primary { width: 100%; justify-content: center; }
      header.banner { display: none; }
    }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      .toast { transition: none; }
    }
`;

const CLIENT = `
    const q = document.getElementById('q');
    const chips = document.getElementById('chips');
    const plugChips = document.getElementById('plugins');
    const countEl = document.getElementById('count');
    const emptyEl = document.getElementById('empty');
    const toastEl = document.getElementById('toast');
    const featuredSec = document.getElementById('start-here');
    const jobs = document.getElementById('jobs');
    const usp = new URLSearchParams(location.search);
    let cat = usp.get('cat') || '';
    let plugin = usp.get('plugin') || '';
    let profiles = null;
    if (usp.get('q')) q.value = usp.get('q');

    function markChips(root, attr, value) {
      root.querySelectorAll('button').forEach(function (x) {
        var on = (x.getAttribute(attr) || '') === value;
        x.classList.toggle('on', on);
      });
    }
    markChips(chips, 'data-cat', cat);
    markChips(plugChips, 'data-plugin', plugin);

    function syncUrl() {
      var p = new URLSearchParams();
      if (cat) p.set('cat', cat);
      if (plugin) p.set('plugin', plugin);
      if (q.value) p.set('q', q.value);
      var qs = p.toString();
      history.replaceState(null, '', (qs ? '?' + qs : location.pathname) + location.hash);
    }

    function apply() {
      var needle = (q.value || '').toLowerCase().trim();
      var n = 0, shown = 0;
      document.querySelectorAll('#grid .card').forEach(function (el) {
        n += 1;
        var okCat = !cat || el.dataset.cat === cat;
        var plugs = (el.dataset.plugins || '').toLowerCase();
        var okPlug = !plugin || plugs.split(',').map(function (s) { return s.trim(); }).indexOf(plugin.toLowerCase()) !== -1;
        var okQ = !needle || (el.dataset.q || '').indexOf(needle) !== -1;
        var vis = okCat && okPlug && okQ;
        el.classList.toggle('hidden', !vis);
        if (vis) shown += 1;
      });
      document.querySelectorAll('#featured .card').forEach(function (el) {
        var okCat = !cat || el.dataset.cat === cat;
        var plugs = (el.dataset.plugins || '').toLowerCase();
        var okPlug = !plugin || plugs.split(',').map(function (s) { return s.trim(); }).indexOf(plugin.toLowerCase()) !== -1;
        var okQ = !needle || (el.dataset.q || '').indexOf(needle) !== -1;
        el.classList.toggle('hidden', !(okCat && okPlug && okQ));
      });
      var featVisible = featuredSec.querySelectorAll('#featured .card:not(.hidden)').length;
      featuredSec.classList.toggle('hidden', featVisible === 0);
      document.querySelectorAll('#teams .card').forEach(function (el) {
        var okCat = !cat || el.dataset.cat === cat;
        var okQ = !needle || (el.dataset.q || '').indexOf(needle) !== -1;
        var plugs = (el.dataset.q || '');
        var okPlug = !plugin || plugs.indexOf(plugin.toLowerCase()) !== -1;
        el.classList.toggle('hidden', !(okCat && okQ && okPlug));
      });
      countEl.textContent = 'Showing ' + shown + ' of ' + n;
      emptyEl.classList.toggle('show', shown === 0);
      syncUrl();
    }

    function toast(msg) {
      toastEl.textContent = msg;
      toastEl.classList.add('on');
      clearTimeout(toast.t);
      toast.t = setTimeout(function () { toastEl.classList.remove('on'); }, 1800);
    }

    async function loadProfiles() {
      if (profiles) return profiles;
      var r = await fetch('profiles.json');
      if (!r.ok) throw new Error('profiles');
      profiles = await r.json();
      return profiles;
    }

    async function copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (e) {
        window.prompt('Copy', text);
        return true;
      }
    }

    q.addEventListener('input', apply);
    chips.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      cat = b.getAttribute('data-cat') || '';
      markChips(chips, 'data-cat', cat);
      apply();
    });
    plugChips.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      plugin = b.getAttribute('data-plugin') || '';
      markChips(plugChips, 'data-plugin', plugin);
      apply();
    });
    jobs.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      q.value = b.getAttribute('data-q') || '';
      cat = '';
      plugin = '';
      markChips(chips, 'data-cat', '');
      markChips(plugChips, 'data-plugin', '');
      apply();
      document.getElementById('catalog').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    document.addEventListener('click', async function (e) {
      var btn = e.target.closest('button.copy');
      if (!btn) return;
      var prev = btn.textContent;
      var id = btn.getAttribute('data-profile');
      try {
        if (id) {
          var map = await loadProfiles();
          var body = map[id];
          if (!body) throw new Error('missing');
          await copyText(body);
          btn.textContent = 'Copied PROFILE';
          toast('PROFILE copied — paste into Bot actions → Edit Profile');
        } else {
          var text = btn.getAttribute('data-copy') || '';
          await copyText(text);
          btn.textContent = 'Copied';
          toast('Copied to clipboard');
        }
      } catch (err) {
        var fallback = btn.getAttribute('data-copy') || '';
        if (fallback) {
          await copyText(fallback);
          toast('Copied URL instead — paste into Setup or open raw');
        } else {
          toast('Copy failed');
        }
      }
      setTimeout(function () { btn.textContent = prev; }, 1400);
    });
    document.addEventListener('keydown', function (e) {
      var tag = (e.target && e.target.tagName) || '';
      if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA' && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        q.focus();
        q.select();
      }
      if (e.key === 'Escape' && q.value) {
        q.value = '';
        apply();
      }
    });
    apply();
`;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Templates for Grok Bot</title>
  <meta name="description" content="Stop pasting vibes. Design the Bot. Get a score. ${loaded.templates.length} operating contracts for Grok Bot — paste START.md, tap a team, or copy a PROFILE." />
  <link rel="canonical" href="${PAGES}/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Templates for Grok Bot" />
  <meta property="og:description" content="Stop pasting vibes. Design the Bot. Get a score. Paste START.md into a Bot named Setup, or copy a PROFILE from a card." />
  <meta property="og:url" content="${PAGES}/" />
  <meta property="og:image" content="${PAGES}/header.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Templates for Grok Bot" />
  <meta name="twitter:description" content="Paste START.md. Tap a team. Or copy a PROFILE. Stay at L1." />
  <meta name="twitter:image" content="${PAGES}/header.jpg" />
  <link rel="icon" href="badge.svg" type="image/svg+xml" />
  <style>${CSS}
  </style>
</head>
<body>
  <a class="skip" href="#catalog">Skip to catalog</a>
  <nav class="nav">
    <a class="wordmark" href="./">Templates <span>for Grok Bot</span></a>
    <div class="nav-links">
      <a href="#install">Get a team</a>
      <a href="#start-here">Start here</a>
      <a href="#catalog">Catalog</a>
      <a href="#teams">Teams</a>
      <a href="${GH}">GitHub</a>
    </div>
  </nav>
  <header class="banner">
    <img src="header.jpg" alt="Templates for Grok Bot" />
  </header>
  <div class="wrap">
    <h1>Paste a contract. Get a working Bot.</h1>
    <p class="lede">Stop pasting vibes. Every card is an L1 operating contract — job, never-list, first task, Bot Ready score. Copy the PROFILE into Edit Profile, or paste one URL into Setup and tap a team. v${esc(
      pkg.version
    )}.</p>
    <ul class="stats">
      <li><strong>${loaded.templates.length}</strong> templates</li>
      <li><strong>${loaded.teams.length}</strong> teams</li>
      <li><strong>${loaded.skills.length}</strong> skills</li>
      <li><strong>${loaded.routines.length}</strong> routines</li>
      <li><strong>100/100</strong> Bot Ready</li>
    </ul>

    <div class="doors">
      <section class="door" id="install">
        <p class="kicker">Path 1 · whole team · no Node</p>
        <h2>Get a team in 60 seconds</h2>
        <ol>
          <li>In Grok Bot: <strong>New → Create new agent</strong>. Name it <strong>Setup</strong>.</li>
          <li>Paste this URL and send:
            <div class="copyrow">
              <code id="start-url">${esc(START_URL)}</code>
              <button type="button" class="copy primary" data-copy="${esc(
                START_URL
              )}">Copy START.md</button>
            </div>
          </li>
          <li>Tap a team. Try <strong>Eng</strong> (Bug Reproduction + Issue Drafter + PR Reviewer).</li>
          <li>Connect the plugins it lists. Stay at <strong>L1</strong> for a week — drafts, not sends.</li>
        </ol>
        <p class="hint">Setup fetches each Bot's PROFILE.md. It does not invent prompts.</p>
        <details class="cli">
          <summary>Prefer the CLI?</summary>
          <pre>npx --yes github:cobusgreyling/grok-bot-templates list
npx --yes github:cobusgreyling/grok-bot-templates init pr-reviewer --print
npx --yes github:cobusgreyling/grok-bot-templates init --team eng --out ./eng-bots
npx --yes github:cobusgreyling/grok-bot-templates score pr-reviewer --badge</pre>
          <p>Scoped package <code>@cobusgreyling/grokbot</code> publishes on the next npm release. GitHub npx works today.</p>
        </details>
      </section>
      <section class="door" id="one-bot">
        <p class="kicker">Path 2 · one Bot</p>
        <h2>Copy a PROFILE</h2>
        <ol>
          <li>Pick a card. The colored bar is the category; pills are plugins you must connect.</li>
          <li>Tap <strong>Copy PROFILE</strong>. In Grok Bot: <strong>New → Create new agent</strong>, name it after the card.</li>
          <li><strong>Bot actions → Edit Profile</strong>. Paste. Connect the plugins on the card.</li>
          <li>Open <strong>How to install this Bot</strong> and send the first task. Stay at L1.</li>
        </ol>
        <p class="hint"><strong>Copy URL</strong> is the raw PROFILE.md link — paste that into Setup if you already have it.</p>
      </section>
    </div>

    <h2>I want to…</h2>
    <p class="lede">Jump the catalog to a job. Then copy the PROFILE.</p>
    <div class="jobs" id="jobs">
      ${JOBS.map(
        (j) =>
          `<button type="button" data-q="${esc(j.q)}">${esc(j.label)}</button>`
      ).join("\n      ")}
    </div>

    <section id="start-here">
      <h2>Start here</h2>
      <p class="lede">Eight starters people actually run in week one. Same copy buttons as the full catalog.</p>
      <div class="grid" id="featured">${featuredCards}</div>
    </section>

    <div class="filters" id="catalog">
      <div class="bar">
        <input id="q" type="search" placeholder="Search jobs, plugins, taglines…  (press / )" />
        <span class="count" id="count"></span>
      </div>
      <div class="chips" id="chips">
        <button type="button" data-cat="" class="on">all</button>
        ${cats
          .map((c) => `<button type="button" data-cat="${c}">${c}</button>`)
          .join("\n        ")}
      </div>
      <div class="chips" data-kind="plugin" id="plugins">
        <button type="button" data-plugin="" class="on">any plugin</button>
        ${plugins
          .map(
            (p) =>
              `<button type="button" data-plugin="${esc(p)}">${esc(p)}</button>`
          )
          .join("\n        ")}
      </div>
    </div>
    <h2>Catalog</h2>
    <p class="lede">Each card copies the PROFILE body for Edit Profile, or the raw URL for Setup. Expand a card for the first task and the never-list.</p>
    <p class="empty" id="empty">No templates match. Clear the search, pick <strong>all</strong>, or try GitHub / Gmail.</p>
    <div class="grid" id="grid">${cards}</div>
    <h2 id="teams">Teams</h2>
    <p class="lede">2–4 Bots, one group, visible handoffs. Copy the team name, paste START.md into Setup, tap the name.</p>
    <div class="grid" id="teams">${teamCards}</div>
    <footer>
      <p>MIT · <a href="${GH}">GitHub</a> · <a href="agent.html">Bot contract</a> · <a href="${GH}/blob/main/SPEC.md">SPEC</a> · Not affiliated with xAI. Grok Bot is a product of xAI / Cursor. Templates are operating contracts you paste into your own account.</p>
      <p class="api">Machine API: <a href="catalog.json">catalog.json</a> · <a href="api/v1/index.json">api/v1</a> · <a href="llms.txt">llms.txt</a> · <a href="badge.svg">bot-ready badge</a> · <a href="profiles.json">profiles.json</a></p>
    </footer>
  </div>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>
  <script>${CLIENT}
  </script>
</body>
</html>
`;

const docs = path.join(root, "docs");
fs.mkdirSync(docs, { recursive: true });
fs.writeFileSync(path.join(docs, "index.html"), html);
fs.copyFileSync(path.join(root, "assets", "header.jpg"), path.join(docs, "header.jpg"));

const profiles = {};
for (const t of loaded.templates) {
  const file = path.join(t._dir, "PROFILE.md");
  if (fs.existsSync(file)) profiles[t.id] = fs.readFileSync(file, "utf8");
}
fs.writeFileSync(path.join(docs, "profiles.json"), JSON.stringify(profiles));

const agentHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bot contract · grok-bot-templates</title>
  <meta name="description" content="Paste this into a Grok Bot so it can list, fetch, and install scored templates from this catalog." />
  <link rel="canonical" href="${PAGES}/agent.html" />
  <style>
    :root { --bg:#07080f; --ink:#f6f7fb; --mute:#9aa3b8; --line:#2a3150; --card:#12162a; --accent:#5ce1e6; }
    body {
      margin:0; font-family:ui-sans-serif,system-ui,sans-serif; background:
        radial-gradient(900px 400px at 0% 0%, rgba(34,211,238,.16), transparent 50%), var(--bg);
      color:var(--ink); line-height:1.5;
    }
    .wrap { max-width:760px; margin:0 auto; padding:40px 20px 80px; }
    a { color:var(--accent); }
    pre { background:#05060d; border:1px solid var(--line); border-radius:12px; padding:14px 16px; overflow-x:auto; white-space:pre-wrap; }
    .copyrow { display:flex; gap:8px; align-items:center; margin:12px 0; flex-wrap:wrap; }
    button { background:var(--accent); color:#07080f; border:0; border-radius:999px; padding:8px 14px; cursor:pointer; font-weight:700; }
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
console.log(
  "docs/index.html  docs/agent.html  docs/profiles.json  docs/header.jpg"
);
