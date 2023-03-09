
var express = require("express");
var cool = require("cool-ascii-faces");
var port = process.env.PORT || 12345;
var app = express();
var bodyParser = require("body-parser");

var contacts = [
  { 
    name:"Nombre1",
    phone: 213214
  },
  {
    name: "Nombre 2",
    phone: 123124124
  }
];

const BASE_API_URL = "/api/v1";

app.use(bodyParser.json());

//res.json devuelve en json lo que le mandemos.
app.get(BASE_API_URL+"/contacts", (req,res) => {
  res.json(contacts);
  console.log("New Get request");
});

app.post(BASE_API_URL+"/contacts", (req,res) => {
  var newContact = req.body;
  console.log("New post to /contact");
  console.log(`newContact = <${JSON.stringify(newContact,null,2)}>`);
  contacts.push(newContact);
  res.sendStatus(201);
});

app.listen(port,() =>{
  console.log(`Servidor corriendo en el puerto: ${port}`);
});


