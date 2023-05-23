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
        console.error("Error fetching data:", error);
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
    }
  </style>
  
  <div class="search-box">
    <input type="text" bind:value={searchQuery} on:input={handleSearch} placeholder="Search recipe..." />
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
    <p>No results found.</p>
  {/if}
  