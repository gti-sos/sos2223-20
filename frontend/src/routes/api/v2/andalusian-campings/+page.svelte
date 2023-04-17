<script>
  // @ts-nocheck
  import { fade } from "svelte/transition";
      import { onMount } from "svelte";
      import { dev } from '$app/environment';
  import { each, prevent_default } from "svelte/internal";
  import {Table , Button} from "sveltestrap";
  import Footer from "../../../Footer.svelte";

  let showForm = false;

  function toggleForm(){
    showForm = !showForm;
  }

  let showDeleteForm = false;
  let showFechaForm = false;
  let showLimiteForm = false;

  function toggleFechaForm(){
    showFechaForm = !showFechaForm;
  }
  function toggleLimiteForm(){
    showLimiteForm = !showLimiteForm;
  }
  function toggleDeleteForm() {
    showDeleteForm = !showDeleteForm;
  }

  let deleteFormData = {
    id: "",
  };
  let FormFechaData = {
    since: "",
    until:"",
  };
  let FormLimiteData = {
    offset: "",
    limit:"",
  };

  onMount(async() => {
              // Load initial data from API or local storage 
              getCampings();
              

          });
          let API = '/api/v2/campings';
      
      if(dev)
          API = 'http://localhost:12345'+API

      let campings = [];
      let campingsFecha = [];
      let result = '';
      let resultStatus = '';

      async function handleDelete() {
        const id = parseInt(deleteFormData.id)
        const res = await fetch(API +"/"+ id, {
        method: "DELETE",
        });
        if (res.ok) {
  getCampings(); // Actualizar los datos en la tabla
  showMessage("Recurso eliminado correctamente", "success");
} else {
  showMessage(`Recurso no encontrado: ${deleteFormData.id}`, "error");
}
}

let editMode = false;
          //GET 
async function getCampings() {
resultStatus = result = '';
  let res = await fetch(API, {
  method: 'GET'});
  if((FormLimiteData.offset!="")&&(FormLimiteData.limit=="")){
     res = await fetch(API+"?offset="+FormLimiteData.offset, {
  method: 'GET'});
  }
  if((FormLimiteData.offset=="")&&(FormLimiteData.limit!="")){
     res = await fetch(API+"?limit="+FormLimiteData.limit, {
  method: 'GET'});
  }
  if((FormLimiteData.offset!="")&&(FormLimiteData.limit!="")){
     res = await fetch(API+"?limit="+FormLimiteData.limit+"&offset="+FormLimiteData.offset, {
  method: 'GET'});
  }
try {
  const data = await res.json();
  result = JSON.stringify(data, null, 2);
  campings = data;
  if (res.ok) {
    const status = await res.status;
    resultStatus = status.toString();
    if (campings.length === 0) {
      resultStatus = 'empty';
    }
  } else {
    resultStatus = 'Error en la solicitud';
  }
} catch (error) {
  console.log(`Error parsing result:${error}`);
  resultStatus = 'Error en la solicitud';
}
}

async function getCampingsByDate() {
const since = FormFechaData.since;
const until = FormFechaData.until;
resultStatus = result = '';
const res = await fetch(API+`?from=${since}&to=${until}`, {
  method: 'GET'
});
try {
  const data = await res.json();
  result = JSON.stringify(data, null, 2);
  campingsFecha = data;
  if (res.ok) {
    const status = await res.status;
    resultStatus = status.toString();
    if (campingsFecha.length === 0) {
      resultStatus = 'empty';
    }
  } else {
    resultStatus = 'Error en la solicitud';
  }
} catch (error) {
  console.log(`Error parsing result:${error}`);
  resultStatus = 'Error en la solicitud';
}
}
      let formData ={
        name:"",
        registry_code: "",
        responsible: "",
        id: "",
        camping_places: "",
        start_date: "",
        city: "",
        category: "",
        state: "",
        group_id: ""
      };
      async function handleSubmit(){
        const id = parseInt(formData.id);
  const group_id = parseInt(formData.group_id);
  const camping_places = parseInt(formData.camping_places);
  // Validación básica antes de enviar el formulario
if (
  !formData.name ||
  formData.start_date === null ||
  id === null ||
  formData.state === null ||
  formData.registry_code === null ||
  formData.category === null ||
  formData.city === null ||
  formData.responsible === null ||
  !Number.isInteger(id) ||
  !Number.isInteger(group_id) ||!Number.isInteger(camping_places)

) {
  showMessage("Por favor, complete todos los campos con los tipos de datos correctos","error");
  return;
}
const response = await fetch(API, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});
if (response.ok) {
  // Actualizar los datos y ocultar el formulario
  getCampings();
  showMessage("Recurso creado correctamente", "success");
  showForm = false;
} else {
  showMessage("Error al crear el recurso. Ya existe.", "error");
}
      };
      async function handleUpdate(camping, index) {
  const confirmUpdate = confirm("Seguro que quieres editar este recurso?");
  if (confirmUpdate) {
      // Changes the edit mode to true
      editMode = true;
      // Create an object to store the new values
      let updatedCamping = {
          name: camping.name,
          registry_code: camping.registry_code,
          responsible: camping.responsible,
          id: camping.id,
          camping_places: camping.camping_places,
          start_date: camping.start_date,
          city: camping.city,
          category: camping.category,
          state: camping.state,
          group_id: camping.group_id,
      };
      // Update the values of the corresponding row
      updatedCamping = await updateCamping(updatedCamping, index);
      // If the update was successful, change the edit mode to false
      if (updatedCamping) {
          editMode = false;
      }
  }
}


async function updateCamping(camping, index) {
  const response = await fetch(API+ `/${camping.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(camping),
  });
  if (response.ok) {
    // Actualiza los datos en la tabla
    // @ts-ignore
    campings[index] = camping;
    return camping;
  } else {
    showMessage("Porfavor, rellena todos los campos","warning");
  }
}
async function saveRow(index) {
    // @ts-ignore
      const camping = campings[index];
      await handleUpdate(camping, index);
}

function showMessage(message, type = "success") {
const messages = document.getElementById("messages");
const messageElement = document.createElement("div");
messageElement.className = `message ${type}`;
messageElement.innerHTML = message;
messages.appendChild(messageElement);
console.log(`Mensaje: ${message}, Tipo: ${type}`);
// Hacer que el mensaje desaparezca después de 5 segundos (5000 milisegundos)
setTimeout(() => {
  messageElement.remove();
}, 5000);
}

async function updatedCamping(camping, index) {
  const response = await fetch(API+"/"+ `${camping.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(camping),
  });
  if (response.ok) {
    // Actualiza los datos en la tabla
    // @ts-ignore
    campings[index] = camping;
    return camping;
  } else {
    showMessage("Porfavor, rellena todos los campos","warning");
  }
}
let selectedRowIndex = null;
function editRow(index) {
// Desactivar la edición de la fila previamente seleccionada
if (selectedRowIndex !== null) {
  // @ts-ignore
  campings[selectedRowIndex].editing = false;
}
// Activar la edición de la nueva fila seleccionada
selectedRowIndex = index;
// @ts-ignore
campings[selectedRowIndex].editing = true;
}
async function loadInitialData() {
    const res = await fetch(API+"/loadInitialData", {
      method: 'GET'
    });
    if (res.ok) {
      getCampings(); // Actualizar los datos en la tabla
      showMessage("Datos cargados correctamente", "success");
    } else {
      showMessage("Error al cargar los datos iniciales", "error");
    }
  }
  async function deleteResources() {
    const res = await fetch(API, {
      method: 'DELETE'
    });
    if (res.ok) {
      
      getCampings(); // Actualizar los datos en la tabla
      showMessage("Recursos eliminados correctamente", "success");
    } else {
      showMessage("Error al eliminar los recursos", "error");
    }
  }

async  function prevPage() {
  FormLimiteData.offset = FormLimiteData.offset-10;
        if(FormLimiteData.offset-10<0){
        alert("Estás al comienzo de la lista.");
      }
      console.log(campings.length);
      getCampings();
}

async function nextPage() {
  FormLimiteData.offset = FormLimiteData.offset+10;
      if(!(FormLimiteData.offset+10<campings.length+10)){
        alert("Has llegado al final de la lista.");
      }
      console.log(campings.length);
  getCampings();
}


</script>
<main>
      

<h1 class="title">API Andalusian Campings - Miguel Ángel Salinas</h1>
<div id="messages" class="message"></div>

{#if !showForm}
{#if resultStatus === "200"}
  <table in:fade={{ duration: 300 }}>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Código de Registro</th>
        <th>Responsable</th>
        <th>ID</th>
        <th>Plazas de Camping</th>
        <th>Fecha</th>
        <th>Ciudad</th>
        <th>Categoria</th>
        <th>Provincia</th>
        <th>Id de Grupo</th>
        <th></th> <!-- Nueva columna para el botón de actualizar -->
      </tr>
    </thead>
    <tbody>
      {#each campings as camping, index}
<tr>
  {#if camping.editing} <!-- Si la fila está en modo edición -->
  
    <td><input type="text" bind:value={camping.name}  /></td>
    <td><input type="text" bind:value={camping.registry_code} /></td>
    <td><input type="text" bind:value={camping.responsible} /></td>
    <td><input type="number" bind:value={camping.id} disabled /></td>
    <td><input type="number" bind:value={camping.camping_places} /></td>
    <td><input type="text" bind:value={camping.start_date} /></td>
    <td><input type="text" bind:value={camping.city} /></td>
    <td><input type="text" bind:value={camping.category} /></td>
    <td><input type="text" bind:value={camping.state} /></td>
    <td><input type="number" bind:value={camping.group_id} /></td>

  {:else} <!-- Si la fila no está en modo edición -->
    <td>{camping.name}</td>
    <td>{camping.registry_code}</td>
    <td>{camping.responsible}</td>
    <td>{camping.id}</td>
    <td>{camping.camping_places}</td>
    <td>{camping.start_date}</td>
    <td>{camping.city}</td>
    <td>{camping.category}</td>
    <td>{camping.state}</td>
    <td>{camping.group_id}</td>

  {/if}
  <td>
    {#if !camping.editing}
      <button on:click={() => editRow(index)}>Actualizar</button>
    {:else}
      <button on:click={() => saveRow(index)}>Guardar</button>
    {/if}
  </td>
</tr>
{/each}
    </tbody>
  </table>
{:else if resultStatus === "404"}
  <p>Error: Data not found</p>
{:else}
  <p>Lista de recursos vacia</p>
{/if}
{/if}
<div class="button-container">
<!-- Agrega el botón "Crear recurso" -->
<button on:click={toggleForm}>Crear recurso</button>
<button on:click={loadInitialData}>Cargar recursos</button>
<!-- Botón "Borrar recursos" -->
<button on:click={deleteResources}>Borrar recursos</button>
<!-- Botón "Borrar un recurso" -->
<button on:click={toggleDeleteForm}>Borrar un recurso</button>
<!-- Botón "Busca un recurso" -->
<button on:click={toggleFechaForm}>Busca un recurso</button>
<!-- Botón de Siguiente y Anterior para paginación-->
<button on:click={prevPage}>Anterior</button>
<button on:click={nextPage}>Siguiente</button>


</div>
<!-- Formulario para añadir limit y offset -->
{#if showLimiteForm}
<form on:submit|preventDefault={getCampings}>
  <label for="limit">Limite</label>
  <input type="text" id="limit" bind:value={FormLimiteData.limit} />
  <label for="offset">Offset</label>
  <input type="text" id="offset" bind:value={FormLimiteData.offset} />
  <button type="submit">Limitar</button>
</form>
{/if}
<!-- Formulario para eliminar un recurso por id -->
{#if showDeleteForm}
<form on:submit|preventDefault={handleDelete}>
  <label for="delete_id">ID</label>
  <input type="number" id="delete_id" bind:value={deleteFormData.id} required />
  <button type="submit">Eliminar</button>
</form>
{/if}
<!-- Formulario para buscar por fechas -->
{#if showFechaForm}
<form on:submit|preventDefault={getCampingsByDate}>
  <label for="since">Desde:</label>
  <input type="text" id="since" bind:value={FormFechaData.since} required />
  <label for="until">Hasta:</label>
  <input type="text" id="until" bind:value={FormFechaData.until} required />
  <button type="submit">Buscar</button>
</form>
{/if}
{#if resultStatus === "200"}
  <table in:fade={{ duration: 300 }}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Id de Grupo</th>
        <th>Codigo de registro</th>
        <th>Categoria</th>
        <th>Provincia</th>
        <th>Ciudad</th>
        <th>Fecha</th>
        <th>Plazas de Camping</th>
        <th>Responsable</th>
        <th></th> <!-- Nueva columna para el botón de actualizar -->
      </tr>
    </thead>
    <tbody>
      {#each campingsFecha as camping, index}
<tr><!-- Si la fila no está en modo edición -->
    <td>{camping.name}</td>
    <td>{camping.registry_code}</td>
    <td>{camping.responsible}</td>
    <td>{camping.id}</td>
    <td>{camping.camping_places}</td>
    <td>{camping.start_date}</td>
    <td>{camping.city}</td>
    <td>{camping.category}</td>
    <td>{camping.state}</td>
    <td>{camping.group_id}</td>
</tr>
{/each}
    </tbody>
  </table>
  {/if}
<!-- Agrega el formulario para enviar datos -->
{#if showForm}
<div class="form-container"  in:fade={{ duration: 300 }}>
<form on:submit|preventDefault={handleSubmit}>
  <label for="id">ID</label>
  <input type="number" id="id" bind:value={formData.id} required />

  <label for="name">Nombre</label>
  <input type="text" id="name" bind:value={formData.name} required />

  <label for="group_id">Id de Grupo</label>
  <input type="number" id="group_id" bind:value={formData.group_id} required />

  <label for="registry_code">Codigo de Registro</label>
  <input type="text" id="registry_code" bind:value={formData.registry_code} required />

  <label for="category">Categoria</label>
  <input type="text" id="category" bind:value={formData.category} required />

  <label for="state">Provincia</label>
  <input type="text" id="state" bind:value={formData.state} required />

  <label for="city">Ciudad</label>
  <input type="text" id="city" bind:value={formData.city} required />

  <label for="start_date">Fecha</label>
  <input type="text" id="start_date" bind:value={formData.start_date} required />

  <label for="camping_places">Plazas de Camping</label>
  <input type="number" id="camping_places" bind:value={formData.camping_places} required />

  <label for="responsible">Responsable</label>
  <input type="text" id="responsible" bind:value={formData.responsible} required />

  <button type="submit">Enviar</button>
</form>
</div>
{/if}

</main>
      <style>
body {
font-family: Arial, sans-serif;
background-color: #f8f8f8;
}

h1.title {
text-align: center;
color: #444444;
font-size: 3rem;
margin: 1rem 0;
}

table {
width: 100%;
border-collapse: collapse;
margin: 2rem 0;
}

thead {
background-color: #444444;
color: #f8f8f8;
}

th,
td {
padding: 1rem;
text-align: left;
border: 1px solid #cccccc;
}

th {
font-weight: bold;
}

tr:nth-child(even) {
background-color: #f2f2f2;
}

tr:hover {
background-color: #dddddd;
}

.form-container {
border: 1px solid #cccccc;
border-radius: 5px;
padding: 2rem;
margin: 2rem 0;
background-color: #f8f8f8;
}

.form-container label {
display: block;
margin: 1rem 0;
font-weight: bold;
color: #00838a;
}

.form-container input[type="text"],
.form-container input[type="number"] {
width: 100%;
padding: 1rem;
border-radius: 5px;
border: 1px solid #cccccc;
margin-bottom: 1rem;
font-size: 1rem;
}

.form-container button[type="submit"] {
background-color: #00838a;
color: #f8f8f8;
padding: 1rem 2rem;
border: none;
border-radius: 5px;
font-size: 1rem;
cursor: pointer;
margin-top: 1rem;
}

.form-container button[type="submit"]:hover {
background-color: #00838a;
}

.button-container {
display: flex;
justify-content: space-between;
margin: 2rem 0;
}

.button-container button {
background-color: #00838a;
color: #f8f8f8;
padding: 1rem 2rem;
border: none;
border-radius: 5px;
font-size: 1rem;
cursor: pointer;
margin-right: 1rem;
}

.button-container button:hover {
background-color: #666666;
}

.message {
margin: 2rem 0;
padding: 1rem;
background-color: #f8f8f8;
border: 1px solid #cccccc;
border-radius: 5px;
font-size: 1rem;
color: #444444;
}

      </style>
