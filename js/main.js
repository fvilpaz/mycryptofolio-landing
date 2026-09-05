// Nav active link on scroll
const sections = document.querySelectorAll('[data-section]');
const navLinks = document.querySelectorAll('.nav__links a[data-nav]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.dataset.section;
      navLinks.forEach(a => a.classList.toggle('active', a.dataset.nav === id));
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));

// Lightbox simple para las capturas
document.querySelectorAll('.gallery__item img, .showcase__img img, .screenshot img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:999;
      background:rgba(0,0,0,.92);
      display:flex;align-items:center;justify-content:center;
      cursor:zoom-out;padding:24px;
    `;
    const clone = img.cloneNode();
    clone.style.cssText = 'max-width:90vw;max-height:90vh;object-fit:contain;border-radius:12px;cursor:default;';
    overlay.appendChild(clone);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
