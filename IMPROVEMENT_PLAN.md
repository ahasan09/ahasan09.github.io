# Improvement Plan: ahasan09.github.io

## Overview
The site is a polished single-page portfolio with solid responsive design and accessible navigation basics. Main gaps are around accessibility details, SEO completeness, performance hints, and a few content/maintainability items that would harden it for long-term use.

## Improvements

### Accessibility (High)
- Hero avatar has `alt="Abul Hasan"` but the decorative code card uses no `aria-hidden`; mark it `aria-hidden="true"` so screen readers skip the cosmetic snippet
- Add `aria-expanded="false"` initial state to the hamburger button in HTML (currently only set dynamically in JS)
- Provide visible focus styles for nav links, buttons, and `.contact-card` — current `:hover` styles have no `:focus-visible` counterpart
- Replace emoji-only badges/icons (Cefalo, location, hl-icon) with `aria-label` or `aria-hidden` so assistive tech does not read raw emoji codepoints inconsistently
- Ensure color contrast for `--text2` (#8b949e) on `--bg2` meets WCAG AA — verify and darken if needed

### SEO & Metadata (High)
- Add `<meta name="author" content="Abul Hasan">` and `<meta name="theme-color" content="#0d1117">`
- Add Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) alongside existing Open Graph
- Add a `<link rel="canonical" href="https://ahasan09.github.io/">`
- Add a favicon (`<link rel="icon">`) — currently none referenced
- Add JSON-LD `Person` structured data for richer search results

### Performance (Medium)
- Add `loading="lazy"` to images that move below the fold; preload `avatar.png` with `<link rel="preload" as="image">` since it is in the hero
- `avatar.png` (236KB) and `avatar-square.png` (266KB) are large for headshots — re-export as compressed WebP/AVIF with PNG fallback
- Add `rel="preload"` for the Google Fonts stylesheet or self-host the two font families to drop a CDN round-trip
- Throttle the scroll listener in `script.js` (use `requestAnimationFrame`) that toggles navbar background on every scroll event

### Code Quality (Medium)
- Extract the repeated inline GitHub SVG (used 7+ times in `index.html`) into a single `<symbol>` referenced via `<use>` to cut HTML size
- Move the inline syntax-highlighted code block in the hero into a `<template>` or generate via JS to keep markup readable
- Add a simple `.editorconfig` and a basic `.github/workflows/html-validate.yml` to lint HTML/CSS on push

### Content (Low)
- "Open to Opportunities" badge is hardcoded — consider a small JS toggle or data attribute so it can be flipped without editing markup
- Footer "Designed & Built by Abul Hasan" could include a copyright year auto-rendered via JS
- Consider adding a downloadable resume/CV link near the hero CTAs
