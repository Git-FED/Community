# FED-Shell FAQ

> **Status:** Public-facing copy draft. Replace `VERIFY` fields with release-specific facts before publishing.

## Basics

### What is FED-Shell?

FED-Shell is positioned as a GitHub Actions–driven workflow for turning an existing web URL into installable app packages for supported platforms. Its purpose is to make packaging an existing web experience more repeatable by putting configuration and builds in a versioned repository.

### Who is it for?

FED-Shell is for makers, product teams, agencies, and internal-tool teams that already have a web experience they want to distribute in a more app-like form. It is particularly relevant when the web product works today and creating a separate native application would be disproportionate to the goal.

### What does “one URL” mean?

You provide the web address that the generated app should load, along with the application identity and platform settings required by the release. It does **not** mean every URL is automatically appropriate for store distribution or that no further testing is required.

### What platforms does it support?

Current public positioning refers to Android, iOS, Windows, and macOS builds. **VERIFY the exact, current platform matrix, architectures, and output file types before publishing this answer.** Never imply Linux, web, or a store channel unless the active release documents it.

### Is FED-Shell a replacement for native app development?

No. FED-Shell is a packaging workflow for an existing web experience. A purpose-built native or cross-platform application may still be the right choice when you need deep device integrations, sophisticated offline behavior, custom native screens, high-performance graphics, or a fully controlled app runtime.

## Workflow and setup

### How does the workflow work?

At a high level: configure the URL and application details in the project, trigger the GitHub Actions workflow, download the generated artifacts, test them, then complete signing and any distribution steps appropriate for the target platform.

The exact configuration keys, build triggers, and artifact names must be documented in the project README. Link: `VERIFY: documentation URL`.

### Do I need to be a developer?

You need enough access and operational confidence to work with a GitHub repository and to own a release process. FED-Shell may reduce packaging work, but it does not remove the need to test builds, manage credentials, review platform rules, or maintain the web experience inside the app.

### Can I customize the app name and icon?

`VERIFY from the current configuration reference.` If the release supports these fields, document the exact file formats, dimensions, platform-specific constraints, and whether assets are generated or supplied by the user.

### Can I use a custom domain or a URL with authentication?

A custom URL can be the target only if it works reliably inside the generated app runtime. Authentication flows, cookies, redirects, SSO, MFA, deep links, and third-party identity providers should be tested on every target platform. Do not assume browser behavior and installed-app behavior are identical.

### Does it work with internal tools?

Potentially. Confirm that the target URL is reachable from the intended device and that your organization’s authentication, networking, device-management, privacy, and app-distribution policies permit the approach. Test with a non-production account first.

## Security, privacy, and quality

### Is FED-Shell secure?

No packaging tool can make an insecure website secure. The generated app depends on the security of its target URL, authentication, transport, runtime configuration, dependencies, credentials, and release process. Follow the project’s security guidance, use HTTPS, restrict who can change the target URL, and keep credentials out of the repository.

`VERIFY: security policy URL and any platform-specific safeguards.`

### Does FED-Shell collect analytics or user data?

`VERIFY.` State this precisely:

- Whether FED-Shell itself sends telemetry during builds or runtime.
- Whether the wrapped website collects data independently.
- Where a privacy policy applies.
- How users can request support or deletion where relevant.

Never say “no data is collected” unless it has been audited across the build workflow, runtime, and analytics configuration.

### Does it work offline?

Only if the target web experience and the generated runtime support the necessary offline behavior. A URL wrapper by itself should not be marketed as offline-capable. If offline use is important, test cold starts, reconnects, asset caching, error states, and logout behavior on each platform.

### Can I package a website I do not own?

Only with authorization. You are responsible for the rights to the website, its content, branding, APIs, authentication flows, and any store listing. Do not package third-party services in a way that misrepresents affiliation or violates their terms.

## Publishing and distribution

### Can I publish a FED-Shell app to the Apple App Store or Google Play?

You may be able to submit a build, but acceptance is never guaranteed. Stores evaluate app quality, uniqueness, functionality, privacy disclosures, ownership, payments, metadata, and compliance with current policy. Review the store checklist, test the actual build, and submit only under the appropriate developer account.

### Does FED-Shell handle code signing?

`VERIFY.` Describe exactly what the workflow automates versus what the release owner must provide. Never ask users to commit private keys, certificates, provisioning profiles, keystores, or passwords to the repository.

### Who owns the app listing and release credentials?

The release owner should control the developer accounts, signing identities, listing access, and production credentials. FED-Shell should be treated as a build workflow, not as an owner of the application’s commercial or legal identity.

### Does FED-Shell guarantee store approval?

No. No tool can truthfully guarantee store approval. FED-Shell can help generate and organize build artifacts; the publisher remains responsible for every submission and policy decision.

## Troubleshooting

### The generated app shows a blank screen. What should I check?

1. Confirm the URL loads over HTTPS in a standard browser.
2. Check redirects, authentication, content-security policies, and mixed-content errors.
3. Review build logs for configuration or asset errors.
4. Test the app on the target operating-system version and device class.
5. Capture reproducible steps, expected behavior, actual behavior, build ID, and redacted logs before opening an issue.

### Login works in my browser but not in the app. Why?

Installed apps may handle redirects, pop-ups, cookies, SSO, MFA, device trust, and third-party identity differently from a full browser. Validate the entire login and logout cycle on the generated build. Work with the identity provider owner if embedded or in-app authentication is restricted.

### Where should I report a bug or request a feature?

- Bugs: `VERIFY: GitHub Issues URL`
- Feature requests: `VERIFY: Discussions / issue template URL`
- Security reports: `VERIFY: private security-contact URL`
- Documentation feedback: `VERIFY: docs contribution URL`

## Choosing the right tool

### How is FED-Shell different from Pake?

Pake focuses on turning webpages into desktop apps through its CLI and online-build workflow. FED-Shell is positioned around a GitHub Actions repository workflow that produces supported app packages from a URL. Read the full comparison before selecting a tool; the right choice depends on the platform and workflow you need.

### How is FED-Shell different from PWABuilder?

PWABuilder is designed around Progressive Web App assessment and app-store publishing. FED-Shell is a URL-wrapper build workflow. A strong PWA may make PWABuilder a better fit; a CI-centered URL-to-artifact workflow may make FED-Shell a better fit. Neither removes the responsibility to meet store requirements.

### How is FED-Shell different from Tauri?

Tauri is a framework for building cross-platform applications. FED-Shell is positioned for packaging an existing URL through a repository workflow. Choose Tauri when you need to engineer an application; consider FED-Shell when the existing web experience is already the product you want to distribute.

## Final publishing checks

- [ ] Exact platform support is listed and tested.
- [ ] Signing answer reflects the actual release workflow.
- [ ] Analytics and privacy answer has an owner’s written approval.
- [ ] Security-reporting contact exists before public launch.
- [ ] Every `VERIFY` field is replaced or the question is withheld.
