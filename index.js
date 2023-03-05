
var express = require("express");
var cool = require("cool-ascii-faces");
var port = 12345;

var app = express();

app.get("/cool", (req,res) => {
    res.send(cool());
    console.log("New request");
});

app.listen(port,() =>{
  console.log(`Server ready in port ${port}`);
});