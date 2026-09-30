# Show HN — FED-Shell Draft

> **Goal:** Invite skeptical technical feedback, not broad launch applause. Show HN readers reward specifics, reproducibility, and candid trade-offs.
>
> **Do not submit** until the public repository, README, LICENSE, SECURITY.md, issue templates, and a working example are available without login.

## Title options

Choose the most literal title that the repository can support.

1. **Show HN: FED-Shell – Turn a URL into supported app builds with GitHub Actions**
2. **Show HN: FED-Shell – A versioned GitHub Actions workflow for URL-to-app packaging**
3. **Show HN: I built a GitHub Actions workflow for packaging an existing web URL**
4. **Show HN: FED-Shell – Reproducible app artifacts from a configured web URL**
5. **Show HN: A CI-first URL wrapper for app-package experiments**
6. **Show HN: FED-Shell – Package a web product without starting a separate app project**
7. **Show HN: FED-Shell – GitHub Actions as a control plane for web-to-app builds**
8. **Show HN: An open workflow for testing a web product as an installed app**
9. **Show HN: FED-Shell – A URL-to-artifact workflow (not a store-approval shortcut)**
10. **Show HN: I’m exploring a more repeatable web-to-app release workflow**

### Recommended title

**Show HN: FED-Shell – Turn a URL into supported app builds with GitHub Actions**

It is explanatory, makes no inflated uniqueness claim, and does not bury the core mechanism.

---

## Post body

Hi HN — I’m sharing **FED-Shell**, a project for teams that already have a useful web experience and want a more repeatable way to test it as an installed app.

The premise is simple: configure an existing URL and the relevant app identity in a repository, then use a GitHub Actions workflow to produce the app build artifacts supported by the current release.

Repository: `VERIFY: public GitHub URL`  
Documentation: `VERIFY: docs URL`  
Example workflow run / artifacts: `VERIFY: public example URL`

I started working on this because “make the web app available as an app” often becomes a separate delivery project. There is packaging setup, a machine-specific toolchain, credentials, a hard-to-reconstruct set of steps, and a gap between the web product’s release process and the app artifact someone needs to test.

FED-Shell tries to put the packaging step in a more reviewable place. The URL, application identity, and build workflow can be versioned. A change can go through a pull request. The build run becomes an artifact trail. A tester can point to a specific output rather than a vague local setup.

I want to be clear about the boundary: FED-Shell is not an “instant App Store approval” tool, and it is not a claim that any URL should become an app. A good release still depends on the target experience, authentication behavior, platform testing, signing, privacy disclosure, content rights, and the policies of the distribution channel. The publisher owns those responsibilities.

The project is aimed at the cases where the browser product already delivers the value and a team wants a practical distribution experiment before deciding whether to invest in a custom native application. If you need deep device integrations, sophisticated offline behavior, or full control over the native layer, a general framework like Tauri is likely a better fit. If you only need a desktop wrapper, Pake may be the more direct choice. If you have a strong PWA and store packaging is the priority, PWABuilder is relevant.

The current release supports: `VERIFY: exact platform / architecture / artifact matrix`. The current license is: `VERIFY: license`. The biggest technical limitations today are: `VERIFY: concrete, candid limitations`.

I would value feedback on three things:

1. Is the GitHub Actions–centered workflow a meaningful improvement over existing approaches for your team?
2. Which part of a URL-to-app pipeline is most likely to fail in practice—configuration, build reproducibility, signing, testing, or store readiness?
3. What would you need to see in the repo before trusting it with a non-trivial internal tool or customer-facing product?

I’ll answer questions directly and would especially appreciate reports from people who have shipped PWA, Tauri, Pake, Capacitor, Electron, or app-store workflows.

---

## First comment (optional)

A few implementation and expectation notes up front:

- The initial target is a **repeatable workflow**, not a feature-complete app framework.
- We do not claim guaranteed approval in any store.
- The workflow should never require committing signing material or production secrets.
- The example project is intentionally small; it is meant to be inspected and changed.
- We are documenting failure modes and store-readiness requirements because a green CI badge alone is not a release signal.

If the repo has a specific runtime, schema, action version, build container, cache strategy, or artifact format, add it here with links to the exact code paths. Technical readers should not have to infer core architecture from marketing copy.

## Five-answer reply bank

### 1. “How is this different from Pake?”

> Pake is a mature, desktop-oriented tool for turning webpages into apps through a CLI / online-build path. FED-Shell is positioned around a GitHub Actions repository workflow for generating supported app artifacts from a configured URL. There is overlap, but the emphasis is different. If the job is simply desktop packaging, Pake may be the more direct choice. I included the comparison because I do not think users benefit from pretending every adjacent tool is interchangeable.

### 2. “Isn’t this just a webview wrapper?”

> The target web experience remains central, so it is fair to ask that. The contribution we are trying to make is the release workflow: versioned configuration, GitHub Actions, traceable build artifacts, and clearer boundaries around what the publisher still owns. That does not make a weak website into a good app. We explicitly recommend testing the actual experience and choosing a framework instead when deeper native behavior is the product requirement.

### 3. “How do you handle signing and credentials?”

> `VERIFY WITH ACTUAL IMPLEMENTATION.` The security model should be fully documented before launch. The non-negotiable rule is that private keys, keystores, certificates, and passwords must not be committed to git. If the workflow uses GitHub Actions secrets or an external credential store, the README should explain the scope, access control, rotation, and what the user must set up. I will not claim automated signing until it is tested and documented end-to-end.

### 4. “Will Apple / Google accept this?”

> No tool can guarantee that. A generated build is not the same as an approved listing. The publisher is responsible for functionality, differentiation, account ownership, signing, privacy disclosures, review access, payments, content rights, and current policies. FED-Shell can make packaging repeatable; it does not bypass review or remove that responsibility.

### 5. “Why not just use Tauri?”

> Tauri is a cross-platform application framework and is a good choice when the work is to build an application with native integrations and control over the app layer. FED-Shell is for a narrower situation: an existing web product is already doing the job, and the next need is a repeatable packaging workflow. I see them as different layers, not a universal replacement story.

## More likely questions—prepare exact answers

| Question | What must be ready before posting |
|---|---|
| What platforms and architectures are supported? | Tested matrix + artifact examples |
| What does the config look like? | Public schema and minimal working example |
| What runtime does the output use? | Precise architecture description |
| How are credentials secured? | Security model and setup docs |
| How is the URL restricted / validated? | Implementation behavior and threat model |
| What does “native app” mean here? | Plain-language runtime / capability boundary |
| What is the license? | LICENSE in repository root |
| What happens when the target site is down? | Documented error behavior and test results |
| How is login handled? | Auth compatibility notes, not assumptions |
| Why would a user choose this over existing tools? | Specific workflow difference + fair comparison |

## Posting protocol

### Before submission

- [ ] Publish from a founder / maintainer account able to answer technical questions.
- [ ] Have two independent people complete the README quick start.
- [ ] Make repository, releases, issues, and security contact public.
- [ ] Link a real example build or CI run with no private data.
- [ ] Identify the exact technical owner for each likely question.
- [ ] Remove growth language, fundraising language, and claims of “first/best/revolutionary.”

### First 24 hours

- [ ] Answer factual questions with source links or exact repository paths.
- [ ] Thank criticism and address the substance; do not argue about intent.
- [ ] Correct errors publicly and update the README when a question reveals ambiguity.
- [ ] Do not promise dates or features unless the maintainer has approved them.
- [ ] Capture feature requests separately from discussion replies.

### After the thread

- [ ] Add an FAQ entry for the three most repeated questions.
- [ ] Create issues for reproducible bugs and documentation gaps.
- [ ] Publish a short follow-up with what changed as a result of feedback.
