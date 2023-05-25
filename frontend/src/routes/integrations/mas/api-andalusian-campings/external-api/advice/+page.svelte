<script>
  import { onMount } from "svelte";

  let advice = {};

  async function fetchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    advice = data.slip;
  }

  onMount(() => {
    fetchAdvice();

    setInterval(fetchAdvice, 2000);
  });

  let adviceList = [];

  function addAdvice() {
    adviceList = [...adviceList, advice];
  }

  let autoAddInterval;

  function startAutoAdd() {
    autoAddInterval = setInterval(() => {
      fetchAdvice();
      addAdvice();
    }, 1000);
  }

  function stopAutoAdd() {
    clearInterval(autoAddInterval);
  }
</script>

<main>
  <h1>Advice Slips</h1>

  <div class="table-container">
    <table class="advice-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Advice</th>
        </tr>
      </thead>
      <tbody>
        {#each adviceList as item (item.id)}
          <tr>
            <td>{item.id}</td>
            <td>{item.advice}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="button-container">
    <button on:click={addAdvice}>Añade uno nuevo</button>
    <button on:click={startAutoAdd}>Automatico</button>
    <button on:click={stopAutoAdd}>Para Automatico</button>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .table-container {
    width: 85%;
  }

  .advice-table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
  }

  th, td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }

  button {
    margin-top: 16px;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
</style>
