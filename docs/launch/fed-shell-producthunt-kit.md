# FED-Shell — Product Hunt Launch Kit

> **Working draft — do not publish until every `VERIFY` field is resolved.**
>
> **Core, sourced positioning:** FED-Shell is described publicly as a universal build repository: provide one URL, trigger one GitHub Actions run, and receive installable native app packages for Android, iOS, Windows, and macOS. Confirm the current platform matrix and build outputs before launch.

## 1. Listing setup

| Field | Recommended entry | Status |
|---|---|---|
| Product name | **FED-Shell** | Ready |
| Short tagline | **Turn one URL into installable apps with one GitHub Actions run.** | Verify character limit in Product Hunt composer |
| Topics | Developer Tools · Open Source · GitHub · No-Code | Verify available topics |
| Website | `VERIFY: canonical product URL` | Required |
| GitHub | `VERIFY: canonical repository URL` | Required |
| Pricing | `VERIFY: free / OSS / hosted / paid details` | Required |
| Maker | `VERIFY: maker name and Product Hunt profile` | Required |
| Hunt date/time | `VERIFY: date, PT launch hour, comment owner` | Required |

## 2. Tagline options

Use **one**. Lead with the clearest, least-promissory option unless the release owner confirms a stronger claim.

1. **Turn one URL into installable apps with one GitHub Actions run.**
2. **A GitHub Actions workflow for turning a URL into native app builds.**
3. **Wrap a web experience for Android, iOS, Windows, and macOS.**
4. **Your URL, packaged for the platforms your users use.**
5. **From URL to app package—without rebuilding your product from scratch.**

### Recommended selection

**Turn one URL into installable apps with one GitHub Actions run.**

It says what happens, who it helps, and how it fits into an existing developer workflow—without claiming speed, package size, security, code signing, store acceptance, or specific runtime technology.

## 3. Product description

### Long description (recommended)

**FED-Shell helps teams turn a web experience into installable app packages without starting a separate native-app project.**

Give FED-Shell a URL, configure the app identity and platform settings, then trigger its GitHub Actions workflow. The goal is simple: move from a browser-first product to distributable Android, iOS, Windows, and macOS builds through a repeatable repository workflow.

That makes FED-Shell useful when you already have a useful web app, dashboard, portal, documentation experience, creator tool, or internal utility—and you want a more app-like delivery path without throwing away the web stack that already works.

FED-Shell is designed around a familiar developer control plane: versioned configuration, pull-request review, GitHub Actions, and release artifacts. You keep ownership of the URL and the publishing decisions; FED-Shell aims to reduce the packaging work between your web product and a platform-specific installable build.

**Before you launch:**

- Confirm the supported platform and architecture matrix.
- Test the target URL on each produced build.
- Set the final application name, icon, version, identifiers, privacy details, and signing credentials.
- Review each store’s current policy requirements before submitting.

**Links:**

- Repository: `VERIFY: GitHub URL`
- Documentation: `VERIFY: docs URL`
- Example build / release: `VERIFY: release URL`
- Issue tracker: `VERIFY: issues URL`

### Short description (if the composer is constrained)

FED-Shell is a GitHub Actions–driven URL wrapper that helps turn a web experience into installable app packages for supported desktop and mobile platforms.

## 4. Gallery plan

Do not use generic browser screenshots. Each image or short GIF should answer one launch question.

| Asset | Message | Suggested on-image copy | Required proof |
|---|---|---|---|
| 1. Hero | What FED-Shell does | `One URL → one Actions run → app builds` | Real completed run and artifacts |
| 2. Setup | How little users change | `Configure the URL and app identity` | Redacted config file |
| 3. Workflow | Where the work happens | `Build from a versioned GitHub workflow` | Workflow run screen |
| 4. Outputs | What users receive | `Platform packages, ready for your release process` | Exact current output names |
| 5. Validation | What remains the owner’s job | `You own testing, signing, and store submission` | Checklist excerpt |

### Gallery accessibility text

1. Diagram showing one product URL entering FED-Shell’s GitHub Actions workflow and producing platform-specific app build artifacts.
2. Example FED-Shell configuration with a URL, application name, identifiers, and icon fields redacted where sensitive.
3. GitHub Actions run showing discrete packaging jobs and their final status.
4. Release-artifact panel listing the builds actually produced by the current release.
5. Store-readiness checklist with testing, signing, privacy, and submission items.

## 5. Maker comment

Post this in the first 10 minutes, then reply from the maker account.

> Hey Product Hunt—I'm `VERIFY: maker name`, and I built **FED-Shell** for the moment when a web product is ready to be delivered more like an app.
>
> The core idea is deliberately simple: put your URL and app details in a versioned project, run GitHub Actions, and generate the installable packages supported by the workflow. We wanted a path that feels at home for teams already shipping on the web: reviewable configuration, reproducible builds, and release artifacts in the place your code already lives.
>
> FED-Shell is **not** a promise that every website is instantly store-ready. You still need to test the target experience, meet each platform’s policy, own your signing, and make clear privacy disclosures. The point is to remove avoidable packaging friction—not to hide the real release work.
>
> I would especially value feedback on:
>
> 1. Which platform should we make easiest first?
> 2. What configuration or output would make this trustworthy in your release process?
> 3. Where do URL-to-app tools currently let you down?
>
> Links: `VERIFY: repo` · `VERIFY: docs` · `VERIFY: discussion channel`
>
> Thanks for taking a look. I’ll be here all day to answer questions candidly.

## 6. Response macros

### “Is this just a webview?”

> FED-Shell packages a web experience, so the URL remains central to the product. The useful distinction is the release workflow: it gives teams a repeatable GitHub Actions path to supported platform artifacts. Please review the current runtime, permissions, offline behavior, and platform-specific features in the docs before adopting it for a production app.

### “Can I submit this to an app store?”

> Potentially, but store acceptance is never automatic. You are responsible for app quality, platform policy, signing, privacy disclosures, ownership of the wrapped content, and the store submission itself. We include a submission checklist and recommend testing real builds before planning a launch.

### “How is this different from Pake / PWABuilder / Tauri?”

> They overlap, but they sit at different layers. Pake focuses on packaging webpages as desktop apps; PWABuilder helps publish PWAs to app stores; Tauri is a general application framework. FED-Shell is positioned as a URL-to-artifact workflow centered on a GitHub Actions build. See the comparison article for the full, fair breakdown.

### “Is it free?”

> `VERIFY: state the exact license, pricing, and any hosted-service limits. Do not answer until this is confirmed.`

## 7. Launch-day runbook

### T-7 days

- [ ] Lock the product name, URL, source repository, license, and pricing statement.
- [ ] Run a clean build on every platform claimed on the page.
- [ ] Validate all gallery assets against the current release.
- [ ] Open a public issue/discussion channel and set response ownership.
- [ ] Publish the FAQ, README, comparison article, and store checklist.

### T-24 hours

- [ ] Proof every outbound link from a logged-out browser.
- [ ] Confirm the Product Hunt maker has publishing access.
- [ ] Prepare a first-comment link set with UTM parameters if used.
- [ ] Freeze claims that cannot be supported by current tests or docs.
- [ ] Assign two response windows: launch hour and final three hours.

### Launch day

- [ ] Publish the listing and maker comment.
- [ ] Verify the title, tagline, gallery ordering, and links on mobile and desktop.
- [ ] Respond to substantive questions with specifics; never invent roadmap commitments.
- [ ] Log recurring objections for the next FAQ and release notes.
- [ ] Post a closing update with what was learned and where feedback will be tracked.

## 8. Final publish gate

Do not submit until the release owner has initials next to all items:

- [ ] Platform matrix is exact and tested.
- [ ] Build artifacts and file extensions are accurate.
- [ ] License and pricing language is final.
- [ ] Runtime / privacy / analytics statements are accurate.
- [ ] Website, GitHub, documentation, and support links resolve.
- [ ] Store-readiness language says **eligible to submit**, never **guaranteed approval**.
