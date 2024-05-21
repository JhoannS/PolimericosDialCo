/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent } from '../astro_DmwStj6B.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderTiendaCursos, a as $$CategoriasTiendaCursos, b as $$Footer, c as $$Derechos } from './cursosGratis_CAPq3oEd.mjs';
import 'clsx';
/* empty css                               */
import { $ as $$Layout } from './admin_ClAeEDAX.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$PagaTiendaCursos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PagaTiendaCursos;
  return renderTemplate(_a || (_a = __template(["", '<div class="bloque" data-astro-cid-uw2v2fgz> <h1 data-astro-cid-uw2v2fgz>\xA1Esta seccion estara disponible muy PRONTO!, te invitamos a <a href="/login" data-astro-cid-uw2v2fgz>REGISTRARTE</a> y obtener recompensas exclusivas</h1> </div>  <script src="../js/cursos.js"><\/script>'])), maybeRenderHead());
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/components/tienda_cursos/paga_tienda_cursos.astro", void 0);

const $$Astro = createAstro();
const $$CursosPaga = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CursosPaga;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Market Cursos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderTiendaCursos", $$HeaderTiendaCursos, {})} ${renderComponent($$result2, "CategoriasTiendaCursos", $$CategoriasTiendaCursos, {})} ${renderComponent($$result2, "TiendaCursosPaga", $$PagaTiendaCursos, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "Derechos", $$Derechos, {})} ` })}`;
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/pages/marketCursos/cursosPaga.astro", void 0);

const $$file = "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/pages/marketCursos/cursosPaga.astro";
const $$url = "/marketCursos/cursosPaga";

export { $$CursosPaga as default, $$file as file, $$url as url };
