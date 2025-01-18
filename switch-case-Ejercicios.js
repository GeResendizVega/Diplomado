/*EJercicio 1: Dias de la Semana 
Escribe un programa que reciba un número del 1 al 7 y devuelva el dia de la semana correspondiente 
Ejemplo: Recibe1, debe imprimir "Lunes"
*/

console.log("\n----------Ejercicio #1 (Dias de la semana)---------- \n");

let diaSemana = 3;

switch(diaSemana) {
    case 1:
      console.log("Lunes")
      break;
    case 2:
        console.log("Martes")
      break;
      case 3:
        console.log("Miercoles")
      break;
      case 4:
        console.log("Jueves")
      break;
      case 5:
        console.log("Viernes")
      break;
      case 6:
        console.log("Ssabado")
      break;
      case 7:
        console.log("Domingo")
      break;
    default:
        console.log("No hay dia de la semana ")
  }

  console.log("\n ----------Fin Ejercicio #1 ---------- \n");


  console.log("----------Ejercicio #2 (Calificaciones )---------- \n");

let calificacion  = "A";

switch(calificacion) {
    case "A":
      console.log("Excelente")
      break;
    case "B":
        console.log("Bueno")
      break;
      case"C":
        console.log("Regular")
      break;
      case "D":
        console.log("Deficiente")
      break;
      case "F":
        console.log("Reprobado")
      break;
     
    default:
        console.log("Calificación Invalida");
  }

  console.log("\n ----------Fin Ejercicio #2 ---------- \n");

  console.log("----------Ejercicio #3 (Meses del año )---------- \n");

  let mes = 5;
switch (mes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    default:
        console.log("Número inválido");
}


  console.log("\n ----------Fin Ejercicio #3 ---------- \n");

  /*
  Ejercicio 4: Colores del semáforo
  Escribe un programa que reciba un color (rojo, amarillo, verde) 
  y devuelva la acción correspondiente.
  Si recibe otra entrada enviar mensaje "Color inválido"*/
  console.log("----------Ejercicio #4 (Colores del semáforo )---------- \n");

  let color = 'verde';
switch (color) {
    case 'rojo':
        console.log("El color "+color +" indica Alto");
        break;
    case 'amarillo':
        console.log("El color "+color +" indica Precaución");
        break;
    case 'verde':
        console.log("El color "+color +" indica Siga");
        break;
    default:
        console.log("Color inválido");
}
console.log("\n ----------Fin Ejercicio #4 ---------- \n");

/*
Ejercicio 5: Tipo de Triángulos
Escribe un programa que reciba el número de lados iguales de un triángulo (0, 2, 3) y devuelva el tipo de triángulo.
Si recibe otra entrada enviar mensaje "Número inválido"
 0 = Escaleno
 2 = isósceles
 3 = Equilatero
 default = Número Invalido

*/

console.log("----------Ejercicio #5 (Tipo de Triángulos )---------- \n");

let numLadosI = 2;
switch (numLadosI) {
    case 0:
        console.log("Escaleno");
        break;
    case 2:
        console.log("Isósceles");
        break;
    case 3:
        console.log("Equilátero");
        break;
    default:
        console.log("Número inválido");
}


console.log("\n ----------Fin Ejercicio #5 ---------- \n");


console.log("----------Ejercicio #6 (Estaciones del año )---------- \n");
  /*
Ejercicio 6: Estaciones del año
Escribe un programa que reciba un número del 1 al 4 y devuelva la estación del año correspondiente.
Si recibe otra entrada enviar mensaje "Número inválido"
*/

let estacion = 3;
switch (estacion) {
    case 1:
        console.log("Primavera");
        break;
    case 2:
        console.log("Verano");
        break;
    case 3:
        console.log("Otoño");
        break;
    case 4:
        console.log("Invierno");
        break;
    default:
        console.log("Número inválido");
}

console.log("\n ----------Fin Ejercicio #6 ---------- \n");

console.log("----------Ejercicio #7 (Tipos de vehículos )---------- \n");
/*
Ejercicio 7: Tipos de vehículos
Escribe un programa que reciba un tipo de vehículo (coche, moto, bicicleta) y devuelva el número de ruedas.
Si recibe otra entrada enviar mensaje "Vehículo inválido"

coche = 4 ruedas
moto = 2 ruedas 
bicicleta = 2 ruedas
default = Veiculo invalido
*/

let tipoVehiculo = 'moto';
switch (tipoVehiculo) {
    case 'coche':
        console.log("el "+tipoVehiculo+" tiene 4 ruedas");
        break;
    case 'moto':
        console.log("la "+tipoVehiculo+"tiene 2 ruedas");
        break;
    case 'bicicleta':
        console.log("la "+tipoVehiculo+"tiene2 ruedas");
        break;
    default:
        console.log("Vehículo inválido");
}

console.log("\n ----------Fin Ejercicio #7 ---------- \n");