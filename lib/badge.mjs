/**
 * Bot Ready badge — SVG + shields.io markdown.
 * `grokbot score --badge` writes this so other repos can show the bar.
 */

function esc(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function textWidth(s) {
  return Math.ceil(s.length * 6.6 + 10);
}

export function badgeSvg({
  label = "bot ready",
  earned = 0,
  max = 100,
  ready = false,
} = {}) {
  const message = `${earned}/${max}`;
  const color = ready ? "#2e7d32" : "#c62828";
  const lw = textWidth(label);
  const mw = Math.max(36, textWidth(message));
  const w = lw + mw;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="20" role="img" aria-label="${esc(label)}: ${esc(message)}">
  <title>${esc(label)}: ${esc(message)}</title>
  <linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient>
  <clipPath id="r"><rect width="${w}" height="20" rx="3" fill="#fff"/></clipPath>
  <g clip-path="url(#r)">
    <rect width="${lw}" height="20" fill="#555"/>
    <rect x="${lw}" width="${mw}" height="20" fill="${color}"/>
    <rect width="${w}" height="20" fill="url(#s)"/>
  </g>
  <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11">
    <text x="${lw / 2}" y="15" fill="#010101" fill-opacity=".3">${esc(label)}</text>
    <text x="${lw / 2}" y="14">${esc(label)}</text>
    <text x="${lw + mw / 2}" y="15" fill="#010101" fill-opacity=".3">${esc(message)}</text>
    <text x="${lw + mw / 2}" y="14">${esc(message)}</text>
  </g>
</svg>
`;
}

export function badgeMarkdown({ earned = 0, max = 100, ready = false } = {}) {
  const color = ready ? "2e7d32" : "c62828";
  const url = `https://img.shields.io/badge/bot%20ready-${earned}%2F${max}-${color}`;
  return `![bot ready ${earned}/${max}](${url})`;
}

export function catalogScore(rows) {
  const n = rows.length || 1;
  const earned = Math.round(rows.reduce((s, r) => s + r.earned, 0) / n);
  const max = rows[0]?.max || 100;
  const ready = rows.every((r) => r.ready);
  return { earned, max, ready, count: rows.length };
}
