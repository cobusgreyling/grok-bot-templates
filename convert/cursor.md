# Convert Cursor rules

Grok Bot already uses a Cursor account. That does not mean `.cursor/rules` are loaded.

Attach the rule files. Extract standing rules that should survive any thread (approval boundaries, house style, "never touch prod"). Leave file-specific rules in a `/workspace` doc the Bot can reopen — do not paste a 4k-line ruleset into the description.

If the rule says "always apply to `**/*.ts`", say so in `working_style` and name the repo path on the shared computer.

Default L1. Cursor cloud agents and Grok Bot cloud computer are different products. Do not claim you can launch a Cursor cloud agent unless that tool is actually present.
