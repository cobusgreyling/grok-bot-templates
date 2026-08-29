# Anatomy of a template

```
templates/engineering/pr-reviewer/
  template.yaml          source of truth (CI)
  PROFILE.md             paste into Edit Profile (generated)
  SETUP.md               plugins, first task, skill, routine (generated)
  README.md              catalog page (generated)
  examples/first-run.md  what "good" looks like (generated)
```

```
Job  →  Boundary  →  Skill  →  Routine  →  Team
 (who)    (never)     (how)     (when)     (handoff)
```

The PROFILE is the Bot **description**. It must remain true on an empty chat. The first task is the only prescribed **message**.

See [SPEC.md](../SPEC.md).
