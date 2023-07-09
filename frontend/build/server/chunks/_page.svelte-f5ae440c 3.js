import { c as create_ssr_component, h as createEventDispatcher, d as add_attribute, f as each, e as escape } from './index-120532d3.js';

const css = {
  code: '.table-container.svelte-12082en{width:100%;max-width:800px;margin:0 auto}table.svelte-12082en{width:100%;border-collapse:collapse;table-layout:fixed}th.svelte-12082en,td.svelte-12082en{padding:12px;text-align:left;border-bottom:1px solid #e0e0e0}th.svelte-12082en{background-color:#f5f5f5;font-weight:bold;cursor:pointer;position:relative}.sorted.svelte-12082en:after{content:"";display:inline-block;vertical-align:middle;margin-left:0.5rem;border:solid transparent;border-width:0.35rem 0.35rem 0;border-top-color:currentColor;opacity:0.8;transform:rotate(180deg)}.ascending.svelte-12082en:after{transform:rotate(0deg)}tr.svelte-12082en:nth-child(2n){background-color:#f9f9f9}.search-bar.svelte-12082en{margin-top:16px;display:flex;align-items:center}.search-input.svelte-12082en{padding:8px;font-size:14px;border:1px solid #ccc;border-radius:4px;margin-right:8px;flex-grow:1}.search-button.svelte-12082en{padding:8px 16px;font-size:14px;background-color:#4caf50;color:white;border:none;border-radius:4px;cursor:pointer}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let universities = [];
  let searchTerm = "";
  $$result.css.add(css);
  return `<div class="table-container svelte-12082en"><div class="search-bar svelte-12082en"><input type="text" class="search-input svelte-12082en" placeholder="Search by name"${add_attribute("value", searchTerm, 0)}>
    <button class="search-button svelte-12082en">Search</button></div>
  ${universities.length > 0 ? `<table class="svelte-12082en"><thead><tr class="svelte-12082en"><th class="${["svelte-12082en", ""].join(" ").trim()}">Name
            ${``}</th>
          <th class="${["svelte-12082en", ""].join(" ").trim()}">Country
            ${``}</th>
          <th class="svelte-12082en">Domains</th>
          <th class="svelte-12082en">Web Pages</th></tr></thead>
      <tbody>${each(universities, (university, index) => {
    return `<tr class="${["svelte-12082en", index % 2 !== 0 ? "colored-row" : ""].join(" ").trim()}"><td class="svelte-12082en">${escape(university.name)}</td>
            <td class="svelte-12082en">${escape(university.country)}</td>
            <td class="svelte-12082en">${escape(university.domains.join(", "))}</td>
            <td class="svelte-12082en">${each(university.web_pages, (webPage) => {
      return `<a${add_attribute("href", webPage, 0)} target="_blank" rel="noopener noreferrer">${escape(webPage)}</a><br>`;
    })}</td>
          </tr>`;
  })}</tbody></table>` : `<p>No universities found.</p>`}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f5ae440c.js.map
