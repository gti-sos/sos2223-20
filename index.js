
var express = require("express");
var port = process.env.PORT || 12345;
var app = express();
var bodyParser = require("body-parser");
var backend = require("./backend");

app.use(bodyParser.json());
app.use("/", express.static("./public"));
backend(app);