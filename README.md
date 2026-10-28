# babicean.com

Brendon Babicean's portfolio. A static [Astro](https://astro.build) site deployed to Cloudflare (Workers static assets). No JavaScript ships to the browser.

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
| Homepage | `src/pages/index.astro` |
| Project page template | `src/pages/projects/[slug].astro` |
| Design tokens and shared styles | `src/styles/global.css` |
| Middle-dot metadata rule | `src/lib/meta.ts` |
| Security headers | `public/_headers` |
| Cloudflare config | `wrangler.jsonc` |

## Later

- [ ] **Tally signing key.** Rotate the Android keystore committed in the Tally repo, move it to GitHub Actions secrets (`TALLY_KEYSTORE_*` are already wired), delete `android/keystore/`. Then uncomment the "Source on GitHub" link in `src/content/projects/tally.md`.
- [ ] **hello@babicean.com.** Set up Cloudflare Email Routing to forward to dev.babicean@gmail.com, then change `email` in `src/site.ts`.
- [ ] **Demo video.** A 10-second screen recording of Tally to replace or sit beside the Today screen mockup.
- [ ] **Old page.** The "flowers for you" page that used to live at babicean.com, if it's moving to a subdomain.

## Decision log

Routine calls made while building v1. Change any of them.

- **Cloudflare Workers static assets, not Pages.** Cloudflare's current Astro guide deploys static sites this way; same free tier, same `_headers` support.
- **Contact shows dev.babicean@gmail.com for now.** hello@babicean.com would bounce until Email Routing exists. One line to switch.
- **No "Source on GitHub" link on Tally yet.** Waiting on the keystore fix.
- **Fonts are self-hosted** (Fontsource), not loaded from Google Fonts: no third-party requests, and the CSP stays `'self'`-only.
- **Light theme only.** The paper look is the design; dark mode can come later.
- **"Last updated" is the build date** (Brisbane time), so it updates itself on every deploy.
- **The Tally screen is an HTML/CSS recreation** built from Tally's own colour tokens, not a screenshot.
- **The security pipeline project is a draft file**, so the slot exists in code but nothing shows publicly.
