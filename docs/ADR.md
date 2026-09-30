# Architecture Decision Records

## ADR-001: Unified repository-shaped workspaces

Accepted: 2026-09-30. Keep each product under `packages/` with its own README, manifest, docs, and tests so it can be developed as an individual repository and extracted later.

## ADR-002: No payment secrets in source

Accepted: 2026-09-30. Payment integrations use public provider links or environment placeholders. Live IDs, keys, and merchant configuration remain outside git.
