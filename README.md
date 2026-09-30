# FED-OS Monorepo

A unified, independently buildable home for the FED-OS ecosystem: browser-native tools, URL-to-app packaging, publishing utilities, and shared launch documentation.

## What is in this repository?

| Workspace | Purpose | Status |
|---|---|---|
| `packages/fed-shell` | URL-to-app build workflow and release contract | Scaffold / documentation-first |
| `packages/fed-poster` | Cross-platform publishing dashboard contract | Scaffold |
| `packages/fed-tts` | Offline text-to-speech and transcription contract | Scaffold |
| `packages/fed-temple` | Interactive contribution visualization contract | Scaffold |
| `packages/surf-fed-browser` | Browser shell contract | Scaffold |
| `packages/fed-dup` | Federated repository duplication contract | Scaffold |
| `site/` | FED-OS landing page and shared static web assets | Functional static site |
| `docs/launch/` | Product Hunt, press, FAQ, launch, store, Show HN, and social copy | Drafts |
| `docs/prompts/` | Landing-page, social-preview, wiki, and product prompts | Ready to adapt |

The packages are deliberately separated so each can evolve like an individual repository while sharing one root CI, governance model, docs set, and visual system.

## Quick start

```bash
# Install workspace tooling
npm install

# Validate repository structure and Markdown
make check

# Serve the static landing page locally
make site
```

Then open `http://localhost:4173`.

## Monorepo conventions

- Each package owns its own `README.md`, `package.json`, `CHANGELOG.md`, `docs/`, and `tests/` boundary.
- Cross-package conventions live in `docs/architecture/` and `shared/`.
- Root workflows orchestrate packages; package workflows remain independently callable.
- Secrets never belong in source files. Use `.env.example`, GitHub Actions secrets, or the platform's secret manager.
- Payment integrations are represented by provider links and environment-variable placeholders only; live keys and identifiers are intentionally excluded.

## Security and responsible publishing

This repository contains packaging and marketing scaffolding. It does not guarantee store approval, security, payment compliance, or rights to wrap third-party content. Read `SECURITY.md`, `docs/architecture/release-boundaries.md`, and the store checklist before using a package in production.

## License

MIT. See `LICENSE`.

Built by [FEDPromptly](https://www.fedpromptly.com/).
