function conversion(){
  //se obtiene el numero del campo
  var n = document.getElementById("n").value;
  n = +n;
  // se obtiene la opción
  var e = document.getElementById("base");
  var opc = e.options[e.selectedIndex].text;

  // se coge el campo donde se va a colocar la respuesta
  var res = document.getElementById("resultado_b");
  // se hacen los calculos
  if(opc == "binario") res.textContent = binario(n);
  else if (opc=="octal") res.textContent = octal(n);
  else res.textContent = hex(n);

}

function binario(dec){
  if(dec>=0){
    return dec.toString(2);
  }else{ return (~dec).toString(2);}
}


function octal(dec){
  if(dec>=0){
    return dec.toString(8);
  }else{ return (~dec).toString(8);}
}

function hex(dec){
  if(dec>=0){
    return dec.toString(16);
  }else{ return (~dec).toString(16);}
}
