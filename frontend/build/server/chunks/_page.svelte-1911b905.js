import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from './index-120532d3.js';

const css = {
  code: "table.svelte-gbz1e3.svelte-gbz1e3{border-collapse:collapse;width:100%}td.svelte-gbz1e3.svelte-gbz1e3,th.svelte-gbz1e3.svelte-gbz1e3{border:1px solid #ddd;padding:8px;text-align:left}th.svelte-gbz1e3.svelte-gbz1e3{background-color:#4CAF50;color:white}tr.svelte-gbz1e3.svelte-gbz1e3:nth-child(even){background-color:#f2f2f2}a.svelte-gbz1e3.svelte-gbz1e3{color:#1E90FF}a.svelte-gbz1e3.svelte-gbz1e3:hover{color:#ff9900}tr.svelte-gbz1e3.svelte-gbz1e3:nth-child(odd){background-color:#f9f9f9;font-weight:bold;color:#555}tr.svelte-gbz1e3:nth-child(odd) td.svelte-gbz1e3:first-child{background-color:#555;color:#fff}tr.svelte-gbz1e3:nth-child(odd) td.svelte-gbz1e3:last-child{background-color:hsl(167, 90%, 58%);color:#fff}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let results = [];
  const fetchResults = async () => {
    const API_KEY = "";
    const QUERY = "FC Barcelona";
    const SEARCH_URL = `https://kgsearch.googleapis.com/v1/entities:search?query=${QUERY}&key=${API_KEY}&limit=10&indent=True`;
    const response = await fetch(SEARCH_URL);
    const data = await response.json();
    results = data.itemListElement.map((item) => item.result);
    console.log(results);
  };
  fetchResults();
  $$result.css.add(css);
  return `<main><table class="svelte-gbz1e3"><thead><tr class="svelte-gbz1e3"><th class="svelte-gbz1e3">Name</th>
        <th class="svelte-gbz1e3">Description</th>
        <th class="svelte-gbz1e3">Image</th>
        <th class="svelte-gbz1e3">Detailed Description</th>
        <th class="svelte-gbz1e3">URL</th></tr></thead>
    <tbody>${each(results, (result) => {
    return `<tr class="svelte-gbz1e3"><td class="svelte-gbz1e3">${escape(result.name)}</td>
          <td class="svelte-gbz1e3">${escape(result.description)}</td>
          <td class="svelte-gbz1e3"><img${add_attribute("src", result.image.url, 0)}${add_attribute("alt", result.name, 0)} width="100"></td>
          <td class="svelte-gbz1e3">${escape(result.detailedDescription.articleBody)}</td>
          <td class="svelte-gbz1e3"><a${add_attribute("href", result.url, 0)} target="_blank" class="svelte-gbz1e3">Visit Website</a></td>
        </tr>`;
  })}</tbody></table>
</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1911b905.js.map
