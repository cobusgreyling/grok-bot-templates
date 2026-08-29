# Templates

Each folder is `templates/<category>/<id>/` with `template.yaml` as the source of truth. Markdown is generated (`npm run render`).

```bash
npx @cobusgreyling/grokbot list
npx @cobusgreyling/grokbot init pr-reviewer --print
```

Categories: meta, engineering, product, sales, marketing, ops, support, research, personal, legal, finance, creator.

Featured / official-shaped jobs are flagged in YAML (`featured`, `official_use_case`).
