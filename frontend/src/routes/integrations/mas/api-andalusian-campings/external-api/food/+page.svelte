<script>
  import { onMount } from "svelte";
  import { debounce } from "lodash";

  let searchQuery = "";
  let searchResults = [];

  const apiKey = "7ab3e991943f49f182b5c300cf4978af";
  const apiUrl = "https://api.spoonacular.com/recipes/complexSearch";

  async function fetchData(query) {
    const url = `${apiUrl}?query=${query}&maxFat=25&number=5&apiKey=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      searchResults = data.results;
    } catch (error) {
      console.error("Error al recibir los datos:", error);
    }
  }

  const debouncedFetchData = debounce(fetchData, 300);

  function handleSearch() {
    debouncedFetchData(searchQuery);
  }
</script>

<style>
  .search-box {
    margin-bottom: 1rem;
    background-color: rgba(106, 106, 106, 0.4);
    backdrop-filter: blur(10px);
    padding: 0.5rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }

  .search-input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    color: white;
    font-size: 1rem;
  }

  .recipe-card {
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .recipe-card h3 {
    margin-top: 0;
    font-size: 1.2rem;
    color: lightgray;
  }

  .recipe-card img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 5px;
    margin-top: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .no-results {
    color: lightgrey;
  }
</style>

<div class="search-box">
  <input
    type="text"
    class="search-input"
    bind:value={searchQuery}
    on:input={handleSearch}
    placeholder="Buscar Recetas"
  />
</div>

{#if searchResults.length > 0}
  <div>
    {#each searchResults as result}
      <div key={result.id} class="recipe-card">
        <h3>{result.title}</h3>
        <img src={result.image} alt={result.title} />
      </div>
    {/each}
  </div>
{:else}
  <p class="no-results">Sin resultados, prueba otra búsqueda</p>
{/if}
