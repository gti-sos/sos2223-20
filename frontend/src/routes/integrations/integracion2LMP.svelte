
<svelte:head>

  <script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="https://code.highcharts.com/modules/series-label.js"></script>
  <script src="https://code.highcharts.com/modules/exporting.js"></script>
  <script src="https://code.highcharts.com/modules/export-data.js"></script>
</svelte:head>
<script>
    // @ts-nocheck
    import { dev } from '$app/environment';
    import { onMount } from "svelte";
  
    let API2 = 'https://sos2223-11.appspot.com/api/v2/projection-homes-stats';
  
    let data2 = [];

    async function getData2() {
      const response = await fetch(API2);
      data2 = await response.json();
    }
  
    let countsII = new Map();

    function processDataII() {
      data2.forEach(item => {
        const year = item.year;
        const province = item.province;
        const countII = countsII.get(year) || {};
        countII[province] = (countII[province] || 0) + 1;
        countsII.set(year, countII);
      });
    }
    $: processDataII();
    let chartII = null;

    function createChartII() {
        chartII = Highcharts.chart('chartII', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Hogares por Provincia según el año'
        },
        xAxis: {
          categories: Array.from(countsII.keys())
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Total'
          }
        },
        tooltip: {
          shared: true,
          useHTML: true,
          headerFormat: '<b>{point.key}</b><br>',
          pointFormat: '{series.name}: {point.y}<br>'
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              enabled: true
            }
          }
        },
        series: Object.keys(Array.from(countsII.values())[0]).map(province => ({
          name: province,
          data: Array.from(countsII.entries()).map(([year, countII]) => countII[province] || 0)
        }))
      });
    }
onMount(async () => {
    await Promise.all([getData2()]);
    processDataII();
    createChartII();
});

</script>

<main>
    <h1>Casas en Venta por Provincia según el año</h1>
    <div id="chartII" style="height: 250px;"></div>
</main>
