import { c as create_ssr_component } from "../../../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1orte81_START --><script src="https://code.jscharting.com/latest/jscharting.js"><\/script><!-- HEAD_svelte-1orte81_END -->`, ""}
<main><div style="margin-left: 30px;"><h1 style="text-align:center; font-style: oblique;">Integración con compañero con Proxy</h1>
        <h2 style="text-align:center; font-style: oblique;">Gráfica inmuebles y temperaturas</h2></div>
    <h2>Primera Integración</h2>
    <div id="chartPrimera" style="height: 500px; margin: 0px auto; margin-top:40px"></div>
    <h2>Variables propias</h2>
    <div id="chartSegunda" style="height: 500px; margin: 0px auto; margin-top:40px"></div>
    <h2>Segunda Integración</h2>
    <div id="chartTercera" style="height: 500px; margin: 0px auto; margin-top:40px"></div>
    <div style="margin-left:40px;font-size:20px;"><h4>Resultado compañerx</h4>
        ${``}
        <h4>Resultados propios</h4>
        ${``}</div></main>`;
});
export {
  Page as default
};
