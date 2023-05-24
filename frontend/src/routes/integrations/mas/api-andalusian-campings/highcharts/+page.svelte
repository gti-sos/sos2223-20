<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  onMount(async () => {
    await Promise.all([getData()]);
    processDataI();
    createChartI();
    createChartII();
    createChartIII();
    createChartIIII();
  });

  let API = "https://sos2223-20.ew.r.appspot.com/api/v3/campings";

  let data = [];

  async function getData() {
    const response = await fetch(API);
    data = await response.json();
  }
  console.log(data);


  let countsIProvincia = new Map();
  let countsINombre = new Map();
  let countsICodRegistro = new Map();
  let countsIResponsable = new Map();
  let countsICategoria = new Map();
  let countsIMunicipio = new Map();
  let id = [];
  let group_id = [];
  let camping_places = [];
  function processDataI() {
    data.forEach((item) => {
      const year = item.start_date.split("-")[0];
      const state = item.state;
      const countI = countsIProvincia.get(year) || {};
      countI[state] = (countI[state] || 0) + 1;
      countsIProvincia.set(year, countI);
    });
    console.log(countsIProvincia);
    data.forEach((item) => {
      const year = item.start_date.split("-")[0];
      const name = item.name;
      const countI = countsINombre.get(year) || {};
      countI[name] = (countI[name] || 0) + 1;
      countsINombre.set(year, countI);
    });

    data.forEach((item) => {
      const year = item.start_date.split("-")[0];
      const registry_code = item.registry_code;
      const countI = countsICodRegistro.get(year) || {};
      countI[registry_code] = (countI[registry_code] || 0) + 1;
      countsICodRegistro.set(year, countI);
    });

    data.forEach((item) => {
      const year = item.start_date.split("-")[0];
      const responsible = item.responsible;
      const countI = countsIResponsable.get(year) || {};
      countI[responsible] = (countI[responsible] || 0) + 1;
      countsIResponsable.set(year, countI);
    });

    data.forEach((item) => {
      const year = item.start_date.split("-")[0];
      const category = item.category;
      const countI = countsICategoria.get(year) || {};
      countI[category] = (countI[category] || 0) + 1;
      countsICategoria.set(year, countI);
    });

    data.forEach((item) => {
      const year = item.start_date.split("-")[0];
      const city = item.city;
      const countI = countsIMunicipio.get(year) || {};
      countI[city] = (countI[city] || 0) + 1;
      countsIMunicipio.set(year, countI);
    });
    for (let i = 0; i < data.length; i++) {
      id.push(data[i]["id"]);
      group_id.push(data[i]["group_id"]);
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
  
  function createSeriesForCountsIResponsable() {
    const seriesData = [];
    const responsibleNames = Object.keys(
      Array.from(countsIResponsable.values())[0]
    );

    for (const responsible of responsibleNames) {
      const series = {
        name: responsible,
        data: Array.from(countsIResponsable.entries()).map(
          ([year, countI]) => countI[responsible] || 0
        ),
      };
      seriesData.push(series);
    }
    console.log(seriesData);
    return seriesData;
  }
  function createSeriesForCountsICategoria() {
    const seriesData = [];
    const CategoriaNames = Object.keys(
      Array.from(countsICategoria.values())[0]
    );

    for (const category of CategoriaNames) {
      const series = {
        name: category,
        data: Array.from(countsICategoria.entries()).map(
          ([year, countI]) => countI[category] || 0
        ),
      };
      seriesData.push(series);
    }

    console.log(seriesData);
    return seriesData;
    
  }
  

  function createSeriesForCountsIMunicipio() {
    const seriesData = [];
    const muniNames = Object.keys(Array.from(countsIMunicipio.values())[0]);

    for (const city of muniNames) {
      const series = {
        name: city,
        data: Array.from(countsIMunicipio.entries()).map(
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
    series.push(...createSeriesForCountsIResponsable());
    series.push(...createSeriesForCountsICategoria());
    series.push(...createSeriesForCountsIMunicipio());

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
        min: 0,
        title: {
          text: "Numero de Campings",
          align: "high",
        },
        labels: {
          overflow: "justify",
        },
        gridLineWidth: 0,
      },
      series: series,
    });
  }
  let chartII = null;

  
  function getData1990() {
  const provinces = ["ALMERÍA", "CÁDIZ", "CÓRDOBA", "GRANADA", "HUELVA", "SEVILLA", "JAÉN", "MÁLAGA"];
  const campingPlaces90 = [0, 0, 0, 0, 0, 0, 0, 0];
  
    data.forEach((item) => {
    const year = parseInt(item.start_date.split("-")[0]);
    const province = item.state;
    if (year >= 1990 && year <= 1999 && provinces.includes(province)) {
      const index = provinces.indexOf(province);
      campingPlaces90[index] += item.camping_places;
    }
  });
  console.log(campingPlaces90);
  return campingPlaces90;
}

function getData2000() {
  const provinces = ["ALMERÍA", "CÁDIZ", "CÓRDOBA", "GRANADA", "HUELVA", "SEVILLA", "JAÉN", "MÁLAGA"];
  const campingPlaces00 = [0, 0, 0, 0, 0, 0, 0, 0];
  
  data.forEach((item) => {
    const year = parseInt(item.start_date.split("-")[0]);
    const province = item.state;
    if (year >= 2000 && year <= 2009 && provinces.includes(province)) {
      const index = provinces.indexOf(province);
      campingPlaces00[index] += item.camping_places;
    }
  });
  console.log(campingPlaces00);
  return campingPlaces00;
}

function getData2010() {
  const provinces = ["ALMERÍA", "CÁDIZ", "CÓRDOBA", "GRANADA", "HUELVA", "SEVILLA", "JAÉN", "MÁLAGA"];
  const campingPlaces10 = [0, 0, 0, 0, 0, 0, 0, 0];
  
  data.forEach((item) => {
    const year = parseInt(item.start_date.split("-")[0]);
    const province = item.state;
    if (year >= 2010 && year <= 2019 && provinces.includes(province)) {
      const index = provinces.indexOf(province);
      campingPlaces10[index] += item.camping_places;
    }
  });
  console.log(campingPlaces10);
  return campingPlaces10;
}

function getData1980() {
  const provinces = ["ALMERÍA", "CÁDIZ", "CÓRDOBA", "GRANADA", "HUELVA", "SEVILLA", "JAÉN", "MÁLAGA"];
  const campingPlaces80 = [0, 0, 0, 0, 0, 0, 0, 0];
  
  data.forEach((item) => {
    const year = parseInt(item.start_date.split("-")[0]);
    const province = item.state;
    if (year >= 1980 && year <= 1989 && provinces.includes(province)) {
      const index = provinces.indexOf(province);
      campingPlaces80[index] += item.camping_places;
    }
  });
  console.log(campingPlaces80);
  return campingPlaces80;
}

  function createChartII() {
    let series2 = [];
    
    series2.push({
    name: 'IDs',
    data: id
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
        align: "left",
      },
      xAxis: {
        categories: Object.keys(Array.from(countsIProvincia.values())[0]),
        title: {
          text: null,
        },
        gridLineWidth: 1,
        lineWidth: 0,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Cantidad",
        },
        labels: {
          overflow: "justify",
        },
        gridLineWidth: 0,
      },
      series: series2,
    });
  }
  function createChartIII() {
    let series3 = [];

    series3.push(...createSeriesForCountsIProvincia());
    series3.push(...createSeriesForCountsINombre());
    series3.push(...createSeriesForCountsICodRegistro());
    series3.push(...createSeriesForCountsIResponsable());
    series3.push(...createSeriesForCountsICategoria());
    series3.push(...createSeriesForCountsIMunicipio());
    series3.push({
      name: "IDs",
      data: id,
    });

    series3.push({
      name: "Id Grupos",
      data: group_id,
    });

    series3.push({
      name: "",
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
        categories: Array.from(countsIMunicipio.keys()),
      },
      yAxis: {
        title: {
          text: "Cantidad",
        },
      },
      series: series3,
    });
  }

  function createChartIIII() {
    const data1990 = getData1990();
    const data1980 = getData1980();
    const data2000 = getData2000();
    const data2010 = getData2010();
    
    chartI = Highcharts.chart("chartIIII", {
      chart: {
        type: "bar",
      },
      title: {
        text: "Número de Campings por Provincia y Año",
        align: "left",
      },
      xAxis: {
        categories: 
        ["ALMERÍA", 
        "CÁDIZ",
        "CÓRDOBA",
        "GRANADA",
        "HUELVA",
        "SEVILLA",
        "JAÉN",
        "MÁLAGA"]
      },
      yAxis: {
        min: 0,
        title: {
          text: "Num Campings",
        },
        labels: {
          overflow: "justify",
        },

      },
      series: [{
        name: 'Años 1980',
        data: data1980
    }, {
        name: 'Años 1990',
        data: data1990
    }, {
        name: 'Años 2000',
        data: data2000
    }, {
        name: 'Años 2010',
        data: data2010
    }]
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
  <div id="chartII" style="height: 550px;width: 80%;" />
  <h1>Campings por todos los parametros</h1>
  <div id="chartIII" style="height: 850px;width: 80%;" />
  <h1>Campings por provincia y año</h1>
  <div id="chartIIII" style="height: 650px;width: 80%;" />
</main>
