import { c as create_ssr_component, f as each, e as escape } from "../../../../../../../chunks/index.js";
function getReleaseDate(release) {
  if (release && release["date"]) {
    return release["date"];
  }
  return "Desconocido";
}
function getCountry(release) {
  if (release && release["release-events"] && release["release-events"][0] && release["release-events"][0].area && release["release-events"][0].area.name) {
    return release["release-events"][0].area.name;
  }
  return "Desconocido";
}
function getStatus(release) {
  if (release && release.status) {
    return release.status;
  }
  return "Desconocido";
}
function getQuality(release) {
  if (release && release.quality) {
    return release.quality;
  }
  return "Unknown";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let releases = [];
  return `${releases.length > 0 ? `<style>table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    th {
      background-color: #f2f2f2;
    }
    
    tr:hover {
      background-color: #f9f9f9;
    }
  </style>
  
  <table><thead><tr><th>Título</th>
        <th>Fecha Lanzamiento</th>
        <th>País</th>
        <th>Estado</th>
        <th>Calidad</th></tr></thead>
    <tbody>${each(releases, (release) => {
    return `<tr><td>${escape(release.title)}</td>
          <td>${escape(getReleaseDate(release))}</td>
          <td>${escape(getCountry(release))}</td>
          <td>${escape(getStatus(release))}</td>
          <td>${escape(getQuality(release))}</td>
        </tr>`;
  })}</tbody></table>` : `<p>Nada encontrado prueba a recargar.</p>`}`;
});
export {
  Page as default
};
