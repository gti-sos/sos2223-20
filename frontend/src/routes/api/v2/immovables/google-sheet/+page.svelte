<svelte:head>
        <script src="https://code.highcharts.com/9.2.2/highcharts.js"></script>
      
</svelte:head>
<script>
import { onMount } from 'svelte';
// @ts-ignore
import HighchartsSeries from 'https://code.highcharts.com/9.2.2/modules/series.js';

onMount(async () => {
  const response = await fetch('/api/v2/immovables');
  const immovablesData = await response.json();

  // Crear el gráfico de barras
  // @ts-ignore
  Highcharts.chart('mi-grafico', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Inmuebles por provincia'
    },
    xAxis: {
      // @ts-ignore
      categories: immovablesData.map((immovable) => immovable.province),
      title: {
        text: 'Provincia'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Cantidad de inmuebles'
      }
    },
    series: [{
      name: 'Inmuebles',
      // @ts-ignore
      data: immovablesData.map((immovable) => immovable.id)
    }]
  });
});
</script>