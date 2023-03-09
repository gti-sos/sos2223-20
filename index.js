
var express = require("express");
var cool = require("cool-ascii-faces");
var port = process.env.PORT || 12345;
var app = express();
var useMAS = require("./samples/MAS");
var useLMP = require("./samples/LMP");
var useCGM = require("./samples/CGM");
const campingsFilePath = 'ddbb/camping-andalusia.json';
const useImmovables = 'ddbb/immovables.json';
const useImmovable = 'ddbb/immovables/SILO-DE-LAS-CABEZAS-DE-SAN-JUAN.json';
const fs = require('fs');
const BASE_API_URL = "/api/v1";
const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get("/cool", (req,res) => {
    res.send(cool());
    console.log("New request");
});
//L05
app.get("/samples/MAS", useMAS);
app.get("/samples/CGM", useCGM);

//L06 MAS
let campings = [];

//GET
app.get(BASE_API_URL+'/andalusian-campings/loadInitialData', (req, res) => {
  // Comprobamos si el array campings está vacío
  if (campings.length === 0) {
    // Leemos el archivo de campings
    const campingsData = fs.readFileSync(campingsFilePath);
    // Convertimos el contenido del archivo a un objeto JavaScript
    const campingsArray = JSON.parse(campingsData);
    // Creamos 15 objetos aleatorios a partir del array de campings
    for (let i = 0; i < 15; i++) {
      const randomIndex = Math.floor(Math.random() * campingsArray.length);
      const randomCamping = campingsArray[randomIndex];
      campings.push(randomCamping);
    }
  }
  // Aplicamos el filtro a los campings según la URL
  var filteredCampings = campings.filter(camping => {
    let match = true;
    for (const key in req.query) {
      if (camping[key] !== req.query[key]) {
        match = false;
        break;
      }
    }
    return match;
  });
  // Devolvemos los objetos filtrados como respuesta
  res.json(filteredCampings);
});


//POST
app.post(BASE_API_URL+'/andalusian-campings/loadInitialData', (req, res) => {
  var newCamping = req.body;
  console.log("New post to /contact");
  // Validar si ya existe un camping con el mismo nombre
  var existingCamping = campings.find(camping => camping.name === newCamping.name);
  if (existingCamping) {
    res.sendStatus(409);
  } else {
    // Agregar el nuevo camping al array
    console.log(`newCamping = <${JSON.stringify(newCamping,null,2)}>`);
    campings.push(newCamping);
    res.sendStatus(201);
  }
});



app.listen(port,() =>{
  console.log(`Servidor corriendo en el puerto: ${port}`);
});

//API IMMOVABLES----------------------------------------------------------------------------------------------------
let immovables = [];
let immovablesData = fs.readFileSync(useImmovables);
// Convertimos el contenido del archivo a un objeto JavaScript
let immovablesArray = JSON.parse(immovablesData);
const arrayimmovablesData = fs.readFileSync(useImmovables);
     // Convertimos el contenido del archivo a un objeto JavaScript
const arrayimmovablesArray = JSON.parse(arrayimmovablesData);
// Leemos el archivo de immovables
app.get("/samples/LMP", (req, res) => {
   res.json(useLMP.media_de_provincia(useLMP.data_lmp, "Sevilla"));
   console.log("New request for LMP");
});


app.get(BASE_API_URL + "/immovables", (req, res) => {
   if(immovables.length===0){
      res.sendStatus(404);
   }else{
   
   res.json(immovables);
   }
   console.log("New GET for /immovables");
  });

app.get(BASE_API_URL+'/immovables/loadInitialData', (req, res) => {
   // Comprobamos si el array immovables está vacío
   if(immovables.length === 0){
     // Leemos el archivo de immovables
     const immovablesData = fs.readFileSync(useImmovables);
     // Convertimos el contenido del archivo a un objeto JavaScript
     const immovablesArray = JSON.parse(immovablesData);
  
      immovables.push(immovablesArray);
    
 }
 res.json(immovables);
});

 app.post(BASE_API_URL+'/immovables', (req, res) => {
   var newImmovable = req.body;
   console.log("New post to /immovables");
   // Validar si ya existe un immovable con el mismo nombre
   var existingImmovable = immovables.find(immovable => immovable.active_name === newImmovable.active_name);
   if (existingImmovable) {
     res.sendStatus(409);
   } else {
     // Agregar el nuevo immovable al array
     console.log(`newImmovable = <${JSON.stringify(newImmovable,null,2)}>`);
     immovables.push(newImmovable);
     res.sendStatus(201);
   }
 });
 

app.delete(BASE_API_URL+"/immovables", (req,res) => {
  
   console.log("New DELETE to /immovables");
   if(immovables.length===0){
      res.sendStatus(404);
   }else{
   res.sendStatus(200);
   immovables=[];
   }
});

app.put(BASE_API_URL+"/immovables", (req,res) => {
   res.sendStatus(405);
   console.log("Try of PUT for /immovables");
});

let immovableData = fs.readFileSync(useImmovable);
let immovableArray = JSON.parse(immovableData);
let immovable = immovableArray;
app.get(BASE_API_URL + "/immovables/SILO-DE-LAS-CABEZAS-DE-SAN-JUAN", (req, res) => {
   if(immovable.length===0){
      res.sendStatus(404);
   }else{
   res.json(immovable);
   }
   console.log("New GET for /immovables/SILO DE LAS CABEZAS DE SAN JUAN");
  });

 app.post(BASE_API_URL+"/immovables/SILO-DE-LAS-CABEZAS-DE-SAN-JUAN", (req, res) => {
   res.sendStatus(405);
   console.log("Try of POST for /immovables/SILO DE LAS CABEZAS DE SAN JUAN");
 });
 

app.delete(BASE_API_URL+"/immovables/SILO-DE-LAS-CABEZAS-DE-SAN-JUAN", (req,res) => {
  
   console.log("New DELETE to /immovables/SILO DE LAS CABEZAS DE SAN JUAN");
   if(immovable.length===0){
      res.sendStatus(404);
   }else{
   immovable=[];
   res.sendStatus(200);
   }
});

app.put(BASE_API_URL+"/immovables/SILO-DE-LAS-CABEZAS-DE-SAN-JUAN", (req,res) => {
   if(immovable.length===0){
      res.sendStatus(404);
   }else{
   var newImmovablePut = req.body;
   
      immovable = newImmovablePut;
   res.sendStatus(200);
   }
});