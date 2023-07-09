import { c as create_ssr_component } from './index-120532d3.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [];
  let countsU = /* @__PURE__ */ new Map();
  function processDataU() {
    data.forEach((item) => {
      const uso = item.current_usage.split("-")[0];
      const province = item.province;
      const countU = countsU.get(uso) || {};
      countU[province] = (countU[province] || 0) + 1;
      countsU.set(uso, countU);
    });
  }
  {
    processDataU();
  }
  return `${$$result.head += `<!-- HEAD_svelte-vszt9o_START --><script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"><\/script><script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"><\/script><script src="https://code.jscharting.com/latest/jscharting.js"><\/script><!-- HEAD_svelte-vszt9o_END -->`, ""}



<main><h1>Uso de los inmuebles por Provincia</h1>
  <div id="chartU" style="height: 250px;"></div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4064cf94.js.map
