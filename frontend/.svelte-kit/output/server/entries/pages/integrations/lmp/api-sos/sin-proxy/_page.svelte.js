import { c as create_ssr_component } from "../../../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-17ams75_START --><script src="https://code.jscharting.com/latest/jscharting.js"><\/script><!-- HEAD_svelte-17ams75_END -->`, ""}
<main><div style="margin-left: 30px;"><h1 style="text-align:center; font-style: oblique;">Integración con compañero sin proxy</h1>
      <h2 style="text-align:center; font-style: oblique;">Gráfica ocupación de apartamentos e inmuebles</h2></div>
  <h2>Primera Integración</h2>
  <div id="chart_1" style="height:150px; margin: 0px auto; margin-top:40px"></div>
  <h2>Segunda Integración</h2>

  <div id="chart_2" style="height:150px; margin: 0px auto; margin-top:40px"></div>
  <h2>Tercera Integración</h2>

  <div id="chart_3" style="height:150px; margin: 0px auto; margin-top:40px"></div>
  <div style="margin-left:40px;font-size:20px;"><h4>Resultado inmuebles</h4>
      ${``}
      <h4>Resultados ocupación</h4>
      ${``}</div></main>`;
});
export {
  Page as default
};
