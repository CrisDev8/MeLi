/*
* Archivo de configuración
*/
var express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors");

var app = express();

// Configuraciones generales 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuración de rutas 

app.use("/", require("./routes"))

// Inicio dle servidor 

var server = app.listen(process.env.PORT || 8080, function () {
    console.log("escuchando");
})