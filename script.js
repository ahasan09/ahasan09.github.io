/* ─── NAVBAR scroll effect (rAF-throttled) ──────────────── */
const navbar = document.getElementById('navbar');
let scrollTicking = false;

function updateNavbarBg() {
  navbar.style.background = window.scrollY > 40
    ? 'rgba(13,17,23,0.96)'
    : 'rgba(13,17,23,0.85)';
  scrollTicking = false;
}
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(updateNavbarBg);
    scrollTicking = true;
  }
}, { passive: true });

/* ─── HAMBURGER menu ────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* ─── ACTIVE nav link tracking ──────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const activeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => activeObserver.observe(s));

/* ─── FADE-IN on scroll ─────────────────────────────────── */
const fadeEls = document.querySelectorAll(
  '.timeline-card, .project-card, .rec-card, .edu-card, .stat, .impact-pillars li, .skill-group'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => fadeObserver.observe(el));

/* staggered fade for grid children */
document.querySelectorAll('.projects-grid .project-card, .recs-grid .rec-card, .edu-grid .edu-card, .impact-stats .stat')
  .forEach((el, i) => {
    el.style.transitionDelay = `${i * 70}ms`;
  });

/* ─── DYNAMIC year in footer ────────────────────────────── */
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = `© ${new Date().getFullYear()} Abul Hasan`;
