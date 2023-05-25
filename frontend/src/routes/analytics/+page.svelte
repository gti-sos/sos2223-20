<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { dev } from "$app/environment";
    let API_externaSOS = "/api/proxy-lmp/?url=https://sos2223-20.ew.r.appspot.com/api/v3/campings";
    let API_immovables = "/api/v3/immovables/";

    if (dev){
            API_immovables = "http://localhost:12345" + API_immovables;
            console.log(API_immovables);
            API_externaSOS = "http://localhost:12345" + API_externaSOS;
    }
    let datos = "";
    let result_1 = "";
    let resultStatus_1 = "";
    let result_2 = "";
    let resultStatus_2 = "";
    let p = "";
    let provincias = [];
    let uso = [];
    let num_campings = [];
    let categoria = [];
    let id = [];
    let resource = [];
    let inventory_num = [];
    let grupo = [];
    let modalidad = [];

    onMount(async () => {
        getData_immovables();
    });

    async function getData_compañerx() {
        const res = await fetch(API_externaSOS, {
            method: "GET",
        });
        try {
            const data = await res.json();
            result_1 = JSON.stringify(data, null, 2);
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                p = `${datos[i]["state"]} ${datos[i]["start_date"] } ${datos[i]["id"]}`;
                if (!provincias.includes(p)) {
                    provincias.push(p);
                }
                num_campings.push(parseInt(datos[i]["camping_places"]));
                categoria.push(parseInt(datos[i]["category"]));
                grupo.push(parseInt(datos[i]["group_id"]));
                modalidad.push(parseInt(datos[i]["modality"]));

            }
            loadJSCharting(
                provincias,
                id,
                resource,
                inventory_num,
                categoria,
                num_campings,
                uso
            );
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus_1 = status;
    }

    async function getData_immovables() {
        const res = await fetch(API_immovables, {
            method: "GET",
        });
        try {
            const data = await res.json();
            console.log(data)
            result_2 = JSON.stringify(data, null, 2);
            datos = data;
            for (let i = 0; i < datos.length; i++) {
                p = `${datos[i]["province"]} ${datos[i]["modified_date"]} ${datos[i]["id"]}  ${datos[i]["current_usage"]}`;
                provincias.push(p);
                resource.push(datos[i]["resource"]);
                inventory_num.push(datos[i]["inventory_num"]);
                uso.push(datos[i]["current_usage"].length);
            }
            getData_compañerx();
        } catch (error) {
            console.log(`Error parsing result: ${error}`);
        }
        const status = await res.status;
        resultStatus_2 = status;
    }

    async function loadJSCharting(provincias,id,resource,inventory_num,categoria,num_campings) {
        var chart = JSC.chart('chartPrimera', { 
            debug: true, 
            defaultSeries_type: 'column', 
            title_label_text: '', 
            yAxis: { label_text: ''}, 
            xAxis: {
                label_text: '', 
                categories: provincias
            }, 
            series: [   
                { 
                    name: 'Modalidad', 
                    points: modalidad
                },
                { 
                    name: 'Grupo', 
                    points: grupo
                },
                { 
                    name: 'Numero de Inventario', 
                    points: inventory_num
                },
                { 
                    name: 'Recurso', 
                    points: resource
                },
                { 
                    name: 'Categoria', 
                    points: categoria
                },
                { 
                    name: 'Numero de Campings', 
                    points: num_campings
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
        <h1 style="text-align:center; font-style: oblique;">Integración conjunta con Proxys</h1>
        <h2 style="text-align:center; font-style: oblique;">Gráfica inmuebles y campings</h2>
    <h2>Integración</h2>
    <div id="chartPrimera" style="height: 500px; margin: 0px auto; margin-top:40px">
    </div>
        <h4>Resultado compañerx</h4>
        {#if resultStatus_1 != ""}
            <p>Result:{resultStatus_1}</p>
            <pre>                
                {result_1}
            </pre>
        {/if}
        <h4>Resultados propios</h4>
        {#if resultStatus_2 != ""}
            <p>Result: {resultStatus_2}</p>
            <pre>
                {result_2}
            </pre>
        {/if}
    </div>
</main>