import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../../../../chunks/index.js";
import axios from "axios";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1lm6ns9{font-size:28px;font-weight:bold;margin-bottom:20px}div.svelte-1lm6ns9{display:flex;border:1px solid #dddddda5;border-radius:5px;padding:10px;margin-bottom:10px;cursor:pointer;transition:all 0.3s ease}div.svelte-1lm6ns9:hover{box-shadow:0 0 5px #aaa}img.svelte-1lm6ns9{display:block;margin-right:10px;width:120px;height:90px;object-fit:cover;border-radius:3px}h2.svelte-1lm6ns9{font-size:18px;font-weight:bold;margin-top:0;margin-bottom:5px}p.svelte-1lm6ns9{font-size:14px;margin:0;line-height:1.5;color:#666}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data;
  axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      key: "",
      //key de la API
      q: "Búsqueda de ejemplo",
      part: "snippet"
    }
  }).then((response) => {
    data = response.data;
  });
  $$result.css.add(css);
  return `<main><h1 class="svelte-1lm6ns9">Resultados de búsqueda Youtube:</h1>
    
    
    <iframe id="youtube-player" width="560" height="315" frameborder="0" allowfullscreen></iframe>
    
    ${data ? `${each(data.items, (item) => {
    return `
        <div class="svelte-1lm6ns9"><img${add_attribute("src", item.snippet.thumbnails.default.url, 0)}${add_attribute("alt", item.snippet.title, 0)} class="svelte-1lm6ns9">
          <h2 class="svelte-1lm6ns9">${escape(item.snippet.title)}</h2>
          <p class="svelte-1lm6ns9">${escape(item.snippet.description)}</p>
        </div>`;
  })}` : `<p class="svelte-1lm6ns9">Cargando resultados...</p>`}
</main>`;
});
export {
  Page as default
};
