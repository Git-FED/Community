# Monorepo architecture

Each `packages/*` directory is a repository-shaped workspace. The root owns shared policy, documentation, static site assets, and orchestration. A package may later be split into its own repository using its local README, changelog, tests, and source boundary.

## Dependency direction

- Package → its own source and tests.
- Package → `shared/` only for stable, documented contracts.
- Site → `shared/` assets and public package metadata.
- Root CI → packages; packages do not depend on CI implementation details.

The first implementation pass is documentation-first for the product workspaces because the attachment describes product contracts rather than complete source implementations.
