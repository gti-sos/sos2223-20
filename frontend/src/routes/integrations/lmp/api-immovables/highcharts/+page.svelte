
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
  
    let API = 'https://sos2223-20.appspot.com/api/v3/immovables';
    //let API = 'http://localhost:12345/api/v3/immovables';
    let data = [];
  
    async function getData() {
      const response = await fetch(API);
      data = await response.json();
    }
  
  
    let countsIProvincia = new Map();
    let countsINaturaleza = new Map();
    let countsIUso = new Map();
    let countsIid = new Map();
    let countsIresource = new Map();
    let countsIinventorynum = new Map();

    function processDataI() {

      data.forEach(item => {
        const year = item.modified_date;

        const province = item.province;
        const countI = countsIProvincia.get(year) || {};
        countI[province] = (countI[province] || 0) + 1;
        countsIProvincia.set(year, countI);

        const nature = item.nature;
        const countInature = countsINaturaleza.get(year) || {};
        countInature[nature] = (countInature[nature] || 0) + 1;
        countsINaturaleza.set(year, countInature);

        const usage = item.current_usage;
        const countIusage = countsIUso.get(year) || {};
        countIusage[usage] = (countIusage[usage] || 0) + 1;
        countsIUso.set(year, countIusage);

        const id = item.id;
        const countIid = countsIid.get(year) || {};
        countIid[id] = (countIid[id] || 0) + 1;
        countsIid.set(year, countIid);

        const resource = item.resource;
        const countIresource = countsIresource.get(year) || {};
        countIresource[resource] = (countIresource[resource] || 0) + 1;
        countsIresource.set(year, countIresource);

        const inventory_num = item.inventory_num;
        const countIinv = countsIinventorynum.get(year) || {};
        countIinv[inventory_num] = (countIinv[inventory_num] || 0) + 1;
        countsIinventorynum.set(year, countIinv);
      });

    }
  
    $: processDataI();
  
    let chartI = null;
function createSeriesForCountsIProvincia() {
  const seriesData = [];
  for(let i = 0; i<6;i++){
  let provinceNames = Object.keys(Array.from(countsIProvincia.values())[i]);

  for (const province of provinceNames) {
    if(!(seriesData.some((element) => element.name === province))){
    const series = {
      name: province,
      data: Array.from(countsIProvincia.entries()).map(([year, countI]) => countI[province] || 0)
    };
    seriesData.push(series);
  }
}
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
  for(let i = 0; i<6;i++){
  const usoNames = Object.keys(Array.from(countsIUso.values())[i]);
  //const usoNames2 = Object.keys(Array.from(countsIUso.values())[3]);

  for (const current_usage of usoNames) {
    if(!(seriesData.some((element) => element.name === current_usage))){
    const series = {
      name: current_usage,
      data: Array.from(countsIUso.entries()).map(([year, countI]) => countI[current_usage] || 0)
    };
    seriesData.push(series);
  }
  }
  }

  return seriesData;
}

function createSeriesForCountsIid() {
  const seriesData = [];
  for(let i = 0; i<6;i++){
  const idd = Object.keys(Array.from(countsIid.values())[i]);

  for (const id of idd) {
    if(!(seriesData.some((element) => element.name === id))){
    const series = {
      name: id,
      data: Array.from(countsIid.entries()).map(([year, countI]) => countI[id] || 0)
    };
    seriesData.push(series);
  }
}
}
  return seriesData;
}

function createSeriesForCountsIresource() {
  const seriesData = [];
  for(let i = 0; i<6;i++){
  const resourcen = Object.keys(Array.from(countsIresource.values())[i]);

  for (const resource of resourcen) {
    if(!(seriesData.some((element) => element.name === resource))){
    const series = {
      name: resource,
      data: Array.from(countsIresource.entries()).map(([year, countI]) => countI[resource] || 0)
    };
    seriesData.push(series);
  }
}
  }
  return seriesData;
}

function createSeriesForCountsIinventorynum() {
  const seriesData = [];
  for(let i = 0; i<6;i++){
  const iventorynumn = Object.keys(Array.from(countsIinventorynum.values())[i]);

  for (const inventory_num of iventorynumn) {
    if(!(seriesData.some((element) => element.name === inventory_num))){
    const series = {
      name: inventory_num,
      data: Array.from(countsIinventorynum.entries()).map(([year, countI]) => countI[inventory_num] || 0)
    };
    seriesData.push(series);
  }
}}
  return seriesData;
}

function createChartI() {
  let series = [];

series.push(...createSeriesForCountsIProvincia());
series.push(...createSeriesForCountsINaturaleza());
series.push(...createSeriesForCountsIUso());


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
  series: series,
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y: 2f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
              animation: {
        duration: 2000,
        easing: 'easeOutBounce'
      },
            pointPadding: 0.2,
            borderWidth: 2,
            borderColor: "#000"
            }
        },
});
}
let chartII = null;

function createChartII() {
  let series2 = [];

  series2.push(...createSeriesForCountsIid());
  series2.push(...createSeriesForCountsIresource());
  series2.push(...createSeriesForCountsIinventorynum());

  chartII = Highcharts.chart('chartII', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Grafico parametros numericos'
  },
  xAxis: {
    categories: Array.from(countsIid.keys())
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
series3.push(...createSeriesForCountsINaturaleza());
series3.push(...createSeriesForCountsIUso());
series3.push(...createSeriesForCountsIid());
series3.push(...createSeriesForCountsIresource());
series3.push(...createSeriesForCountsIinventorynum());

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
    <div id="chartII" style="height: 500px;width: 80%;"></div>
    <h1>Immuebles por todos los parametros </h1>
    <div id="chartIII" style="height: 500px;width: 80%;"></div>
  </main>
