# Publish `@cobusgreyling/grokbot`

The CLI package name is `@cobusgreyling/grokbot`. Until it is on npm, use:

```bash
npx --yes github:cobusgreyling/grok-bot-templates <cmd>
```

## One-time npm setup

1. `npm login` as a user who can publish the `@cobusgreyling` scope.
2. Add `NPM_TOKEN` (automation token) to the GitHub repo secrets, **or** configure [trusted publishing](https://docs.npmjs.com/trusted-publishers) for this repo.
3. Confirm `.github/workflows/release.yml` is on `main`.

## Release

```bash
npm version 1.1.1
git push origin main --tags
```

The `v*` tag runs `npm publish --provenance --access public`.

After the first publish, README can lead with `npx @cobusgreyling/grokbot` again. Keep GitHub npx as the fallback.
