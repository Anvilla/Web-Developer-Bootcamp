var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var amigos = ['Ricardo','Aida','Rogelio','Mariana','Gabriela','Mariano','Cesar']

app.get('/', function(req, res){
    res.render('Inicio');
})

app.post('/addamigo', function(req, res){
    var nuevoAmigo = req.body.nuevoamigo;
    amigos.push(nuevoAmigo);
    res.redirect('/Amigos');
})

app.get('/Amigos', function(req, res){    
    res.render('Amigos', {amigos: amigos});
})




app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log('El servidor esta activo');
});