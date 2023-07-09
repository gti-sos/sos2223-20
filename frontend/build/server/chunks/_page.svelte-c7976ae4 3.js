import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from './index-120532d3.js';

const css = {
  code: ".search-container.svelte-1xl54vq{max-width:800px;margin:0 auto}.search-form.svelte-1xl54vq{display:flex;gap:10px;margin-bottom:20px}.search-input.svelte-1xl54vq{flex:1;padding:10px;font-size:16px}.search-button.svelte-1xl54vq{padding:10px 20px;font-size:16px;background-color:#00838a;color:#fff;border:none;cursor:pointer}.search-results.svelte-1xl54vq{background-color:#f4f4f4;padding:20px}.result-item.svelte-1xl54vq{margin-bottom:20px}.result-title.svelte-1xl54vq{font-size:18px;font-weight:bold;margin-bottom:5px}.result-authors.svelte-1xl54vq{font-style:italic;margin-bottom:5px}.result-summary.svelte-1xl54vq{line-height:1.4}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm = "";
  let searchResults = [];
  $$result.css.add(css);
  return `<div class="search-container svelte-1xl54vq"><form class="search-form svelte-1xl54vq"><input class="search-input svelte-1xl54vq" type="text" placeholder="Enter a search term"${add_attribute("value", searchTerm, 0)}>
      <button class="search-button svelte-1xl54vq" type="submit">Buscar</button></form>
  
    <div class="search-results svelte-1xl54vq">${each(searchResults, (result) => {
    return `<div class="result-item svelte-1xl54vq"><div class="result-title svelte-1xl54vq">${escape(result.title)}</div>
            ${result.authors.length > 0 ? `<div class="result-authors svelte-1xl54vq">Autores: ${escape(result.authors.join(", "))}</div>` : ``}
            <div class="result-published">Fecha publicación: ${escape(result.publishedDate)}</div>
            <div class="result-summary svelte-1xl54vq">${escape(result.summary)}</div>
          </div>`;
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c7976ae4.js.map
