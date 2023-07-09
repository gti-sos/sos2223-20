import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from './index-120532d3.js';

const css = {
  code: "table.svelte-1vtv9zp{width:100%;border-collapse:collapse}th.svelte-1vtv9zp,td.svelte-1vtv9zp{padding:8px;text-align:left;border-bottom:1px solid #ddd}th.svelte-1vtv9zp{background-color:#f2f2f2}img.svelte-1vtv9zp{max-width:100px;max-height:100px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let articles = [];
  $$result.css.add(css);
  return `${articles.length > 0 ? `<table class="svelte-1vtv9zp"><thead><tr><th class="svelte-1vtv9zp">Titulo</th>
          <th class="svelte-1vtv9zp">URL</th>
          <th class="svelte-1vtv9zp">Imagen</th>
          <th class="svelte-1vtv9zp">Fuente</th>
          <th class="svelte-1vtv9zp">Resumen</th>
          <th class="svelte-1vtv9zp">Publicado en</th>
          <th class="svelte-1vtv9zp">Actualizado en</th>
          <th class="svelte-1vtv9zp">Aparece en</th></tr></thead>
      <tbody>${each(articles, (article) => {
    return `<tr><td class="svelte-1vtv9zp">${escape(article.title)}</td>
            <td class="svelte-1vtv9zp"><a${add_attribute("href", article.url, 0)} target="_blank">${escape(article.url)}</a></td>
            <td class="svelte-1vtv9zp">${article.image_url ? `<img${add_attribute("src", article.image_url, 0)} alt="Article Image" class="svelte-1vtv9zp">` : ``}</td>
            <td class="svelte-1vtv9zp">${escape(article.news_site)}</td>
            <td class="svelte-1vtv9zp">${escape(article.summary)}</td>
            <td class="svelte-1vtv9zp">${escape(article.published_at)}</td>
            <td class="svelte-1vtv9zp">${escape(article.updated_at)}</td>
            <td class="svelte-1vtv9zp">${escape(article.featured ? "Yes" : "No")}</td>
          </tr>`;
  })}</tbody></table>` : `<p>No articles found.</p>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-732812ad.js.map
