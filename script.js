/*Datos de salida */
//console.log()

/* Datos de entrada*/
//prompt("Ingrese su nombre: "); //Scanner para capturar datos

/* Variables Javascript: es un espacio en memoria en la cual puedo almacenar cualquier tipo de info para su posterior uso 
    Hay 3 tipos de variables: var, let, const
    Las variables no tienen tipo de dato y las tres almacenan cualquier tipo de dato
    */

/* Datos de proceso*/
//Operaciones aritmeticas y logicas (suma, resta, multiplicaciones, comparacio, asignacion, incremento, decremento)
/*var nombreCompleto = prompt("Ingrese su nombre: ");
console.log(nombreCompleto);

var numeroUno = parseInt(prompt('Ingrese un numero: '));
var numeroDos = parseInt(prompt('Ingrese un numero: '));
console.log(numeroUno + numeroDos); /*Concatenación (el mas concatena o suma) el resto de los simbolos sí hace operación matematica*/
/*Todo dato ingresado por teclado es por defecto un String*/
/* Parseo de datos (conversion de datos) es mejor parsear de forma individual
parseInt= convertir tipo de dato texto a un en entero*/

//Segunda forma de parseo
/*var numeroUno = Number(prompt('Ingrese un numero: '));
var numeroDos = Number(prompt('Ingrese un numero: '));
console.log(numeroUno + numeroDos); 

//Tercera forma de parseo
var numeroUno = (prompt('Ingrese un numero: '));
var numeroDos = (prompt('Ingrese un numero: '));
console.log(parseInt(numeroUno) + parseInt(numeroDos)); 

/*Diferencias entre tipos de variables */
//var: puedo definir dos variables con mismo nombre y no genera error(es recomendarble NO hacerlo) toma el valor de la ultima variable
//var: permiten sobreescritura de variable y contenido

//Let: Variables que no permiten sobre-escribir nada en la variable pero si de contenido

//Const no permiten la sobre escritura de la variable ni de contenido

//Las variables de tipo let y const son muy utilizadas hoy en día
/* */

/*Aritmeticos:
suma: valorUno + valorDos(+)
Resta: valorUno - valorDos(-)
Multiplicación: valorUno * valorDos(*)
Division: valorUno / valorDos(/)

Logicos: (Generan un resultado boolenao: true or false)
<    -> Menor que (excluyente)
>    -> Mayor que (excluyente)
<=   -> Menor igual (Incluyente)
>=   -> Menor igual (Incluyente)
==   -> Comparacion simple
===  -> Comparacion estricta
!=   -> Negacion simple
!==  -> Negacion estricta

console.log(3 < 5);*/

//Simple
/*let edad = 18
if(edad >= 18){
    console.log('Es mayor de edad')
} else {
    console.log('No es mayor de edad')
}*/

//Compuesto
let edad = 18
if(edad > 18){
    console.log('Es mayor de edad')
} else if(edad == 18){
    console.log('Apenas cumplio la mayoria de edad');
} else {
    console.log('No hay datos')
}
/* */