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

        let Campings = [];
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
                Campings = data;
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
        let newactive_name= "Nombre";
        let newcounseling= "Consejería";
        let newcurrent_usage= "Uso Actual";
        let newid= 0;
        let newinventory_num= 0;
        let newmodified_date= "2022-10-21";
        let newmunicipality= "Municipio";
        let newnature= "Rústica/Urbana";
        let newprovince= "Provincia";
        let newresource= 0;

        const postCamping = async () => {
         const response = await fetch(API, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ active_name: newactive_name
                ,counseling: newcounseling
                ,current_usage: newcurrent_usage
                ,id: newid
                ,inventory_num: newinventory_num
                ,modified_date: newmodified_date
                ,municipality: newmodified_date
                ,nature: newnature
                ,province: newprovince
                ,resource: newresource})
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
    body: JSON.stringify({ active_name: newactive_name
                ,counseling: newcounseling
                ,current_usage: newcurrent_usage
                ,id: newid
                ,inventory_num: newinventory_num
                ,modified_date: newmodified_date
                ,municipality: newmodified_date
                ,nature: newnature
                ,province: newprovince
                ,resource: newresource})
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
        <input type="text" bind:value={newactive_name} />
      </label>
    
      <label>
        Consejo:
        <input type="text" bind:value={newcounseling} />
      </label>
      <label>
          Uso Actual:
          <input type="text" bind:value={newcurrent_usage} />
        </label>
        <label>
          ID:
          <input type="number" bind:value={newid} />
        </label>
        <label>
          Numero de inventario:
          <input type="number" bind:value={newinventory_num} />
        </label>
        <label>
          Fecha:
          <input type="text" bind:value={newmodified_date} />
        </label>
        <label>
          Municipio:
          <input type="text" bind:value={newmunicipality} />
        </label>
        <label>
          Naturaleza:
          <input type="text" bind:value={newnature} />
        </label>
        <label>
          Provincia:
          <input type="text" bind:value={newprovince} />
        </label>
        <label>
          Recurso:
          <input type="number" bind:value={newresource} />
        </label>
    
      <Button on:click={postCamping}>Crear</Button>
    </tr>
      <Table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Consejo</th>
                <th>Uso actual</th>
                <th>Numero de Inventario</th>
                <th>Provincia</th>
                <th>Naturaleza</th>
                <th>Municipio</th>
                <th>Recurso</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            
            {#each Campings as camping}
            <tr>
                
                <td>{camping.id}<input type="number" bind:value={newid}/></td>
                
                <td>{camping.active_name}<input type="text" bind:value={newactive_name}/></td>
                
                <td>{camping.counseling}<input type="text" bind:value={newcounseling}/></td>
                
                <td>{camping.current_usage}<input type="text" bind:value={newcurrent_usage}/></td>
                
                <td>{camping.inventory_num}<input type="number" bind:value={newinventory_num}/></td>
                
                <td>{camping.province}<input type="text" bind:value={newprovince} /></td>
                
                <td>{camping.nature}<input type="text" bind:value={newnature}/></td>
                
                <td>{camping.municipality}<input type="text" bind:value={newmunicipality}/></td>
                
                <td>{camping.resource}<input type="number" bind:value={newresource} /></td>
                
                <td>{camping.modified_date}<input type="text" bind:value={newmodified_date}/></td>
                
                <td><Button on:click={deleteCamping(camping.id)}>Borrar</Button>
                </td>
                <td><Button on:click={putCamping(camping.id)}>Editar</Button>
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