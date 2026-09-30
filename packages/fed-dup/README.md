# FED-Dup

Database-free federated repository duplication and mirroring contract.

**Status:** scaffold. This package is intentionally shaped like an individual repository inside the FED-OS monorepo. It has its own manifest, changelog, docs, tests, and source boundary so it can mature independently or be extracted later.

## Package boundary

- Source: `src/`
- Tests: `tests/`
- Documentation: `docs/`
- Package metadata: `package.json`

## Local check

```bash
npm run check --workspace=@fed-os/fed-dup
```

## Next implementation milestone

See `docs/IMPLEMENTATION.md`. Do not represent this scaffold as a finished production app.
