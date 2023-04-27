<script>
    import Youtube from "./youtubeLMP.svelte";
    import Google from "./apiGoogleLMP.svelte";
    import GraphsImmovablesMorris from "./graphsImmovablesMorris.svelte";
    import GraphsImmovablesMorrisUsage from "./graphsImmovablesMorrisUsage.svelte";
    import Integracion1Lmp from "./integracion1LMP.svelte";
    import Integracion from "./integracion-sin-proxyLMP.svelte";
    import Integracion2Lmp from "./integracion2LMP.svelte";
    import IntegracionSinProxyLmp from "./integracion-sin-proxyLMP.svelte";
</script>


<main class="container">
    <h1 class="title">Integraciones LMP</h1>
    
    <div class="card">
      <h2 class="card-title">Youtube</h2>
      <!-- <Youtube></Youtube> -->
    </div>
  <!--Lineas comentadas porque hay limite diario de peticiones a las APIS-->
    <div class="card">
      <h2 class="card-title">Google</h2>
    <!-- <Google></Google> -->
    </div>
  
    <div class="card">
        <h2 class="card-title">Gráficos Inmobiliarios</h2>
        <GraphsImmovablesMorrisUsage></GraphsImmovablesMorrisUsage>
      </div>
      
    <div class="card">
      <h2 class="card-title">Gráficos Inmobiliarios</h2>
      <GraphsImmovablesMorris></GraphsImmovablesMorris>
    </div>
    <div class="card">
      <h2 class="card-title">Gráficos Integracion Inmuebles y Hogares</h2>
      <Integracion1Lmp></Integracion1Lmp>
    </div>
    <div class="card">
      <h2 class="card-title">Gráficos Integracion Inmuebles y Hogares</h2>
      <Integracion2Lmp></Integracion2Lmp>
    </div>
    <div class="card">
      <h2 class="card-title">Gráficos Integracion Inmuebles y Hogares</h2>
      <Integracion></Integracion>
    </div>
    <div class="card">
      <h2 class="card-title">Gráficos Integracion Inmuebles Sin proxy</h2>
      <IntegracionSinProxyLmp></IntegracionSinProxyLmp>
    </div>
  </main>
<style>
    .container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 30px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  padding: 20px;
}

.card-title {
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 10px;
}

</style>  