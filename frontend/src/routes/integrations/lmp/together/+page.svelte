<svelte:head>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
  <script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
    <script src="https://code.jscharting.com/latest/jscharting.js"></script>
  </svelte:head>

<script>
  // @ts-nocheck
  import { dev } from '$app/environment';
  import { onMount } from "svelte";

  let API_Immovables = '/api/proxy-mas/?url=https://sos2223-20.ew.r.appspot.com/api/v3/immovables';
  if (dev) {
    API_Immovables = 'http://localhost:12345' + API_Immovables;
  }
  let API_Campings = '/api/proxy-lmp/?url=https://sos2223-20.ew.r.appspot.com/api/v3/andalusian-campings';
  if (dev) {
    API_Campings = 'http://localhost:12345' + API_Campings;
  }
  let dataImmovables = [];
  let dataCampings = [];

  async function getdata() {
    const response = await fetch(API_Immovables);
    dataImmovables = await response.json();
    const response2 = await fetch(API_Campings);
    dataCampings = await response2.json();
  }

  let countsU = new Map();
  let countsC = new Map();

  function processdata() {
    dataImmovables.forEach(item => {
      const uso = item.current_usage.split('-')[0];
      const province = item.province;
      const countU = countsU.get(uso) || {};
      countU[province] = (countU[province] || 0) + 1;
      countsU.set(uso, countU);
    });

    dataCampings.forEach(item => {
      const categoria = item.category.split('-')[0];
      const state = item.state;
      const countC = countsC.get(categoria) || {};
      countC[state] = (countC[state] || 0) + 1;
      countsC.set(categoria, countC);
    });
  }

  $: processdata();

  let chartU = null;

  function createChart() {
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
          Object.entries(point.dataImmovables.countU).forEach(([province, countU]) => {
            html += `${province}: ${countU}<br>`;
          });
          return html;
        }
      }
    });
  }

  onMount(() => {
    getdata().then(() => {
      processdata();
      createChart();
    });
  });
</script>

<main>
  <h1>Uso de los inmuebles por Provincia</h1>
  <div id="chartU" style="height: 250px;"></div>
</main>
