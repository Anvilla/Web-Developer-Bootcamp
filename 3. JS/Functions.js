function esPar(x){
  if(x % 2 === 0){
    return true
  }
  else{
    return false
  }
}

function factorial(x){
  var r = x;
  for(var n = x-1; n >= 1; n--){
    r *= n;
  }
  return r;
}
