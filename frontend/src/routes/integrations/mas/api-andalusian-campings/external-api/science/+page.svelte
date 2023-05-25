<script>
    import { onMount } from "svelte";
    import { createSignal } from "svelte";
  
    let searchTerm = "";
    let searchResults = [];
  
    const fetchData = async () => {
      try {
        const response = await fetch(`http://export.arxiv.org/api/query?search_query=all:${searchTerm}`);
        const xmlData = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "text/xml");
  
        const entries = xmlDoc.getElementsByTagName("entry");
        searchResults = Array.from(entries).map((entry) => {
          const title = entry.getElementsByTagName("title")[0]?.textContent || "";
          const summary = entry.getElementsByTagName("summary")[0]?.textContent || "";
          const authors = Array.from(entry.getElementsByTagName("author")).map(
            (author) => author.getElementsByTagName("name")[0]?.textContent || ""
          );
          const publishedDate = entry.getElementsByTagName("published")[0]?.textContent || "";


  
          return { title, summary, authors,publishedDate };
        });
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
    .search-container {
      max-width: 800px;
      margin: 0 auto;
    }
  
    .search-form {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
  
    .search-input {
      flex: 1;
      padding: 10px;
      font-size: 16px;
    }
  
    .search-button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #00838a;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  
    .search-results {
      background-color: #f4f4f4;
      padding: 20px;
    }
  
    .result-item {
      margin-bottom: 20px;
    }
  
    .result-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }
  
    .result-authors {
      font-style: italic;
      margin-bottom: 5px;
    }
  
    .result-summary {
      line-height: 1.4;
    }
  </style>
  
  <div class="search-container">
    <form class="search-form" on:submit={handleFormSubmit}>
      <input class="search-input" type="text" bind:value={searchTerm} placeholder="Enter a search term" />
      <button class="search-button" type="submit">Buscar</button>
    </form>
  
    <div class="search-results">
        {#each searchResults as result (result.title)}
          <div class="result-item">
            <div class="result-title">{result.title}</div>
            {#if result.authors.length > 0}
              <div class="result-authors">Autores: {result.authors.join(", ")}</div>
            {/if}
            <div class="result-published">Fecha publicación: {result.publishedDate}</div>
            <div class="result-summary">{result.summary}</div>
          </div>
        {/each}
      </div>
    </div>
  