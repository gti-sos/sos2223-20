<script>
//@ts-nocheck
//import 'bootstrap/dist/css/bootstrap.min.css';
import { onMount } from 'svelte';

//let API = 'http://localhost:12345/api/v2/blood-donations';
let API = 'http://sos2223-20.appspot.com/api/v2/blood-donations';
let datos = [];
let result = '';
let dato_a_actualizar = -1;
let vista_anydir_activa = false;
let mostrarAlerta = false;
let codigoAlerta = 0;
let desp = 0;
let limite = 10;

// nuevo dato a añadir
let nd =  {
    date: "",
    place: "",
    dnt_people: "",
    dnt_blood: "",
    dnt_plasme: "",
    dnt_datef: "",
    dnt_new: "",
    extraction: "",
    idcenter: "",
    center: "",
    offset: "0",
    limit: "10"
    };

let nd2 =  {
    date: "",
    place: "",
    dnt_people: "",
    dnt_blood: "",
    dnt_plasme: "",
    dnt_datef: "",
    dnt_new: "",
    extraction: "",
    idcenter: "",
    center: "",
    offset: "0",
    limit: "10"
    };

// ################ FUNCIONES UXILIARES ################

onMount(async () => {
   muestra_datos();
});

function mostrarAlertaFn() {
    mostrarAlerta = true;
    setTimeout(() => {
        mostrarAlerta = false;
    }, 5000);
}


// ################ FUNCIONES DE CRUD ################
// ################ CARGAR Y MOSTRAR:
async function cargar_datos(){
    if(datos.length===0){
        const res = await fetch(API + "/loadInitialData", {method:"GET"});
        if(res.ok){     muestra_datos();    }
    }
}

async function muestra_datos(){
    dato_a_actualizar = -1;
    vista_anydir_activa = false;
    const res = await fetch(API + `?offset=${desp}&limit=${limite}`, {method:"GET"});
    try{

        const data = await res.json(); //convierte json a obj js
        result = JSON.stringify(data, null, 2); //separación en cadenas
        datos = data; //Añadimos los datos dentro de la variable global

    } catch(err){
        console.log(`Error mostrando los datos: ${err}`);
    }
}

// ################ CONSULTA:
async function consultaDatos(nd2){
    let extension_URL = "?";
    let claves = Object.keys(nd2);
    let valores = Object.values(nd2);

    for(let i=0; i<claves.length; i++){
        let clave = claves[i];
        let valor = valores[i];

        if(valor!==null && valor.length!==0){
            extension_URL += `${clave}=${valor}&`
        }
    }
    extension_URL = extension_URL.substring(0, extension_URL.length - 1);
    console.log("EXTENSION:" + extension_URL);
    const res = await fetch(API + extension_URL, {method:"GET"});

    if(res.ok){
        
        const data = await res.json();
        result = JSON.stringify(data, null, 2); 
        datos = data;

    }else{
        muestra_datos();
    }
}

// ################ BORRAR:
async function borrar_datos(){
    const res = await fetch(API + "/", {method:"DELETE"});
    if(res.ok){
        muestra_datos();
        codigoAlerta = 200;
        mostrarAlertaFn();  
    }
}

async function borrar_dato(dato_unico){
    const res = await fetch(API + "/" + dato_unico, {method:"DELETE"});
    if(res.ok){     
        muestra_datos();
        codigoAlerta = 200;
        mostrarAlertaFn();  
    }
}

// ################ ACTUALIZAR:
async function actualizar(valor_unico_dato){
    dato_a_actualizar = valor_unico_dato;
}

async function aceptarActualizacion(dato){
    if(dato.date==="" || dato.place==="" || dato.dnt_blood===null || dato.dnt_plasme===null || dato.dnt_datef===null 
        || dato.dnt_new===null || dato.extraction==="" || dato.idcenter===null || dato.center===""){
        codigoAlerta = 400;
        mostrarAlertaFn();
    } else {
        const res = await fetch(API + "/" + dato.dnt_people, {
        method:"PUT",

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            date: dato.date,
            place: dato.place,
            dnt_people: dato.dnt_people,
            dnt_blood: dato.dnt_blood,
            dnt_plasme: dato.dnt_plasme,
            dnt_datef: dato.dnt_datef,
            dnt_new: dato.dnt_new,
            extraction: dato.extraction,
            idcenter: dato.idcenter,
            center: dato.center
        })
    });

    if(res.ok){
        muestra_datos();
        codigoAlerta = 200;
        mostrarAlertaFn();
    }
    }
}

// ################ AÑADIR:
async function anyadir_vista(){
    vista_anydir_activa = true;
}

async function anyadir(){
    let du_repetido = false; //si el datos único está repetido
    for(let i=0; i<datos.length; i++){
        if(datos[i].dnt_people === nd.dnt_people){
            du_repetido = true;
        }
    }

    if(!du_repetido){
        const res = await fetch(API, {
        method:"POST",

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            date: nd.date,
            place: nd.place,
            dnt_people: parseInt(nd.dnt_people),
            dnt_blood: parseInt(nd.dnt_blood),
            dnt_plasme: parseInt(nd.dnt_plasme),
            dnt_datef: parseInt(nd.dnt_datef),
            dnt_new: parseInt(nd.dnt_new),
            extraction: nd.extraction,
            idcenter: parseInt(nd.idcenter),
            center: nd.center
        })
    });

    if(res.ok){    
        muestra_datos(); 
        codigoAlerta = 200;
        mostrarAlertaFn();    
    }
    } else {
        codigoAlerta = 409;
        mostrarAlertaFn();
    }
}

// ################ PAGINACIÓN:
async function pag_anterior(){
    console.log("ANTERIOR->" + desp + "-" + limite);
    desp = desp - limite;
    muestra_datos();
}

async function pag_siguiente(){
    console.log("SIGUIENTE->" + desp + "-" + limite);
    desp = desp + limite;
    muestra_datos();
}

</script>

<main>
<div class = container>
    <h2>API Blood donations - Carmen García Muñoz -</h2>
    <br>
    <div class="botones">
            {#if datos.length===0}
                <button type="button" class="boton btn btn-primary" on:click={cargar_datos}>Datos iniciales</button>
                <button type="button" class="boton btn btn-danger" disabled>Borrar todo</button>
            {:else}
                <button type="button" class="boton btn btn-primary" disabled>Datos iniciales</button>
                <button type="button" class="boton btn btn-danger" on:click={borrar_datos}>Borrar todo</button>
            {/if}
        <button type="button" class="boton btn btn-primary" on:click={anyadir_vista}>Añadir dato</button>
    </div>

    <hr>

    <div class="busqueda-filtrada">
        <input type="text" placeholder="Fecha" bind:value={nd2.date}>
        <input type="text" placeholder="Lugar" bind:value={nd2.place}>
        <input type="text" placeholder="dnt persona" bind:value={nd2.dnt_people}>
        <input type="text" placeholder="dnt sangre" bind:value={nd2.dnt_blood}>
        <input type="text" placeholder="dnt plasma" bind:value={nd2.dnt_plasme}>
        <input type="text" placeholder="dnt fecha" bind:value={nd2.dnt_datef}>
        <input type="text" placeholder="nuevo dnt" bind:value={nd2.dnt_new}>
        <input type="text" placeholder="extraccion" bind:value={nd2.extraction}>
        <input type="text" placeholder="id del centro" bind:value={nd2.idcenter}>
        <input type="text" placeholder="centro" bind:value={nd2.center}>
        <input type="text" placeholder="desplazamiento" bind:value={nd2.offset}>
        <input type="text" placeholder="limite" bind:value={nd2.limit}>
        <br>
        <br>
        <button type="button" class="boton btn btn-primary" on:click={consultaDatos(nd2)}>Buscar</button>        
    </div>

    <hr>

    {#if mostrarAlerta && codigoAlerta===400}
      <div class="alert alert-danger d-flex align-items-center show" role="alert" id = "divAlerta">
        <div>
          Ningún campo puede estar vacío
        </div>
      </div>
    {/if}

    {#if mostrarAlerta && codigoAlerta===409}
      <div class="alert alert-danger d-flex align-items-center show" role="alert" id = "divAlerta">
        <div>
          Hay otro dato con el mismo valor de dnt_people
        </div>
      </div>
    {/if}

    {#if mostrarAlerta && codigoAlerta===200}
      <div class="alert alert-success d-flex align-items-center show" role="alert" id = "divAlerta">
        <div>
            Operación realizada con éxito
        </div>
      </div>
    {/if}

    {#if vista_anydir_activa}
        <br>
        <div class="formulario_anydir">
            <form on:submit|preventDefault={anyadir}>
                <div class="form-group">
                  <label for="date">Fecha</label>
                  <input type="text" class="form-control" placeholder="Introduzca la fecha" bind:value={nd.date} required>

                  <label for="place">Lugar</label>
                  <input type="text" class="form-control" placeholder="Introduzca el lugar" bind:value={nd.place} required>
                </div>

                <div class="form-group">
                    <label for="dnt_people">dnt persona</label>
                    <input type="number" class="form-control" bind:value={nd.dnt_people} required>
  
                    <label for="dnt_blood">dnt sangre</label>
                    <input type="number" class="form-control" bind:value={nd.dnt_blood} required>

                    <label for="dnt_plasme">dnt plasma</label>
                    <input type="number" class="form-control" bind:value={nd.dnt_plasme} required>

                    <label for="dnt_datef">dnt fecha</label>
                    <input type="number" class="form-control" bind:value={nd.dnt_datef} required>

                    <label for="dnt_new">dnt nuevo</label>
                    <input type="number" class="form-control" bind:value={nd.dnt_new} required>
                </div>

                <div class="form-group">
                    <label for="extraction">Extracción</label>
                    <input type="text" class="form-control" placeholder="Introduzca extraction" bind:value={nd.extraction} required>

                    <label for="idcenter">id centro</label>
                    <input type="number" class="form-control" placeholder="Introduzca el id del centro" bind:value={nd.idcenter} required>
  
                    <label for="center">Centro</label>
                    <input type="text" class="form-control" placeholder="Introduzca el nombre del centro" bind:value={nd.center} required>
                </div>

                <div>
                    <hr>
                    <button type="submit" class="btn btn-primary">Añadir</button>
                    <button type="submit" class="btn btn-danger" on:click={muestra_datos}>Cancelar</button>
                </div>
              </form>
        </div>
    {/if}

    <br>

    <div class="table">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Lugar</th>
              <th>dnt persona</th>
              <th>dnt sangre</th>
              <th>dnt plasma</th>
              <th>dnt fecha</th>
              <th>dnt nuevo</th>
              <th>Extraccion</th>
              <th>ID-centro</th>
              <th>Centro</th>
              <th><i>MODIFICAR</i></th>
            </tr>
          </thead>
          <tbody>
            {#if datos.length===0}
                <td colspan="11"><p class="text-center">No hay datos que mostrar</p></td>

            {:else}
                {#each datos as dato}
                    {#if dato_a_actualizar >=0 && dato_a_actualizar === dato.dnt_people }
                        <tr>
                            <td><input class="w-50" type="text" bind:value={dato.date}/></td>
                            <td><input class="w-50" type="text" bind:value={dato.place}/></td>
                            <td>{dato.dnt_people}</td>
                            <td><input type="number" bind:value={dato.dnt_blood}/></td>
                            <td><input class="w-50" type="number" bind:value={dato.dnt_plasme}/></td>
                            <td><input class="w-50" type="number" bind:value={dato.dnt_datef}/></td>
                            <td><input class="w-50" type="number" bind:value={dato.dnt_new}/></td>
                            <td><input class="w-50" type="text" bind:value={dato.extraction}/></td>
                            <td><input class="w-50" type="number" bind:value={dato.idcenter}/></td>
                            <td><input class="w-50" type="text" bind:value={dato.center}/></td>
                            <td>
                            <button type="button" class="btn btn-primary" on:click={aceptarActualizacion(dato)}>Aceptar</button>
                            <button type="button" class="btn btn-dark" on:click={muestra_datos}>Cancelar</button>
                            </td>
                        </tr>
                    {:else}
                        <tr>
                            <td>{dato.date}</td>
                            <td>{dato.place}</td>
                            <td>{dato.dnt_people}</td>
                            <td>{dato.dnt_blood}</td>
                            <td>{dato.dnt_plasme}</td>
                            <td>{dato.dnt_datef}</td>
                            <td>{dato.dnt_new}</td>
                            <td>{dato.extraction}</td>
                            <td>{dato.idcenter}</td>
                            <td>{dato.center}</td>
                            <td>
                            <button type="button" class="btn btn-primary" on:click={actualizar(dato.dnt_people)}>Actualizar</button>
                            <button type="button" class="btn btn-danger" on:click={borrar_dato(dato.dnt_people)}>Borrar</button>
                            </td>
                        </tr>
                    {/if}
                {/each}
            {/if}
          </tbody>
        </table>

        <div class="paginacion">
            {#if desp === 0}
                <button type="button" class="btn btn-secundary" disabled>Anterior</button>
            {:else}
                <button type="button" class="btn btn-secundary" on:click={pag_anterior}>Anterior</button>
            {/if}

            {#if desp >= datos.length}
                <button type="button" class="btn btn-secundary" disabled>Siguiente</button>
            {:else}
                <button type="button" class="btn btn-secundary" on:click={pag_siguiente}>Siguiente</button>
            {/if}
        </div>
    </div>
</div>
</main>

<style>

    .formulario_anydir{
        width: 80%;
        margin: 0;
        padding: 20px;
    }


</style>