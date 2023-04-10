
import express from "express";
import cors from 'cors';

var port = process.env.PORT || 12345;
var app = express();
app.use(express.json());
app.use(cors());
import {handler} from "./frontend/build/handler.js"

//var backend_MAS = require("./backend/index_MAS");

import {loadBackend_LMP} from "./backend/index_LMP.js";
import {loadBackend_MAS} from "./backend/index_MAS.js";


//var backend_CGM = require("./backend/index_CGM");


loadBackend_MAS(app);
loadBackend_LMP(app);
//backend_CGM(app);

app.use(handler);


app.listen(port,() =>{
  console.log(`Servidor corriendo en el puerto: ${port}`);
});