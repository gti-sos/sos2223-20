<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"></script>
  </svelte:head>
<script>
    import { onMount } from "svelte";
  
    const API_KEY = "";//API KEY DEL PROYECTO
    const QUERY = "FC Barcelona";
    const SEARCH_URL = `https://kgsearch.googleapis.com/v1/entities:search?query=${QUERY}&key=${API_KEY}&limit=10&indent=True`;
  
    // @ts-ignore
    let entityData = [];
  
    async function getData() {
      const response = await fetch(SEARCH_URL);
      const data = await response.json();
      // @ts-ignore
      entityData = data.itemListElement.map(item => item.result);
    }
  
    function processData() {
      const counts = new Map();
      // @ts-ignore
      entityData.forEach(entity => {
        const types = entity["@type"];
        // @ts-ignore
        types.forEach(type => {
          const count = counts.get(type) || 0;
          counts.set(type, count + 1);
        });
      });
      return Array.from(counts.entries()).map(([type, count]) => {
        return { label: type, value: count };
      });
    }
  
    let chart = null;
  
    function createChart() {
      // @ts-ignore
      chart = Morris.Bar({
        element: "chart",
        data: processData(),
        xkey: "label",
        ykeys: ["value"],
        labels: ["Count"],
        xLabelAngle: 60
      });
    }
  
    onMount(() => {
      getData().then(() => {
        createChart();
      });
    });
  </script>
  
  <main>
    <h1>Entidades de FC Barcelona</h1>
    <div id="chart" style="height: 250px;"></div>
  </main>
  