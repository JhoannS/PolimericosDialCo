import { c as createAstro, d as createComponent, r as renderTemplate, g as addAttribute, m as maybeRenderHead, h as renderComponent } from '../astro_DmwStj6B.mjs';
/* empty css                          */
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import { $ as $$Layout } from './admin_ClAeEDAX.mjs';
import { b as $$Footer, c as $$Derechos } from './cursosGratis_CAPq3oEd.mjs';

const $$Astro$8 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$7 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-nftbvynh> <div class="left" data-astro-cid-nftbvynh> <div class="img" data-astro-cid-nftbvynh> <img src="/img/logo.png" alt="logo Polimericos" width="50px" height="50px" data-astro-cid-nftbvynh> </div> <div class="logo_nombre" data-astro-cid-nftbvynh> <h2 data-astro-cid-nftbvynh>Polimericos Dial de Co</h2> <p data-astro-cid-nftbvynh>Equipo profesional en diferentes areas</p> </div> </div> <nav data-astro-cid-nftbvynh> <div class="container-input" data-astro-cid-nftbvynh> <input type="search" placeholder="Buscar..." name="text" class="input" data-astro-cid-nftbvynh> <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" data-astro-cid-nftbvynh> <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd" data-astro-cid-nftbvynh></path> </svg> </div> <div class="right" data-astro-cid-nftbvynh> <a href="" data-astro-cid-nftbvynh> <button class="Btn" data-astro-cid-nftbvynh> <div class="sign" data-astro-cid-nftbvynh><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-astro-cid-nftbvynh><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" data-astro-cid-nftbvynh></path></svg></div> <div class="text" data-astro-cid-nftbvynh>Asesor</div> </button> </a> <a href="/marketCursos" data-astro-cid-nftbvynh> <button class="Btn" data-astro-cid-nftbvynh> <div class="sign" data-astro-cid-nftbvynh><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-nftbvynh><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" data-astro-cid-nftbvynh></path></svg></div> <div class="text" data-astro-cid-nftbvynh>Cursos</div> </button> </a> <a href="/insumos" data-astro-cid-nftbvynh> <button class="Btn" data-astro-cid-nftbvynh> <div class="sign" data-astro-cid-nftbvynh><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-astro-cid-nftbvynh><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" data-astro-cid-nftbvynh></path></svg></div> <div class="text" data-astro-cid-nftbvynh>Insumos</div> </button> </a> <a href="/login" data-astro-cid-nftbvynh> <button class="Btn" data-astro-cid-nftbvynh> <div class="sign" data-astro-cid-nftbvynh><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-nftbvynh><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" data-astro-cid-nftbvynh></path></svg></div> <div class="text" data-astro-cid-nftbvynh>Login</div> </button> </a> </div> </nav> </header> `;
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/components/index/header.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$6 = createAstro();
const $$Portada = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Portada;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<section id="inicio" data-astro-cid-dsftgt4k> <article data-astro-cid-dsftgt4k> <h1 data-astro-cid-dsftgt4k><span data-astro-cid-dsftgt4k>Amplia </span>gama de cursos para <span data-astro-cid-dsftgt4k>emprender</span></h1> <p data-astro-cid-dsftgt4k>\nSomos un grupo de profesionales en diferentes \xE1reas dispuestos para\n      capacitarte en t\xE9cnicas de personalizaci\xF3n de pinturas y decoraciones, con\n      el fin de ayudarte a emprender.\n</p> <div class="botones-art" data-astro-cid-dsftgt4k> <a href="https://api.whatsapp.com/send?phone=%2B573058517530&context=ARANaxkEnQzLhYJQwqzUUrVnzGz_ND2E2lkcNPPQSc7bclRL4ns5O6hf50HWQQGwz6wGi8Fa2dS-9ZtdN_-FZ0q8zCLydwAx0pLjH_ZWEB7eM1avwYaw3n-zooYbCoRuFfqK8bwS2xd714YHoiotcMbStQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR0SkEeadJIgKA-sGqza4lcq4OaX_yiD1rtJ5D_gRLiKvc0lhoRFsY9rbaY_aem_Ae5IlTcH9Kl9HACHhNtg8iombYGY1Wg5sOkVDryMXN3fsOd05PZ4wEwiTVNYZfeHSQNGsG7dN7KWOW6EUWiU8kZf" target="_blank" aria-label="Comunicate por WhatsApp" data-astro-cid-dsftgt4k> <button class="cssbuttons-io" data-astro-cid-dsftgt4k> <span data-astro-cid-dsftgt4k><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-astro-cid-dsftgt4k> <path fill="#fff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" data-astro-cid-dsftgt4k></path></svg>\nInformaci\xF3n</span> </button> </a> </div> <main data-astro-cid-dsftgt4k> <a href="/marketCursos" data-astro-cid-dsftgt4k> <div class="header-main" data-astro-cid-dsftgt4k> <h2 data-astro-cid-dsftgt4k>Nuestro portafolio</h2> <div class="icono" data-astro-cid-dsftgt4k> ', ' </div> </div> <div class="back-portafolio" data-astro-cid-dsftgt4k> <div class="contenido-portafolio" data-astro-cid-dsftgt4k> <p data-astro-cid-dsftgt4k>\nTe ense\xF1aremos desde cero sin necesidad de costosas maquinas,\n              asesoria permanente y lo mejor de todo ser\xE1n los descuentos en\n              insumos.\n</p> </div> </div> </a> </main> </article> <aside data-astro-cid-dsftgt4k> <div class="icono-right" data-astro-cid-dsftgt4k> ', ' </div> </aside> </section>  <script src="../js/main.js"><\/script>'])), maybeRenderHead(), renderComponent($$result, "ion-icon", "ion-icon", { "name": "open-outline", "data-astro-cid-dsftgt4k": true }), renderComponent($$result, "ion-icon", "ion-icon", { "name": "open-outline", "data-astro-cid-dsftgt4k": true }));
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/components/index/portada.astro", void 0);

const $$Astro$5 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section id="nosotros" data-astro-cid-4kqeanmh> <aside data-astro-cid-4kqeanmh> <div class="icono-right" data-astro-cid-4kqeanmh> ${renderComponent($$result, "ion-icon", "ion-icon", { "name": "open-outline", "data-astro-cid-4kqeanmh": true })} </div> </aside> <article data-astro-cid-4kqeanmh> <h1 data-astro-cid-4kqeanmh>Mas sobre <span data-astro-cid-4kqeanmh>nosotros, quienes </span>somos.</h1> <p data-astro-cid-4kqeanmh>
Poliméricos Dial de Colombia es una compañía colombiana con centro de operaciones en la ciudad de Bogotá, dedicada a la implementación de nuevos sistemas para construcción, manejo de polímeros y tecnologías de decoración avanzada automotriz, con profesionales especializados en cada una de las áreas para llevar los conocimientos a las principales ciudades en el mundo.
</p> <div class="botones-art" data-astro-cid-4kqeanmh> <a href="/marketCursos" target="_blank" aria-label="Ver cursos" data-astro-cid-4kqeanmh> <button class="cssbuttons-io" data-astro-cid-4kqeanmh> <span data-astro-cid-4kqeanmh><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-astro-cid-4kqeanmh><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" data-astro-cid-4kqeanmh></path></svg>
Adquirir servicios</span> </button> </a> </div> </article> </section> `;
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/components/index/about.astro", void 0);

const $$Astro$4 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead()}<section id="servicios" data-astro-cid-mcthza4b> <article data-astro-cid-mcthza4b> <h2 data-astro-cid-mcthza4b> <span data-astro-cid-mcthza4b>3 Mejores </span> razones para adquirir <span data-astro-cid-mcthza4b>los servicios de Dial.</span> </h2> <div class="servicios" data-astro-cid-mcthza4b> <div class="container" data-astro-cid-mcthza4b> <div class="box" data-astro-cid-mcthza4b> <span class="title" data-astro-cid-mcthza4b>TRABAJOS PROFESIONALES</span> <div data-astro-cid-mcthza4b> <strong data-astro-cid-mcthza4b> ¡Realización de proyectos sumamente profesionales!</strong> <span data-astro-cid-mcthza4b>De:</span> <span data-astro-cid-mcthza4b>Polimericos Dial de CO </span> </div> </div> </div> <div class="container" data-astro-cid-mcthza4b> <div class="box" data-astro-cid-mcthza4b> <span class="title" data-astro-cid-mcthza4b>CAPACITACIÓN VIRTUAL Y PRESENCIAL</span> <div data-astro-cid-mcthza4b> <strong data-astro-cid-mcthza4b>Capacitaciones en diferentes tecnicas y sistemas de acabado y personalizacion.</strong> <span data-astro-cid-mcthza4b>De:</span> <span data-astro-cid-mcthza4b>Polimericos Dial de CO </span> </div> </div> </div> <div class="container" data-astro-cid-mcthza4b> <div class="box" data-astro-cid-mcthza4b> <span class="title" data-astro-cid-mcthza4b>INSUMOS DE ALTA CALIDAD</span> <div data-astro-cid-mcthza4b> <strong data-astro-cid-mcthza4b>Venta de todo tipo de insumos alta calidad.</strong> <span data-astro-cid-mcthza4b>De:</span> <span data-astro-cid-mcthza4b>Polimericos Dial de CO </span> </div> </div> </div> </div> </article> </section> `;
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/components/index/services.astro", void 0);

const $$Astro$3 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<section id="contacto" data-astro-cid-lc7y6htp> <article data-astro-cid-lc7y6htp> <h1 data-astro-cid-lc7y6htp>Si <span data-astro-cid-lc7y6htp>Polimericos Dial </span>tuviera un sinonimo, sería <span data-astro-cid-lc7y6htp>¡CALIDAD!.</span></h1> <p data-astro-cid-lc7y6htp> <span data-astro-cid-lc7y6htp>#1 de Colombia</span><br data-astro-cid-lc7y6htp>
¿Qué esperas para contactarnos?
</p> <div class="botones-art" data-astro-cid-lc7y6htp> <a href="https://api.whatsapp.com/send?phone=%2B573058517530&context=ARANaxkEnQzLhYJQwqzUUrVnzGz_ND2E2lkcNPPQSc7bclRL4ns5O6hf50HWQQGwz6wGi8Fa2dS-9ZtdN_-FZ0q8zCLydwAx0pLjH_ZWEB7eM1avwYaw3n-zooYbCoRuFfqK8bwS2xd714YHoiotcMbStQ&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwZXh0bgNhZW0CMTAAAR0SkEeadJIgKA-sGqza4lcq4OaX_yiD1rtJ5D_gRLiKvc0lhoRFsY9rbaY_aem_Ae5IlTcH9Kl9HACHhNtg8iombYGY1Wg5sOkVDryMXN3fsOd05PZ4wEwiTVNYZfeHSQNGsG7dN7KWOW6EUWiU8kZf" target="_blank" aria-label="Comunicate por WhatsApp" data-astro-cid-lc7y6htp> <button class="cssbuttons-io" data-astro-cid-lc7y6htp> <span data-astro-cid-lc7y6htp><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-astro-cid-lc7y6htp><path fill="#fff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" data-astro-cid-lc7y6htp></path></svg> Contactar</span> </button> </a> </div> </article> <aside data-astro-cid-lc7y6htp> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.025519565371!2d-74.10139192502142!3d4.589443195385185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f991f50dedd15%3A0xeae481775d0f3e59!2sPOLIMERICOS%20DIAL%20DE%20COLOMBIA!5e0!3m2!1ses-419!2sco!4v1711125386418!5m2!1ses-419!2sco" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="mapa_llegada" data-astro-cid-lc7y6htp></iframe> </aside> </section> `;
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/components/index/contact.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$SliderTrabajo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SliderTrabajo;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="companies" data-astro-cid-zmylfxgw> <h2 class="subtitle" data-astro-cid-zmylfxgw>\xA1Conoce m\xE1s de nuestro trabajo! </h2> <article class="slider" data-astro-cid-zmylfxgw> <div class="slider-track" id="imgTrabajo" data-astro-cid-zmylfxgw></div> </article> </section>  <script src="../js/imgTrabajos.js"><\/script>'])), maybeRenderHead());
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/components/index/slider_trabajo.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$SliderVisitas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SliderVisitas;
  return renderTemplate(_a || (_a = __template(["", '<section class="companies" data-astro-cid-5gdu4o2z> <h2 class="subtitle" data-astro-cid-5gdu4o2z>\xA1Tambien tenemos puntos de aprendizaje internacionales! </h2> <article class="slider" data-astro-cid-5gdu4o2z> <div class="slider-track" id="imgVisita" data-astro-cid-5gdu4o2z></div> </article> </section>  <script src="../js/imgVisita.js"><\/script>'])), maybeRenderHead());
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/components/index/slider_visitas.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Polimericos Dial de CO" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ViewTransitions", $$ViewTransitions, {})} ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Section", $$Portada, {})} ${renderComponent($$result2, "SliderTrabajo", $$SliderTrabajo, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "SliderVisitas", $$SliderVisitas, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "Derechos", $$Derechos, {})} ` })}`;
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/pages/index.astro", void 0);

const $$file = "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
