import { c as create_ssr_component } from './index-120532d3.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [];
  let countsI = /* @__PURE__ */ new Map();
  function processDataI() {
    data.forEach((item) => {
      const year = item.modified_date.split("-")[0];
      const province = item.province;
      const countI = countsI.get(year) || {};
      countI[province] = (countI[province] || 0) + 1;
      countsI.set(year, countI);
    });
  }
  {
    processDataI();
  }
  return `${$$result.head += `<!-- HEAD_svelte-du5ezb_START --><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css"><script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"><\/script><script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"><\/script><script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"><\/script><!-- HEAD_svelte-du5ezb_END -->`, ""}




<main><h1>Immuebles por Provincia según el año</h1>
  <div id="chartI" style="height: 250px;"></div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0d3e2f52.js.map
