numeroDeCuadrados = 6;
var colores = paletaAlAzar(numeroDeCuadrados);
var cuadrados = document.querySelectorAll(".cuadrado");
var colorElegido = colorAlAzar();
var colorRequerido = document.querySelector("#color-requerido");
var mensajeMostrado = document.getElementById("mensaje-mostrado");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("restart");
var facil = document.querySelector("#facil");
var dificil = document.querySelector("#dificil");

colorRequerido.textContent = colorElegido;

facil.addEventListener("click", function(){
  facil.classList.add("selected");
  dificil.classList.remove("selected");
  numeroDeCuadrados = 3;
  colores = paletaAlAzar(numeroDeCuadrados);
  colorElegido = colorAlAzar();
  colorRequerido.textContent = colorElegido;
  for(i=0; i<cuadrados.length; i++){
    if(colores[i]){
      cuadrados[i].style.backgroundColor = colores[i]
    }else{
      cuadrados[i].style.display = "none"
    }
  }
});

dificil.addEventListener("click", function(){
  facil.classList.remove("selected")
  dificil.classList.add("selected")
  numeroDeCuadrados = 6;
  colores = paletaAlAzar(numeroDeCuadrados);
  colorElegido = colorAlAzar();
  colorRequerido.textContent = colorElegido;
  for(i=0; i<cuadrados.length; i++){
    cuadrados[i].style.backgroundColor = colores[i]
    cuadrados[i].style.display = "block"
  }
})

resetBtn.addEventListener("click", function(){
  colores = paletaAlAzar(numeroDeCuadrados);
  colorElegido = colorAlAzar();
  colorRequerido.textContent = colorElegido;
  resetearColores();
  resetBtn.textContent = "Colores Nuevos";
  h1.style.backgroundColor = "steelblue";
  mensajeMostrado.textContent = "";
})

resetearColores();

function resetearColores(){
  for(i = 0; i < cuadrados.length; i++){
    cuadrados[i].style.backgroundColor = colores[i];
    cuadrados[i].addEventListener("click", function(){
      var colorClickeado = this.style.backgroundColor;
      if(colorClickeado === colorElegido){
        mensajeMostrado.textContent = "Correcto!!!";
        resetBtn.textContent = "Jugar Otra Vez?"
        h1.style.backgroundColor = colorClickeado;
        cambiarColores(colorClickeado);
        }else{
          this.style.backgroundColor = "#232323";
          mensajeMostrado.textContent = "Intenta Otra Vez";
        }
    })
  }
}

function cambiarColores(color){
  for(i = 0; i < cuadrados.length; i++){
    cuadrados[i].style.backgroundColor = color;
  }
}

function colorAlAzar(){
var alAzar =  Math.floor(Math.random() * colores.length)
  return colores[alAzar];
}

function paletaAlAzar(num){
var alAzar = []
  for(i = 0; i < num; i++){
    alAzar.push(generarColor());
  }
  return alAzar;
}

function generarColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function juegoNuevo(){
  colorElegido = colorAlAzar(numeroDeCuadrados);
  colorRequerido.textContent = colorElegido;
  resetearColores();
  resetBtn.textContent = "Restart";
  h1.style.backgroundColor = "#505050";
}
