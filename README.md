# ahasan09.github.io

Personal portfolio and CV site for **Abul Hasan** — Senior Staff Software Engineer — hosted on GitHub Pages.

**Live site:** https://ahasan09.github.io

## What's Here

- Single-page portfolio (`index.html`, `style.css`, `script.js`) — no framework, no build step
- Five architecture case studies (`case-studies/`)
- Print-ready CV page (`cv.html`) and the PDF generated from it (`abul-hasan-cv.pdf`)
- SEO basics: `robots.txt`, `sitemap.xml`, Open Graph and Twitter-card meta tags

## Local Development

No tooling required — open `index.html` in a browser, or serve it locally:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Updating the CV

`cv.html` is the source of truth for the CV; `abul-hasan-cv.pdf` is generated from it and is what the site's **Download CV** button serves.

1. Edit `cv.html`. Keep it in line with the homepage (`index.html`) and the case studies.
2. Regenerate the PDF with headless Chrome (A4, two pages):

   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
     --no-pdf-header-footer --print-to-pdf=abul-hasan-cv.pdf "file://$PWD/cv.html"
   ```

   Or open `cv.html` in a browser and print to PDF: A4, default margins, background graphics on, headers and footers off.
3. Open the PDF and check that it is still two pages with no awkward breaks.
4. Commit `cv.html` and `abul-hasan-cv.pdf` together.

Local working copies named `abul-hasan-cv_v*.pdf` are ignored by git.

### Content rules

- **No client names.** Describe client projects generically (for example, "archive management system for the Norwegian national archives", "fintech platform connecting IFAs and their customers"). This applies to the CV, the homepage, the case studies, page metadata and file names.
- **Personal contact details only:** `abulhasanraju@gmail.com`, not a work email.
- The internal Cefalo CV (Google Doc) is the factual reference for roles, dates and claims; where it differs from this site, the Google Doc wins. Do not publish the Cefalo CV itself, because it names clients.

## Deployment

Pushing to the default branch publishes automatically via GitHub Pages (this is a `<username>.github.io` repository).

## Structure

```
├── index.html            # The whole portfolio site
├── style.css             # Site styles
├── script.js             # Interactions
├── cv.html               # Print-ready CV page (source of the PDF)
├── abul-hasan-cv.pdf     # CV download, generated from cv.html
├── case-studies/         # Architecture case studies + case-study.css
├── avatar*.{png,webp}    # Profile images
├── robots.txt            # Crawler rules
└── sitemap.xml           # Sitemap for search engines
```
