
var express = require("express");
var cool = require("cool-ascii-faces");
var port = process.env.PORT || 12345;
var app = express();
var useMAS = require("./samples/MAS");
var useLMP = require("./samples/LMP");
var useCGM = require("./samples/CGM");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/cool", (req,res) => {
    res.send(cool());
    console.log("New request");
});

app.get("/samples/MAS", useMAS);
app.get("/samples/LMP", useLMP);
app.get("/samples/CGM", useCGM);


app.listen(port,() =>{
  console.log(`Servidor corriendo en el puerto: ${port}`);
});
