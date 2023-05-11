
<svelte:head>

  <script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="https://code.highcharts.com/modules/series-label.js"></script>
  <script src="https://code.highcharts.com/modules/exporting.js"></script>
  <script src="https://code.highcharts.com/modules/export-data.js"></script>
</svelte:head>
<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    onMount(async () => {
    await Promise.all([getData()]);
    processDataI();
    createChartI();
    createChartII();
    createChartIII();
});
  
    let API = 'https://sos2223-20.appspot.com/api/v2/immovables';
    //let API = 'http://localhost:12345/api/v2/immovables';
    let data = [];
  
    async function getData() {
      const response = await fetch(API);
      data = await response.json();
    }
  
  
    let countsIProvincia = new Map();
    let countsINombre = new Map();
    let countsIConsejeria = new Map();
    let countsINaturaleza = new Map();
    let countsIUso = new Map();
    let countsIMunicipio = new Map();
    let id = [];
    let resource = [];
    let inventory_num = [];
    function processDataI() {

      data.forEach(item => {
        const year = item.modified_date.split('-')[0];
        const province = item.province;
        const countI = countsIProvincia.get(year) || {};
        countI[province] = (countI[province] || 0) + 1;
        countsIProvincia.set(year, countI);
      });
console.log(countsIProvincia)
      data.forEach(item => {
        const year = item.modified_date.split('-')[0];
        const name = item.active_name;
        const countI = countsINombre.get(year) || {};
        countI[name] = (countI[name] || 0) + 1;
        countsINombre.set(year, countI);
      });

      data.forEach(item => {
        const year = item.modified_date.split('-')[0];
        const counseling = item.counseling;
        const countI = countsIConsejeria.get(year) || {};
        countI[counseling] = (countI[counseling] || 0) + 1;
        countsIConsejeria.set(year, countI);
      });

      data.forEach(item => {
        const year = item.modified_date.split('-')[0];
        const nature = item.nature;
        const countI = countsINaturaleza.get(year) || {};
        countI[nature] = (countI[nature] || 0) + 1;
        countsINaturaleza.set(year, countI);
      });

      data.forEach(item => {
        const year = item.modified_date.split('-')[0];
        const usage = item.current_usage;
        const countI = countsIUso.get(year) || {};
        countI[usage] = (countI[usage] || 0) + 1;
        countsIUso.set(year, countI);
      });

      data.forEach(item => {
        const year = item.modified_date.split('-')[0];
        const municipality = item.municipality;
        const countI = countsIMunicipio.get(year) || {};
        countI[municipality] = (countI[municipality] || 0) + 1;
        countsIMunicipio.set(year, countI);
      });
      for (let i = 0; i < data.length; i++) {
                id.push(data[i]["id"]);
                resource.push(data[i]["resource"]);
                inventory_num.push(data[i]["inventory_num"]);
            }
    }
  
    $: processDataI();
  
    let chartI = null;
function createSeriesForCountsIProvincia() {
  const seriesData = [];
  const provinceNames = Object.keys(Array.from(countsIProvincia.values())[0]);

  for (const province of provinceNames) {
    const series = {
      name: province,
      data: Array.from(countsIProvincia.entries()).map(([year, countI]) => countI[province] || 0)
    };
    seriesData.push(series);
  }

  return seriesData;
}
function createSeriesForCountsINombre() {
  const seriesData = [];
  const names = Object.keys(Array.from(countsINombre.values())[0]);

  for (const name of names) {
    const series = {
      name: name,
      data: Array.from(countsIProvincia.entries()).map(([year, countI]) => countI[name] || 0)
    };
    seriesData.push(series);
  }

  return seriesData;
}
function createSeriesForCountsIConsejeria() {
  const seriesData = [];
  const counselingNames = Object.keys(Array.from(countsIConsejeria.values())[0]);

  for (const counseling of counselingNames) {
    const series = {
      name: counseling,
      data: Array.from(countsIConsejeria.entries()).map(([year, countI]) => countI[counseling] || 0)
    };
    seriesData.push(series);
  }
  return seriesData;
  
}
function createSeriesForCountsINaturaleza() {
  const seriesData = [];
  const natureNames = Object.keys(Array.from(countsINaturaleza.values())[0]);

  for (const nature of natureNames) {
    const series = {
      name: nature,
      data: Array.from(countsINaturaleza.entries()).map(([year, countI]) => countI[nature] || 0)
    };
    seriesData.push(series);
  }

  return seriesData;
}
function createSeriesForCountsIUso() {
  const seriesData = [];
  const usoNames = Object.keys(Array.from(countsIUso.values())[0]);

  for (const current_usage of usoNames) {
    const series = {
      name: current_usage,
      data: Array.from(countsIUso.entries()).map(([year, countI]) => countI[current_usage] || 0)
    };
    seriesData.push(series);
  }

  return seriesData;
}
function createSeriesForCountsIMunicipio() {
  const seriesData = [];
  const muniNames = Object.keys(Array.from(countsIMunicipio.values())[0]);

  for (const municipality of muniNames) {
    const series = {
      name: municipality,
      data: Array.from(countsIMunicipio.entries()).map(([year, countI]) => countI[municipality] || 0)
    };
    seriesData.push(series);
  }
console.log(seriesData)
  return seriesData;
}

function createChartI() {
  let series = [];

series.push(...createSeriesForCountsIProvincia());
series.push(...createSeriesForCountsINombre());
series.push(...createSeriesForCountsIConsejeria());
series.push(...createSeriesForCountsINaturaleza());
series.push(...createSeriesForCountsIUso());
series.push(...createSeriesForCountsIMunicipio());


console.log(series)
  chartI = Highcharts.chart('chartI', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Grafico parametros no numericos'
  },
  xAxis: {
    categories: Array.from(countsIProvincia.keys())
    
  },
  yAxis: {
    title: {
      text: 'Cantidad'
    }
  },
  series: series
});
}
let chartII = null;

function createChartII() {
  let series2 = [];
  series2.push({
    name: 'IDs',
    data: id
  });

  series2.push({
    name: 'Recursos',
    data: resource
  });

  series2.push({
    name: 'Números de inventario',
    data: inventory_num
  });
  chartII = Highcharts.chart('chartII', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Grafico parametros numericos'
  },
  xAxis: {
    title: {
      text: "Inmuebles"
    }
  },
  yAxis: {
    title: {
      text: 'Cantidad'
    }
  },
  series: series2
});
}
function createChartIII() {
  let series3 = [];

series3.push(...createSeriesForCountsIProvincia());
series3.push(...createSeriesForCountsINombre());
series3.push(...createSeriesForCountsIConsejeria());
series3.push(...createSeriesForCountsINaturaleza());
series3.push(...createSeriesForCountsIUso());
series3.push(...createSeriesForCountsIMunicipio());
series3.push({
    name: 'IDs',
    data: id
  });

  series3.push({
    name: 'Recursos',
    data: resource
  });

  series3.push({
    name: 'Números de inventario',
    data: inventory_num
  });

  chartI = Highcharts.chart('chartIII', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Grafico todos los parametros'
  },
  xAxis: {
    categories: Array.from(countsIProvincia.keys())
  },
  yAxis: {
    title: {
      text: 'Cantidad'
    }
  },
  series: series3
});
}
</script>

<main>
    <h1>Immuebles por parametros no numericos según el año</h1>
    <div id="chartI" style="height: 500px;width: 80%;"></div>
    <h1>Immuebles por parametros numericos según el año</h1>
    <div id="chartII" style="height: 250px;width: 80%;"></div>
    <h1>Immuebles por todos los parametros </h1>
    <div id="chartIII" style="height: 250px;width: 80%;"></div>
  </main>
