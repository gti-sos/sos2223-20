<script>
  import { onMount } from 'svelte';

  async function getData() {
    const campingApiUrl = 'https://sos2223-20.ew.r.appspot.com/api/v3/campings';
    const immovablesApiUrl = '/api/proxy-mas/?url=https://sos2223-20.ew.r.appspot.com/api/v3/immovables';

    const campingResponse = await fetch(campingApiUrl);
    const immovablesResponse = await fetch(immovablesApiUrl, {
      method: "GET",
    });
    
    console.log(campingResponse);
    console.log(immovablesResponse);
    const campingData = await campingResponse.json();
    const immovablesData = await immovablesResponse.json();
    console.log(campingData);
    console.log(immovablesData);

    // Process the data as needed

    // Logging the fetched data
    console.log('Campings Data:', campingData.slice(0, 14));
    console.log('Inmuebles Data:', immovablesData.slice(0, 14));

    // Example: Creating a Google chart
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Create the chart data and options
      const chartData = new google.visualization.DataTable();
      chartData.addColumn('string', 'Provincia');
      chartData.addColumn('number', 'Suma de Category');
      chartData.addColumn('number', 'Suma de Recursos');

      // Filter the camping and immovables data based on the desired states/provinces
      const states = ['ALMERÍA', 'CÁDIZ', 'CÓRDOBA', 'GRANADA', 'JAÉN', 'HUELVA', 'MÁLAGA', 'SEVILLA'];

      const filteredCampingData = campingData.filter(camping => states.includes(camping.state));
      const filteredImmovablesData = immovablesData.filter(immovable =>
        states.includes(immovable.province.toUpperCase())
      );

      // Calculate the sum of category and resource for each state
      const sumByState = {};
      filteredCampingData.forEach(camping => {
        if (!sumByState[camping.state]) {
          sumByState[camping.state] = { category: 0, resource: 0 };
        }
        sumByState[camping.state].category += camping.category;
      });

      filteredImmovablesData.forEach(immovable => {
        const province = immovable.province.toUpperCase();
        const resource = immovable.resource;
        if (!sumByState[province]) {
          sumByState[province] = { category: 0, resource: 0 };
        }
        sumByState[province].resource += resource;
      });

      // Add the data to the chart
      states.forEach(state => {
        const { category, resource } = sumByState[state] || { category: 0, resource: 0 };
        chartData.addRow([state, category, resource]);
      });

      const chartOptions = {
        height: 800,
        width: 1600,
        legend: { position: 'top' },
        vAxis: { minValue: 0 },
      };

      // Check if there is no data
      const noData = filteredCampingData.length === 0 && filteredImmovablesData.length === 0;

      // Draw the chart or display the message bubble
      if (noData) {
        const bubbleOptions = {
          title: 'Sin datos',
          width: 1600,
          height: 800,
        };

        const bubbleChart = new google.visualization.BubbleChart(
          document.getElementById('chart_div')
        );
        bubbleChart.draw(chartData, bubbleOptions);
      } else {
        const barChart = new google.visualization.BarChart(
          document.getElementById('chart_div')
        );
        barChart.draw(chartData, chartOptions);
      }
    }

  }

  onMount(getData);
</script>

<svelte:head>
  <script src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<div id="chart_div"></div>
