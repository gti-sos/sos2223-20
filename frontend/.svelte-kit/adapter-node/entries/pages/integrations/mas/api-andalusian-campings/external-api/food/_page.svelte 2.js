import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../../../../../../chunks/index.js";
import { debounce } from "lodash";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".search-box.svelte-kqpbye.svelte-kqpbye{margin-bottom:1rem;background-color:rgba(106, 106, 106, 0.4);backdrop-filter:blur(10px);padding:0.5rem;border-radius:10px;display:flex;align-items:center}.search-input.svelte-kqpbye.svelte-kqpbye{flex:1;background:none;border:none;outline:none;color:white;font-size:1rem}.recipe-card.svelte-kqpbye.svelte-kqpbye{background-color:rgba(255, 255, 255, 0.4);backdrop-filter:blur(10px);padding:1rem;border-radius:10px;margin-bottom:1rem;display:flex;flex-direction:column;align-items:center;text-align:center}.recipe-card.svelte-kqpbye h3.svelte-kqpbye{margin-top:0;font-size:1.2rem;color:lightgray}.recipe-card.svelte-kqpbye img.svelte-kqpbye{width:100%;max-width:300px;height:auto;border-radius:5px;margin-top:1rem;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1)}.no-results.svelte-kqpbye.svelte-kqpbye{color:lightgrey}",
  map: null
};
const apiKey = "7ab3e991943f49f182b5c300cf4978af";
const apiUrl = "https://api.spoonacular.com/recipes/complexSearch";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchQuery = "";
  let searchResults = [];
  async function fetchData(query) {
    const url = `${apiUrl}?query=${query}&maxFat=25&number=5&apiKey=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      searchResults = data.results;
    } catch (error) {
      console.error("Error al recibir los datos:", error);
    }
  }
  debounce(fetchData, 300);
  $$result.css.add(css);
  return `<div class="search-box svelte-kqpbye"><input type="text" class="search-input svelte-kqpbye" placeholder="Buscar Recetas"${add_attribute("value", searchQuery, 0)}></div>

${searchResults.length > 0 ? `<div>${each(searchResults, (result) => {
    return `<div${add_attribute("key", result.id, 0)} class="recipe-card svelte-kqpbye"><h3 class="svelte-kqpbye">${escape(result.title)}</h3>
        <img${add_attribute("src", result.image, 0)}${add_attribute("alt", result.title, 0)} class="svelte-kqpbye">
      </div>`;
  })}</div>` : `<p class="no-results svelte-kqpbye">Sin resultados, prueba otra búsqueda</p>`}`;
});
export {
  Page as default
};
