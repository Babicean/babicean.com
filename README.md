# babicean.com

Brendon Babicean's portfolio. A static [Astro](https://astro.build) site deployed to Cloudflare (Workers static assets). About 4 KB of JavaScript reaches the browser: the theme toggle, the footer clock, copy-email and the nav highlight. Everything else is HTML and CSS.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run deploy    # build + wrangler deploy (normally Cloudflare builds on push instead)
```

## Add a project

1. Copy `src/content/projects/ai-chatbot-guardrails.md` to `src/content/projects/<slug>.md`.
2. Fill in the frontmatter. The schema in `src/content.config.ts` validates it at build time, so a missing field fails the build instead of shipping a broken page.
3. Put screenshots next to the file and list them under `screens:`. `frame: phone` gives three tilted phones on the homepage card; `frame: browser` gives a browser window.
4. Write the case study in Markdown. Every `## Heading` becomes a numbered section on the project page.
5. Set `draft: false` to publish. `order` sets homepage position (lower comes first).

Work in progress stays `draft: true`: it is not listed and no page is built for it.

## Where things live

| What | Where |
| --- | --- |
| Name, email, links, About sidebar | `src/site.ts` |
| Homepage | `src/pages/index.astro` |
| Homepage project card | `src/components/ProjectShowcase.astro` |
| Project page template | `src/pages/projects/[slug].astro` |
| Projects | `src/content/projects/*.md` (screenshots alongside) |
| Reading list | `src/content/reading.yaml` |
| Header, footer and clock | `src/components/Header.astro`, `Footer.astro` |
| Design tokens and all styles | `src/styles/global.css` |
| Theme before first paint | `public/theme.js` |
| Middle-dot metadata rule | `src/lib/meta.ts` |
| Security headers | `public/_headers` |
| Cloudflare config | `wrangler.jsonc` |

## Later

- [ ] **Tally signing key — before sharing the site.** The Tally page links to the repo. Rotate the Android keystore committed there, move it to GitHub Actions secrets (`TALLY_KEYSTORE_*` are already wired), delete `android/keystore/`.
- [ ] **Tally README.** Clean it up; the case study points there for technical detail.
- [ ] **www redirect.** Add `www.babicean.com` to the Worker and redirect it to `babicean.com`.
- [ ] **hello@babicean.com.** Set up Cloudflare Email Routing to forward to dev.babicean@gmail.com, then change `email` in `src/site.ts`.
- [ ] **Live Tally demo.** Tally's web build can run at `tally.babicean.com` on Cloudflare (no server; each visitor's data stays in their own browser). Needs the current Tally code pushed to GitHub first. Then add a "Try it in your browser" link.
- [ ] **Old Workers.** `babicean-beta` (superseded by this repo), `broken-wave-0da9`, `curly-sky-48ce` and `webpage` can be deleted in the Cloudflare dashboard.

## Ideas

Planned content, in priority order. Rule for anything that goes on the site: real, finished work or a genuine take; no filler.

- [ ] **AI chatbot with guardrails (IFB220) as the lead project.** Draft at `src/content/projects/ai-chatbot-guardrails.md` (order 0, above Tally). Needs: the repo, screenshots (browser frame), then `draft: false`.
- [ ] **Reading takes.** Replace each summary in `src/content/reading.yaml` with Brendon's own one-line take.
- [ ] **Brisbane drop-off map as another project.** Real users (rideshare drivers group). A screenshot of the map, the problem (camera fines), how data is crowdsourced, a link to the live map.
- [ ] **Security pipeline / DLP lab.** Draft at `src/content/projects/security-pipeline.md`.
- [ ] **Later, when real:** certifications, resume link.
- Skipped on purpose: "coming soon" cards, PulseX analysis, Pie Pulse, /uses page, testimonials, skill bars, stat widgets.

## Decision log

Routine calls, newest design first. Change any of them.

**v2 (Oct 2026): the beta design, tightened.** The previous "Index" design is on the `archive/v1-index` branch.

- **Order: brief intro, then work, then the longer About,** so visitors see evidence first. The hero sentence is the About most people read.
- **One slogan kept: "Useful software. Safer systems."** It's the only one specific to Brendon, and the chatbot project will back up its second half. Section headings are plain numbered labels (01 Work, 02 About…) instead of taglines.
- **Cut from the beta:** the orbit graphic panel, four taglines, filler lines ("Small, steady steps…", "Curious about what comes next"), the "On the horizon" card, and the repeated QUT/degree lines (now once in the hero, once in full in the sidebar).
- **Bugs fixed from the beta:** "thinkabout" on phones (hidden line break), an arrow on "Brisbane, Australia" that wasn't a link, the missing security headers.
- **Copy kept from Brendon's own words** (About, Tally summary and case study) rather than the beta's rewrites.
- **Arrows mean something:** → stays on this site, ↗ leaves it.
- **Readability:** the beta's 7–10px labels are now 11–12px minimum; every text colour passes WCAG AA (4.5:1) in both themes; tap targets are 44px.
- **Spacing and type each use one scale** (`--s-*`: 4, 8, 12, 16, 24, 32, 48, 64, 96; `--t-*` in `global.css`) instead of the beta's one-off values.
- **Accent is the beta's forest green** (`#315c48`, `#abd0b5` in dark mode). Tally's blue stays inside its icon and screenshots.
- **Dark mode follows the system until the visitor picks one,** then remembers it. `public/theme.js` runs before paint so there's no flash of the wrong theme.
- **Cloudflare Web Analytics is allowed in the CSP** (its script host and beacon endpoint only). It was already being injected and blocked; it's cookie-less.

**Still true from v1:**

- **Cloudflare Workers static assets, not Pages.** Cloudflare's current Astro guide deploys static sites this way; same free tier, same `_headers` support.
- **Contact shows dev.babicean@gmail.com for now.** hello@babicean.com would bounce until Email Routing exists. One line to switch.
- **Fonts are self-hosted** (Fontsource): no third-party font requests.
- **Scripts and styles never inline** (`inlineStylesheets: 'never'`, `assetsInlineLimit: 0`), so the CSP needs no `'unsafe-inline'`.
- **Metadata separates with a middle dot** ("Brisbane · AU"), enforced by `src/lib/meta.ts`.
- **Footer: "Growth mindset" left, live Brisbane clock right.** The clock stays hidden if JavaScript is off.
- **The last link you clicked keeps the accent colour** (`:focus`, plus a 3-line script so Safari matches Chrome).
- **Project screenshots are real**, status bars painted out. The project page shows them side by side on desktop and as a swipe row on phones.
