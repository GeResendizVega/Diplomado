/*const pi = 3.1416;
let radio = 12;

let circunferencia = pi * (radio*radio);
console.log(circunferencia);*/
/*Ejercicio #1*/
let edad = 18;
if (edad >= 18) {
  console.log('Puedes Votar  ');
} else {
  console.log('No puedes votar');
}



/*Ejercicio #2*/
let numero = -1;
if (numero > 0) {
  console.log('Es número ' +numero+' es positivo');
} else if (numero < 0) {
  console.log('Es número ' +numero+' es negativo');
} else {
  console.log('El número es cero');
}


/*Ejercicio #3*/

let num1 = 11;
let num2 = 3;

if (num1 > num2) {
  console.log(num1 + ' es mayor que ' + num2);
} else if (num1 < num2) {
  console.log(num1 + ' es menor que ' + num2);
} else {
  console.log(num1 + ' y ' + num2 + ' son iguales');
}


/*Ejercicio #4*/

let numeroParInpar = 10;
let division = numeroParInpar % 2;

if (division === 0) {
  console.log('El número '+numeroParInpar+ ' es par');
} else {
  console.log('El número '+numeroParInpar+ ' es impar');
}


/*Ejercicio #5*/
let calificacion = 3;

if (calificacion >= 90 && calificacion <= 100) {
  console.log('Excelente');
} else if (calificacion >= 70 && calificacion <= 89) {
  console.log('Bueno');
} else if (calificacion >= 50 && calificacion <= 69) {
  console.log('Suficiente');
} else if (calificacion <= 49) {
  console.log('Insuficiente');
}

/*Ejercicio #6*/
let contrasena = 'admin1234';

if (contrasena === 'admin123') {
  console.log('Acceso concedido');
} else {
  console.log('Acceso denegado');
}

/*Ejercicio #7*/

let rangoNum = 12;

if (rangoNum >= 10 && rangoNum <= 20) {
  console.log("El numero "+rangoNum+" Está entre 10 y 20");
} else {
  console.log("El numero "+rangoNum+" No está entre 10 y 20");
}


/*Ejercicio #8*/

let nume1 = 8;
let nume2 = 7;
let nume3 = 10;

if (nume1 >= nume2 && nume1 >= nume3) {
  console.log("El mayor es:"+ nume1);
} else if (nume2 >= nume1 && nume2 >= nume3) {
  console.log("El mayor es: " +nume2);
} else {
  console.log("El mayor es: "+nume3);
}


/*Ejercicio #9*/

let texto = 'vacio';
let contCaracteres = texto.length;

 if (contCaracteres === 0) {
  console.log("Texto vacío");
} else {
  console.log("Si Hay texto");
}


/*Ejercicio #10*/
 let dia = 7;

if (dia === 1) {
  console.log("Dia "+dia+" es Lunes");
} else if (dia === 2) {
  console.log("Dia "+dia+" es Martes");
} else if (dia === 3) {
  console.log("Dia "+dia+" es Miércoles");
} else if (dia === 4) {
  console.log("Dia "+dia+" es Jueves");
} else if (dia === 5) {
  console.log("Dia "+dia+" es Viernes");
} else if (dia === 6) {
  console.log("Dia "+dia+" es Sábado");
} else if (dia === 7) {
  console.log("Dia "+dia+" es Domingo");
} else {
  console.log("No hay dia de la semana ");
}



/*Ejercicios de clase */

let edadAlumno = 3;

if (edadAlumno >= 6 && edadAlumno <= 12) {
  console.log('Estas en Primaria');
} else if (edadAlumno >= 13 && edadAlumno <= 15) {
  console.log('Estas en secundaria');
} else if (edadAlumno >= 16 && edadAlumno <= 18) {
  console.log('Estas en preparatoria');
} else if (edadAlumno >= 19 && edadAlumno <= 22) {
  console.log('Estas en universidad');
} else {
  console.log('Sin informacion');
}


let numeros = 8;

if (5 >= numeros) {
  console.log('5 no es mayor que ' + numeros);
} else if (8 >= numeros) {
  console.log('8 no es mayor que ' + numeros);
} else if (10 >= numeros) {
  console.log('10 no es mayor que ' + numeros);
} else {
  console.log('default');
}