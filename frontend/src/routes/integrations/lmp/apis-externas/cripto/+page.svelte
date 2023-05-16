<script>
    //@ts-nocheck
    import { onMount } from 'svelte';
  
    let chart;
  
    // Función para cargar los datos de la API y dibujar el gráfico
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7');
        const data = await response.json();
  
        // Obtén los datos de precios de Bitcoin
        const prices = data.prices;
  
        // Formatea los datos según el formato requerido por jsCharting
        const chartData = prices.map(item => [new Date(item[0]), item[1]]);
  
        // Configuración del gráfico
        const chartConfig = {
          type: 'line',
          series: [{ points: { marker: { visible: false } } }],
          defaultSeries: { lineWidth: 2 },
          xAxis_scale_type: 'time',
          legend_visible: false
        };
  
        // Crea el gráfico
        chart = JSC.Chart('chartContainer', chartConfig);
        chart.series().points(chartData);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };
  
    onMount(fetchData);
  </script>
  
  <svelte:head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
    <script src="https://code.jscharting.com/latest/jscharting.js"></script>
  </svelte:head>
  
  <div id="chartContainer" style="width: 100%; height: 400px;"></div>
  