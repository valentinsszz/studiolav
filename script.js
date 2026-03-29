/* Burger */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('nav-mobile');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
function closeMobile() {
  burger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

/* FAQ */
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* Scroll reveal with animation */
const ro = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

/* Parallax effect on scroll */
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  parallaxElements.forEach(el => {
    const speed = el.getAttribute('data-parallax') || 0.5;
    const yPos = scrolled * speed;
    el.style.transform = `translateY(${yPos}px)`;
  });

  /* Subtle scale effect for hero */
  const hero = document.querySelector('.hero');
  if (hero && scrolled < window.innerHeight) {
    const scale = 1 - (scrolled / window.innerHeight) * 0.05;
    hero.style.opacity = Math.max(0.7, 1 - (scrolled / window.innerHeight) * 0.3);
  }
}, { passive: true });

/* Smooth scroll with nav offset */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      const offset = document.getElementById('nav').offsetHeight + 16;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      closeMobile();
    }
  });
});

/* Nav shrink on scroll */
window.addEventListener('scroll', () => {
  document.getElementById('nav').style.padding =
    window.scrollY > 60
      ? `12px clamp(20px,5vw,60px)`
      : `18px clamp(20px,5vw,60px)`;
}, { passive: true });

/* Video modal */
function openVideo(src) {
  document.getElementById('video-iframe').src = src;
  document.getElementById('video-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeVideo() {
  document.getElementById('video-modal').classList.remove('open');
  document.getElementById('video-iframe').src = '';
  document.body.style.overflow = '';
}
function closeVideoOnOverlay(e) {
  if (e.target === document.getElementById('video-modal')) closeVideo();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideo(); });