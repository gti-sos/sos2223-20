<script>
  import { onMount } from "svelte";

  let currencyData = [];
  let filteredCurrencyData = [];
  let filter = "";

  const dates = ["2023-04-24", "2023-04-25", "2023-04-26", "2023-04-27", "2023-04-28", "2023-04-29", "2023-04-30"];

  onMount(async () => {
    try {
      for (const date of dates) {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${date}/currencies/eur.json`
        );
        const { date: responseDate, eur } = await response.json();

        // Process the currency data for each date
        const dateCurrencyData = Object.entries(eur).map(
          ([currency, value]) => ({
            date: responseDate,
            currency,
            value,
          })
        );

        currencyData = [...currencyData, ...dateCurrencyData];
      }

      // Set filtered currency data to all currency data initially
      filteredCurrencyData = currencyData;

      // Load Google Charts library
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  });

  function updateFilteredCurrencyData() {
    filteredCurrencyData = currencyData.filter(
      (item) => item.currency.toLowerCase().includes(filter.toLowerCase())
    );
  }
</script>

<svelte:head>
  <script src="https://www.gstatic.com/charts/loader.js"></script>
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
    }

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

    .chart-container {
      width: 100%;
      max-width: 600px;
      margin-top: 24px;
    }

    #chart_div {
      width: 100%;
      height: 400px;
    }

    .filter-container {
      margin-top: 24px;
    }

    .filter-input {
      padding: 8px;
      font-size: 16px;
    }
  </style>
</svelte:head>

<div class="container">
  <div class="table-container">
    <div class="filter-container">
      <input type="text" bind:value={filter} placeholder="Filter by currency name" class="filter-input" on:input={updateFilteredCurrencyData} />
    </div>
    <table>
      <thead>
        <tr>
          <th>Currency/Euro</th>
          {#each dates as date}
            <th>{date}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each [...new Set(filteredCurrencyData.map((item) => item.currency))] as currency}
          <tr>
            <td>{currency}</td>
            {#each dates as date}
              {#each filteredCurrencyData.filter((item) => item.currency === currency && item.date === date) as entry}
                <td>{entry.value}</td>
              {:else}
                <td>-</td>
              {/each}
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="chart-container">
    {#if filteredCurrencyData.length > 0}
      <div id="chart_div"></div>
    {:else}
      <p>No data available for the selected filter.</p>
    {/if}
  </div>
</div>

<script>
  // Callback function to draw the chart
  function drawChart() {
    const chartData = new google.visualization.DataTable();
    chartData.addColumn("string", "Currency");
    chartData.addColumn("number", "Difference");

    const currencyDifferences = [];

    // Calculate the difference between each date for each currency in filtered data
    Object.entries(groupedData).forEach(([currency, data]) => {
      if (data.length >= 2) {
        for (let i = 1; i < data.length; i++) {
          const prevValue = data[i - 1].value;
          const currValue = data[i].value;
          const difference = currValue - prevValue;
          currencyDifferences.push({ currency, difference });
        }
      }
    });

    // Sort the currency differences in descending order
    currencyDifferences.sort((a, b) => b.difference - a.difference);

    // Get the top 20 currencies with the highest differences
    const top20Currencies = currencyDifferences.slice(0, 20);

    top20Currencies.forEach(({ currency, difference }) => {
      chartData.addRow([currency, difference]);
    });

    const options = {
      title: "Top 20 Currencies with Highest Differences",
      width: "100%",
      height: 400,
      bar: { groupWidth: "70%" },
      legend: { position: "top" },
    };

    const chart = new google.visualization.BarChart(document.getElementById("chart_div"));
    chart.draw(chartData, options);
  }
</script>
