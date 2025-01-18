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