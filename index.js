
var express = require("express");
var cool = require("cool-ascii-faces");
var port = process.env.PORT || 12345;
var app = express();
var useMAS = require("./samples/MAS");
//var useLMP = require("./samples/LMP");
var useCGM = require("./samples/CGM");
const campingsFilePath = 'ddbb/camping-andalusia.json';
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
//app.get("/samples/LMP", useLMP);
app.get("/samples/CGM", useCGM);

//L06 MAS
let campings = [];

//GET initial data
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
  // Devolvemos los objetos aleatorios como respuesta
  res.json(campings);
});

//GET
app.get(BASE_API_URL+'/andalusian-campings', (req, res) => {
  res.json(campings);
  console.log("New Get request");
  res.sendStatus(200);
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
