var express = require("express");
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('Inicio');
});

app.get('/posts', function(req, res){
    var posts = [
        {title: "post 1", autor: "Susy"},
        {title: "Hanna la Adorable", autor: "Joe Flaco"},
        {title: "Cosas de Reposteria", autor: "Esteban Flores"}
    ]
    res.render('posts', {posts: posts});
});

app.get('/Acerca/:sujeto', function(req, res){
    var sujeto = req.params.sujeto;
    res.render('Acerca', {sujetoVar: sujeto});
})

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log('Servidor esta Activado');
});

