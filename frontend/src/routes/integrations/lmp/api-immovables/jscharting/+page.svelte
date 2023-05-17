<svelte:head>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
    <script src="https://code.jscharting.com/latest/jscharting.js"></script>
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
    chartU = JSC.Chart('chartU', {
      series: [{
        name: 'Total',
        points: Array.from(countsU.entries())
          .map(([uso, countU]) => {
            const total = Object.values(countU).reduce((acc, curr) => acc + curr, 0);
            return { x: uso, y: total, countU };
          })
      }],
      xAxis: {
        label_text: 'Uso',
        label_style_fontSize: 14,
        label_style_fontWeight: 'bold',
        scale_type: 'linear',
        scale_label_text: '%v'
      },
      yAxis: {
        label_text: 'Total',
        label_style_fontSize: 14,
        label_style_fontWeight: 'bold',
        scale_type: 'linear',
        scale_label_text: '%v'
      },
      legend_visible: false,
      title_label_text: 'Uso de los inmuebles por Provincia',
      title_label_style_fontSize: 16,
      title_label_style_fontWeight: 'bold',
      tooltip: {
        content: '%name: %y<br>%extra'
      },
      defaultSeries: {
        type: 'column',
        point_padding: 0.1,
        tooltip_extra_precision: 0,
        tooltip_extra: (index, point) => {
          let html = '';
          Object.entries(point.data.countU).forEach(([province, countU]) => {
            html += `${province}: ${countU}<br>`;
          });
          return html;
        }
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
