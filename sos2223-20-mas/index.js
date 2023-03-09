
var express = require("express");
var cool = require("cool-ascii-faces");
var port = process.env.PORT || 12345;
var app = express();

var contacts = [
  { name:"Nombre1",
    phone: "Number phone"
  },
  {
    name: "Nombre 2",
    phone: "phone2"
  }
];

const BASE_API_URL = "/api/v1";

//res.json devuelve en json lo que le mandemos.
app.get(BASE_API_URL+"/contacts", (req,res) => {
  res.json(contacts);
  console.log("New request");
});

app.listen(port,() =>{
  console.log(`Servidor corriendo en el puerto: ${port}`);
});

