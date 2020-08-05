var express = require("express");
var app = express();

app.get('/', function(peticion, respuesta){
    respuesta.send("Hola ahi!")
})

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log('El servidor a iniciado');
});




