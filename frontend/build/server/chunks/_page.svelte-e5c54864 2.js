import { c as create_ssr_component, f as each, e as escape, d as add_attribute } from './index-120532d3.js';

const css = {
  code: "main.svelte-1kggydv{text-align:center;padding:2rem}.container.svelte-1kggydv{display:flex;flex-wrap:wrap;justify-content:center;gap:2rem}.countries.svelte-1kggydv{flex:1}.info.svelte-1kggydv{flex:1;text-align:left}ul.svelte-1kggydv{list-style:none;padding:0}li.svelte-1kggydv{margin-bottom:2rem;text-align:center;background-color:#f4f4f4;border-radius:8px;padding:1rem}h3.svelte-1kggydv{margin-top:0}.country-info.svelte-1kggydv{display:flex;justify-content:space-between;align-items:center;margin-top:1rem}img.svelte-1kggydv{width:200px;height:auto;margin-top:1rem}button.svelte-1kggydv{background-color:#4caf50;color:#fff;border:none;padding:0.5rem 1rem;border-radius:4px;cursor:pointer}button.svelte-1kggydv:hover{background-color:#45a049}#info-container.svelte-1kggydv{background-color:#f4f4f4;border:1px solid #ccc;padding:1rem;border-radius:8px;margin-top:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let countries = [];
  $$result.css.add(css);
  return `<main class="svelte-1kggydv"><h1>Integracion de 2 APIS Externas de Paises</h1>

  <button class="svelte-1kggydv">Cargar Paises</button>

  <div class="container svelte-1kggydv"><div class="countries svelte-1kggydv">${countries.length > 0 ? `<ul class="svelte-1kggydv">${each(countries, (country) => {
    return `<li class="svelte-1kggydv"><h3 class="svelte-1kggydv">${escape(country.name)}</h3>
              <div class="country-info svelte-1kggydv"><div><p>Capital: ${escape(country.capital)}</p>
                  <p>Poblacion: ${escape(country.population)}</p></div>
                <img${add_attribute("src", country.flags.png, 0)}${add_attribute("alt", country.name, 0)} class="svelte-1kggydv"></div>
              <button class="svelte-1kggydv">Más Información</button>
            </li>`;
  })}</ul>` : `<p>No hay paises disponibles</p>`}</div>
  
    <div class="info svelte-1kggydv"><h2>Información Adicional</h2>
      <div id="info-container" class="svelte-1kggydv"></div></div></div>
</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e5c54864.js.map
