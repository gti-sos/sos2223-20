
import express from "express";
var port = process.env.PORT || 12345;
var app = express();

app.use(cors());
import {handler} from "./frontend/build/handler.js"

//var backend_MAS = require("./backend/index_MAS");

import {loadBackend_LMP} from "./backend/index_LMP.js";

//var backend_CGM = require("./backend/index_CGM");

app.listen(port,() =>{
    console.log(`Servidor corriendo en el puerto: ${port}`);
  });

app.use(handler);
//backend_MAS(app);
loadBackend_LMP(app);
//backend_CGM(app);