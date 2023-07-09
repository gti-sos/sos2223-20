import { c as create_ssr_component, v as validate_component } from './index-120532d3.js';

const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `Desarrollado por: <b>Lorenzo Morales Palacios &amp; Miguel Ángel Salinas</b>`;
});
const css$1 = {
  code: "nav.svelte-13gw9cj.svelte-13gw9cj{background-color:#fff;height:60px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;box-shadow:0px 4px 6px rgba(0, 0, 0, 0.1)}nav.svelte-13gw9cj a.svelte-13gw9cj{color:#9a3227;font-size:18px;text-decoration:none;margin-right:20px;transition:color 0.3s ease-in-out;font-family:Arial, sans-serif}nav.svelte-13gw9cj a.svelte-13gw9cj:hover{color:#71251c}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="svelte-13gw9cj"><a href="/" class="svelte-13gw9cj">Inicio</a>
  <a href="/api/v2/immovables" class="svelte-13gw9cj">Inmuebles</a>
  <a href="/api/v2/andalusian-campings" class="svelte-13gw9cj">Campings Andalucia</a>
  <a href="/integrations" class="svelte-13gw9cj">Integraciones</a>
  <a href="/analytics" class="svelte-13gw9cj">Integración Conjunta</a>
  <a href="/about" class="svelte-13gw9cj">Vídeo</a>
</nav>`;
});
const css = {
  code: "main.svelte-ore3xj{width:100% !important;max-width:100% !important}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-ore3xj">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<hr>
${slots.default ? slots.default({}) : ``}
<hr>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-6c787201.js.map
