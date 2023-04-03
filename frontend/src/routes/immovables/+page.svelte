<script>
    // @ts-nocheck

        import { onMount } from "svelte";
        let API ='http://localhost:12345/api/v2/immovables';

        let immovables = [];

        let result = '';
        let resultStatus = '';

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

       /* async function loadImmovables(){
            resultStatus = result = '';
            const res = await fetch(API+"/loadInitialData", {
                method: 'GET'
            });
            const status = await res.status;
            resultStatus = status;
        }*/

        onMount(async() => {
                // Load initial data from API or local storage 
                getImmovables();

            });
</script>
<main>
      
      <h1> Immovables </h1>

      <ul>
          {#each immovables as immovable}
              <li>{immovable.active_name}</li>
          {/each}
      </ul>
      
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