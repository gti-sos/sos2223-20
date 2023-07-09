import { c as create_ssr_component } from "../../../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data = [];
  console.log(data);
  return `${$$result.head += `<!-- HEAD_svelte-1p2hdj7_START --><script src="https://www.gstatic.com/charts/loader.js"><\/script><!-- HEAD_svelte-1p2hdj7_END -->`, ""}

<div id="piechart_3d" style="width: 1500px; height: 600px;"></div>
<div id="columnchart_values" style="width: 1500px; height: 900px;"></div>`;
});
export {
  Page as default
};
