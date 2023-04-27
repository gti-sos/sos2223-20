
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
  
    let API = 'https://sos2223-20.appspot.com/api/v2/immovables';
    let API2 = 'https://sos2223-11.appspot.com/api/v2/projection-homes-stats';
  
    let data = [];
    let data2 = [];
  
    async function getData() {
      const response = await fetch(API);
      data = await response.json();
    }
  
    async function getData2() {
      const response = await fetch(API2);
      data2 = await response.json();
    }
  
    let countsI = new Map();
  
    function processDataI() {
      data.forEach(item => {
        const year = item.modified_date.split('-')[0];
        const province = item.province;
        const countI = countsI.get(year) || {};
        countI[province] = (countI[province] || 0) + 1;
        countsI.set(year, countI);
      });
    }
  
    $: processDataI();
  
    let chartI = null;
  
    function createChartI() {
      chartI = Highcharts.chart('chartIH', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Immuebles por Provincia según el año'
        },
        xAxis: {
          categories: Array.from(countsI.keys())
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
        series: Object.keys(Array.from(countsI.values())[0]).map(province => ({
          name: province,
          data: Array.from(countsI.entries()).map(([year, countI]) => countI[province] || 0)
        }))
      });
    }
  
onMount(async () => {
    await Promise.all([getData()]);
    processDataI();
    createChartI();
});

</script>

<main>
    <h1>Immuebles por Provincia según el año</h1>
    <div id="chartIH" style="height: 250px;"></div>
</main>
