import { c as create_ssr_component, f as each, e as escape } from './index-120532d3.js';

const css = {
  code: "main.svelte-1pdi1u8{display:flex;flex-direction:column;align-items:center}.table-container.svelte-1pdi1u8{width:85%}.advice-table.svelte-1pdi1u8{width:100%;border-collapse:collapse;text-align:center}th.svelte-1pdi1u8,td.svelte-1pdi1u8{padding:8px;border-bottom:1px solid #ddd}button.svelte-1pdi1u8{margin-top:16px}.button-container.svelte-1pdi1u8{display:flex;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let adviceList = [];
  $$result.css.add(css);
  return `<main class="svelte-1pdi1u8"><h1>Advice Slips</h1>

  <div class="table-container svelte-1pdi1u8"><table class="advice-table svelte-1pdi1u8"><thead><tr><th class="svelte-1pdi1u8">ID</th>
          <th class="svelte-1pdi1u8">Advice</th></tr></thead>
      <tbody>${each(adviceList, (item) => {
    return `<tr><td class="svelte-1pdi1u8">${escape(item.id)}</td>
            <td class="svelte-1pdi1u8">${escape(item.advice)}</td>
          </tr>`;
  })}</tbody></table></div>

  <div class="button-container svelte-1pdi1u8"><button class="svelte-1pdi1u8">Añade uno nuevo</button>
    <button class="svelte-1pdi1u8">Automatico</button>
    <button class="svelte-1pdi1u8">Para Automatico</button></div>
</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0652fb60.js.map
