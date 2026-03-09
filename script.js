  // Nav
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

  // Mobile menu
  document.getElementById('menuBtn').addEventListener('click', () => document.getElementById('mobileMenu').classList.add('open'));
  document.getElementById('menuClose').addEventListener('click', () => document.getElementById('mobileMenu').classList.remove('open'));
  document.querySelectorAll('.ml').forEach(l => l.addEventListener('click', () => document.getElementById('mobileMenu').classList.remove('open')));

  // Video con autoplay real
  function loadMainVideo() {
    const iframe = document.getElementById('mainVideoIframe');
    const thumb  = document.getElementById('videoThumbLayer');
    iframe.src = "https://www.youtube.com/embed/qQusOrcYdzs?autoplay=1&rel=0&modestbranding=1";
    thumb.classList.add('hidden');
  }

  // Reveal scroll
  const revEls = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.08 });
  revEls.forEach(el => obs.observe(el));

  // Form
  function handleSubmit(e) {
    const btn = e.target;
    btn.textContent = '✓ Mensaje enviado';
    btn.style.background = 'var(--accent)';
    btn.style.color = '#fff';
    setTimeout(() => { btn.textContent = 'Enviar mensaje →'; btn.style.background = ''; btn.style.color = ''; }, 3500);
  }

  // Active nav
  const allSecs = document.querySelectorAll('section[id]');
  const allNavA = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    allSecs.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
    allNavA.forEach(l => l.style.color = l.getAttribute('href') === '#' + cur ? 'var(--white)' : '');
  });