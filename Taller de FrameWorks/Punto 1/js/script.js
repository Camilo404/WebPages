/*JUAN CAMILO ACEVEDO NOREÑA - TECNOLOGIA EN DISEÑO Y DESARROLLO WEB*/
function suma(){
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let resultado = 0;

    if (isNaN(a) || isNaN(b)) {  
        alert("Es necesario introducir dos números válidos");
    } else {  
        resultado = a+b; 
    } 
    document.getElementById("result").innerHTML = "El resultado de la suma es= " + resultado;
}

function resta(){
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let resultado = 0;

    if (isNaN(a) || isNaN(b)) {  
        alert("Es necesario introducir dos números válidos");
    } else {  
        resultado = a-b; 
    } 
    document.getElementById("result").innerHTML = "El resultado de la resta es= " + resultado;
}

function multiplicacion() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let resultado = 0;

    if (isNaN(a) || isNaN(b)) {  
        alert("Es necesario introducir dos números válidos");
    } else {  
        resultado = a*b; 
    } 
    document.getElementById("result").innerHTML = "El resultado de la multiplicación es= " + resultado;
}

function division() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let resultado = 0;

    if (isNaN(a) || isNaN(b)) {  
        alert("Es necesario introducir dos números válidos");
    } else {  
        resultado = a/b; 
    } 
    document.getElementById("result").innerHTML = "El resultado de la división es= " + resultado;
}

function potencia() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let resultado = 0;

    if (isNaN(a) || isNaN(b)) {  
        alert("Es necesario introducir dos números válidos");
    } else {  
        resultado = Math.pow(a,b); 
    } 
    document.getElementById("result").innerHTML = "El resultado de la potencia es= " + resultado;
}
/*JUAN CAMILO ACEVEDO NOREÑA - TECNOLOGIA EN DISEÑO Y DESARROLLO WEB*/