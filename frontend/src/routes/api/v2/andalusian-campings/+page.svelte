<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { dev } from '$app/environment';
  import { each } from "svelte/internal";
  import {Table , Button} from "sveltestrap";
  onMount(async() => {
              // Load initial data from API or local storage    
              getCampings();
              loadCampings();
          });
          let API = '/api/v1/andalusian-campings';
      if(dev)
          API = 'http://localhost:12345'+API

      let campings = [];
      let result = '';
      let resultStatus = '';
          //GET 
      async function getCampings(){
          resultStatus = result = '';
          const res = await fetch(API, {
              method: 'GET'
          });
          try{
              const data = await res.json();
              result = JSON.stringify(data, null,2);
              campings = data;
          }catch(error){
              console.log(`Error parsing result: ${error}`);
          }
          const status = await res.status;
          resultStatus = status;
      }
      //LOAD initial DATA
      async function loadCampings(){
          resultStatus = result = '';
          const res = await fetch(API+"/loadInitialData", {
              method: 'GET'
          });
          const status = await res.status;
          resultStatus = status;
      }
      //METHOD POST
      let newname= "Nombre";
      let newregistry_code= "Código de registro";
      let newgroup_id= 0;
      let newid= 0;
      let newcamping_places= 0;
      let newstart_date= "2022-10-21";
      let newcity= "Municipio";
      let newresponsible= "Persona Responsabñe";
      let newstate= "Provincia";
      let newcategory= 0;

      const postCamping = async () => {
       const res = await fetch(API, {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: newname
              ,registry_code: newregistry_code
              ,group_id: newgroup_id
              ,id: newid
              ,camping_places: newcamping_places
              ,start_date: newstart_date
              ,city: newcity
              ,responsible: newresponsible
              ,state: newstate
              ,category: newcategory})
              });

          const status = await res.status;
          resultStatus = status;
          if(status==201){
                  getCampings();
              }
          };
          //DELETE ALL
          async function deleteCampings(){
          resultStatus = result = '';
          const res = await fetch(API, {
              method: 'DELETE'
          });
              campings = [];
          
          const status = await res.status;
          resultStatus = status;
      }
      //DELETE Camping
      async function deleteCamping(campingId){
          resultStatus = result = '';
          const res = await fetch(API+"/"+campingId, {
              method: 'DELETE'
          });
          const status = await res.status;
          resultStatus = status;
          if(status==200){
                  getCampings();
              }
      }
      //PUT
      async function putCamping(campingId) {
const response = await fetch(`${API}/${campingId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: newname
              ,registry_code: newregistry_code
              ,group_id: newgroup_id
              ,id: newid
              ,camping_places: newcamping_places
              ,start_date: newstart_date
              ,city: newcity
              ,responsible: newresponsible
              ,state: newstate
              ,category: newcategory})
              });

const result = await response.json();
// Do something with the result
console.log(result);
}
      
</script>
<main>
    <h1> Campings </h1>
    <tr> <Button on:click={deleteCampings}>Borrar Campings</Button></tr>
    <tr>
    <label>
      Nombre:
      <input type="text" bind:value={newname} />
    </label>
    <label>
      Codigo de Registro:
      <input type="text" bind:value={newregistry_code} />
    </label>
    <label>
        Id de Grupo:
        <input type="number" bind:value={newgroup_id} />
      </label>
      <label>
        ID:
        <input type="number" bind:value={newid} />
      </label>
      <label>
        Plazas de Camping:
        <input type="number" bind:value={newcamping_places} />
      </label>
      <label>
        Fecha de Inicio:
        <input type="text" bind:value={newstart_date} />
      </label>
      <label>
        Ciudad:
        <input type="text" bind:value={newcity} />
      </label>
      <label>
        Persona Responsable:
        <input type="text" bind:value={newresponsible} />
      </label>
      <label>
        Provincia:
        <input type="text" bind:value={newstate} />
      </label>
      <label>
        Categoría:
        <input type="number" bind:value={newcategory} />
      </label>
  
    <Button on:click={postCamping}>Crear</Button>
  </tr>
  <Table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Codigo de Registro</th>
        <th>Id de Grupo</th>
        <th>ID</th>
        <th>Plazas de Camping</th>
        <th>Fecha de Inicio</th>
        <th>Ciudad</th>
        <th>Persona Responsable</th>
        <th>Provincia</th>
        <th>Categoría</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each campings as camping}
        <tr>
          <td>{camping.name}</td>
          <td>{camping.registry_code}</td>
          <td>{camping.group_id}</td>
          <td>{camping.id}</td>
          <td>{camping.camping_places}</td>
          <td>{camping.start_date}</td>
          <td>{camping.city}</td>
          <td>{camping.responsible}</td>
          <td>{camping.state}</td>
          <td>{camping.category}</td>
          <td>
            <Button on:click={() => deleteCamping(camping.id)}>Eliminar</Button>
            <Button on:click={() => putCamping(camping.id)}>Editar</Button>
          </td>
        </tr>
      {/each}
    </tbody>
  </Table>
  
    
    {#if resultStatus != ""}
        <p>
            Result:
        </p>
        <pre>
            {resultStatus}
            {result}
        </pre>
        {/if}
      </main>