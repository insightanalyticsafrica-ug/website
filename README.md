# Insight Analytics Africa website

The company website, built with [Astro](https://astro.build) as a static site and deployed to GitHub Pages at
<https://insightanalyticsafrica-ug.github.io/website/>.

**New here? Read [DOCUMENTATION.md](DOCUMENTATION.md)** for the project history, where everything
lives, step-by-step guides for common changes, content rules and troubleshooting.

## Working on it

Requires Node.js 22.23.4 or newer (24 recommended, see `.nvmrc`).

```sh
npm install
npm run dev      # local site at http://localhost:4321/website/
npm run build    # type-check, then build to dist/
npm run preview  # serve the built site locally
```

Every push is built by GitHub Actions (`.github/workflows/deploy.yml`); only `main` is deployed.
Work on a branch and merge it through a pull request. In the repo's **Settings → Pages**, the
source must be set to **GitHub Actions**.

## Where things live

| To change…                                         | Edit                                  |
| -------------------------------------------------- | ------------------------------------- |
| Contact details, services, team, values, partners  | `src/data/site.ts`                    |
| Case studies (home page cards and detail pages)    | `src/data/caseStudies.ts`             |
| Colours, fonts, spacing                            | `src/styles/global.css`               |
| A home page section                                | `src/components/home/*.astro`         |
| Images                                             | `src/assets/` (optimised at build)    |
| Downloadable files (PDFs, favicon)                 | `public/`                             |

Adding a case study: add an entry to `caseStudies` in `src/data/caseStudies.ts`. Its page at
`/case-studies/<slug>/` and its home-page card are generated automatically. The first entry is the
featured study on the home page.

## Moving to a custom domain

Set `site` to the domain and `base` to `"/"` in `astro.config.mjs`, and add a `public/CNAME` file
containing the domain. Internal links go through `url()` in `src/lib/url.ts`, so they follow
automatically.
