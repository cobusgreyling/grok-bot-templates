export const REPO = "cobusgreyling/grok-bot-templates";
export const RAW = `https://raw.githubusercontent.com/${REPO}/main`;
export const PAGES = `https://cobusgreyling.github.io/grok-bot-templates`;
export const GH = `https://github.com/${REPO}`;
export const START_URL = `${RAW}/START.md`;
export const NPX = "npx --yes github:cobusgreyling/grok-bot-templates";

export function profileUrl(t) {
  return `${RAW}/${t._rel}/PROFILE.md`;
}

export function treeUrl(t) {
  return `${GH}/tree/main/${t._rel}`;
}

export function teamUrl(team) {
  return `${RAW}/teams/${team.id}/team.yaml`;
}
