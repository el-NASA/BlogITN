function CalcularPrimos()
{
	var num2 = parseInt(document.getElementById('num1').value);
	var arreglonums =[];
	
	if(num2<0){
		alert("El NÚMERO ES NEGATIVO Y TIENE QUE SER POSITIVO.");
	}

	if(num2>=0 && num2<=2){
		alert("El NÚMERO TIENE QUE SER MAYOR A 2.");
	}

	for (var i = 1; i < num2; i++) {
        esCoprimo=new Boolean(true);
        var raiz =  Math.sqrt(num2);
        var crece = 2;

        if (num2%i==0) {
            esCoprimo=false;
        }

        while (crece < raiz && esCoprimo) {
            if (num2 % crece == 0 && i % crece == 0) {
                esCoprimo = false;
            }
            crece++;
        }

        if (esCoprimo) {
            arreglonums.push(i);
            document.getElementById("Resultado").innerHTML = "Los numeros coprimos con "+num2+" son: 1,"+arreglonums;
        } 

    }
}

