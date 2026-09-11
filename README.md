# wtf, jared

Staged Astro migration of https://blog.jsr.wtf. Public content captured September 10, 2026. This directory is the complete, standalone repository payload. Do not publish its parent infrastructure workspace.:q

## Local use

Node 24 and pnpm 11.19.0:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm verify
pnpm preview
```

`pnpm dev` supports the root path. For an exact deployed preview, use build then preview; postbuild handles the GitHub subpath and RSS compatibility files. Builds default to noindex. The source is plain Markdown with local images. A lockfile is included.

Create an essay with `node new-post.mjs "Essay title"`. Edit its Markdown, description, tags, dates and optional image; set `draft: false` to publish. Drafts are excluded from the generated site, but any file committed to a public repository is public, including its Git history. Keep private drafts outside that repository. Keep existing `slug` and `guid` values stable.

## Publish the staging preview

1. Create the user's chosen GitHub repository and push only this directory's tracked source. Exclude `evidence/`, `node_modules/`, `dist/`, `.astro/`, and all credentials. No account access is currently configured and no remote has been created.
2. Enable Settings → Pages → GitHub Actions. The included workflow builds and checks pull requests; pushes to main publish a preview at the repository's github.io URL.
3. Defaults derive `SITE_URL` and `BASE_PATH` from the repository owner/name and set `PRODUCTION=false`. For a user-site repository, set repository variable `BASE_PATH=/`.
4. Verify the actual deployed pages, mobile layout, asset responses, feed readers, and Actions permissions. No CNAME is included, so the workflow does not claim the existing domain.

## Scope and checks

Seven published essays, three tag pages, author page and homepage are preserved. Article text is compared against the fetched source with whitespace normalized; original heading fragments, displayed publication dates, RSS GUIDs, sitemap routes, and local links are checked. An existing broken `/mission-critical-apps` link was repaired, with a compatibility page at that path. The live source returns 404 there.

All 19 downloaded assets are local (~3.7 MiB). External hyperlinks remain external. Current author bio is preserved verbatim, including the historical VMware role; review it before launch. Membership login, signup, and payment functionality is intentionally absent from this static preview. Public crawling does not capture drafts, subscriber data, comments, historical redirects, or private posts.

Full-text RSS is generated at `/rss.xml` and `/rss/`, retaining original item IDs. GitHub Pages will likely serve the latter's `index.html` with an HTML MIME type; test existing feed-reader compatibility on the actual host before cutover. If it fails, use a host supporting an HTTP redirect from `/rss/` to `/rss.xml` (such as Cloudflare), or an explicit edge redirect. Do not assume a browser XML view proves feed compatibility.

## Later production cutover — not performed

Export Ghost content and members privately; download its current theme/routes/redirects and retain backups. Reconcile drafts, private content, comments and subscribers before considering cancellation. Review this design and author bio. Inventory existing DNS records and TTLs for rollback.

After approving cutover, configure and verify the custom domain in GitHub Pages, set repository variables `SITE_URL=https://blog.jsr.wtf`, `BASE_PATH=/`, `PRODUCTION=true`, build, and change the blog DNS record as required by GitHub. Verify HTTPS, all old routes, images, metadata, sitemap and RSS externally. Keep Ghost and the old DNS values for rollback until these checks pass. Cancelling Ghost is a separate final step.

`evidence/` holds the public crawl, conversion manifest, screenshots and local verification logs. It is not needed for hosting. `import-public.mjs` is a one-time importer and overwrites the imported Markdown; do not rerun it after editing posts without preserving those edits.
