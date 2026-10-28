# babicean.com

Brendon Babicean's portfolio. A static [Astro](https://astro.build) site deployed to Cloudflare (Workers static assets). The only JavaScript in the browser is under 1 KB: the footer clock and link focus.

## Run it

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run deploy    # build + wrangler deploy (normally Cloudflare builds on push instead)
```

## Add a project

1. Copy `src/content/projects/security-pipeline.md` to `src/content/projects/<slug>.md`.
2. Fill in the frontmatter. The schema in `src/content.config.ts` validates it at build time, so a missing field fails the build instead of shipping a broken page.
3. Write the case study in Markdown. Every `## Heading` becomes a label-column row, the same as the homepage.
4. Set `draft: false` to publish. `order` sets homepage position (lower comes first).

Work in progress stays `draft: true`: it is not listed and no page is built for it.

## Where things live

| What | Where |
| --- | --- |
| Name, email, links | `src/site.ts` |
| Reading list | `src/content/reading.yaml` |
| Project screenshots | next to each project's `.md`, listed under `screens:` |
| Homepage | `src/pages/index.astro` |
| Project page template | `src/pages/projects/[slug].astro` |
| Design tokens and shared styles | `src/styles/global.css` |
| Middle-dot metadata rule | `src/lib/meta.ts` |
| Security headers | `public/_headers` |
| Cloudflare config | `wrangler.jsonc` |

## Later

- [ ] **Tally signing key — before sharing the site.** The Tally page now links to the repo. Rotate the Android keystore committed there, move it to GitHub Actions secrets (`TALLY_KEYSTORE_*` are already wired), delete `android/keystore/`.
- [ ] **Tally README.** Clean it up; the case study now points there for technical detail.
- [ ] **www redirect.** Add `www.babicean.com` to the Worker and redirect it to `babicean.com`.
- [ ] **hello@babicean.com.** Set up Cloudflare Email Routing to forward to dev.babicean@gmail.com, then change `email` in `src/site.ts`.
- [ ] **Live Tally demo.** Tally is a React web app, so its web build can run at `tally.babicean.com` on Cloudflare like this site (no server; each visitor's data stays in their own browser). Needs the current Tally code pushed to GitHub first: `main` is from July and has no welcome screen. Then add a "Try it in your browser" link.
- [ ] **Old page.** The "flowers for you" page that used to live at babicean.com, if it's moving to a subdomain.

## Ideas

Planned content, in priority order. Rule for anything that goes on the site: real, finished work or a genuine take; no filler.

- [x] **Reading row** (live, under Studying). Entries live in `src/content/reading.yaml`. Still to do: replace each summary with Brendon's own one-line take.
  - Alternates if swapping one out: Ross Anderson's *Security Engineering* (free online); Ken Thompson's *Reflections on Trusting Trust* (dropped: a little awkward next to AI-assisted apps).
- [ ] **Brisbane drop-off map as project #2.** Real users (rideshare drivers group). Showcase: a screenshot of the map with red no-stopping kerbs, the problem (camera fines), how data is crowdsourced, and a link to the live GitHub Pages map.
- [ ] **Now row.** Two or three dated lines on what's in progress this month.
- [ ] **Later, when real:** certifications, resume link.
- Skipped on purpose: PulseX analysis (not a current interest), Pie Pulse (too basic next to this site), /uses page, testimonials, skill bars, stat widgets.

## Decision log

Routine calls made while building v1. Change any of them.

- **Cloudflare Workers static assets, not Pages.** Cloudflare's current Astro guide deploys static sites this way; same free tier, same `_headers` support.
- **Contact shows dev.babicean@gmail.com for now.** hello@babicean.com would bounce until Email Routing exists. One line to switch.
- **Tally's GitHub link sits at the end of "How it works"**, written as a plain Markdown link. A paragraph that is only a link renders as a quiet mono footer link.
- **Fonts are self-hosted** (Fontsource), not loaded from Google Fonts: no third-party requests, and the CSP stays `'self'`-only.
- **Light theme only.** The paper look is the design; dark mode can come later.
- **Accent is Tally's blue at `#2559c9`**, the shade Tally uses for pressed states. Tally's main `#2e6be6` fails WCAG AA for small text on the paper background (4.4:1); this one passes (5.7:1). Change `--accent` in `global.css` to follow the featured project.
- **Type uses one scale** (`--t-*`, after Apple's): 44/36 name, 28 contact, 22 project titles, 18 taglines, 17 body, 15 supporting lines, 13 metadata, 12 labels. All card text is 17.
- **Spacing uses one scale** (`--s-1` to `--s-9`: 4, 8, 12, 16, 24, 32, 48, 64, 96). Rows align label and body by first baseline instead of hand-tuned offsets. The only off-scale values are optical fixes in the masthead, measured from rendered pixels.
- **Footer: quote left (no quotation marks), live Brisbane clock right.** Replaced "© Brendon Babicean" and "Last updated". The clock stays hidden if JavaScript is off.
- **Last-clicked link turns accent.** It's CSS `:focus`, plus a 3-line script so Safari focuses links on click like Chrome does. No tap-highlight boxes.
- **Scripts and styles never inline** (`inlineStylesheets: 'never'`, `assetsInlineLimit: 0`), so the CSP needs no `'unsafe-inline'`.
- **Tally's Screens row uses real screenshots** (Welcome, Today, History) from Brendon's phone, status bars painted out in the app's background colour. Side by side when there's room (desktop); a swipe row with snap, arrows and a counter when there isn't (phones, tablets). Add `screens:` to any project's frontmatter to get the same row.
- **Reading sits under Studying, above Find me and Contact**, so contact stays the last thing on the page. Same grammar as Projects, one step quieter (titles at body size). Links go to each author's own copy.
- **The security pipeline project is a draft file**, so the slot exists in code but nothing shows publicly.
