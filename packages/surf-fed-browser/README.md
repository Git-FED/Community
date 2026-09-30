# Surf-FED Browser

Electron browser shell with extension-aware navigation contract.

**Status:** scaffold. This package is intentionally shaped like an individual repository inside the FED-OS monorepo. It has its own manifest, changelog, docs, tests, and source boundary so it can mature independently or be extracted later.

## Package boundary

- Source: `src/`
- Tests: `tests/`
- Documentation: `docs/`
- Package metadata: `package.json`

## Local check

```bash
npm run check --workspace=@fed-os/surf-fed-browser
```

## Next implementation milestone

See `docs/IMPLEMENTATION.md`. Do not represent this scaffold as a finished production app.
