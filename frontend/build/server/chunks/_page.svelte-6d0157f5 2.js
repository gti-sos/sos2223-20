import { c as create_ssr_component } from './index-120532d3.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [];
  console.log(data);
  let countsIProvincia = /* @__PURE__ */ new Map();
  let countsINombre = /* @__PURE__ */ new Map();
  let countsICodRegistro = /* @__PURE__ */ new Map();
  let countsIResponsable = /* @__PURE__ */ new Map();
  let countsICategoria = /* @__PURE__ */ new Map();
  let countsIMunicipio = /* @__PURE__ */ new Map();
  let id = [];
  let group_id = [];
  let camping_places = [];
  function processDataI() {
    data.forEach((item) => {
      const year = item.start_date.split("-")[0];
      const state = item.state;
      const countI = countsIProvincia.get(year) || {};
      countI[state] = (countI[state] || 0) + 1;
      countsIProvincia.set(year, countI);
    });
    console.log(countsIProvincia);
    data.forEach((item) => {
      const year = item.start_date.split("-")[0];
      const name = item.name;
      const countI = countsINombre.get(year) || {};
      countI[name] = (countI[name] || 0) + 1;
      countsINombre.set(year, countI);
    });
    data.forEach((item) => {
      const year = item.start_date.split("-")[0];
      const registry_code = item.registry_code;
      const countI = countsICodRegistro.get(year) || {};
      countI[registry_code] = (countI[registry_code] || 0) + 1;
      countsICodRegistro.set(year, countI);
    });
    data.forEach((item) => {
      const year = item.start_date.split("-")[0];
      const responsible = item.responsible;
      const countI = countsIResponsable.get(year) || {};
      countI[responsible] = (countI[responsible] || 0) + 1;
      countsIResponsable.set(year, countI);
    });
    data.forEach((item) => {
      const year = item.start_date.split("-")[0];
      const category = item.category;
      const countI = countsICategoria.get(year) || {};
      countI[category] = (countI[category] || 0) + 1;
      countsICategoria.set(year, countI);
    });
    data.forEach((item) => {
      const year = item.start_date.split("-")[0];
      const city = item.city;
      const countI = countsIMunicipio.get(year) || {};
      countI[city] = (countI[city] || 0) + 1;
      countsIMunicipio.set(year, countI);
    });
    for (let i = 0; i < data.length; i++) {
      id.push(data[i]["id"]);
      group_id.push(data[i]["group_id"]);
      camping_places.push(data[i]["camping_places"]);
    }
  }
  {
    processDataI();
  }
  return `${$$result.head += `<!-- HEAD_svelte-1iavqa8_START --><script src="https://code.highcharts.com/highcharts.js"><\/script><script src="https://code.highcharts.com/modules/exporting.js"><\/script><script src="https://code.highcharts.com/modules/export-data.js"><\/script><script src="https://code.highcharts.com/modules/accessibility.js"><\/script><!-- HEAD_svelte-1iavqa8_END -->`, ""}

<main><h1>Campings por parametros no numericos según el año</h1>
  <div id="chartI" style="height: 500px;width: 80%;"></div>
  <h1>Campings por parametros numericos según el año</h1>
  <div id="chartII" style="height: 550px;width: 80%;"></div>
  <h1>Campings por todos los parametros</h1>
  <div id="chartIII" style="height: 850px;width: 80%;"></div>
  <h1>Campings por provincia y año</h1>
  <div id="chartIIII" style="height: 650px;width: 80%;"></div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6d0157f5.js.map
