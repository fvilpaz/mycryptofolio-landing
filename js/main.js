// ── HAMBURGUESA ──
const burger = document.getElementById('nav-burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── NAV ACTIVE ON SCROLL ──
const sections = document.querySelectorAll('[data-section]');
const links = document.querySelectorAll('.nav__links a[data-nav]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.dataset.section;
      links.forEach(a => a.classList.toggle('active', a.dataset.nav === id));
    }
  });
}, { threshold: 0.3 });
sections.forEach(s => sectionObserver.observe(s));

// ── FADE-IN ON SCROLL ──
document.querySelectorAll('.section, .stats, .cta').forEach(el => el.classList.add('fade-in'));
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ── LIGHTBOX ──
document.querySelectorAll('.gallery__item img, .showcase__img img, .screenshot img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:999;background:rgba(0,0,0,.92);display:flex;align-items:center;justify-content:center;cursor:zoom-out;padding:24px;';
    const clone = img.cloneNode();
    clone.style.cssText = 'max-width:90vw;max-height:90vh;object-fit:contain;border-radius:12px;cursor:default;box-shadow:0 32px 64px rgba(0,0,0,.8);';
    overlay.appendChild(clone);
    overlay.addEventListener('click', () => overlay.remove());
    document.addEventListener('keydown', e => { if (e.key === 'Escape') overlay.remove(); }, { once: true });
    document.body.appendChild(overlay);
  });
});
