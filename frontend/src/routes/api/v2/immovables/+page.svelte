<script>
    // @ts-nocheck

        import { onMount } from "svelte";
        import { dev } from '$app/environment';
    import { each } from "svelte/internal";
    import {Table , Button} from "sveltestrap";

    onMount(async() => {
                // Load initial data from API or local storage 
                getImmovables();
                loadImmovables();
                

            });
            let API = '/api/v1/immovables';
        
        if(dev)
            API = 'http://localhost:12345'+API

        let immovables = [];
        let result = '';
        let resultStatus = '';
            //GET 
        async function getImmovables(){
            resultStatus = result = '';
            const res = await fetch(API, {
                method: 'GET'
            });
            try{
                const data = await res.json();
                result = JSON.stringify(data, null,2);
                immovables = data;
            }catch(error){
                console.log(`Error parsing result: ${error}`);
            }
            const status = await res.status;
            resultStatus = status;
        }
        //LOAD initial DATA
        async function loadImmovables(){
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

        const postImmovable = async () => {
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
                    getImmovables();
                }
        
            };
            //DELETE ALL
            async function deleteImmovables(){
            resultStatus = result = '';
            const res = await fetch(API, {
                method: 'DELETE'
            });
                immovables = [];
            
            const status = await res.status;
            resultStatus = status;
        }
        //DELETE IMMOVABLE
        async function deleteImmovable(immovableId){
            resultStatus = result = '';
            const res = await fetch(API+"/"+immovableId, {
                method: 'DELETE'
            });
            
            const status = await res.status;
            resultStatus = status;
            if(status==200){
                    getImmovables();
                }
        }
        //PUT
        async function putImmovable(immovableId) {
  const response = await fetch(`${API}/${immovableId}`, {
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
        
      
      <h1> Immovables </h1>
      <tr> <Button on:click={deleteImmovables}>Borrar Immovables</Button></tr>
      
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
    
      <Button on:click={postImmovable}>Crear</Button>
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
            
            {#each immovables as immovable}
            <tr>
                
                <td>{immovable.id}<input type="number" bind:value={newid}/></td>
                
                <td>{immovable.active_name}<input type="text" bind:value={newactive_name}/></td>
                
                <td>{immovable.counseling}<input type="text" bind:value={newcounseling}/></td>
                
                <td>{immovable.current_usage}<input type="text" bind:value={newcurrent_usage}/></td>
                
                <td>{immovable.inventory_num}<input type="number" bind:value={newinventory_num}/></td>
                
                <td>{immovable.province}<input type="text" bind:value={newprovince} /></td>
                
                <td>{immovable.nature}<input type="text" bind:value={newnature}/></td>
                
                <td>{immovable.municipality}<input type="text" bind:value={newmunicipality}/></td>
                
                <td>{immovable.resource}<input type="number" bind:value={newresource} /></td>
                
                <td>{immovable.modified_date}<input type="text" bind:value={newmodified_date}/></td>
                
                <td><Button on:click={deleteImmovable(immovable.id)}>Borrar</Button>
                </td>
                <td><Button on:click={putImmovable(immovable.id)}>Editar</Button>
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