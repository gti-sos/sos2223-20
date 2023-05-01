<svelte:head>
        <script src="https://code.highcharts.com/9.2.2/highcharts.js"></script>
      
</svelte:head>
<script>
import { onMount } from 'svelte';
// @ts-ignore
onMount(async () => {
  const response = await fetch('/api/v2/andalusian-campings');
  const campingsData = await response.json();

  // Crear el gráfico de 
  // @ts-ignore
  Highcharts.chart('mi-grafico', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Campings por provincia'
    },
    xAxis: {
      // @ts-ignore
      categories: campingsData.map((camping) => camping.state),
      title: {
        text: 'Provincia'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Cantidad de Campings'
      }
    },
    series: [{
      name: 'Campings',
      // @ts-ignore
      data: campingsData.map((camping) => camping.id)
    }]
  });
});
</script>