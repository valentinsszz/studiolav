  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  // Cerrar menú mobile al hacer click en un link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
  // Animación de aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, nav, .proj-card, .ben, .diff-card, .price-card, .stat-box, .vid-card, .sol-box, h1, h2, h3, p, .hero-badge, .hero-btns, .sec-hdr, .bens, .stat-row, footer').forEach((el, i) => {
  el.style.animationDelay = `${(i % 5) * 0.07}s`;
  el.classList.add('anim');
  observer.observe(el);
});
function toggleVideo(card) {
  const video = card.querySelector('video');
  const btn = card.querySelector('.vid-btn');
  if (video.paused) {
    video.play();
    card.classList.add('playing');
    btn.classList.add('playing');
  } else {
    video.pause();
    card.classList.remove('playing');
    btn.classList.remove('playing');
  }
}