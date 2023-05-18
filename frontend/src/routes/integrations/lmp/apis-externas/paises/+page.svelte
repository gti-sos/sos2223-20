<script>
    //@ts-nocheck
  let countries = [];

  async function fetchCountries() {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();
    countries = data;
  }

  async function fetchAdditionalInfo(countryName) {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${countryName}&key=e5f969e3ed764ea380171c6225451796`);
    const data = await response.json();
    showAdditionalInfo(data.results[0]);
  }

  function showAdditionalInfo(data) {
    const infoContainer = document.getElementById('info-container');
    const countryInfo = data.components;
    infoContainer.innerHTML = `
      <h3>${countryInfo.country}</h3>
      <p>Continente: ${countryInfo.continent}</p>
      <p>Siglas: ${countryInfo.country_code}</p>
      <p>Coordinates: Lat ${data.geometry.lat} / Lng ${data.geometry.lng}</p>
    `;
  }
</script>

<main>
  <h1>Integracion de 2 APIS Externas de Paises</h1>

  <button on:click={fetchCountries}>Cargar Paises</button>

  <div class="container">
    <div class="countries">
      {#if countries.length > 0}
        <ul>
          {#each countries as country (country.name)}
            <li>
              <h3>{country.name}</h3>
              <div class="country-info">
                <div>
                  <p>Capital: {country.capital}</p>
                  <p>Poblacion: {country.population}</p>
                </div>
                <img src={country.flags.png} alt={country.name} />
              </div>
              <button on:click={() => fetchAdditionalInfo(country.name)}>Más Información</button>
            </li>
          {/each}
        </ul>
      {:else}
        <p>No hay paises disponibles</p>
      {/if}
    </div>
  
    <div class="info">
      <h2>Información Adicional</h2>
      <div id="info-container"></div>
    </div>
  </div>
</main>
<style>
  main {
    text-align: center;
    padding: 2rem;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .countries {
    flex: 1;
  }

  .info {
    flex: 1;
    text-align: left;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 2rem;
    text-align: center;
    background-color: #f4f4f4;
    border-radius: 8px;
    padding: 1rem;
  }

  h3 {
    margin-top: 0;
  }

  .country-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  img {
    width: 200px;
    height: auto;
    margin-top: 1rem;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #45a049;
  }

  #info-container {
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 2rem;
  }
</style>
