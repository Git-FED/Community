# Release boundaries

The monorepo separates **buildability**, **product readiness**, and **distribution approval**:

1. **Buildability:** code or static assets compile/package successfully.
2. **Product readiness:** the experience is tested for authentication, errors, accessibility, privacy, and support.
3. **Distribution approval:** a publisher-owned account, signing identity, metadata, and current platform policy are satisfied.

A green CI run proves only the first boundary. Do not describe a generated artifact as store-ready without evidence for the second and third boundaries.
