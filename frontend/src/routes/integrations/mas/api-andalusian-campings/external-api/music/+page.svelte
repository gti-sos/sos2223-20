<script>
  import { onMount } from "svelte";
  
  let releases = [];
  
  onMount(async () => {
    try {
      const artists = [
        "5b11f4ce-a62d-471e-81fc-a69a8278c7da", // Nirvana
        "83d91898-7763-47d7-b03b-b92132375c47", // Pearl Jam
        "f4fdbb4c-e4b7-47a0-b83b-d91bbfcfa387" // Queen
      ];
  
      const promises = artists.map(artist =>
        fetch(
          `https://musicbrainz.org/ws/2/release?artist=${artist}&limit=40&fmt=json`
        ).then(response => response.json())
      );
  
      const responses = await Promise.all(promises);
      releases = responses.flatMap(response => response.releases || []);
    } catch (error) {
      console.error("Error buscando los datos", error);
    }
  });
  
  function getReleaseDate(release) {
    if (release && release["date"]) {
      return release["date"];
    }
    return "Desconocido";
  }
  
  function getCountry(release) {
    if (
      release &&
      release["release-events"] &&
      release["release-events"][0] &&
      release["release-events"][0].area &&
      release["release-events"][0].area.name
    ) {
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
</script>

{#if releases.length > 0}
  <style>
    table {
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
  
  <table>
    <thead>
      <tr>
        <th>Título</th>
        <th>Fecha Lanzamiento</th>
        <th>País</th>
        <th>Estado</th>
        <th>Calidad</th>
      </tr>
    </thead>
    <tbody>
      {#each releases as release}
        <tr>
          <td>{release.title}</td>
          <td>{getReleaseDate(release)}</td>
          <td>{getCountry(release)}</td>
          <td>{getStatus(release)}</td>
          <td>{getQuality(release)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:else}
  <p>Nada encontrado prueba a recargar.</p>
{/if}
