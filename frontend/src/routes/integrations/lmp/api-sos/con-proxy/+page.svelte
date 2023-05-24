<script>
    //@ts-nocheck
    import { onMount } from "svelte";
    import { dev } from "$app/environment";
    let API_externaSOS = "/api/proxy-lmp/?url=https://sos2223-12.ew.r.appspot.com/api/v2/agroclimatic";
    let API_immovables =
        "/api/v3/immovables/";

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
    let minimas = [];
    let maximas = [];
    let id = [];
    let resource = [];
    let inventory_num = [];

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
                p = `${datos[i]["province"]} ${datos[i]["year"]}`;
                if (!provincias.includes(p)) {
                    provincias.push(p);
                }
                minimas.push(parseInt(datos[i]["minimun_temperature"]));
                maximas.push(parseInt(datos[i]["maximun_temperature"]));
            }
            loadJSCharting(
                provincias,
                id,
                resource,
                inventory_num,
                maximas,
                minimas,
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
                p = `${datos[i]["province"]} ${datos[i]["modified_date"]}`;
                provincias.push(p);
                id.push(datos[i]["id"]);
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

    async function loadJSCharting(provincias,id,resource,inventory_num,maximas,minimas,uso) {
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
                    name: 'Recurso', 
                    points: resource
                },
                { 
                    name: 'Temperatura maxima', 
                    points: maximas
                },
                { 
                    name: 'Temperatura minima', 
                    points: minimas
                }, 
            ] 
        });

        var chart = JSC.chart('chartSegunda', { 
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
                    name: 'id', 
                    points: id
                },
                { 
                    name: 'Recurso', 
                    points: resource
                }, 
            ] 
        });

        var chart = JSC.chart('chartTercera', { 
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
                    name: 'id', 
                    points: id
                },
                { 
                    name: 'Recurso', 
                    points: resource
                },  
                { 
                    name: 'Num Inventario', 
                    points: inventory_num
                },
                { 
                    name: 'Temperatura maxima', 
                    points: maximas
                },
                { 
                    name: 'Temperatura minima', 
                    points: minimas
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
        <h1 style="text-align:center; font-style: oblique;">Integración con compañero con Proxy</h1>
        <h2 style="text-align:center; font-style: oblique;">Gráfica inmuebles y temperaturas</h2></div>
    <h2>Primera Integración</h2>
    <div id="chartPrimera" style="height: 500px; margin: 0px auto; margin-top:40px">
    </div>
    <h2>Variables propias</h2>
    <div id="chartSegunda" style="height: 500px; margin: 0px auto; margin-top:40px">
    </div>
    <h2>Segunda Integración</h2>
    <div id="chartTercera" style="height: 500px; margin: 0px auto; margin-top:40px">
    </div>
    <div style="margin-left:40px;font-size:20px;">
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