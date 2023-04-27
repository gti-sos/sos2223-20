<svelte:head>
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>
</svelte:head>


<script>
  // @ts-nocheck
  import { dev } from '$app/environment';
  import { onMount } from "svelte";

  let API = '/api/v2/immovables';
  if (dev) {
    API = 'http://localhost:12345' + API;
  }

  let data = [];

  async function getData() {
    const response = await fetch(API);
    data = await response.json();
  }

  let countsU = new Map();

  function processDataU() {
    data.forEach(item => {
      const uso = item.current_usage.split('-')[0];
      const province = item.province;
      const countU = countsU.get(uso) || {};
      countU[province] = (countU[province] || 0) + 1;
      countsU.set(uso, countU);
    });
  }

  $: processDataU();

  let chartU = null;

  function createChartProU() {
    chartU = Morris.Bar({
      element: 'chartU',
      data: Array.from(countsU.entries())
        .map(([uso, countU]) => {
          const total = Object.values(countU).reduce((acc, curr) => acc + curr, 0);
          return { uso, total, countU };
        }),
      xkey: 'uso',
      ykeys: ['total'],
      labels: ['Total'],
      xLabelAngle: 60,
      hoverCallback: function (index, options, content, row) {
        let html = `<div>${row.uso}: ${row.total}</div>`;
        Object.entries(row.countU).forEach(([province, countU]) => {
          html += `<div>${province}: ${countU}</div>`;
        });
        return html;
      }
    });
  }
  onMount(() => {
    getData().then(() => {
      processDataU();
      createChartProU();
    });
  });
</script>

<main>
    
  <h1>Uso de los inmuebles por Provincia</h1>
  <div id="chartU" style="height: 250px;"></div>
</main>