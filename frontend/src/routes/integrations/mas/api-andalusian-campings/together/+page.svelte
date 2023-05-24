<script>
  //@ts-nocheck
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
    console.log('Camping Data:', campingData.slice(0, 14));
    console.log('Immovables Data:', immovablesData.slice(0, 14));

    // Example: Creating a Google chart
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Create the chart data and options
      const chartData = new google.visualization.DataTable();
      chartData.addColumn('string', 'Provincia');
      chartData.addColumn('number', 'Plazas de Camping');
      chartData.addColumn('number', 'Inventario');

      // Filter the camping and immovables data based on the desired states/provinces
      const states = ['ALMERÍA', 'CÁDIZ', 'CÓRDOBA', 'GRANADA', 'JAÉN', 'HUELVA', 'MÁLAGA', 'SEVILLA'];

      const filteredCampingData = campingData.filter(camping => states.includes(camping.state));
      const filteredImmovablesData = immovablesData.filter(immovable =>
        states.includes(immovable.province.toUpperCase())
      );

      // Calculate the sum of camping places for each state
      const campingPlacesSumByState = {};
      filteredCampingData.forEach(camping => {
        if (!campingPlacesSumByState[camping.state]) {
          campingPlacesSumByState[camping.state] = 0;
        }
        campingPlacesSumByState[camping.state] += camping.camping_places;
      });

      // Calculate the stacked sum of inventory numbers for each state
      const inventoryNumSumByState = {};
      filteredImmovablesData.forEach(immovable => {
        const province = immovable.province.toUpperCase();
        const inventoryNum = immovable.inventory_num;
        if (!inventoryNumSumByState[province]) {
          inventoryNumSumByState[province] = 0;
        }
        inventoryNumSumByState[province] += inventoryNum;
      });

      // Combine both sums into the chart data
      states.forEach(state => {
        const campingPlaces = campingPlacesSumByState[state] || 0;
        const inventoryNum = inventoryNumSumByState[state.toUpperCase()] || 0;
        chartData.addRow([state, campingPlaces, inventoryNum]);
      });

      const chartOptions = {
        isStacked: true,
        height: 800,
        width: 1600,
        legend: { position: 'top' },
        vAxis: { minValue: 0 },
      };

      // Check if there is no data for campings or immovables
      const noData =
        filteredCampingData.length === 0 || filteredImmovablesData.length === 0;

      // Draw the chart or display the message bubble
      if (noData) {
        const bubbleOptions = {
          title: 'Aun no se han cargado los datos',
          width: 1600,
          height: 800,
        };

        const bubbleChart = new google.visualization.BubbleChart(
          document.getElementById('columnchart_values')
        );
        bubbleChart.draw(chartData, bubbleOptions);
      } else {
        const columnChart = new google.visualization.ColumnChart(
          document.getElementById('columnchart_values')
        );
        columnChart.draw(chartData, chartOptions);
      }
    }

  }

  onMount(getData);
</script>

<svelte:head>
  <script src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<div id="columnchart_values"></div>
