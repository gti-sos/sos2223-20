
var express = require("express");
var cool = require("cool-ascii-faces");
var port = process.env.PORT || 12345;
var app = express();
var useMAS = require("./samples/MAS");
var useLMP = require("./samples/LMP");
var useCGM = require("./samples/CGM");
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
app.get("/samples/LMP", useLMP);
app.get("/samples/CGM", useCGM);

//L06 MAS

app.get('/api/v1/campings/loadInitialData', (req, res) => {
  let campings = [];

  // Leer el fichero campings_andalusia.json si el array campings está vacío
  if (campings.length === 0) {
    fs.readFile('campings_andalusia.json', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al cargar los datos iniciales');
      } else {
        // Parsear los datos del fichero JSON y añadirlos al array campings
        campings = JSON.parse(data);
        res.status(200).json({ message: 'Datos cargados con éxito', data: campings });
      }
    });
  } else {
    res.status(200).json({ message: 'No se han cargado nuevos datos', data: campings });
  }
});



app.listen(port,() =>{
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
