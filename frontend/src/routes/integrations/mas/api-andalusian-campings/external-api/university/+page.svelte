<script>
    import { onMount } from "svelte";
    import { createEventDispatcher } from "svelte";
  
    const dispatcher = createEventDispatcher();
    let universities = [];
    let sortedColumn = "";
    let sortDirection = 1;
    let searchTerm = "";
  
    onMount(async () => {
      try {
        const response = await fetch("http://universities.hipolabs.com/search?name=");
        const data = await response.json();
        universities = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
  
    function sortTable(column) {
      if (sortedColumn === column) {
        sortDirection *= -1;
      } else {
        sortDirection = 1;
      }
  
      sortedColumn = column;
      universities = universities.sort((a, b) => {
        const valA = a[column] ? a[column].toLowerCase() : "";
        const valB = b[column] ? b[column].toLowerCase() : "";
  
        if (valA < valB) return -1 * sortDirection;
        if (valA > valB) return 1 * sortDirection;
        return 0;
      });
    }
  
    function searchByName() {
      const filteredUniversities = universities.filter(
        university =>
          university.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      universities = filteredUniversities;
    }
  </script>
  
  <style>
    .sortable {
      cursor: pointer;
      position: relative;
    }
  
    .sorted:after {
      content: "";
      display: inline-block;
      vertical-align: middle;
      margin-left: 0.25rem;
      border: solid transparent;
      border-width: 0.25rem 0.25rem 0;
      border-top-color: currentColor;
      opacity: 0.6;
      transform: rotate(180deg);
    }
  
    .ascending:after {
      transform: rotate(0deg);
    }
  </style>
  
  <input type="text" bind:value={searchTerm} placeholder="Búsqueda por Nombre" />
  
  <button on:click={searchByName}>Busca</button>
  
  <table>
    <thead>
      <tr>
        <th
          class:sortable={sortedColumn === "name"}
          class:sorted={sortedColumn === "name" && sortDirection === 1}
          class:ascending={sortedColumn === "name" && sortDirection === -1}
          on:click={() => sortTable("name")}
        >
          Nombre
        </th>
        <th
          class:sortable={sortedColumn === "country"}
          class:sorted={sortedColumn === "country" && sortDirection === 1}
          class:ascending={sortedColumn === "country" && sortDirection === -1}
          on:click={() => sortTable("country")}
        >
          País
        </th>
        <th>Código Universidad</th>
        <th>Página Web</th>
      </tr>
    </thead>
    <tbody>
      {#each universities as university}
        <tr>
          <td>{university.name}</td>
          <td>{university.country}</td>
          <td>{university.alpha_two_code}</td>
          <td>
            {#each university.web_pages as webPage, index}
              <a href={webPage} target="_blank" rel="noopener noreferrer">{webPage}</a>
              {#if index !== university.web_pages.length - 1}, {/if}
            {/each}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  