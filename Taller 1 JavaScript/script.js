/*JUAN CAMILO ACEVEDO NOREÑA - TECNOLOGIA EN DISEÑO Y DESARROLLO WEB*/

//1
var dia = new Date();
var mes = new Date();
var año = new Date();
let hora = new Date();
let minutos = new Date();
document.write('Fecha actual: ' + dia.getDate() + '/' + mes.getMonth() + '/' + año.getFullYear() + '<br>');
document.write('Hora actual: ' + hora.getHours() + ':' + minutos.getMinutes() + '<br><br>');


//2
let fechaInicio = new Date().getTime();
let fechaFin = new Date('2021-12-24').getTime();
let restante = fechaFin - fechaInicio;
document.write('Días faltantes para el 24 de diciembre de 2021: ' + restante/(1000*60*60*24) + '<br><br>');


//3


//4
function tabla(){
    num = document.getElementById("numerotabla").value;
    num = parseInt(num);

    for (let i = 1; i <= 10; i++) {
        multiplicacion = num * i;
        document.write(num + "x" + i + "=" + multiplicacion + "<br>");
    }
}


//5
function primo(){
    let n1 = document.getElementById("nprimo").value;
    let i = 2;
    while (n1 % i !== 0 && i < n1 / 2 ) {
        i++;
    }
    if (n1 % i !== 0) {
        document.write("El número es primo");
    } else {
        document.write("El número no es primo");
    }
}


6//
function factorial(){
    let numfactorial = document.getElementById("nfactorial").value;
    let r = 1;
    for(let i = numfactorial; i>0; i--){
        r *= i;
    }

    document.write(numfactorial);
}

/*JUAN CAMILO ACEVEDO NOREÑA - TECNOLOGIA EN DISEÑO Y DESARROLLO WEB*/