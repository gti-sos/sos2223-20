<svelte:head>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
</svelte:head>

<script>
    // @ts-nocheck
    import {onMount} from "svelte";
    const delay = ms => new Promise(res => setTimeout(res, ms));
    import { dev } from "$app/environment"; 


    let API = "/api/v2/immovables";
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
    Highcharts.chart('chartI', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Título del gráfico'
  },
  xAxis: {
    categories: Array.from(countsI.keys()).sort() // ordenamos por año
  },
  yAxis: {
    title: {
      text: 'Total'
    }
  },
  series: [{
    name: 'Total',
    data: Array.from(countsI.values()).map(countI => Object.values(countI).reduce((acc, curr) => acc + curr, 0))
  }],
  tooltip: {
    useHTML: true,
    formatter: function () {
      let html = `<div>${this.x}: ${this.y}</div>`;
      Object.entries(countsI[this.x]).forEach(([province, countI]) => {
        html += `<div>${province}: ${countI}</div>`;
      });
      return html;
    }
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
    <figure class="highcharts-figure" style="margin-left: 25px; margin-right:25px">
        <div id="container"></div>
        <p class="highcharts-description" style="text-align:center">
            Gráfico de Columnas sobre los inmuebles en los años.
        </p>
    </figure>
</main>