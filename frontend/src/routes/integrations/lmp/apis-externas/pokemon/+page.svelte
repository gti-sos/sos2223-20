<script>
  //@ts-nocheck
  import { onMount } from 'svelte';

  let pokemonList = [];
  let searchTerm = 'Gardevoir';
  let selectedPokemon = null;

  async function fetchPokemonList() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();
    pokemonList = data.results;
  }

  async function fetchPokemonData(url) {
    const response = await fetch(url);
    const data = await response.json();
    selectedPokemon = data;
  }

  onMount(fetchPokemonList);

  async function handleSearch() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
    const data = await response.json();
    selectedPokemon = data;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
</script>

<main>
  <h1>Búsqueda Pokémon (Ej: Ditto,Charmander,Gardevoir...)</h1>

  <div class="search-container">
    <input type="text" bind:value={searchTerm} placeholder="Enter Pokémon name" />
    <button on:click={handleSearch}>Buscar</button>
  </div>

  {#if selectedPokemon}
    <div class="pokemon-card">
      <h2>{capitalizeFirstLetter(selectedPokemon.name)}</h2>
      <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />

      <h3>Habilidades:</h3>
      <ul>
        {#each selectedPokemon.abilities as ability}
          <li>{ability.ability.name}</li>
        {/each}
      </ul>

      <h3>Tipos:</h3>
      <ul>
        {#each selectedPokemon.types as type}
          <li>{capitalizeFirstLetter(type.type.name)}</li>
        {/each}
      </ul>

      <h3>Movimientos:</h3>
      <ul>
        {#each selectedPokemon.moves as move}
          <li>{move.move.name}</li>
        {/each}
      </ul>
    </div>
  {:else}
    <p>No ha seleccionado ningún Pokemon</p>
  {/if}

</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 24px;
  }

  .search-container {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }

  input[type="text"] {
    padding: 8px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 8px 16px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .pokemon-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .pokemon-card h2 {
    font-size: 24px;
    margin-bottom: 16px;
    text-align: center;
  }

  .pokemon-card img {
    width: 200px;
    margin-bottom: 16px;
  }

  .pokemon-card h3 {
    font-size: 18px;
    margin-bottom: 8px;
    text-align: center;
  }

  .pokemon-card ul {
    padding: 0;
    margin-bottom: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pokemon-card li {
    margin: 4px;
    padding: 8px;
    font-size: 14px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    list-style-type: none;
  }

</style>
