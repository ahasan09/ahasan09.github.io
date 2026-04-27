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
```

## Sections
- Hero with avatar, code card mock (`engineer.ts`), and CTA buttons
- About with stats grid and "What I Do" highlights
- Skills grouped into Frontend, Backend, Databases & Messaging, DevOps & Cloud, Testing & Quality
- Experience timeline (Cefalo, SELISE, earlier roles)
- Featured Projects grid linking to GitHub repos
- Education & Certification cards
- Contact links (LinkedIn, GitHub, email)

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
