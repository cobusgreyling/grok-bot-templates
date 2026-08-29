# Convert CLAUDE.md / Claude Code agent

Attach `CLAUDE.md`, `.claude/agents/*.md`, or a plugin SKILL.md.

Map:

| Claude Code | Grok Bot |
|-------------|----------|
| Project memory / CLAUDE.md | Bot **description** (standing rules only — not the whole repo dump) |
| Agent file `description` | `job` + `tagline` |
| Tools allowlist | `approval_never` (invert: tools not allowed become never) |
| Skills | `skills/` six-field YAML |
| Subagents | Other Bots + a group. Do not stuff five jobs into one description |
| Hooks | Routines only after two good runs |

Claude Code lives in a git repo. Grok Bot lives on a **shared cloud computer**. Do not assume repo isolation. Put durable files in `/workspace/<id>/`.

If the agent was allowed `git push` to main, that does **not** transfer. Catalog default: never push, never merge.
