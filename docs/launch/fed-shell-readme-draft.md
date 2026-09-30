# FED-Shell — GitHub README Draft

> **Repository maintainer note:** This is a documentation draft, not an implementation specification. Replace every placeholder with the actual repository paths, configuration schema, workflow filenames, output types, license, and security contact before merging.

```md
# FED-Shell

> Turn an existing web URL into supported app build artifacts through a versioned GitHub Actions workflow.

[![Build](VERIFY: workflow badge URL)](VERIFY: workflow URL)
[![License](VERIFY: license badge URL)](VERIFY: license URL)
[![Release](VERIFY: release badge URL)](VERIFY: releases URL)

FED-Shell is a universal URL-wrapper build workflow for teams that already have a useful web experience and want a repeatable path to installable app builds for supported platforms.

**You own the product and the release.** FED-Shell helps package a URL; it does not guarantee store approval, replace platform testing, or remove signing, privacy, and policy responsibilities.

## What it does

1. Takes a target web URL and app configuration.
2. Runs a GitHub Actions workflow.
3. Produces the artifacts supported by the current release.
4. Gives you build outputs to test, sign, and distribute.

> **Current support:** `VERIFY: exact OS / architecture / package-type matrix, linked to a versioned release.`

## Before you start

Use FED-Shell only for a web experience you own or are authorized to distribute. Before treating any artifact as release-ready, plan to:

- test the target URL on every intended platform;
- test authentication, redirects, logout, errors, and reconnects;
- manage developer accounts and signing outside source control;
- publish accurate privacy information;
- review the latest platform and store rules.

## Quick start

### 1. Create a project from this repository

Use this repository as a template or fork it:

```text
VERIFY: exact GitHub template / fork instructions
```

### 2. Configure the app

Create or update the configuration file:

```text
VERIFY: configuration file path
```

The current release should document the exact required and optional fields. At minimum, most app packaging workflows need a target URL and application identity.

| Setting | Example | Required? | Notes |
|---|---|---:|---|
| Target URL | `https://app.example.com` | VERIFY | Must be a URL you are authorized to distribute |
| App name | `Example App` | VERIFY | May be constrained by target platform |
| App identifier | `com.example.app` | VERIFY | Must be unique where required |
| Version | `1.0.0` | VERIFY | Follow platform-specific version rules |
| Icon source | `./assets/icon.png` | VERIFY | Document exact size / format requirements |
| Platforms | `VERIFY` | VERIFY | List only platforms supported by this release |

### 3. Run the workflow

Choose the documented trigger:

```text
VERIFY: workflow filename, manual trigger, branch / tag rules, and input names
```

### 4. Download and test the artifacts

When the run succeeds, download the output from the Actions summary or release page:

```text
VERIFY: artifact names and retention behavior
```

Do not distribute the first successful build without platform testing.

## Configuration reference

> `VERIFY: Replace with the real schema and an example that passes CI.`

| Field | Type | Example | Description |
|---|---|---|---|
| `url` | string | `https://app.example.com` | Target web experience |
| `name` | string | `Example App` | User-facing application name |
| `identifier` | string | `com.example.app` | Package / bundle identity |
| `version` | string | `1.0.0` | Release version |
| `icon` | path / URL | `assets/icon.png` | Application-icon source |
| `platforms` | list | `VERIFY` | Requested build targets |

### Configuration safety

- Commit configuration, not private credentials.
- Use GitHub Actions secrets or the platform’s documented secure credential store for signing material.
- Restrict who can change the production URL and release workflow.
- Pin third-party Actions and review dependency changes.
- Use a staging URL for initial testing when possible.

## Outputs

| Platform | Artifact | Signing requirement | Distribution path |
|---|---|---|---|
| Android | `VERIFY` | `VERIFY` | Google Play / managed distribution / direct where permitted |
| iOS | `VERIFY` | `VERIFY` | TestFlight / App Store / managed distribution where eligible |
| Windows | `VERIFY` | `VERIFY` | Microsoft Store / direct / enterprise distribution |
| macOS | `VERIFY` | `VERIFY` | Mac App Store / notarized direct distribution |

> The platform matrix must match the exact release. Do not copy this table into public documentation until every cell is verified.

## Testing checklist

Before each release candidate:

- [ ] The target URL loads via HTTPS.
- [ ] Initial load, refresh, deep links, and external links behave as intended.
- [ ] Authentication, MFA, redirects, session expiry, and logout are tested.
- [ ] Empty, slow-network, offline, and error states are usable.
- [ ] App name, icon, version, identifier, and support links are correct.
- [ ] Privacy disclosures reflect both the wrapper and the web product.
- [ ] The final signed build—not only an unsigned artifact—is tested.

## Store readiness

A generated package is not a promise of approval. You are responsible for the target platform’s current policies, account status, signing, privacy labels, screenshots, metadata, payments, content rights, and customer support.

Read the release checklist: `VERIFY: repository-relative checklist link`.

## Comparison: where FED-Shell fits

- **FED-Shell:** GitHub Actions–centered workflow for packaging an existing URL into supported app artifacts.
- **Pake:** Webpage-to-desktop packaging through a CLI / online-build workflow. <https://github.com/tw93/Pake>
- **PWABuilder:** PWA assessment and app-store packaging. <https://www.pwabuilder.com/>
- **Tauri:** Cross-platform application framework for teams building deeper native integrations. <https://tauri.app/>

Read the full comparison: `VERIFY: repository-relative comparison link`.

## Contributing

We welcome documentation fixes, reproducible bug reports, and improvements that make the workflow safer and clearer.

Before opening an issue:

1. Search existing issues and discussions.
2. Test with the latest documented release.
3. Redact credentials, private URLs, user data, signing assets, and tokens.
4. Include the workflow run link or ID, target platform, expected result, actual result, and minimal reproduction steps.

- Bugs: `VERIFY: issue template URL`
- Ideas / Q&A: `VERIFY: discussions URL`
- Code of conduct: `VERIFY: code-of-conduct link`

## Security

Do **not** open a public issue for a suspected vulnerability, leaked credential, or security-sensitive behavior. See [SECURITY.md](VERIFY: SECURITY.md link) for the private reporting path.

## License

`VERIFY: exact license name and link.`

## Status and support

- Release status: `VERIFY: stable / beta / experimental`
- Documentation: `VERIFY: docs URL`
- Changelog: `VERIFY: changelog URL`
- Support: `VERIFY: support route`

---

Built by [FEDPromptly](https://www.fedpromptly.com/). `VERIFY: approved organization wording.`
```

## Maintainer merge checklist

- [ ] Convert the inner code block into the repository root `README.md`.
- [ ] Replace every `VERIFY` token with a tested source-of-truth link or remove the section.
- [ ] Run all commands and links from a clean clone.
- [ ] Add a real config example that is safe to publish.
- [ ] Publish `SECURITY.md`, `CONTRIBUTING.md`, a license, and issue templates before launch.
- [ ] Have a new user follow the Quick Start without author assistance.
