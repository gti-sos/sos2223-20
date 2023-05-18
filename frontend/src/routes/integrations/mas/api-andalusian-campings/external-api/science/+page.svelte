<script>
    import { onMount } from "svelte";
    import { createSignal } from "svelte";
  
    let searchTerm = "";
    let xmlData = "";
  
    const fetchData = async () => {
      try {
        const response = await fetch(`http://export.arxiv.org/api/query?search_query=all:${searchTerm}`);
        const data = await response.text();
        xmlData = data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      fetchData();
    };
  
    onMount(() => {
      fetchData();
    });
  </script>
  
  <style>
    pre {
      white-space: pre-wrap;
    }
  </style>
  
  <div>
    <form on:submit={handleFormSubmit}>
      <label>
        Search Term:
        <input type="text" bind:value={searchTerm} />
      </label>
      <button type="submit">Search</button>
    </form>
  
    <h2>Search Results:</h2>
    <pre>{xmlData}</pre>
  </div>
  