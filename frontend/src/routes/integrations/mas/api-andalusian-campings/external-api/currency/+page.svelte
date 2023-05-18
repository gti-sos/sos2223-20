<script>
  import { onMount } from "svelte";

  let currencyData = [];
  const dates = ["2023-04-24", "2023-04-25", "2023-04-26", "2023-04-27", "2023-04-28", "2023-04-29", "2023-04-30"];

  onMount(async () => {
    try {
      for (const date of dates) {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/eur.json`
        );
        const data = await response.json();

        // Process the currency data for each date
        const dateCurrencyData = Object.entries(data.eur).map(
          ([currency, value]) => ({
            date,
            currency,
            value,
          })
        );

        currencyData = [...currencyData, ...dateCurrencyData];
      }
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  });
</script>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
</style>

<table>
  <thead>
    <tr>
      <th>Moneda/Euro</th>
      {#each dates as date}
        <th>{date}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each [...new Set(currencyData.map((item) => item.currency))] as currency}
      <tr>
        <td>{currency}</td>
        {#each dates as date}
          {#each currencyData.filter((item) => item.currency === currency && item.date === date) as entry}
            <td>{entry.value}</td>
          {:else}
            <td>-</td>
          {/each}
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
