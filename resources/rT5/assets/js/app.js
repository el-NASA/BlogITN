
var getData= function ()
{
  var numero1= document.getElementById("numb1");
  var numero2= document.getElementById('numb2');
  var modulo= document.getElementById('modulo');
  if(numero1.value% 1 == 0){
    console.log ("es un ENTERO");
  }else {
    console.log("no es un entero");
  }
  if (numb1==="")
  {
    document.getElementById("numb1").focus();
  }
  else
  {
    if (numb2==="")
    {
      document.getElementById("number2").focus();
    }else {
      if(numero1.value% 1 == 0 && numero2.value% 1 == 0 && modulo.value% 1 == 0)
      {
        if (modulo.value >0)
        {
          if (numero1.value%modulo.value==numero2.value%modulo.value){
            limpiarSalida();
            res.textContent=numero1.value+ " ≡ " + numero2.value +"(mod "+ modulo.value + ")"+" Es correcto ya que: ";
            resultado.textContent = "como "+ modulo.value +" * " + ((numero1.value-numero2.value)/modulo.value)+"="+ (numero1.value-numero2.value);
            res2.textContent = "entonces "+ modulo.value +" | "+  (numero1.value-numero2.value);
            res3.textContent = "como "+ numero1.value+" - "+numero2.value+" = "+ (numero1.value-numero2.value);
            res4.textContent = "por lo tanto " + modulo.value + " | "+ numero1.value+" - "+numero2.value;
            res5.textContent = "luego "+ numero1.value+ " ≡ " + numero2.value +"(mod "+ modulo.value + ")";
          }else{
            limpiarSalida();
            res.textContent="La conguencia "+ numero1.value+ " ≡ " + numero2.value +"(mod "+ modulo.value + ") es falsa ya que: " ;
            resultado.textContent = "El residuo de dividir "+numero1.value +" entre "+modulo.value+" es "+numero1.value%modulo.value;
            res2.textContent = "El residuo de dividir "+numero2.value +" entre "+modulo.value+" es "+numero2.value%modulo.value;
            res3.textContent = "Entonces, ya que los residuos de ambas divisiones son diferentes, la conguencia no se cumple."
          }
        }else {
          limpiarSalida();
          res.textContent="EL MÓDULO TIENE QUE SER UN ENTERO POSITIVO, INTENTA CON OTRO NÚMERO QUE SEA POSITIVO";
        }
      }else {
        limpiarSalida();
        res.textContent="INGRESA SOLO NÚMEROS ENTEROS POR FAVOR."
      }

      limpiarEntrada();
    }
  }
}

function limpiarSalida(){
  resultado.textContent="";
  res.textContent="";
  res2.textContent="";
  res3.textContent="";
  res4.textContent="";
  res5.textContent="";
}

function limpiarEntrada(){
  document.getElementById("numb1").value="";
  document.getElementById("numb2").value="";
  document.getElementById("modulo").value="";
  document.getElementById("numb1").focus();
}
