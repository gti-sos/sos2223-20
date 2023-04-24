<svelte:head>
     <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
     <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
     <script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
     <script src="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>
</svelte:head>

<script>
    // @ts-nocheck
    import { dev } from '$app/environment';
    import {onMount} from "svelte";

    let API = '/api/v2/immovables';
        
        if(dev)
            API = 'http://localhost:12345'+API;

let data = [];

async function getData() {
    const response = await fetch(API);
    data = await response.json();
  }

  let counts = new Map();

  function processData() {
    data.forEach(item => {
      const year = item.modified_date.split('-')[0];
      const province = item.province;
      const count = counts.get(year) || {};
      count[province] = (count[province] || 0) + 1;
      counts.set(year, count);
    });
  }

  $: processData();

  let chart = null;

  function createChart() {
    chart = Morris.Bar({
      element: 'chart',
      data: Array.from(counts.entries())
        .sort(([year1], [year2]) => year1.localeCompare(year2)) // ordenamos por año
        .map(([year, count]) => {
          const total = Object.values(count).reduce((acc, curr) => acc + curr, 0);
          return { year, total, count };
        }),
      xkey: 'year',
      ykeys: ['total'],
      labels: ['Total'],
      xLabelAngle: 60,
      hoverCallback: function (index, options, content, row) {
        let html = `<div>${row.year}: ${row.total}</div>`;
        Object.entries(row.count).forEach(([province, count]) => {
          html += `<div>${province}: ${count}</div>`;
        });
        return html;
      }
    });
  }

  onMount(() => {
    getData().then(() => {
      processData();
      createChart();
    });
  });
</script>

 
<main>
    <div id="chart" style="height: 250px;"></div>

</main>