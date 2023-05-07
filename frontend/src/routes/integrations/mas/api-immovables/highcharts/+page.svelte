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

  let API = "https://sos2223-20.appspot.com/api/v2/andalusian_campings";

  let data = [];

  async function getData() {
    const response = await fetch(API);
    data = await response.json();
  }

  let countsIProvincia = new Map();
  let countsINombre = new Map();
  let countsICodRegistro = new Map();
  let countsIIdGrupo = new Map();
  let countsICategoria = new Map();
  let countsICiudad = new Map();
  let id = [];
  let responsible = [];
  let camping_places = [];
  function processDataI() {
    data.forEach((item) => {
      const year = item.modified_date.split("-")[0];
      const state = item.state;
      const countI = countsIProvincia.get(year) || {};
      countI[state] = (countI[state] || 0) + 1;
      countsIProvincia.set(year, countI);
    });
    console.log(countsIProvincia);
    data.forEach((item) => {
      const year = item.modified_date.split("-")[0];
      const name = item.name;
      const countI = countsINombre.get(year) || {};
      countI[name] = (countI[name] || 0) + 1;
      countsINombre.set(year, countI);
    });

    data.forEach((item) => {
      const year = item.modified_date.split("-")[0];
      const registry_code = item.registry_code;
      const countI = countsICodRegistro.get(year) || {};
      countI[registry_code] = (countI[registry_code] || 0) + 1;
      countsICodRegistro.set(year, countI);
    });

    data.forEach((item) => {
      const year = item.modified_date.split("-")[0];
      const group_id = item.group_id;
      const countI = countsIIdGrupo.get(year) || {};
      countI[group_id] = (countI[group_id] || 0) + 1;
      countsIIdGrupo.set(year, countI);
    });

    data.forEach((item) => {
      const year = item.modified_date.split("-")[0];
      const usage = item.category;
      const countI = countsICategoria.get(year) || {};
      countI[usage] = (countI[usage] || 0) + 1;
      countsICategoria.set(year, countI);
    });

    data.forEach((item) => {
      const year = item.modified_date.split("-")[0];
      const city = item.city;
      const countI = countsICiudad.get(year) || {};
      countI[city] = (countI[city] || 0) + 1;
      countsICiudad.set(year, countI);
    });
    for (let i = 0; i < data.length; i++) {
      id.push(data[i]["id"]);
      responsible.push(data[i]["responsible"]);
      camping_places.push(data[i]["camping_places"]);
    }
  }

  $: processDataI();

  let chartI = null;
  function createSeriesForCountsIProvincia() {
    const seriesData = [];
    const stateNames = Object.keys(Array.from(countsIProvincia.values())[0]);

    for (const state of stateNames) {
      const series = {
        name: state,
        data: Array.from(countsIProvincia.entries()).map(
          ([year, countI]) => countI[state] || 0
        ),
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
        data: Array.from(countsIProvincia.entries()).map(
          ([year, countI]) => countI[name] || 0
        ),
      };
      seriesData.push(series);
    }

    return seriesData;
  }
  function createSeriesForCountsICodRegistro() {
    const seriesData = [];
    const registry_codeNames = Object.keys(
      Array.from(countsICodRegistro.values())[0]
    );

    for (const registry_code of registry_codeNames) {
      const series = {
        name: registry_code,
        data: Array.from(countsICodRegistro.entries()).map(
          ([year, countI]) => countI[registry_code] || 0
        ),
      };
      seriesData.push(series);
    }
    return seriesData;
  }
  function createSeriesForCountsIIdGrupo() {
    const seriesData = [];
    const group_idNames = Object.keys(Array.from(countsIIdGrupo.values())[0]);

    for (const group_id of group_idNames) {
      const series = {
        name: group_id,
        data: Array.from(countsIIdGrupo.entries()).map(
          ([year, countI]) => countI[group_id] || 0
        ),
      };
      seriesData.push(series);
    }

    return seriesData;
  }
  function createSeriesForCountsICategoria() {
    const seriesData = [];
    const usoNames = Object.keys(Array.from(countsICategoria.values())[0]);

    for (const category of usoNames) {
      const series = {
        name: category,
        data: Array.from(countsICategoria.entries()).map(
          ([year, countI]) => countI[category] || 0
        ),
      };
      seriesData.push(series);
    }

    return seriesData;
  }
  function createSeriesForCountsICiudad() {
    const seriesData = [];
    const muniNames = Object.keys(Array.from(countsICiudad.values())[0]);

    for (const city of muniNames) {
      const series = {
        name: city,
        data: Array.from(countsICiudad.entries()).map(
          ([year, countI]) => countI[city] || 0
        ),
      };
      seriesData.push(series);
    }
    console.log(seriesData);
    return seriesData;
  }

  function createChartI() {
    let series = [];

    series.push(...createSeriesForCountsIProvincia());
    series.push(...createSeriesForCountsINombre());
    series.push(...createSeriesForCountsICodRegistro());
    series.push(...createSeriesForCountsIIdGrupo());
    series.push(...createSeriesForCountsICategoria());
    series.push(...createSeriesForCountsICiudad());

    console.log(series);
    chartI = Highcharts.chart("chartI", {
      chart: {
        type: "bar",
      },
      title: {
        text: "Grafico parametros no numericos",
      },
      xAxis: {
        categories: Array.from(countsIProvincia.keys()),
      },
      yAxis: {
        title: {
          text: "Cantidad",
        },
      },
      series: series,
    });
  }
  let chartII = null;

  function createChartII() {
    let series2 = [];
    series2.push({
      name: "IDs",
      data: id,
    });

    series2.push({
      name: "Responsable",
      data: responsible,
    });

    series2.push({
      name: "Números de Camping",
      data: camping_places,
    });
    chartII = Highcharts.chart("chartII", {
      chart: {
        type: "bar",
      },
      title: {
        text: "Grafico parametros numericos",
      },
      xAxis: {
        categories: Object.keys(Array.from(countsIProvincia.values())[0]),
      },
      yAxis: {
        title: {
          text: "Cantidad",
        },
      },
      series: series2,
    });
  }
  function createChartIII() {
    let series3 = [];

    series3.push(...createSeriesForCountsIProvincia());
    series3.push(...createSeriesForCountsINombre());
    series3.push(...createSeriesForCountsICodRegistro());
    series3.push(...createSeriesForCountsIIdGrupo());
    series3.push(...createSeriesForCountsICategoria());
    series3.push(...createSeriesForCountsICiudad());
    series3.push({
      name: "IDs",
      data: id,
    });

    series3.push({
      name: "Recursos",
      data: responsible,
    });

    series3.push({
      name: "Números de Campings",
      data: camping_places,
    });

    chartI = Highcharts.chart("chartIII", {
      chart: {
        type: "bar",
      },
      title: {
        text: "Grafico todos los parametros",
      },
      xAxis: {
        categories: Array.from(countsIProvincia.keys()),
      },
      yAxis: {
        title: {
          text: "Cantidad",
        },
      },
      series: series3,
    });
  }
</script>

<svelte:head>
  <script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>
</svelte:head>

<main>
  <h1>Campings por parametros no numericos según el año</h1>
  <div id="chartI" style="height: 500px;width: 80%;" />
  <h1>Campings por parametros numericos según el año</h1>
  <div id="chartII" style="height: 250px;width: 80%;" />
  <h1>Campings por todos los parametros</h1>
  <div id="chartIII" style="height: 250px;width: 80%;" />
</main>
