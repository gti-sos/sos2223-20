import { c as create_ssr_component, v as validate_component } from './index-120532d3.js';

const css$1 = {
  code: ".container.svelte-dc4aab.svelte-dc4aab{max-width:1200px;margin:0 auto;padding:20px}.title.svelte-dc4aab.svelte-dc4aab{font-size:2em;margin-bottom:20px}nav.svelte-dc4aab ul.svelte-dc4aab{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;justify-content:center}nav.svelte-dc4aab li.svelte-dc4aab{margin:10px}nav.svelte-dc4aab a.svelte-dc4aab{text-decoration:none;color:#0077cc;font-weight:bold;padding:10px;border-radius:5px;transition:all 0.3s ease;background-color:#f2f2f2}nav.svelte-dc4aab a.svelte-dc4aab:hover{background-color:#0077cc;color:#fff}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main class="container svelte-dc4aab"><h1 class="title svelte-dc4aab">Integraciones LMP</h1>
  <nav class="svelte-dc4aab"><ul class="svelte-dc4aab"><li class="svelte-dc4aab"><a href="\\integrations\\lmp\\api-immovables\\jscharting" class="svelte-dc4aab">Graficos API Immovables JSCharting</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\lmp\\api-immovables\\morris" class="svelte-dc4aab">Graficos API Immovables Morris</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\lmp\\api-sos\\con-proxy" class="svelte-dc4aab">Integraciones con Compañeros LMP con Proxy</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\lmp\\api-sos\\sin-proxy" class="svelte-dc4aab">Integraciones con Compañeros LMP sin Proxy</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\lmp\\apis-externas\\google\\grafica" class="svelte-dc4aab">API Externa Google LMP Grafica</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\lmp\\apis-externas\\google\\tabla" class="svelte-dc4aab">API Externa Google LMP Tabla</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\lmp\\apis-externas\\youtube" class="svelte-dc4aab">API Externa Youtube LMP</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\lmp\\api-immovables\\highcharts" class="svelte-dc4aab">Graficos API Immovables HighCharts</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\lmp\\apis-externas\\pokemon" class="svelte-dc4aab">API Externa Pokemon</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\lmp\\apis-externas\\paises" class="svelte-dc4aab">API Externa Paises</a></li></ul></nav>
  <br>
  <h1 class="title svelte-dc4aab">Integraciones MAS</h1>
  <nav class="svelte-dc4aab"><ul class="svelte-dc4aab"><li class="svelte-dc4aab"><a href="\\integrations\\mas\\api-andalusian-campings\\highcharts" class="svelte-dc4aab">Graficos API Campings HighCharts</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\mas\\api-andalusian-campings\\google_chart" class="svelte-dc4aab">Graficos Google Charts</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\mas\\api-andalusian-campings\\external-api\\currency" class="svelte-dc4aab">Precios Monedas</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\mas\\api-andalusian-campings\\external-api\\music" class="svelte-dc4aab">Info Nirvana</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\mas\\api-andalusian-campings\\external-api\\space" class="svelte-dc4aab">Noticias Espaciales</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\mas\\api-andalusian-campings\\external-api\\advice" class="svelte-dc4aab">Consejos</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\mas\\api-andalusian-campings\\external-api\\university" class="svelte-dc4aab">Lista de Universidades</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\mas\\api-andalusian-campings\\external-api\\science" class="svelte-dc4aab">Literatura Científica</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\mas\\api-andalusian-campings\\external-api\\food" class="svelte-dc4aab">Recetas de Comida</a></li></ul></nav>
  <br>
  <h1 class="title svelte-dc4aab">Integraciones Conjunta </h1>
  <nav class="svelte-dc4aab"><ul class="svelte-dc4aab"><li class="svelte-dc4aab"><a href="\\integrations\\mas\\api-andalusian-campings\\together" class="svelte-dc4aab">Graficos Conjuntos 1</a></li>
      <li class="svelte-dc4aab"><a href="\\integrations\\lmp\\together" class="svelte-dc4aab">Graficos Conjuntos 2</a></li></ul></nav>
</main>`;
});
const css = {
  code: "main.svelte-f9fgbr{width:100% !important;max-width:100% !important}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-f9fgbr">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <hr>
    ${slots.default ? slots.default({}) : ``}
    <hr>
    </main>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-82609591.js.map
