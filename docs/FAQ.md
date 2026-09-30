# Monorepo FAQ

### Are these six products fully implemented?

No. This commit provides a coherent monorepo foundation, repository-shaped package boundaries, public docs, shared static site, and safe validation. Each package explicitly identifies its implementation status rather than presenting a scaffold as production software.

### Why are payment IDs absent?

The attachment contained provider identifiers and a publishable Stripe key in HTML snippets. They are not required to establish the architecture and should not be hard-coded. The repo uses public provider links and environment placeholders instead.

### Can a package be split into its own repo later?

Yes. Copy the package directory plus any declared shared dependencies. The package README records its boundary and next steps.
