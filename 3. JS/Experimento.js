$("input").fadeOut(1);

$("ul").on("click", "li", function(){
  $(this).toggleClass("completada");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(600, function(){
    $(this).remove();
  })
  event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
  if(event.which === 13){
    var nuevaTarea = $(this).val();
    $(this).val("");
    $("ul").append("<li>" + nuevaTarea + " <span><i class='fa fa-trash icono'></i></span></li>")
  }
});

$(".fa-plus").click(function(){
  $("input[type='text'").fadeToggle();
})
