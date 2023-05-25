<script>
  //@ts-nocheck
  import { onMount } from "svelte";


  let API_immovables = "https://sos2223-20.appspot.com/api/v3/immovables";
  let API_2 ="https://sos2223-14.appspot.com/api/v2/apartment-occupancy-surveys";
  let datos = "";
  let result_1 = "";
  let resultStatus_1 = "";
  let result_2 = "";
  let resultStatus_2 = "";
  let p = "";
  let provincias = [];
  let inventory_num = [];
  let resource = [];
  let id = [];
  let current_usage = [];
  let traveler = [];
  let overnight_stay = [];
  let average_stay = [];
  onMount(async () => {
      getData_2();
  });

  async function getData_immovables() {
      const res = await fetch(API_immovables, {
          method: "GET",
      });
      try {
          const data = await res.json();
          result_1 = JSON.stringify(data, null, 2);
          datos = data;
         
          for (let i = 0; i < datos.length; i++) {
              p = `${datos[i]["province"]} ${datos[i]["modified_date"]}`;
              if (!provincias.includes(p)) {
                  provincias.push(p);
              }
              current_usage.push(datos[i]["current_usage"].length)
              id.push(datos[i]["id"]);
              resource.push(datos[i]["resource"]);
              inventory_num.push(datos[i]["inventory_num"]);
          }
          
          loadJSCharting(provincias, traveler, overnight_stay, average_stay,id,resource,inventory_num,current_usage);
      } catch (error) {
          console.log(`Error parsing result: ${error}`);
      }
      const status = await res.status;
      resultStatus_1 = status;
  }

  async function getData_2() {
      const res = await fetch(API_2, {
          method: "GET",
      });
      try {
          const data = await res.json();
          result_2 = JSON.stringify(data, null, 2);
          datos = data;
          for (let i = 0; i < datos.length; i++) {
              p = `${datos[i]["province"]} ${datos[i]["year"]}`;
              provincias.push(p);
              traveler.push(datos[i]["traveler"]);
              overnight_stay.push(datos[i]["overnight_stay"]);
              average_stay.push(datos[i]["average_stay"]);
          }
          getData_immovables();
      } catch (error) {
          console.log(`Error parsing result: ${error}`);
      }
      const status = await res.status;
      resultStatus_2 = status;
  }

  async function loadJSCharting(provincias,traveler,overnight_stay,average_stay,id,resource,inventory_num,current_usage) {
      var chart = JSC.chart('chart_1', { 
          debug: true, 
          defaultSeries_type: 'bar', 
          title_label_text: '', 
          yAxis: { label_text: ''}, 
          xAxis: {
              label_text: '', 
              categories: provincias
          }, 
          series: [ 
              { 
                  name: 'Estancia Media', 
                  points: average_stay
              },
              { 
                  name: 'Id', 
                  points: id
              }
          ] 
      });

      var chart = JSC.chart('chart_2', { 
          debug: true, 
          defaultSeries_type: 'bar', 
          title_label_text: '', 
          yAxis: { label_text: ''}, 
          xAxis: {
              label_text: '', 
              categories: provincias
          }, 
          series: [   { 
                  name: 'Id', 
                  points: id
              },{ 
                  name: 'Estancia Media', 
                  points: average_stay
              },
              { 
                  name: 'Recurso', 
                  points: resource
              },
              { 
                  name: 'Num_inventario', 
                  points: inventory_num
              }, 
          ] 
      });

      var chart = JSC.chart('chart_3', { 
          debug: true, 
          defaultSeries_type: 'bar', 
          title_label_text: '', 
          yAxis: { label_text: ''}, 
          xAxis: {
              label_text: '', 
              categories: provincias
          }, 
          series: [ 
              { 
                  name: 'Turistas', 
                  points: traveler
              },
              { 
                  name: 'Pernoctaciones', 
                  points: overnight_stay
              },  
              { 
                  name: 'Estancia media', 
                  points: average_stay
              },
              { 
                  name: 'id', 
                  points: id
              },
              { 
                  name: 'resource', 
                  points: resource
              }, { 
                  name: 'Num_inventario', 
                  points: inventory_num
              }, 
          ] 
      });
  }
</script>

<svelte:head>
  <script src="https://code.jscharting.com/latest/jscharting.js"></script>
</svelte:head>
<main>
  <div style="margin-left: 30px;">
    <h1 style="text-align:center; font-style: oblique;">Integración con compañero sin proxy</h1>
      <h2 style="text-align:center; font-style: oblique;">Gráfica ocupación de apartamentos e inmuebles</h2>
  </div>
  <h2>Primera Integración</h2>
  <div id="chart_1" style="height:150px; margin: 0px auto; margin-top:40px">
  </div>
  <h2>Segunda Integración</h2>

  <div id="chart_2" style="height:150px; margin: 0px auto; margin-top:40px">
  </div>
  <h2>Tercera Integración</h2>

  <div id="chart_3" style="height:150px; margin: 0px auto; margin-top:40px">
  </div>
  <div style="margin-left:40px;font-size:20px;">
      <h4>Resultado inmuebles</h4>
      {#if resultStatus_1 != ""}
          <p>Result:{resultStatus_1}</p>
          <pre>                
              {result_1}
          </pre>
      {/if}
      <h4>Resultados ocupación</h4>
      {#if resultStatus_2 != ""}
          <p>Result: {resultStatus_2}</p>
          <pre>
              {result_2}
          </pre>
      {/if}
  </div>    
</main>