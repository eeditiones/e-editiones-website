# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The e-editiones.org website: an [Eleventy](https://www.11ty.dev/) (v1) static site, Nunjucks templates + Markdown content, Bootstrap 5 for styling. No test suite, no linter, no bundler — templates and assets are copied/rendered as-is.

Node version is pinned in `.nvmrc` / `.tool-versions` (Node 20).

## Commands

```bash
npm install          # once
npm start            # dev server on http://localhost:8081 (alias for `npm run serve`)
npm run build.cms    # full build without TEI Publisher (what Netlify runs)
npm run build        # production build, requires a TEI Publisher instance (see below)
npm run build.all    # same as build, but bypasses the TEI Publisher cache
npm run debug        # build with DEBUG=* for verbose Eleventy output
npm run bench        # build with Eleventy benchmark output
```

Output goes to `_site/` (gitignored).

## TEI Publisher dependency

`@teipublisher/pb-eleventy-plugin` pre-renders TEI/XML content by talking to a TEI Publisher instance at `http://localhost:8080/exist/apps/tei-publisher/` (plugin default — no options are passed in `.eleventy.js`). It powers the `{% tpfetch %}` shortcode and pre-loads content for `pb-view` / `pb-document` web components in `pages/tei-publisher/*.njk`.

Two env vars control it:

- `TP_DISABLED=true` — skip the plugin entirely. Set by `serve`, `watch` and `build.cms`, so **local development does not need a TEI Publisher server**; the TEI Publisher pages will simply be empty.
- `TP_NO_CACHE=true` — refetch instead of using cached document listings.

Only `npm run build` / `build.all` need the server. CI starts it as a Docker container (`ghcr.io/eeditiones/tei-publisher-app/teipublisher:master`) before building.

## Deployment

Two independent deploys of the same repo:

- **GitHub Actions** (`.github/workflows/main.yml`): on push to `main`, spins up TEI Publisher in Docker, runs `npm run build`, publishes `_site/` to the `gh-pages` branch with CNAME `www.e-editiones.org`.
- **Netlify** (`netlify.toml`): runs `npm run build.cms` (TEI Publisher disabled), publishes `_site/`.

`admin/` hosts a Decap/Netlify CMS instance (GitHub backend, open authoring, editorial workflow) that writes posts into `posts/`. Frontmatter fields exposed to editors are declared in `admin/config.yml` — if you add a frontmatter field that content editors should set, add it there too.

## Content layout

| Location | Purpose |
| --- | --- |
| `posts/` | Blog articles, news, announcements. `posts/posts.json` sets the directory data: `layouts/post.njk`, tag `posts`, sidebar on. Template at `posts/article-template.md` (eleventyignored). |
| `pages/` | Static pages. `pages/pages.json` sets `layouts/content.njk`, tag `static`. URLs are `/pages/<filename>/`. |
| `drafts/` | Eleventyignored, never built. |
| Root `*.md` / `*.njk` | One-off landing pages (`join.md`, `dh2024.md`, `tei2025.md`, …) and the site's structural templates. |
| `_data/` | Global data: `metadata.json` (site title, URL, feed config, default cover image), `geodata.json` (TEI Publisher project registry map markers). |
| `resources/`, `img/`, `assets/`, `admin/` | Passthrough-copied verbatim. |

Third-party CSS/JS (Bootstrap, Leaflet, Rellax) is copied out of `node_modules` into `assets/` at build time by the passthrough map in `.eleventy.js` — do not commit those files.

## Templates

Layouts in `_includes/layouts/`: `base.njk` (html shell, Matomo, `{% block styles %}` / `{% block scripts %}`) → `content.njk` (page with optional TOC aside), `content-sidebar.njk` (page with `partials/sidebar.njk`), `post.njk`, `home.njk`. Partials in `_includes/partials/`; `postslist.njk` at the `_includes/` root is the shared post-card list, driven by a `postslist` variable set by the caller.

Navigation is generated from `eleventyNavigation` frontmatter (`key`, `parent`, `order`, optional `title`) via `@11ty/eleventy-navigation`, rendered recursively in `partials/menu.njk`. To add a page to the menu, give it an `eleventyNavigation` block — the menu is not a hand-maintained list.

Generated endpoints live in `feed/`: `feed.njk` (Atom), `json.njk` (JSON Feed), `geo.json.njk` + `geo-new.json.njk` (GeoJSON for the Leaflet map, from `_data/geodata.json`), `search-index.json.njk` (FlexSearch index built by the `search` filter over the `markdown` collection). `search.njk`, `registry.njk` (project registry map) and `tags.njk` (paginated tag pages) are root-level page templates.

## Frontmatter and tags

Post frontmatter (see `README.md` for the canonical list): `title`, `short`, `lead`, `author`, `date`, `tags`, `coverImage`, `coverImageCredits`. Cover images live in `img/`; a default is configured in `_data/metadata.json`.

Every post should carry at least one top-level tag from: `events` (+ `workshop`, `meetups`, `conference`), `announcements` (+ `call`, `e-editiones`, `tei-publisher`, …), `tutorial` (+ `beginner`/`intermediate`/`advanced`), `faq`, `report` (+ `projects`, `best practice`), `teaching`.

Tagging a post `draft` keeps it out of listings — the `excludeDrafts` filter is applied wherever `collections.posts` is rendered. The `meetups` tag makes `post.njk` inject the community-meeting banner.

Structural tags (`all`, `nav`, `static`, `posts`, `draft`) are stripped from the visible tag cloud by `filterTagList` in `.eleventy.js`.

## Custom filters and shortcodes (`.eleventy.js`)

`readableDate`, `htmlDateString`, `head` (first/last n), `min`, `hasTag`, `excludeDrafts`, `filterTagList`, `search` (builds the search index), plus the `{% thumb src, alt %}` async shortcode (300px JPEG via `@11ty/eleventy-img`; throws if `alt` is missing). Markdown runs through markdown-it with `html`, `linkify`, anchors, attrs (`{.class}`) and implicit figures with figcaptions enabled.
