function init(){
    //varaibles
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var a = +n1;
    var b = +n2;
    
    var resultado = document.getElementById("division");
    {
        var html = "";
        html += "El resultado es: "+ Math.abs(gcd(a, b))+ "<br/>";
        resultado.innerHTML = html;
    }
}

function gcd3(){
    //varaibles
    var n31 = document.getElementById("n31").value;
    var n32 = document.getElementById("n32").value;
    var n33 = document.getElementById("n33").value;
    var a = +n31;
    var b = +n32;
    var c = +n33;
    
    var resultado = document.getElementById("res_mcd3");
    {
        var html = "";
        html += "El resultado es: "+ Math.abs(gcd(gcd(a, b), c))+ "<br/>";
        resultado.innerHTML = html;
    }
}

function gcd4(){
    //varaibles
    var n41 = document.getElementById("n41").value;
    var n42 = document.getElementById("n42").value;
    var n43 = document.getElementById("n43").value;
    var n44 = document.getElementById("n44").value;
    var a = +n41;
    var b = +n42;
    var c = +n43;
    var d = +n44;
    var resultado = document.getElementById("res_mcd4");
    {
        var html = "";
        html += "El resultado es: "+ Math.abs(gcd(gcd(gcd(a, b), c),d))+ "<br/>";
        resultado.innerHTML = html;
    }
}

function gcd(a, b) {
    // base cases
    if(a === 0) { return b;}
    if(b === 0) { return a;}
   
    // decrease and conqure - recursion
    return gcd(b, a % b);
}
