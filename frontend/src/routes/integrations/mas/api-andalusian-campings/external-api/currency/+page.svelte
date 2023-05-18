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

      // Group the currency data by currency
      const groupedData = {};
      currencyData.forEach(({ currency, date, value }) => {
        if (!groupedData[currency]) {
          groupedData[currency] = [];
        }
        groupedData[currency].push({ date, value });
      });

      // Calculate the difference between each date for each currency
      const currencyDifferences = [];
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

      // Load Google Charts library
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);

      // Callback function to draw the chart
      function drawChart() {
        // Create the Google Chart data table
        const chartData = new google.visualization.DataTable();
        chartData.addColumn("string", "Currency");
        chartData.addColumn("number", "Difference");

        top20Currencies.forEach(({ currency, difference }) => {
          chartData.addRow([currency, difference]);
        });

        // Set chart options
        const options = {
          title: "Top 20 Currencies with Highest Differences",
          width: "100%",
          height: 400,
          bar: { groupWidth: "70%" },
          legend: { position: "top" },
        };

        // Instantiate and draw the bar chart
        const chart = new google.visualization.BarChart(
          document.getElementById("chart_div")
        );
        chart.draw(chartData, options);
      }
    } catch (error) {
      console.error("Error fetching currency data:", error);
    }
  });
</script>

<svelte:head>
  <script src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<div id="chart_div"></div>

<table>
  <thead>
    <tr>
      <th>Currency</th>
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


