// scripts.js de portada
const contenido = document.querySelector('aside');
let lastScrollTop = 0;

function mostrarContenido() {
    const alturaVentana = window.innerHeight;
    const distanciaContenido = contenido.getBoundingClientRect().top;
    const st = window || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        // Scroll hacia abajo
        contenido.classList.add('mostrar');
        contenido.classList.remove('ocultar');
    } else {
        // Scroll hacia arriba
        if (distanciaContenido < alturaVentana * 2) {
            contenido.classList.remove('ocultar');
            contenido.classList.add('mostrar');
        }
    }

    lastScrollTop = st;
}

window.addEventListener('scroll', mostrarContenido);


