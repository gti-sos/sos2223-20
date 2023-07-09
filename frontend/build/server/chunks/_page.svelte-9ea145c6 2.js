import { c as create_ssr_component, d as add_attribute } from './index-120532d3.js';

const css = {
  code: 'main.svelte-1mftaf8.svelte-1mftaf8{display:flex;flex-direction:column;align-items:center;padding:24px}h1.svelte-1mftaf8.svelte-1mftaf8{font-size:32px;margin-bottom:24px}.search-container.svelte-1mftaf8.svelte-1mftaf8{display:flex;align-items:center;gap:16px;margin-bottom:24px}input[type="text"].svelte-1mftaf8.svelte-1mftaf8{padding:8px 12px;font-size:16px;border:1px solid #ccc;border-radius:4px}button.svelte-1mftaf8.svelte-1mftaf8{padding:8px 16px;font-size:16px;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}.pokemon-card.svelte-1mftaf8.svelte-1mftaf8{display:flex;flex-direction:column;align-items:center;background-color:#f8f8f8;border-radius:8px;padding:24px;margin-bottom:24px;box-shadow:0px 2px 4px rgba(0, 0, 0, 0.1)}.pokemon-card.svelte-1mftaf8 h2.svelte-1mftaf8{font-size:24px;margin-bottom:16px;text-align:center}.pokemon-card.svelte-1mftaf8 img.svelte-1mftaf8{width:200px;margin-bottom:16px}.pokemon-card.svelte-1mftaf8 h3.svelte-1mftaf8{font-size:18px;margin-bottom:8px;text-align:center}.pokemon-card.svelte-1mftaf8 ul.svelte-1mftaf8{padding:0;margin-bottom:8px;display:flex;flex-wrap:wrap;justify-content:center}.pokemon-card.svelte-1mftaf8 li.svelte-1mftaf8{margin:4px;padding:8px;font-size:14px;background-color:#fff;border-radius:4px;box-shadow:0px 2px 4px rgba(0, 0, 0, 0.1);list-style-type:none}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm = "Gardevoir";
  $$result.css.add(css);
  return `<main class="svelte-1mftaf8"><h1 class="svelte-1mftaf8">Búsqueda Pokémon (Ej: Ditto,Charmander,Gardevoir...)</h1>

  <div class="search-container svelte-1mftaf8"><input type="text" placeholder="Enter Pokémon name" class="svelte-1mftaf8"${add_attribute("value", searchTerm, 0)}>
    <button class="svelte-1mftaf8">Buscar</button></div>

  ${`<p>No ha seleccionado ningún Pokemon</p>`}

</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9ea145c6.js.map
