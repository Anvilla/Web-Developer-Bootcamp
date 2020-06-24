window.setTimeout(function() {
  var deberes = ["Comprar comida"];

  var input = prompt("Que quieres hacer?");

  while(input !== "Salir" && input !== "salir" && input !== "SALIR"){
    if(input === "Listar" || input === "listar" || input === "LISTAR") {
      console.log("******************");
      deberes.forEach(function(x, index){
         console.log(index + ": " + x);
       });
      console.log("******************");
    } else if (input === "Nuevo" || input === "nuevo" || input === "NUEVO") {
        var nDeber = prompt("Escribe nuevo Deber");
        deberes.push(nDeber);
      }
      else if (input === "quitar" || input === "Quitar" || input === "QUITAR") {
        var indice = prompt("Escribe el num del Deber que quieres Quitar");
        deberes.splice(indice, 1);
      }
    input = prompt("Que quieres hacer?");
  }
  console.log("ok, Saliste de la App")
}, 500);
