<script>
  //@ts-nocheck
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  const dispatcher = createEventDispatcher();
  let universities = [];
  let sortedColumn = "";
  let sortDirection = 1;
  let searchTerm = "";

  onMount(async () => {
    try {
      const proxyURL = "/api/proxy-mas/?url=";
      const response = await fetch(proxyURL + encodeURIComponent("http://universities.hipolabs.com/search?name="));
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
  .table-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }

  th {
    background-color: #f5f5f5;
    font-weight: bold;
    cursor: pointer;
    position: relative;
  }

  .sorted:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.5rem;
    border: solid transparent;
    border-width: 0.35rem 0.35rem 0;
    border-top-color: currentColor;
    opacity: 0.8;
    transform: rotate(180deg);
  }

  .ascending:after {
    transform: rotate(0deg);
  }

  tr:nth-child(2n) {
    background-color: #f9f9f9;
  }

  .search-bar {
    margin-top: 16px;
    display: flex;
    align-items: center;
  }

  .search-input {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
    flex-grow: 1;
  }

  .search-button {
    padding: 8px 16px;
    font-size: 14px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>

<div class="table-container">
  <div class="search-bar">
    <input
      type="text"
      class="search-input"
      bind:value={searchTerm}
      placeholder="Search by name"
    />
    <button class="search-button" on:click={searchByName}>Search</button>
  </div>
  {#if universities.length > 0}
    <table>
      <thead>
        <tr>
          <th class:sortable={sortedColumn === "name"} on:click={() => sortTable("name")}>
            Name
            {#if sortedColumn === "name"}
              <span class:sorted class:ascending={sortDirection === 1}></span>
            {/if}
          </th>
          <th class:sortable={sortedColumn === "country"} on:click={() => sortTable("country")}>
            Country
            {#if sortedColumn === "country"}
              <span class:sorted class:ascending={sortDirection === 1}></span>
            {/if}
          </th>
          <th>Domains</th>
          <th>Web Pages</th>
        </tr>
      </thead>
      <tbody>
        {#each universities as university, index (university.id)}
          <tr class:colored-row={index % 2 !== 0}>
            <td>{university.name}</td>
            <td>{university.country}</td>
            <td>{university.domains.join(", ")}</td>
            <td>
              {#each university.web_pages as webPage}
                <a href={webPage} target="_blank" rel="noopener noreferrer">{webPage}</a><br />
              {/each}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>No universities found.</p>
  {/if}
</div>
