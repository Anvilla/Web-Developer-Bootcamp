// Introduce una Lista de Numeros
// "y" son el Numero de objetos en la lista
// "z" es el Nombre de la Lista
function numDeObjetos(num, grp){
  for(i = grp.length; i < (num+1); i++){
  grp.push(i);
  }
}

// Imprime en la consola los objetos en la lista del ultimo al primero
function impRev(grp){
  for(i= grp.length - 1; i >= 0; i--){
    console.log(grp[i])
  }
}

// Dice si todos los objetos del grupo son iguales
function esUniforme(grp){
  for(i = 1; i < grp.length; i++){
    if (grp[0] === grp[i]) {
      console.log(true)
    } else {console.log(false)
      }
  }
 }

 // Dice si todos los objetos del grupo son iguales
 function esUnif(grp){
   for(i = 1; i < grp.length; i++){
     if (grp[i] !== grp[0]) {
       return false
     }
   }
   return true;
  }

//Suma todos los objetos dentro del grupo
 function sumGrp(grp){
   var result = 0;
   for(i=0; i < grp.length; i++){
     suma = grp[i]
     var result = result + suma
   }
   console.log(result)
   return result
 }

//Suma todos los objetos dentro del grupo
function sumArray(grp){
  var result = 0;
  grp.forEach(suma => { result += suma;
  });
  return result
}

// Da el objeto del grupo con mayor valor
function maxVGrp(grp){
  var maximo = grp[0];
  // grp.forEach(campeon =>
  for(i = 1; i < grp.length; i++){
    if(maximo < grp[i]){
      maximo = grp[i]
    }
  }
  return maximo
}

//Da un numero de 2 digitos al azar
function NumAlt(){
 var x = Math.random().toFixed(2) * 100;
 return x;
}

// Un equivalente a la funcion forEach
// Solo para Arrays, en Objets no funciona 
function forAll(grp){
  for(i=0; i < grp.length; i++){
  //Escribe aqui la funcion que quieras aplicar
}
}




var grpA = [1, 2, 3, 4]
var grpB = ["a", "b", "c"]
var grpC = [1, 1, 1, 1, 1]
var grpD = ["a", "a", "a", "a",]
var grpE = [10, 3, 10, 4, 12, 8, 8, 0, 7]
var grpF = ["arbol", "bote", "casa", "dado", "erizo", "faro", "gato", "hielo"]
var grpG = [-10, -3, -4, -15, -8]
var grpH = [10,"casa", 10, "casa", 10, "casa"]
var grpI = ["dado", 10, 4, "faro", "gato", -3, -4, -15, "arbol", 1, 2, 3, "dado", 120, -4,]
