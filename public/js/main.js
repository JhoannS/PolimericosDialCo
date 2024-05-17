// const popupOverlay = document.querySelector(".popup-overlay");
// const skipButton = document.querySelector(".popup-container .skip-button");
// const visitButton = document.querySelector(".popup-container .visit-button");

// let remainingTime = 3;
// let allowedToSkip = false;
// let popupTimer;

// const createPopupCookie = () => {
//   let expiresDays = 30;
//   let date = new Date();
//   date.setTime(date.getTime() + expiresDays * 6 * 60 * 60 * 1000);
//   let expires = "expires=" + date.toUTCString();
//   document.cookie = `popupCookie=true; ${expires}; path=/;`;
// };

// const showAd = () => {
//   popupOverlay.classList.add("active");
//   popupTimer = setInterval(() => {
//     skipButton.innerHTML = `Omitir en ${remainingTime}s`;
//     remainingTime--;

//     if (remainingTime < 0) {
//       allowedToSkip = true;
//       skipButton.innerHTML = "Omitir";
//       clearInterval(popupTimer);
//     }
//   }, 1000);
// };

// const skipAd = () => {
//   popupOverlay.classList.remove("active");
//   createPopupCookie();
// };

// skipButton.addEventListener("click", () => {
//   if (allowedToSkip) {
//     skipAd();
//   }
// });

// const startTimer = () => {
//   if (window.scrollY > 100) {
//     showAd();
//     window.removeEventListener("scroll", startTimer);
//   }
// };

// if (!document.cookie.match(/^(.*;)?\s*popupCookie\s*=\s*[^;]+(.*)?$/)) {
//   window.addEventListener("scroll", startTimer);
// }

// window.addEventListener("scroll", function () {
//   const header = document.querySelector("header");
//   header.classList.toggle("abajo", window.scrollY > 0);
// });

// scripts.js de portada
const contenido = document.querySelector('aside');
let lastScrollTop = 0;

function mostrarContenido() {
    const alturaVentana = window.innerHeight;
    const distanciaContenido = contenido.getBoundingClientRect().top;
    const st = window.pageYOffset || document.documentElement.scrollTop;

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


