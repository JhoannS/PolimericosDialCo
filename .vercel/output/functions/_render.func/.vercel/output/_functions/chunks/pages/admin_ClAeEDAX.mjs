/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderSlot, f as renderHead, g as addAttribute, h as renderComponent, m as maybeRenderHead } from '../astro_DmwStj6B.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="somos una empresa internacional manejamos t\xE9cnicas profesionales de pintura automotriz, pinturas especiales, hidrocromo, hidrograf\xEDa"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/img/logo.png"><script src="https://kit.fontawesome.com/db59255a97.js" crossorigin="anonymous"><\/script><script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script><script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script><meta name="generator"', "><title>", "</title>", "</head> <body> <main> ", " </main>  </body> </html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/layouts/Layout.astro", void 0);

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
const User = asDrizzleTable("User", { "columns": { "userId": { "type": "number", "schema": { "unique": true, "deprecated": false, "name": "userId", "collection": "User", "primaryKey": true } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "User", "primaryKey": false, "optional": false } }, "email": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "email", "collection": "User", "primaryKey": false, "optional": false } }, "password": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "password", "collection": "User", "primaryKey": false, "optional": false } }, "created": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "created", "collection": "User" } }, "rol_id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "rol_id", "collection": "User", "primaryKey": false, "optional": false, "references": { "type": "number", "schema": { "unique": true, "deprecated": false, "name": "rolId", "collection": "Rol", "primaryKey": true } } } } }, "deprecated": false, "indexes": {} }, false);
const Rol = asDrizzleTable("Rol", { "columns": { "rolId": { "type": "number", "schema": { "unique": true, "deprecated": false, "name": "rolId", "collection": "Rol", "primaryKey": true } }, "rolName": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "rolName", "collection": "Rol", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

const $$Astro = createAstro();
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  const usuarios = await db.select().from(User);
  const rol = await db.select().from(Rol);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Usuarios:</h1> <ul> ${usuarios.map((usuarios2) => renderTemplate`<li>${usuarios2.name}</li><li>${usuarios2.created}</li><li>${usuarios2.rol_id}</li>`)} </ul> <h1>Roles:</h1> <ul> ${rol.map((rol2) => renderTemplate`<li>${rol2.rolName}</li><li>${rol2.rolId}</li>`)} </ul>` })}`;
}, "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/pages/roles/admin.astro", void 0);

const $$file = "C:/Users/DeimosJs/Documents/PORTAFOLIO/PO_DIAL_APP/PolimericosDialCo/src/pages/roles/admin.astro";
const $$url = "/roles/admin";

const admin = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, admin as a };
