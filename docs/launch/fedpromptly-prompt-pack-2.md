# FEDPromptly Prompt Pack 02 — From Web Product to Release-Ready App Experience

> **Use:** 20 copy-and-paste prompts for makers preparing a web product for an installed-app path. They are designed to produce useful working documents—not to replace security review, platform policy review, legal advice, or real device testing.
>
> **How to use:** Replace bracketed fields. Attach your existing product copy, screenshots, analytics summary, release notes, or test results where a prompt asks for evidence. Instruct the model to label unknowns rather than invent them.

## Prompt 1 — Packaging fit assessment

```text
Act as a product and release strategist. Assess whether [PRODUCT NAME], a [TYPE OF WEB PRODUCT], is a good candidate for a URL-wrapper app build.

Context:
- Product URL: [URL]
- Core user job: [JOB]
- Target users: [USERS]
- Target platforms: [PLATFORMS]
- Current web dependencies: [AUTH, PAYMENTS, CAMERA, FILES, PUSH, ETC.]
- Offline expectation: [NONE / LIMITED / STRONG]

Return:
1. A one-paragraph recommendation.
2. A fit score from 1–5 with reasoning.
3. The three strongest reasons to proceed.
4. The five highest-risk gaps.
5. A decision table: wrapper workflow vs PWA work vs full cross-platform app framework.
6. Unknowns that must be tested on real devices.

Do not claim store approval or native capability without evidence.
```

## Prompt 2 — URL readiness audit

```text
Create a test plan for this target URL before it is packaged into an installed app: [URL].

Cover first load, slow connections, offline behavior, redirects, authentication, MFA, SSO, pop-ups, deep links, external links, uploads, downloads, payments, session expiry, logout, error states, accessibility, and support contact.

For each test, include: purpose, setup, steps, expected result, severity if it fails, and platform notes. Label tests that need an actual Android, iOS, Windows, or macOS build.
```

## Prompt 3 — App identity brief

```text
Turn the following web product information into a concise app identity brief for a packaging workflow.

Product: [NAME]
URL: [URL]
Audience: [AUDIENCE]
Core benefit: [BENEFIT]
Brand traits: [3–5 TRAITS]
Existing brand assets: [LIST]
Target platforms: [LIST]

Return a table with: app name, short name, subtitle, bundle/package ID suggestions, icon concept, launch-screen message, support URL, privacy-policy URL, and words to avoid. Flag every item that needs legal, brand, or platform review.
```

## Prompt 4 — Store-quality gap analysis

```text
You are a skeptical app-reviewer and UX lead. Review this product description and release evidence for quality gaps that could make an installed app feel like an incomplete website.

[PASTE DESCRIPTION, SCREENSHOTS, OR TEST NOTES]

Return:
- 10 concrete quality concerns, prioritized.
- The user impact of each concern.
- Whether it is a web fix, app-wrapper configuration fix, metadata fix, or policy question.
- The minimum evidence needed to close each concern.

Do not make up store policies. Where policy may matter, say “verify current platform policy.”
```

## Prompt 5 — Release-scope decision

```text
We have these target platforms: [PLATFORMS]. We have [TEAM SIZE] people and [TIME WINDOW] before launch.

Based on this product: [DESCRIPTION], create a phased release recommendation.

Provide:
1. A suggested first platform and why.
2. A “now / next / later” platform plan.
3. A minimal launch scope.
4. Features that should be excluded from v1 if not fully tested.
5. A risk register with owner, mitigation, and go/no-go date.

Use conservative assumptions and label any assumption you make.
```

## Prompt 6 — GitHub Actions release review

```text
Review this GitHub Actions workflow and configuration for release-process risks.

[PASTE WORKFLOW YAML AND CONFIG]

Identify:
- secrets exposure risks;
- unpinned Actions or dependency risks;
- missing environment protections;
- artifact naming and retention weaknesses;
- absent approval gates;
- missing provenance or traceability data;
- documentation gaps for a new maintainer.

Return a severity-ranked findings table and safe, specific remediation suggestions. Never expose or echo secret values.
```

## Prompt 7 — Artifact naming convention

```text
Design an artifact naming convention for [PRODUCT NAME] builds made by GitHub Actions.

Inputs available: version, git SHA, branch/tag, build number, platform, architecture, signing state, release channel, timestamp.

Return:
- a human-readable naming format;
- a machine-sortable naming format;
- examples for [PLATFORMS];
- metadata that should appear inside each release;
- a retention and traceability recommendation.

Avoid including private URLs, credentials, customer names, or personal data in filenames.
```

## Prompt 8 — Privacy disclosure inventory

```text
Create a privacy-disclosure inventory for [PRODUCT NAME].

Known product behavior:
[PASTE DATA FLOWS, ANALYTICS, AUTH, PAYMENTS, CRASH REPORTING, SUPPORT TOOLS]

Separate:
1. data handled by the web product;
2. data handled by the app runtime or wrapper, if any;
3. build-time data and credentials;
4. unknowns that require engineering confirmation.

Return a table with data type, purpose, recipient, retention question, user control, disclosure owner, and evidence needed. Do not write a legal privacy policy and do not assume no data is collected.
```

## Prompt 9 — App-store listing draft

```text
Write an app-store listing draft for [PRODUCT NAME] based only on the facts below.

[FACTS]

Produce:
- app name;
- subtitle / short description;
- 80-word description;
- 300-word description;
- keyword themes (not a spam list);
- five screenshot captions;
- support and privacy CTA text;
- claims that must not be made without proof.

Use plain language. Do not claim “best,” “secure,” “private,” “AI-powered,” “offline,” or platform compatibility unless explicitly supported by the facts.
```

## Prompt 10 — Product Hunt launch copy

```text
Create a grounded Product Hunt launch kit for [PRODUCT NAME].

Facts we can substantiate:
[FACTS]

Return:
- 5 taglines under [LIMIT] characters;
- one 150-word listing description;
- a maker comment that asks for specific feedback;
- five gallery captions;
- six response macros for likely questions;
- a list of claims that need proof before publishing.

Avoid hype, guaranteed results, or unverified competitor comparisons.
```

## Prompt 11 — Show HN post

```text
Draft a Show HN post for [PROJECT NAME], an open-source / public project that [VERIFIED PURPOSE].

Include:
- 10 title options that avoid marketing language;
- a 350–500 word body focused on what was built, why it exists, how it works, trade-offs, and a request for technical feedback;
- five candid replies for likely Hacker News questions;
- a “what we are not claiming” section.

Ground every technical statement in these facts: [FACTS].
```

## Prompt 12 — Comparison article

```text
Write a fair comparison between [OUR PRODUCT] and [ALTERNATIVES].

For each product, use only these confirmed source notes:
[PASTE SOURCES]

Structure the article around user jobs, not superiority. Include a “best fit / not best fit” section for each option, a decision tree, and a fact-check appendix. Flag claims requiring a source rather than inventing specifications.
```

## Prompt 13 — Support FAQ from real questions

```text
Cluster these user questions into a publishable FAQ for [PRODUCT NAME]:

[PASTE QUESTIONS]

For each answer:
- answer directly in 2–5 sentences;
- distinguish product behavior from user responsibility;
- use “verify current policy” for platform rules that can change;
- label missing answers as “needs owner input.”

End with a list of documentation gaps revealed by the questions.
```

## Prompt 14 — First-run onboarding

```text
Design a first-run experience for an installed version of [PRODUCT NAME].

User goal: [GOAL]
Known friction: [FRICTION]
Authentication method: [METHOD]
Permissions potentially needed: [LIST]

Return a six-screen maximum flow with screen purpose, copy, CTA, optional skip state, error recovery, and accessibility notes. Do not add permissions unless they are necessary and supported.
```

## Prompt 15 — Failure-state copy

```text
Write concise, empathetic failure-state copy for a packaged web product with these scenarios:

[LIST: no connection, timeout, unsupported login, expired session, maintenance, missing permission, invalid link, server error]

For every scenario provide: title, message, primary CTA, secondary CTA, diagnostic detail visibility, and accessibility announcement. Avoid blaming the user and do not expose implementation details or private URLs.
```

## Prompt 16 — Launch instrumentation plan

```text
Design a minimal, privacy-conscious launch measurement plan for [PRODUCT NAME].

Business question: [QUESTION]
Current analytics tools: [TOOLS]
Privacy constraints: [CONSTRAINTS]

Return only the events and properties necessary to answer the business question. Separate web-product events from build/release workflow events. Include opt-out, retention, owner, and documentation fields. Flag where user consent or policy review may be required.
```

## Prompt 17 — Incident response drill

```text
Create a tabletop exercise for a failed release of [PRODUCT NAME] distributed as an installed app.

Scenario: [e.g., broken login after release, URL misconfiguration, leaked signing credential, incorrect privacy label]

Include timeline, roles, decision points, customer communication draft, rollback options, evidence to preserve, and post-incident review questions. Do not include real secrets or instructions that bypass platform safeguards.
```

## Prompt 18 — Changelog entry

```text
Write a transparent changelog entry for [VERSION] of [PRODUCT NAME].

Changes:
[LIST]

Separate user-visible changes, fixes, known issues, migration actions, and developer/release notes. State only confirmed outcomes. If a change affects privacy, permissions, authentication, billing, or platform support, create a dedicated callout and flag it for owner review.
```

## Prompt 19 — Partner / agency handoff

```text
Create a concise handoff brief for an agency or partner packaging a client’s web product with [WORKFLOW / TOOL].

Include goals, scope boundaries, access requirements, credential-handling rules, review gates, artifact ownership, app-store account ownership, acceptance criteria, support handoff, and offboarding. Highlight decisions the client—not the agency or tool—must make.
```

## Prompt 20 — Release retrospective

```text
Facilitate a blameless release retrospective for [PRODUCT NAME].

Evidence available:
[BUILD LOGS, TEST RESULTS, SUPPORT QUESTIONS, METRICS, REVIEW FEEDBACK]

Return:
- what we expected;
- what actually happened;
- what helped;
- what surprised us;
- prioritized actions with owner and due date;
- documentation updates;
- experiments for the next release.

Avoid vague conclusions. Tie each action to a specific observation.
```

## Suggested packaging for publication

| Asset | Recommended format |
|---|---|
| Cover | 1600×900 image with “Prompt Pack 02” and one-line value proposition |
| Landing copy | “20 practical prompts for evaluating, packaging, testing, and launching a web product as an installed experience.” |
| Download | Markdown / Notion / Google Doc versions |
| CTA | `VERIFY: subscribe, download, or community CTA` |
| Attribution | “Adapted for your product; verify technical and policy claims before publishing.” |

## Quality bar for every generated output

- [ ] Uses supplied facts rather than assumptions.
- [ ] Labels unknowns explicitly.
- [ ] Never promises app-store approval.
- [ ] Separates build success from product readiness.
- [ ] Avoids handling or requesting sensitive credentials.
- [ ] Routes platform policy questions to current official guidance.
