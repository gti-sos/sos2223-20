<script>
// @ts-nocheck

    let results = [];
  
    const fetchResults = async () => {
      const API_KEY = "";//API KEY DEL PROYECTO
      const QUERY = "FC Barcelona";
      const SEARCH_URL = `https://kgsearch.googleapis.com/v1/entities:search?query=${QUERY}&key=${API_KEY}&limit=10&indent=True`;
  
      const response = await fetch(SEARCH_URL);
      const data = await response.json();
      results = data.itemListElement.map((item) => item.result);
      console.log(results)
    };
    fetchResults();
  </script>
  <main>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Image</th>
        <th>Detailed Description</th>
        <th>URL</th>
      </tr>
    </thead>
    <tbody>
      {#each results as result}
        <tr>
          <td>{result.name}</td>
          <td>{result.description}</td>
          <td><img src={result.image.url} alt={result.name} width="100"></td>
          <td>{result.detailedDescription.articleBody}</td>
          <td><a href={result.url} target="_blank">Visit Website</a></td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>
<style>
    /* Estilos para la tabla */
table {
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #4CAF50;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Estilos para los enlaces */
a {
  color: #1E90FF;
}

a:hover {
  color: #ff9900;
}

/* Estilos para las filas impares */
tr:nth-child(odd) {
  background-color: #f9f9f9;
  font-weight: bold;
  color: #555;
}

tr:nth-child(odd) td:first-child {
  background-color: #555;
  color: #fff;
}

tr:nth-child(odd) td:last-child {
  background-color: hsl(167, 90%, 58%);
  color: #fff;
}

</style>