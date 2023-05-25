<style>
    table {
      width: 100%;
      border-collapse: collapse;
    }
  
    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
  
    th {
      background-color: #f2f2f2;
    }
  
    img {
      max-width: 100px;
      max-height: 100px;
    }
  </style>
  
  <script>
    import { onMount } from "svelte";
  
    let articles = [];
  
    onMount(async () => {
      try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?format=json");
        const data = await response.json();
        articles = data.results;
      } catch (error) {
        console.error("Error, prueba de nuevo:", error);
      }
    });
  </script>
  
  {#if articles.length > 0}
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>URL</th>
          <th>Imagen</th>
          <th>Fuente</th>
          <th>Resumen</th>
          <th>Publicado en</th>
          <th>Actualizado en</th>
          <th>Aparece en</th>
        </tr>
      </thead>
      <tbody>
        {#each articles as article}
          <tr>
            <td>{article.title}</td>
            <td><a href="{article.url}" target="_blank">{article.url}</a></td>
            <td>
              {#if article.image_url}
                <img src="{article.image_url}" alt="Article Image" />
              {/if}
            </td>
            <td>{article.news_site}</td>
            <td>{article.summary}</td>
            <td>{article.published_at}</td>
            <td>{article.updated_at}</td>
            <td>{article.featured ? "Yes" : "No"}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>No articles found.</p>
  {/if}
  