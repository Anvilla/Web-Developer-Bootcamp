var css = document.querySelector("link");
var js = document.querySelector("script");
var boton = document.querySelector("button");
var body = document.querySelector(".Cuerpo");
var body2 = document.querySelector(".Cuerpo2");

boton.addEventListener("click", function(){
  body.classList.toggle("body2")
});
// ******************************************************

var m1 = document.querySelector("#mar-1");
var m2 = document.querySelector("#mar-2");
var j1 = document.querySelector("#j1");
var j2 = document.querySelector("#j2");
var rBtn = document.querySelector("#reset-btn");
var j1Score = 0
var j2Score = 0
var pts = document.getElementById("pts");
var valor = Number(pts.value);


j1.addEventListener("click", function(){
  if(m1.textContent <= 4 && m2.textContent <= 4){
    j1Score++;
    m1.textContent = j1Score;
  }
})

j2.addEventListener("click", function(){
  if(m1.textContent <= 4 && m2.textContent <= 4){
    j2Score++;
    m2.textContent = j2Score;
  }
})

//***********************************************************************
 var liss = document.querySelectorAll("ol li")

 for(i=0; i<liss.length; i++){
   liss[i].addEventListener("mouseover", function(){
     this.classList.add("encima")
   })

   liss[i].addEventListener("mouseout", function(){
     this.classList.remove("encima")
   })
