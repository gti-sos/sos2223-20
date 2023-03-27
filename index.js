
var express = require("express");
var port = process.env.PORT || 12345;
var app = express();
var bodyParser = require("body-parser");

var backend_MAS = require("./backend/index_MAS");

var backend_LMP = require("./backend/index_LMP");

var backend_CGM = require("./backend/index_CGM");

app.listen(port,() =>{
    console.log(`Servidor corriendo en el puerto: ${port}`);
  });
  
app.use(bodyParser.json());
app.use("/", express.static("./public"));
backend_MAS(app);
backend_LMP(app);
backend_CGM(app);