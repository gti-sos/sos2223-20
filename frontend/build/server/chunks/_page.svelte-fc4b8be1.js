import { c as create_ssr_component } from './index-120532d3.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [];
  let countsIProvincia = /* @__PURE__ */ new Map();
  let countsINaturaleza = /* @__PURE__ */ new Map();
  let countsIUso = /* @__PURE__ */ new Map();
  let countsIid = /* @__PURE__ */ new Map();
  let countsIresource = /* @__PURE__ */ new Map();
  let countsIinventorynum = /* @__PURE__ */ new Map();
  function processDataI() {
    data.forEach((item) => {
      const year = item.modified_date;
      const province = item.province;
      const countI = countsIProvincia.get(year) || {};
      countI[province] = (countI[province] || 0) + 1;
      countsIProvincia.set(year, countI);
      const nature = item.nature;
      const countInature = countsINaturaleza.get(year) || {};
      countInature[nature] = (countInature[nature] || 0) + 1;
      countsINaturaleza.set(year, countInature);
      const usage = item.current_usage;
      const countIusage = countsIUso.get(year) || {};
      countIusage[usage] = (countIusage[usage] || 0) + 1;
      countsIUso.set(year, countIusage);
      const id = item.id;
      const countIid = countsIid.get(year) || {};
      countIid[id] = (countIid[id] || 0) + 1;
      countsIid.set(year, countIid);
      const resource = item.resource;
      const countIresource = countsIresource.get(year) || {};
      countIresource[resource] = (countIresource[resource] || 0) + 1;
      countsIresource.set(year, countIresource);
      const inventory_num = item.inventory_num;
      const countIinv = countsIinventorynum.get(year) || {};
      countIinv[inventory_num] = (countIinv[inventory_num] || 0) + 1;
      countsIinventorynum.set(year, countIinv);
    });
  }
  {
    processDataI();
  }
  return `${$$result.head += `<!-- HEAD_svelte-s6dm76_START --><script src="https://code.highcharts.com/highcharts.js"><\/script><script src="https://code.highcharts.com/modules/series-label.js"><\/script><script src="https://code.highcharts.com/modules/exporting.js"><\/script><script src="https://code.highcharts.com/modules/export-data.js"><\/script><!-- HEAD_svelte-s6dm76_END -->`, ""}


<main><h1>Immuebles por parametros no numericos según el año</h1>
    <div id="chartI" style="height: 500px;width: 80%;"></div>
    <h1>Immuebles por parametros numericos según el año</h1>
    <div id="chartII" style="height: 500px;width: 80%;"></div>
    <h1>Immuebles por todos los parametros </h1>
    <div id="chartIII" style="height: 500px;width: 80%;"></div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fc4b8be1.js.map
