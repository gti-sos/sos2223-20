import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from './index-120532d3.js';

const css = {
  code: ".formulario_anydir.svelte-ss74v2{width:80%;margin:0;padding:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let datos = [];
  let desp = 0;
  let nd2 = {
    date: "",
    place: "",
    dnt_people: "",
    dnt_blood: "",
    dnt_plasme: "",
    dnt_datef: "",
    dnt_new: "",
    extraction: "",
    idcenter: "",
    center: "",
    offset: "0",
    limit: "10"
  };
  $$result.css.add(css);
  return `<main><div class="container"><h2>API Blood donations - Carmen García Muñoz -</h2>
    <br>
    <div class="botones">${datos.length === 0 ? `<button type="button" class="boton btn btn-primary">Datos iniciales</button>
                <button type="button" class="boton btn btn-danger" disabled>Borrar todo</button>` : `<button type="button" class="boton btn btn-primary" disabled>Datos iniciales</button>
                <button type="button" class="boton btn btn-danger">Borrar todo</button>`}
        <button type="button" class="boton btn btn-primary">Añadir dato</button></div>

    <hr>

    <div class="busqueda-filtrada"><input type="text" placeholder="Fecha"${add_attribute("value", nd2.date, 0)}>
        <input type="text" placeholder="Lugar"${add_attribute("value", nd2.place, 0)}>
        <input type="text" placeholder="dnt persona"${add_attribute("value", nd2.dnt_people, 0)}>
        <input type="text" placeholder="dnt sangre"${add_attribute("value", nd2.dnt_blood, 0)}>
        <input type="text" placeholder="dnt plasma"${add_attribute("value", nd2.dnt_plasme, 0)}>
        <input type="text" placeholder="dnt fecha"${add_attribute("value", nd2.dnt_datef, 0)}>
        <input type="text" placeholder="nuevo dnt"${add_attribute("value", nd2.dnt_new, 0)}>
        <input type="text" placeholder="extraccion"${add_attribute("value", nd2.extraction, 0)}>
        <input type="text" placeholder="id del centro"${add_attribute("value", nd2.idcenter, 0)}>
        <input type="text" placeholder="centro"${add_attribute("value", nd2.center, 0)}>
        <input type="text" placeholder="desplazamiento"${add_attribute("value", nd2.offset, 0)}>
        <input type="text" placeholder="limite"${add_attribute("value", nd2.limit, 0)}>
        <br>
        <br>
        <button type="button" class="boton btn btn-primary">Buscar</button></div>

    <hr>

    ${``}

    ${``}

    ${``}

    ${``}

    <br>

    <div class="table"><table class="table table-striped"><thead><tr><th>Fecha</th>
              <th>Lugar</th>
              <th>dnt persona</th>
              <th>dnt sangre</th>
              <th>dnt plasma</th>
              <th>dnt fecha</th>
              <th>dnt nuevo</th>
              <th>Extraccion</th>
              <th>ID-centro</th>
              <th>Centro</th>
              <th><i>MODIFICAR</i></th></tr></thead>
          <tbody>${datos.length === 0 ? `<td colspan="11"><p class="text-center">No hay datos que mostrar</p></td>` : `${each(datos, (dato) => {
    return `${`<tr><td>${escape(dato.date)}</td>
                            <td>${escape(dato.place)}</td>
                            <td>${escape(dato.dnt_people)}</td>
                            <td>${escape(dato.dnt_blood)}</td>
                            <td>${escape(dato.dnt_plasme)}</td>
                            <td>${escape(dato.dnt_datef)}</td>
                            <td>${escape(dato.dnt_new)}</td>
                            <td>${escape(dato.extraction)}</td>
                            <td>${escape(dato.idcenter)}</td>
                            <td>${escape(dato.center)}</td>
                            <td><button type="button" class="btn btn-primary">Actualizar</button>
                            <button type="button" class="btn btn-danger">Borrar</button></td>
                        </tr>`}`;
  })}`}</tbody></table>

        <div class="paginacion">${`<button type="button" class="btn btn-secundary" disabled>Anterior</button>`}

            ${desp >= datos.length ? `<button type="button" class="btn btn-secundary" disabled>Siguiente</button>` : `<button type="button" class="btn btn-secundary">Siguiente</button>`}</div></div></div>
</main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7f488c9d.js.map
