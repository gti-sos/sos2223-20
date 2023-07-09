import { c as create_ssr_component } from "../../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h1.title.svelte-yvge0n.svelte-yvge0n{text-align:center;color:#444444;font-size:3rem;margin:1rem 0}table.svelte-yvge0n.svelte-yvge0n{width:100%;border-collapse:collapse;margin:2rem 0}thead.svelte-yvge0n.svelte-yvge0n{background-color:#444444;color:#f8f8f8}th.svelte-yvge0n.svelte-yvge0n,td.svelte-yvge0n.svelte-yvge0n{padding:1rem;text-align:left;border:1px solid #cccccc}th.svelte-yvge0n.svelte-yvge0n{font-weight:bold}tr.svelte-yvge0n.svelte-yvge0n:nth-child(even){background-color:#f2f2f2}tr.svelte-yvge0n.svelte-yvge0n:hover{background-color:#dddddd}.form-container.svelte-yvge0n.svelte-yvge0n{border:1px solid #cccccc;border-radius:5px;padding:2rem;margin:2rem 0;background-color:#f8f8f8}.form-container.svelte-yvge0n label.svelte-yvge0n{display:block;margin:1rem 0;font-weight:bold;color:#444444}.form-container.svelte-yvge0n input[type="text"].svelte-yvge0n,.form-container.svelte-yvge0n input[type="number"].svelte-yvge0n{width:100%;padding:1rem;border-radius:5px;border:1px solid #cccccc;margin-bottom:1rem;font-size:1rem}.form-container.svelte-yvge0n button[type="submit"].svelte-yvge0n{background-color:#444444;color:#f8f8f8;padding:1rem 2rem;border:none;border-radius:5px;font-size:1rem;cursor:pointer;margin-top:1rem}.form-container.svelte-yvge0n button[type="submit"].svelte-yvge0n:hover{background-color:#666666}.button-container.svelte-yvge0n.svelte-yvge0n{display:flex;justify-content:space-between;margin:2rem 0}.button-container.svelte-yvge0n button.svelte-yvge0n{background-color:#444444;color:#f8f8f8;padding:1rem 2rem;border:none;border-radius:5px;font-size:1rem;cursor:pointer;margin-right:1rem}.button-container.svelte-yvge0n button.svelte-yvge0n:hover{background-color:#666666}.message.svelte-yvge0n.svelte-yvge0n{margin:2rem 0;padding:1rem;background-color:#f8f8f8;border:1px solid #cccccc;border-radius:5px;font-size:1rem;color:#444444}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-b7q9w0_START -->${$$result.title = `<title>Immuebles</title>`, ""}<!-- HEAD_svelte-b7q9w0_END -->`, ""}

<main><h1 class="title svelte-yvge0n">API IMMOVABLES - Lorenzo Morales</h1>
  <div id="messages" class="message svelte-yvge0n"></div>

  ${`${`${`<p>Lista de recursos vacia</p>`}`}`}
<div class="button-container svelte-yvge0n">
<button class="svelte-yvge0n">Crear recurso</button>
<button class="svelte-yvge0n">Cargar recursos</button>

<button class="svelte-yvge0n">Borrar recursos</button>

<button class="svelte-yvge0n">Borrar un recurso</button>

<button class="svelte-yvge0n">Buscar un recurso</button>

<button class="svelte-yvge0n">Busca un recurso por fecha</button>

<button class="svelte-yvge0n">◀</button>
<button class="svelte-yvge0n">▶</button></div>

${``}

${``}
${``}

${``}
  

${``}

</main>`;
});
export {
  Page as default
};
