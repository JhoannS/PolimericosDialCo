/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent } from '../astro_DmwStj6B.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderTiendaCursos, a as $$CategoriasTiendaCursos, d as $$GratisTiendaCursos, b as $$Footer, c as $$Derechos } from './cursosGratis_CAPq3oEd.mjs';
import { $ as $$Layout } from './admin_ClAeEDAX.mjs';

const $$Astro = createAstro();
const $$PlayList002 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlayList002;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Curso de tecnicas de pintura automotriz VOL.3" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderTiendaCursos", $$HeaderTiendaCursos, {})} ${renderComponent($$result2, "CategoriasTiendaCursos", $$CategoriasTiendaCursos, {})} ${renderComponent($$result2, "TiendaCursosGratis", $$GratisTiendaCursos, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "Derechos", $$Derechos, {})} ` })}`;
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/pages/marketCursos/play2/playList002.astro", void 0);

const $$file = "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/pages/marketCursos/play2/playList002.astro";
const $$url = "/marketCursos/play2/playList002";

export { $$PlayList002 as default, $$file as file, $$url as url };
