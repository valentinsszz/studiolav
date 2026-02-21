// Animación suave del Navbar al hacer scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar-floating');
    if (window.scrollY > 100) {
        nav.style.width = '80%';
        nav.style.top = '10px';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    } else {
        nav.style.width = '90%';
        nav.style.top = '20px';
        nav.style.boxShadow = 'none';
    }
});

function loadMainVideo() {
    const container = document.getElementById('mainPlayer');
    // Reemplazamos el contenido por el iframe de YouTube con autoplay=1
    container.innerHTML = `
        <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/qQusOrcYdzs?autoplay=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
            </iframe>
        </div>
    `;
    // Quitamos el onclick para que no se reinicie al hacer clic de nuevo
    container.onclick = null;
}

// Lógica de aparición suave (Reveal Effect)
document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Una vez animado, dejamos de observarlo para mejorar rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionamos todos los elementos que queremos que "aparezcan"
    const elementsToAnimate = document.querySelectorAll(
        '.benefit-card, .method-card, .project-card, .section-padding h2, .form-container, .badge-pill'
    );
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('reveal');
        
        // Aplicamos un pequeño delay automático a las tarjetas para que no salgan todas juntas
        if(el.classList.contains('benefit-card') || el.classList.contains('method-card')) {
            const delay = (index % 3) * 0.1; // Crea un efecto de cascada
            el.style.transitionDelay = `${delay}s`;
        }
        
        observer.observe(el);
    });
});