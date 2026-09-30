# FED-Shell Store Submission Checklist

> **Purpose:** A practical release-control document for turning a tested FED-Shell build into a store submission. It does **not** guarantee approval and it is not legal, tax, or security advice.
>
> **Important:** Store requirements, fees, accepted identities, SDK rules, and review policies change. Verify all requirements in the official console immediately before committing to a launch.

## 0. Ownership and release gates

Before creating a production build, name the people accountable for the release.

| Responsibility | Owner | Backup | Evidence / link |
|---|---|---|---|
| Product quality / go-no-go | `VERIFY` | `VERIFY` | Test plan |
| Developer account owner | `VERIFY` | `VERIFY` | Account / organization record |
| Signing / certificates | `VERIFY` | `VERIFY` | Secure credential inventory |
| Privacy disclosure | `VERIFY` | `VERIFY` | Privacy policy + data map |
| Store listing / screenshots | `VERIFY` | `VERIFY` | Listing draft |
| Support / incident response | `VERIFY` | `VERIFY` | Support runbook |
| Finance / tax / payments | `VERIFY` | `VERIFY` | Payout / compliance contact |

**Non-negotiables**

- [ ] The developer account belongs to the publisher, not an individual contractor or tool.
- [ ] Private keys, keystores, certificates, and passwords are never committed to git or pasted into issues.
- [ ] A real person has tested the final signed build on each claimed platform.
- [ ] The store listing, privacy policy, and support route match the shipped product.

## 1. Current account costs and access

| Channel | Publicly stated baseline | Account / identity considerations | Official reference |
|---|---:|---|---|
| Apple Developer Program | **US$99 per membership year** | Individual or organization enrollment; organization enrollment requires legal-entity verification. App Store distribution and Apple signing workflow required. | <https://developer.apple.com/programs/whats-included/> |
| Google Play Console | **US$25 one-time registration fee** | Developer verification and account setup apply; use the appropriate personal or organization account. | <https://support.google.com/googleplay/android-developer/answer/6112435> |
| Microsoft Store | **Registration and publishing are described as free for individuals and companies** | Identity verification and Partner Center requirements still apply. Verify eligibility in the current flow. | <https://developer.microsoft.com/en-us/microsoft-store/register> |
| Mac App Store | Included in Apple Developer Program membership | Requires Apple signing / distribution process and current App Store requirements. | <https://developer.apple.com/programs/whats-included/> |

> **Budget warning:** These are developer-program baseline fees, not total launch cost. Plan for hardware or hosted build capacity, code-signing operations, design, QA devices, accessibility review, localization, customer support, legal/privacy review, taxes, and any third-party services your product uses. Store revenue-share and payment terms vary; review the current agreements before choosing monetization.

## 2. Universal product-readiness checklist

### Product and ownership

- [ ] The wrapped URL is owned or licensed for this use.
- [ ] The URL uses HTTPS and has a production-grade uptime/support owner.
- [ ] Product name, icon, screenshots, and description are accurate and non-infringing.
- [ ] The app does not misrepresent affiliation with a third party.
- [ ] Rights are documented for content, media, APIs, trademarks, and user-generated content.
- [ ] Customer support contact and support URL are live.

### Experience quality

- [ ] First launch is understandable without a browser tutorial.
- [ ] Login, MFA, SSO, redirects, session expiry, password reset, and logout are tested.
- [ ] Slow-network, no-network, maintenance, and error states are useful.
- [ ] Deep links, external links, downloads, uploads, camera/file-picker flows, and payments are tested where applicable.
- [ ] Text scaling, keyboard navigation, screen readers, contrast, and reduced-motion expectations have been evaluated.
- [ ] The app does not feel like an empty or low-functionality website wrapper.
- [ ] All app-store claims match observable behavior.

### Privacy and policy

- [ ] A public privacy policy is live at a stable URL.
- [ ] Data collection is mapped for the web product **and** the packaged runtime / SDKs.
- [ ] App privacy labels / data-safety forms are completed from evidence, not guesses.
- [ ] Account deletion / data-access requirements have an owner where applicable.
- [ ] Age rating, content rating, user-generated-content controls, and moderation needs are reviewed.
- [ ] Payments and digital goods are reviewed against the current store policies.
- [ ] Country, export, encryption, tax, and regulated-content questions are escalated to appropriate specialists.

### Build provenance

- [ ] The release is built from an approved tag / commit.
- [ ] CI logs show the configuration and build identifiers used.
- [ ] Artifact names include platform, version, and build traceability.
- [ ] Dependencies and Actions are reviewed / pinned as appropriate.
- [ ] Secrets are stored in approved secret management and access is limited.
- [ ] A rollback plan and previous known-good version exist.

## 3. Signing: safe operating model

### General rules

- Never put signing passwords, private keys, provisioning profiles, keystores, or API keys in the repository.
- Use least-privilege service accounts and secure secret storage.
- Record the credential owner, recovery process, expiration date, and rotation date in a private credential inventory.
- Test the **signed** release candidate, not only a debug or unsigned build.
- Keep developer-account ownership separate from day-to-day build automation where the platform allows it.

### iOS / Apple signing checkpoint

- [ ] Active Apple Developer Program membership is confirmed.
- [ ] App ID / bundle identifier is reserved in the correct team.
- [ ] Signing certificate and provisioning profile (or documented cloud-signing method) are valid and access-controlled.
- [ ] Distribution method is selected: TestFlight, App Store, or another eligible route.
- [ ] App Store Connect record, version, build number, and compliance information are ready.
- [ ] Build has been installed through the intended distribution/test channel.
- [ ] Export-compliance and encryption questions are answered accurately.

### Android signing checkpoint

- [ ] Package name is final and owned by the correct publisher account.
- [ ] Upload key / app-signing setup is generated, backed up securely, and access-limited.
- [ ] Production artifact uses the format currently accepted by Google Play (`VERIFY current requirement, commonly Android App Bundle`).
- [ ] Version code and version name advance correctly.
- [ ] Play App Signing choice and key-recovery plan are documented.
- [ ] Release artifact has been tested on physical devices and target Android versions.

### Windows signing checkpoint

- [ ] Publisher identity and distribution route are selected: Microsoft Store, direct distribution, enterprise, or another approved route.
- [ ] Package identity, version, architecture, and installer type match the chosen route.
- [ ] If distributing directly, code-signing / reputation implications are understood and the final installer is tested.
- [ ] If publishing in Microsoft Store, Partner Center listing and certification information are ready.

### macOS signing / notarization checkpoint

- [ ] Apple developer membership and Team ID are confirmed.
- [ ] Bundle identifier, version, and entitlements are reviewed.
- [ ] Distribution path is selected: Mac App Store or direct distribution.
- [ ] For direct distribution, signing and notarization requirements are verified against current Apple documentation.
- [ ] Final app is tested on a clean Mac and the intended macOS range.

> **FED-Shell integration note:** `VERIFY exactly what the workflow builds, signs, or leaves to the publisher. Do not claim automated signing unless it has been tested and documented for the current release.`

## 4. Store-specific submission steps

### Apple App Store

1. [ ] Create the App Store Connect app record under the publisher’s account.
2. [ ] Set app name, subtitle, bundle ID, SKU, primary category, age rating, availability, and pricing.
3. [ ] Upload a signed build through the supported current method.
4. [ ] Complete app privacy, content rights, export compliance, and review-information sections accurately.
5. [ ] Add device-appropriate screenshots, description, keywords, support URL, marketing URL (if used), and privacy-policy URL.
6. [ ] Test via TestFlight and resolve crashes / review-blocking issues.
7. [ ] Submit for review only after the final metadata matches the final binary.

**Common rejection risks to test:** minimal or incomplete functionality; broken login; misleading metadata; third-party content/brand misuse; missing privacy disclosures; poor account/deletion handling; inappropriate purchase flow; review team cannot access core functionality; a website-only experience without enough app-quality value.

### Google Play

1. [ ] Set up the app in Play Console under the correct publisher account.
2. [ ] Choose package name, app category, contact details, and release track.
3. [ ] Upload the signed production candidate in the currently accepted format.
4. [ ] Complete Data safety, content rating, target audience, ads, app-access, and policy declarations accurately.
5. [ ] Add store listing, screenshots, icon, feature graphic, privacy-policy URL, and support contact.
6. [ ] Use internal/closed testing before production where appropriate or required.
7. [ ] Resolve pre-launch reports and policy warnings before promoting.

**Common rejection risks to test:** inaccurate Data safety form; inaccessible review login; unsupported or outdated target SDK; broken navigation; deceptive behavior; unauthorized content; poor handling of permissions; payment-policy violations; spammy or low-value app experience.

### Microsoft Store

1. [ ] Register the publisher in Partner Center and verify identity requirements.
2. [ ] Reserve the product name and create the product record.
3. [ ] Confirm the package format, identity, architectures, and supported Windows versions.
4. [ ] Upload the final package and complete age ratings, markets, pricing, description, screenshots, privacy policy, and support information.
5. [ ] Test store installation and update behavior.
6. [ ] Submit only when the final listing accurately describes the package.

**Common rejection risks to test:** installation failure; inaccurate system requirements; misleading screenshots; missing privacy/support information; content-rating mismatch; inaccessible core features; malware or policy concerns.

### Mac App Store / direct macOS distribution

1. [ ] Decide whether the Mac App Store or direct distribution is the appropriate channel.
2. [ ] Confirm bundle ID, version, signing, entitlements, sandboxing requirements (for the store route), and any notarization requirements (for the direct route).
3. [ ] Prepare accurate screenshots, support URL, privacy policy, categories, and review notes.
4. [ ] Test on clean systems and supported macOS versions.
5. [ ] Validate install, launch, update, login, external links, and uninstall behavior.

**Common rejection / distribution risks to test:** invalid signature; missing/notarization errors; unsupported entitlement use; incorrect sandbox behavior; login/review blockers; missing privacy disclosures; incomplete functionality.

## 5. Metadata and creative pack

Create this once and adapt only where platform requirements differ.

- [ ] Product name and short name
- [ ] Subtitle / short description
- [ ] Full description
- [ ] Search keywords / category rationale
- [ ] App icon source files and platform exports
- [ ] Screenshots from current build on real target devices
- [ ] Feature / promotional graphic where required
- [ ] Privacy-policy URL
- [ ] Support URL and support email
- [ ] Marketing URL, if used
- [ ] Review notes and safe test credentials, if required
- [ ] Accessibility statement or support information, if applicable
- [ ] Release notes

## 6. Pre-submit test script

Run the script on every platform you claim.

| Test | Pass criteria | Evidence |
|---|---|---|
| Clean install | Installs without unexpected prompts/errors | Screen recording / tester sign-off |
| First launch | Clear, complete, branded first experience | Screenshot / notes |
| Authentication | Valid account can sign in and sign out | Test account result |
| Core task | User completes the primary job end to end | Test case result |
| Network loss | Helpful recovery path, no dead end | Screen recording |
| External navigation | Links behave intentionally and safely | Test result |
| Updates | New version upgrades correctly | Upgrade test |
| Privacy links | All links resolve and match the product | Link check |
| Support | User can reach real support route | Ticket / confirmation |
| Store metadata | Binary, screenshots, and claims are consistent | Owner sign-off |

## 7. Submission-day control list

- [ ] Freeze non-essential product and metadata changes.
- [ ] Confirm the final source tag, CI run, artifact hash/version, and signing status.
- [ ] Capture final screenshots from the actual production candidate.
- [ ] Recheck official console warnings and current policy prompts.
- [ ] Ensure the review team can access all core functionality with provided instructions.
- [ ] Submit only under the publisher-controlled account.
- [ ] Record the submission date, version, owner, and review links.
- [ ] Prepare an approved response for rejection, delay, or user-support questions.

## 8. If the app is rejected

1. Read the exact notice and save it with the release record.
2. Do not make assumptions about the reason.
3. Classify the issue: product quality, policy, metadata, privacy, account, or technical signing/build.
4. Reproduce it on the submitted build where possible.
5. Make the smallest defensible fix; update documentation and disclosures if required.
6. Retest the signed build and compare it to the final listing.
7. Appeal only when you have concrete, policy-based evidence.
8. Turn the lesson into a permanent checklist or automated test.

## Sources to revisit at release time

- Apple Developer Program: <https://developer.apple.com/programs/whats-included/>
- Apple developer account enrollment: <https://developer.apple.com/help/account/membership/program-enrollment/>
- Google Play Console setup: <https://support.google.com/googleplay/android-developer/answer/6112435>
- Microsoft Store developer registration: <https://developer.microsoft.com/en-us/microsoft-store/register>
- Apple App Review Guidelines: <https://developer.apple.com/app-store/review/guidelines/>
- Google Play policy center: <https://play.google.com/about/developer-content-policy/>
- Microsoft Store policies: <https://learn.microsoft.com/windows/apps/publish/store-policies>

> **Final sign-off:** This document is a release aid. The current official policy and developer console controls are authoritative.
