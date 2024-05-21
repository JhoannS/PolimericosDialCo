/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_DmwStj6B.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$HeaderTiendaCursos, b as $$Footer, c as $$Derechos } from './cursosGratis_CAPq3oEd.mjs';
import { $ as $$Layout } from './admin_ClAeEDAX.mjs';

const $$Astro = createAstro();
const $$PlayList001 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PlayList001;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Curso de tecnicas de pintura automotriz VOL.3" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderTiendaCursos", $$HeaderTiendaCursos, {})} ${maybeRenderHead()}<h1>hola jiji</h1> ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "Derechos", $$Derechos, {})} ` })}`;
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/pages/marketCursos/play1/playList001.astro", void 0);

const $$file = "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/pages/marketCursos/play1/playList001.astro";
const $$url = "/marketCursos/play1/playList001";

export { $$PlayList001 as default, $$file as file, $$url as url };
