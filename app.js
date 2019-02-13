// Importando express
const express = require('express');

// Importando os
const os = require('os');

// Insa¿tanciando express
var app = express();

// Instanciand archivos estaticos
app.use(express.static('public'))

// Especificando el motor de renderizacion de plantillas
app.set('view engine', 'pug')

// Estableciendo la url de la vista principal
app.get("/", function(req, res){
	res.render("home");
	console.log("Servidor iniciado en 8080")
});

app.get("/access", function(req, res){
	res.render("login");
});




// Especificando el puerto donde se despliega la aplicacion
app.listen(8080, '0.0.0.0');