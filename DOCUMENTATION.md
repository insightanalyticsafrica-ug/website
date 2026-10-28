# Insight Analytics Africa website: project documentation

This document records what has been done on the website so far, explains how it is organised, and
shows how to change it safely. Read it before making your first change.

- **Live site:** <https://insightanalyticsafrica-ug.github.io/website/>
- **Repository:** <https://github.com/insightanalyticsafrica-ug/website>
- **Built with:** [Astro](https://astro.build) 7 (static site), TypeScript, plain CSS
- **Hosted on:** GitHub Pages, deployed automatically by GitHub Actions

---

## Contents

1. [What we have done so far](#1-what-we-have-done-so-far)
2. [Decisions and why we made them](#2-decisions-and-why-we-made-them)
3. [Quick start](#3-quick-start)
4. [How the site is organised](#4-how-the-site-is-organised)
5. [Where to find what](#5-where-to-find-what)
6. [Common tasks](#6-common-tasks)
7. [Branches, review and deployment](#7-branches-review-and-deployment)
8. [Content rules](#8-content-rules)
9. [Design system](#9-design-system)
10. [Troubleshooting](#10-troubleshooting)
11. [Open to-dos](#11-open-to-dos)

---

## 1. What we have done so far

### Step 0. Starting point: the Lovable site (May–June 2026)

The first version of the site was generated with Lovable, a tool that produces a React + Vite
template, and hosted on GitHub Pages. Copies existed in two places:

- `ekiru111/insight-africa-ui` (personal GitHub account), still connected to Lovable.
- `insightanalyticsafrica-ug/website` (this repository), with commits from 29 May to 1 June 2026,
  including updated, correctly named team photos.

### Step 1. Code review of the old site (24 October 2026)

A review of the Lovable code found these problems:

| Problem | Effect on visitors |
| ------- | ------------------ |
| Navigation links were plain `#section` links | On case-study pages the menu and footer links did nothing |
| "Back to case studies" did not scroll | Visitors landed at the top of the home page |
| No fallback page for GitHub Pages | Refreshing or sharing a case-study link showed a GitHub 404 |
| The 404 page's "home" link ignored the site's path | It sent visitors off the site |
| The contact `mailto:` used a different address from the one displayed | Emails went to the wrong inbox |
| Two team photos were swapped | Wrong faces next to names |
| Social-share image pointed at a favicon file | Broken previews on WhatsApp, LinkedIn and others |
| A missing font and a 2.4 MB image | Wrong heading font, slow page loads |
| Invented statistics ("120+ clients", "15 years", "25+ nations", "+47% revenue") and unconfirmed partners (WHO, UNICEF, Gates Foundation…) | Credibility risk with funders and clients |
| About 50 unused template components, three lockfiles, committed build output | Hard to maintain |

The first five were fixed in the old code, but most problems came from the template itself.

### Step 2. Design exploration (24 October 2026)

Three landing-page concepts were mocked up on a design canvas using the real logo, photos and
research figures:

- **A · Refined Brand:** navy and gold, serif headings, editorial layout.
- **B · Research Lab:** dark, data-first, monospace details.
- **C · People & Places:** white, deep green and gold, bold sans-serif headings, people-first.

**Decision:** Concept C for the whole site, except the research section, which uses Concept A's
"Selected research / Our findings, in brief" layout.

### Step 3. Rebuild in Astro (24 October 2026, pull request #1)

The site was rebuilt from scratch on the `rebuild` branch of this repository:

- New Astro project with real HTML pages for the home page, each case study and a 404 page.
- Concept C design, with the research section in Concept A's layout.
- Content reused from the old site; photos and figures copied into `src/assets/`.
- The TB prediction manuscript added as a **third case study**, written from its abstract, with a
  PDF download.
- Invented statistics and unconfirmed partners removed. Partners now lists only Makerere
  University School of Public Health and IDRC, which appear in our studies.
- The correctly named team photos from this repository used, fixing the photo swap.
- All text moved into two data files (`src/data/site.ts` and `src/data/caseStudies.ts`).
- Images optimised automatically at build time (team photos went from about 2 MB to about 15 kB).
- Checked: type-check and build pass, all internal links include `/website/`, no sideways
  scrolling on phones.

### Step 4. Deployment fix (25 October 2026, pull request #2)

The first deploy after merging failed at `npm run build`. Astro 7 requires Node 22.23.4 or newer,
but the workflow asked for "Node 22", which can pick up an older cached version on GitHub's
servers. Fixed on the `fix-deploy-node` branch by:

- Pinning Node 24 in `.nvmrc` and using it in the workflow.
- Declaring the Node requirement in `package.json`.
- Updating the GitHub Actions to current versions.
- Building **every** branch push but deploying **only** `main`, so broken builds are caught before
  they reach the live site.

### Step 5. AI positioning (25 October 2026, pull request #3)

AI is central to how Insight Analytics Africa works, so the site was repositioned around it on the
`ai-positioning` branch:

- A new AI section after the hero, with three principles (validated, explainable, built for
  African data; the TB study is the example) and a "Where we apply AI" list.
- Services now lead with "AI & machine learning solutions" (shown as a large card) and
  "AI-powered systems development".
- "How we work" steps, About text, footer, page titles, search description and two case-study
  labels updated to match.

### Step 6. Local clean-up (25 October 2026)

- The old Lovable project was deleted from the local machine, after checking it held no unsaved
  work.
- This Astro project was moved into the folder previously used by the old project
  (`web_project\insight-africa-ui`), so there is only one copy locally. The folder name on disk
  differs from the repository name; that has no effect on GitHub or the live site.

### Step 7. AI wording corrected (28 October 2026, branch `ai-tone`)

The first AI wording sounded as if we had developed our own AI model. We use existing AI tools and
models in our work, so the wording was changed:

| Before | After |
| ------ | ----- |
| Hero: "We build AI that works and prove it." | "We use AI to turn data into decisions you can trust." |
| "Insight Analytics Africa is an AI startup founded by four biostatisticians…" | "Insight Analytics Africa is a data analytics and research company. We put today's AI tools to work…" |
| Section and menu link: "Our AI" | "AI in our work" |
| "AI built by biostatisticians, so it holds up in the real world" | "Proven AI tools, applied with care" |
| About: "An AI startup with clinical-grade rigour" | "Analytics and research with clinical-grade rigour" |
| Services: "led by a founding biostatistician" | "led by one of our founders" |

The hero buttons **"Start an AI project"** and **"How we use AI"** were commented out for now (see
[Restore the hero buttons](#restore-the-hero-buttons)).

### Step 8. This documentation (28 October 2026)

`DOCUMENTATION.md` (this file) added so anyone can see what was done and where to find things.

---

## 2. Decisions and why we made them

| Decision | Why |
| -------- | --- |
| **Rebuild instead of fixing the Lovable site** | The site is small, the template carried a lot of unused code, a new design was planned anyway, and hosting was moving to the organisation account. |
| **Astro instead of React + Vite** | It is a content site. Astro produces real HTML pages, so case-study links can be shared and refreshed, each page has its own title and share preview, pages load faster, and no 404 workaround is needed. |
| **No Lovable** | Lovable only edits its own React template. The site is now edited in code. |
| **Content in `src/data/`** | Text can be updated in two files without touching layout code. |
| **Plain CSS, no Tailwind or UI library** | Few dependencies and easy-to-read styles for a site this size. |
| **Build every branch, deploy only `main`** | Broken builds are caught on the branch, before they can reach the live site. |
| **Node 24 pinned in `.nvmrc`** | Astro 7 needs Node 22.23.4 or newer; pinning avoids differences between computers and GitHub. |
| **Only verifiable claims** | Funders, partners and clients check. One false claim undermines all the true ones. |
| **"We use AI", not "we build AI"** | We apply existing AI tools and models; the wording must not suggest we developed our own. |

---

## 3. Quick start

### Requirements

- **Node.js 22.23.4 or newer.** Node 24 is recommended and is pinned in `.nvmrc`.
- **Git**, with push access to the `insightanalyticsafrica-ug/website` repository.

### Get the code and run it

```sh
git clone git@github.com:insightanalyticsafrica-ug/website.git
cd website
npm install
npm run dev
```

Open <http://localhost:4321/website/>. The page reloads automatically when you save a file.

| Command | What it does |
| ------- | ------------ |
| `npm run dev` | Local development server at `http://localhost:4321/website/` |
| `npm run build` | Type-checks everything (`astro check`), then builds to `dist/` |
| `npm run preview` | Serves the built `dist/` folder locally, exactly as it will go live |

Always run `npm run build` before pushing. If it fails locally, it will fail on GitHub too.

---

## 4. How the site is organised

### Pages

| Page | URL | Source file |
| ---- | --- | ----------- |
| Home | `/website/` | `src/pages/index.astro` |
| Case study (one per study) | `/website/case-studies/<slug>/` | `src/pages/case-studies/[slug].astro` |
| Not found | any unknown URL | `src/pages/404.astro` |

The case-study pages are generated automatically from `src/data/caseStudies.ts`:

- `/website/case-studies/uganda-malaria-spatio-temporal-ml/`
- `/website/case-studies/infant-malaria-recurrence-busia/`
- `/website/case-studies/tb-prediction-machine-learning-mulago/`

### Home page sections, top to bottom

| Order | Section | Anchor (link with `/#…`) | Component file |
| ----- | ------- | ------------------------ | -------------- |
| 1 | Hero | none | `src/components/home/Hero.astro` |
| 2 | AI in our work | `#ai` | `src/components/home/AiApproach.astro` |
| 3 | How we work | none | `src/components/home/HowWeWork.astro` |
| 4 | Services | `#services` | `src/components/home/Services.astro` |
| 5 | Research | `#research` | `src/components/home/Research.astro` |
| 6 | About | `#about` | `src/components/home/About.astro` |
| 7 | Team | `#team` | `src/components/home/Team.astro` |
| 8 | Partners | none | `src/components/home/Partners.astro` |
| 9 | Contact | `#contact` | `src/components/home/Contact.astro` |

The header and footer appear on every page (`src/components/Header.astro`,
`src/components/Footer.astro`), wrapped by the shared layout `src/layouts/Base.astro`.

### Folder map

```
.
├── .github/workflows/deploy.yml   Build on every push; deploy to GitHub Pages from main
├── .nvmrc                         Node version (24) used locally and on GitHub
├── astro.config.mjs               Site address and base path (/website)
├── package.json                   Scripts and dependencies
├── DOCUMENTATION.md               This file
├── README.md                      Short introduction, points here
├── public/                        Files served as-is (no processing)
│   ├── favicon.ico
│   ├── robots.txt
│   └── tb-prediction-mulago-manuscript.pdf
└── src/
    ├── assets/                    Images, optimised automatically at build time
    │   ├── hero.jpg               Home page hero photo (also the default share image)
    │   ├── mark.png               Africa logo mark used in the header and footer
    │   ├── studies/               Case-study images and figures
    │   └── team/                  Team portraits
    ├── components/
    │   ├── Header.astro           Top navigation (desktop and mobile menu)
    │   ├── Footer.astro           Footer links and contact details
    │   ├── Logo.astro             Logo mark plus "Insight Analytics Africa" wordmark
    │   └── home/                  One file per home page section (table above)
    ├── data/
    │   ├── site.ts                Contact details, navigation, AI principles, services,
    │   │                          steps, mission, vision, values, team, partners
    │   └── caseStudies.ts         All case-study content
    ├── layouts/
    │   └── Base.astro             <head> (title, description, share tags, fonts), header, footer
    ├── lib/
    │   └── url.ts                 url() helper that adds the /website base path to links
    ├── pages/                     One file per route (see table above)
    └── styles/
        └── global.css             Colours, fonts, spacing and shared classes
```

Never edit or commit `node_modules/` (installed packages), `dist/` (build output) or `.astro/`
(generated types). All three are in `.gitignore`.

---

## 5. Where to find what

**Most text changes happen in two files: `src/data/site.ts` and `src/data/caseStudies.ts`.**
Only edit component files when changing layout, or wording that is not stored as data.

| To change… | Edit this |
| ---------- | --------- |
| Email, phone, location | `site` in `src/data/site.ts` |
| Site description (Google and social previews) | `site.description` in `src/data/site.ts` |
| Menu links | `navLinks` in `src/data/site.ts` |
| AI section heading and intro | `src/components/home/AiApproach.astro` |
| AI principles (the three cards) | `aiPrinciples` in `src/data/site.ts` |
| "Where we apply AI" list | `uses` at the top of `src/components/home/AiApproach.astro` |
| "How we work" steps | `steps` in `src/data/site.ts` |
| Services (the first is the large lead card) | `services` in `src/data/site.ts`; icons in `src/components/home/Services.astro` |
| Mission, vision, values | `mission`, `vision`, `values` in `src/data/site.ts` |
| Team members | `team` in `src/data/site.ts`; photos in `src/assets/team/` |
| Partner institutions | `partners` in `src/data/site.ts` |
| Case studies (cards and full pages) | `caseStudies` in `src/data/caseStudies.ts` |
| Hero headline, intro and buttons | `src/components/home/Hero.astro` |
| Other section headings and intros | the section's file in `src/components/home/` |
| Browser tab title format | `fullTitle` in `src/layouts/Base.astro` |
| Colours, fonts, spacing | `:root` variables in `src/styles/global.css` |
| Footer columns | `src/components/Footer.astro` |
| Downloadable files (PDFs) | `public/` |
| Site address or base path | `astro.config.mjs` |
| Build and deployment | `.github/workflows/deploy.yml` |

---

## 6. Common tasks

### Change text

1. Find the text with the table above, or search `src/` for a phrase you can see on the site.
2. Edit it, save, and check the page at `http://localhost:4321/website/`.
3. Run `npm run build`, then commit (see [section 7](#7-branches-review-and-deployment)).

### Restore the hero buttons

The hero's "Start an AI project" and "How we use AI" buttons are commented out in
`src/components/home/Hero.astro`. To bring them back:

1. Remove the `{/* … */}` comment wrapper around the `<div class="ctas">` block.
2. Uncomment the `import { url } from "../../lib/url";` line at the top of the file.
3. Update the button labels if needed, then run `npm run build`.

### Add or edit a case study

Each case study is one object in the `caseStudies` array in `src/data/caseStudies.ts`. Adding an
object creates its full page and its home-page card automatically.

| Field | Required | Notes |
| ----- | -------- | ----- |
| `slug` | yes | Becomes the URL. Lowercase words joined by hyphens. Don't change it after publishing, or old links break. |
| `category` | yes | Small label above the title, e.g. `"Machine learning · Uganda"` |
| `title` | yes | Full formal title, shown on the case-study page |
| `cardTitle` | yes | Short, plain-language headline for the home-page card and footer |
| `summary` | yes | Two or three sentences; also used as the page's search description |
| `image` | no | Imported from `src/assets/studies/`. Shown at the top of the page and used as the share image |
| `imageAlt` | if image | Describe what the image shows, for screen readers |
| `studyArea`, `population`, `design`, `partners` | yes | The four fact boxes on the page |
| `metrics` | yes | Four `{ value, label }` pairs fit the layout best |
| `sections` | yes | `{ heading, body: [paragraphs] }`, usually Background, Approach, Findings |
| `figures` | no | `{ image, alt, caption }` list, shown under "Figures" |
| `pdf` | no | Path to a file in `public/`, e.g. `"/my-paper.pdf"`; shows a download button |
| `code` | no | Link to a public code repository |

The **first** entry in the array is the featured study on the home page, shown large with its
image, so give it an `image`. Reorder the array to change which study is featured.

To add an image: put the file in `src/assets/studies/`, import it at the top of
`caseStudies.ts` (`import myImage from "../assets/studies/my-image.png";`), then use `image: myImage`.

### Add, remove or update a team member

1. Put the photo in `src/assets/team/` as `firstname-lastname.jpg` (or `.png`). It is cropped to a
   circle from the top, so a portrait with the face in the upper part works best.
2. Import it at the top of `src/data/site.ts`.
3. Add `{ name, role, photo }` to the `team` array. The array order is the order on the page.

### Change or add an image

- **Images shown on the site** go in `src/assets/` and are imported in code. Astro resizes and
  compresses them at build time, so upload the best-quality original you have.
- **Files people download** (PDFs) go in `public/` and are linked with `url("/file-name.pdf")`.
- To replace an image without touching code, overwrite the file and keep the same name.

### Add a partner

Add the institution's name to `partners` in `src/data/site.ts`. Only add institutions we have
actually worked with (see [Content rules](#8-content-rules)). If the list is empty, the section
is hidden.

### Add a link inside the site

Always wrap internal links with the `url()` helper so they include the `/website` base path:

```astro
---
import { url } from "../lib/url";
---
<a href={url("/#contact")}>Contact us</a>
<a href={url("/case-studies/my-study/")}>Read the study</a>
```

A plain `href="/#contact"` breaks on the live site, because the site is served from `/website/`.

### Hide something temporarily

Wrap it in an Astro comment, `{/* … */}`, as was done for the hero buttons. Unlike an HTML
comment (`<!-- … -->`), it is removed from the published page entirely.

### Add a new page

Create a file in `src/pages/`, for example `src/pages/careers.astro`, using the shared layout:

```astro
---
import Base from "../layouts/Base.astro";
---
<Base title="Careers" description="Work with Insight Analytics Africa.">
  <section class="section"><div class="container"><h1 class="h2">Careers</h1></div></section>
</Base>
```

It will be live at `/website/careers/`. Add it to `navLinks` in `src/data/site.ts` if it should
appear in the menu.

---

## 7. Branches, review and deployment

### The workflow

1. **Start from an up-to-date `main`:**
   ```sh
   git switch main
   git pull
   git switch -c short-description-of-change
   ```
2. Make the change and check it with `npm run dev`.
3. Run `npm run build`. It must finish with `0 errors`.
4. Commit and push the branch:
   ```sh
   git add -A
   git commit -m "Explain what changed and why"
   git push -u origin short-description-of-change
   ```
5. GitHub Actions builds the branch automatically but does **not** deploy it. Check the result in
   the repository's **Actions** tab.
6. Open a pull request into `main` on GitHub, review it, and merge it.
7. Merging into `main` deploys the site. It is live about two minutes later.

### How deployment works

`.github/workflows/deploy.yml` runs on every push to every branch:

- **Build job** (all branches): installs dependencies with `npm ci`, then runs `npm run build`.
- **Deploy job** (`main` only): uploads `dist/` and publishes it to GitHub Pages.

The repository's **Settings → Pages → Source** must stay set to **GitHub Actions**.

### Branches and pull requests so far

| Branch | Pull request | What it did | Status |
| ------ | ------------ | ----------- | ------ |
| `rebuild` | #1 | Replaced the Lovable site with the Astro site | Merged |
| `fix-deploy-node` | #2 | Fixed the failing deploy (Node version) | Merged |
| `ai-positioning` | #3 | Repositioned the site around AI | Merged |
| `ai-tone` | — | Corrected the AI wording, hid the hero buttons, added this documentation | Awaiting merge |

Merged branches can be deleted on GitHub; their history stays in `main`.

---

## 8. Content rules

These keep the site credible with funders, partners and clients, who do check claims.

1. **Only publish facts we can back up.** Every number on the site comes from our own studies.
   Don't add client counts, years in business, "trusted by" logos or percentages unless they are
   true and verifiable.
2. **Partners are institutions we have actually worked with.**
3. **Case-study numbers must match the source paper.** When in doubt, quote the paper.
4. **Describe our AI work accurately.** We use existing AI tools and models; we have not built our
   own AI model. Say "we use AI to…", not "we build AI" or "our AI".
5. **AI claims must be specific.** Say what the tool or model does and how the results were
   checked, as the TB study does, rather than general claims about "cutting-edge AI".
6. **Every image needs alt text** describing what it shows. Decorative images use `alt=""`.
7. **Write plainly.** Short sentences and no jargon on the home page; technical detail belongs on
   case-study pages. Describe the company simply ("a data analytics and research company"), not
   with phrases like "founded by four biostatisticians".

---

## 9. Design system

The look is Concept C from the design exploration, with the research section laid out like
Concept A (see [Step 2](#step-2-design-exploration-24-october-2026)).

| Token (in `global.css`) | Value | Used for |
| ----------------------- | ----- | -------- |
| `--ink` | `#14201b` | Body text, dark buttons, "AI in our work" background |
| `--muted` | `#3e4b45` | Secondary text |
| `--green` | `#0f3d2e` | About section, footer, highlighted cards |
| `--green-2` | `#1c6b50` | Accent text, labels, link hover |
| `--gold` | `#e3a92b` | Primary buttons, contact band, accents on dark |
| `--soft` | `#f1f5f2` | Light card backgrounds |
| `--research-bg` | `#f3f6f4` | Research section background |
| `--line` | `#dde5e0` | Borders |
| `--on-green` | `#d3e2da` | Body text on dark backgrounds |

- **Fonts:** Manrope for headings and body; Source Serif 4 for intro paragraphs and research
  titles. Both load from Google Fonts in `src/layouts/Base.astro`.
- **Shared classes** in `global.css`: `.container`, `.section`, `.h2`, `.eyebrow`, `.lede`,
  `.section-head`, `.btn` with `.btn-gold`, `.btn-dark` or `.btn-outline`, and `.arrow-link`.
- **Gold is a background colour, not a text colour on white.** Gold text on white fails
  accessibility contrast; use gold on dark backgrounds or as a button fill with dark text.
- **Every layout must work on a phone.** Check at narrow widths in your browser's device toolbar
  before merging.

---

## 10. Troubleshooting

**The build fails on GitHub but works on my computer.**
Open the failed run in the **Actions** tab and read the `npm run build` step. If it mentions the
Node version, check `.nvmrc` and the `setup-node` step in `.github/workflows/deploy.yml`. Always
commit `package-lock.json` when you add or update a package.

**`npm run build` reports TypeScript errors.**
`astro check` runs before every build. The error names the file and line. A common cause is a
missing field when adding a case study (see the field table in section 6).

**A link works locally but is broken on the live site.**
It is probably missing the base path. Use `url("/path")` from `src/lib/url.ts`.

**`localhost:5173` shows an old version of the site.**
Port 5173 belonged to the old Lovable/Vite project. This site runs on port 4321:
<http://localhost:4321/website/>.

**"Port 4321 is in use" when starting the dev server.**
Another dev or preview server is still running. Close the other terminal, or stop the process
using that port, then run `npm run dev` again.

**Git says "unable to create file … File exists" when switching branches (Windows).**
A running `npm run dev` server or an editor is holding files open. Stop the dev server with
`Ctrl+C`, then run the git command again.

**Git says "detected dubious ownership in repository" (Windows, external or F: drive).**
Run once, with your own folder path:
```sh
git config --global --add safe.directory "F:/Local Disk/Insight_Analytics_Africa/web_project/insight-africa-ui"
```

**`git push` asks for a password or is rejected.**
You need push access to `insightanalyticsafrica-ug/website`. On computers with more than one
GitHub account, check which account the remote uses with `git remote -v`. On the founder's
computer the remote uses the SSH alias `github-org` from `~/.ssh/config`; on other computers use
`git@github.com:insightanalyticsafrica-ug/website.git`.

**The site deployed but still shows the old version.**
Wait two minutes, then hard-refresh (`Ctrl+Shift+R`). Check that the deploy job in the
**Actions** tab finished successfully.

---

## 11. Open to-dos

Items flagged during the work so far that still need real content or a decision:

- [ ] **Hero buttons.** Decide on wording and restore "Start an AI project" / "How we use AI", or
      replace them (see [Restore the hero buttons](#restore-the-hero-buttons)).
- [ ] **Hero photo.** `src/assets/hero.jpg` is a stock image. Replace it with a real photo of the
      team at work.
- [ ] **Busia case-study image.** `src/assets/studies/busia-hero.png` is an AI-generated
      illustration with a caption burned into the picture. Replace it with a real photo or a
      figure from the study.
- [ ] **AI services and use cases.** Confirm that the two AI service descriptions (`services` in
      `site.ts`) and the "Where we apply AI" list (`AiApproach.astro`) match what we offer.
- [ ] **An AI-assisted project case study.** Add a case study about a system or tool we built
      using AI. It is the strongest proof of how we work.
- [ ] **TB case-study wording.** Written from the manuscript's abstract; the author should review it.
- [ ] **Partners.** Add any other institutions we have genuinely worked with.
- [ ] **Team details.** Optionally add a specialism or one-line bio for each founder (`team` in `site.ts`).
- [ ] **Old copies of the site.** The private repository `ekiru111/insight-africa-ui` and the
      Lovable project still exist. Delete them, or at least disconnect Lovable, so nobody edits
      the wrong site.
- [ ] **Custom domain (optional).** Set `site` to the domain and `base` to `"/"` in
      `astro.config.mjs`, add a `public/CNAME` file containing the domain, and configure DNS.
      Internal links follow automatically because they use `url()`.
