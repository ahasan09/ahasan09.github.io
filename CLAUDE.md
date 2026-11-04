# ahasan09.github.io

Personal portfolio site for Abul Hasan, served via GitHub Pages at https://ahasan09.github.io. Single-page static site presenting professional experience, tech stack, featured projects, and contact information.

## Tech Stack
- Plain HTML5, CSS3, and vanilla JavaScript (no build step, no framework)
- Google Fonts: Inter and Fira Code (loaded via CDN)
- Inline SVG icons for GitHub, LinkedIn, and email

## Project Structure
```
ahasan09.github.io/
  index.html          # All sections: nav, hero, about, skills, experience, projects, education, contact, footer
  style.css           # GitHub-dark themed styling, CSS custom properties, responsive breakpoints
  script.js           # Navbar scroll effect, hamburger menu, active link tracking, fade-in animations
  avatar.png          # Hero avatar image (200x200 displayed)
  avatar-square.png   # Open Graph social preview image
  cv.html             # Print-ready CV page; source of truth for abul-hasan-cv.pdf
  abul-hasan-cv.pdf   # Downloadable CV, generated from cv.html (served by the hero "Download CV" button)
  case-studies/       # Five architecture case studies + case-study.css
```

## Sections
- Hero with avatar, code card mock (`engineer.ts`), and CTA buttons
- Impact with stats grid and "How I work / How I build now" highlights
- Experience timeline (Cefalo, SELISE, Databiz) — one entry per employer with full tenure; the title is the final one, with a promotion line underneath
- Stack grouped into Frontend, Backend, Data & messaging, Cloud & delivery, Quality & practice
- Case Studies grid linking to `case-studies/*.html`
- Education & Certification cards (incl. Claude Certified Architect – Foundations, Nov 2026, Credly link)
- Contact links (LinkedIn, GitHub, email)

## CV workflow
- Edit `cv.html`, then regenerate the PDF from the repo root:
  ```bash
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
    --no-pdf-header-footer --print-to-pdf=abul-hasan-cv.pdf "file://$PWD/cv.html"
  ```
- Verify the PDF is still 2 A4 pages (read it back) before committing; commit `cv.html` and the PDF together
- Keep `cv.html`, `index.html` (timeline, stack, education, JSON-LD) and the case studies consistent — a fact changed in one usually needs changing in the others
- Local exports `abul-hasan-cv_v*.pdf` are gitignored; don't commit them

## Content rules (public site)
- **No client names** anywhere: page text, `<meta>`/OG/Twitter tags, JSON-LD, diagram labels, file names and URLs. Use generic descriptions: "archive management system for the Norwegian national archives", "the public archive portal", "fintech platform connecting IFAs and their customers (EU)", "Bangladeshi computer retailer". Employers (Cefalo, SELISE) may be named
- **Email:** use `abulhasanraju@gmail.com` only, never the work address
- **Source of truth for facts:** the user's internal Cefalo CV (Google Doc). When the site disagrees with it, the Google Doc wins. Never edit that doc, and never publish it — it names clients
- Don't overclaim: credit team work as team work (e.g. CI standardization, project skills are team-written; the user wrote the guardrail hooks and set up the self-hosted runners)

## View Locally
```bash
# Option 1: open directly in browser
open index.html

# Option 2: serve with Python (recommended for relative paths)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Key Notes
- No package manager, no dependencies, no build pipeline — edits go live by pushing to `main`
- Theme uses GitHub-style dark palette via CSS variables in `:root` (`--bg`, `--accent`, etc.)
- Responsive breakpoints at 1024px, 768px, and 480px; hamburger menu appears below 768px
- Section reveal animations use `IntersectionObserver` (no animation library)
- Open Graph metadata in `<head>` references `avatar-square.png` for link previews
