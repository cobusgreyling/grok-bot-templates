const PATTERNS = [
  { name: "xai-api-key", re: /\bxai-[A-Za-z0-9]{10,}\b/ },
  { name: "openai-key", re: /\bsk-[A-Za-z0-9]{16,}\b/ },
  { name: "github-pat", re: /\bghp_[A-Za-z0-9]{20,}\b/ },
  { name: "github-fine-grained", re: /\bgithub_pat_[A-Za-z0-9_]{20,}\b/ },
  { name: "aws-access-key", re: /\bAKIA[0-9A-Z]{16}\b/ },
  { name: "private-key-block", re: /-----BEGIN (RSA |OPENSSH |EC )?PRIVATE KEY-----/ },
  { name: "slack-token", re: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/ },
  { name: "generic-bearer", re: /\b(api[_-]?key|secret|password|token)\s*[:=]\s*['\"][^'\"]{8,}['\"]/i },
];

export function findSecrets(text, file = "") {
  const hits = [];
  for (const p of PATTERNS) {
    const m = text.match(p.re);
    if (m) hits.push({ file, pattern: p.name, excerpt: m[0].slice(0, 24) });
  }
  return hits;
}

export const INTERNAL_URL_RE =
  /\b(https?:\/\/)(localhost|127\.0\.0\.1|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|intranet\.|[a-z0-9-]+\.internal)\b/i;
