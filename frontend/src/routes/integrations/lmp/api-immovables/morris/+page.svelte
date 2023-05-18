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

  let API = '/api/v3/immovables';
  if (dev) {
    API = 'http://localhost:12345' + API;
  }

  let data = [];

  async function getData() {
    const response = await fetch(API);
    data = await response.json();
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

  function createChartProA() {
    chartI = Morris.Bar({
      element: 'chartI',
      data: Array.from(countsI.entries())
        .sort(([year1], [year2]) => year1.localeCompare(year2)) // ordenamos por año
        .map(([year, countI]) => {
          const total = Object.values(countI).reduce((acc, curr) => acc + curr, 0);
          return { year, total, countI };
        }),
      xkey: 'year',
      ykeys: ['total'],
      labels: ['Total'],
      xLabelAngle: 60,
      hoverCallback: function (index, options, content, row) {
        let html = `<div>${row.year}: ${row.total}</div>`;
        Object.entries(row.countI).forEach(([province, countI]) => {
          html += `<div>${province}: ${countI}</div>`;
        });
        return html;
      }
    });
  }


  onMount(() => {
    getData().then(() => {
      processDataI();
      createChartProA();
    });
  });
</script>

<main>
    
  <h1>Immuebles por Provincia según el año</h1>
  <div id="chartI" style="height: 250px;"></div>
</main>