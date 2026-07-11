# ahasan09.github.io

Personal portfolio and CV site for **Abul Hasan** — Senior Staff Software Engineer — hosted on GitHub Pages.

**Live site:** https://ahasan09.github.io

## What's Here

- Single-page portfolio (`index.html`, `style.css`, `script.js`) — no framework, no build step
- Downloadable CV (`abul-hasan-cv.pdf`)
- SEO basics: `robots.txt`, `sitemap.xml`, Open Graph and Twitter-card meta tags

## Local Development

No tooling required — open `index.html` in a browser, or serve it locally:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deployment

Pushing to the default branch publishes automatically via GitHub Pages (this is a `<username>.github.io` repository).

## Structure

```
├── index.html          # The whole site
├── style.css           # Styles
├── script.js           # Interactions
├── abul-hasan-cv.pdf   # CV download
├── avatar*.{png,webp}  # Profile images
├── robots.txt          # Crawler rules
└── sitemap.xml         # Sitemap for search engines
```
