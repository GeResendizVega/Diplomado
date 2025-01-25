
let expression = 3;

switch(expression) {
    case 1:
      console.log("segundo dia")
      break;
    case 2:
        console.log("es 2")
      break;
    default:
        console.log("es default")
  }

  let calificacion = "A";

  switch(calificacion) {
    case "A":
      console.log("Exelente")
      break;
 
    default:
        console.log("No Excelente")
  }







  let fruta = 'Naranja';
switch (fruta) {
      case 'Manzana':
      case 'Pera':
      case 'Platano':
        console.log(fruta +" es de color Amarillo o verde");
        break;
      case 'Fresa':
      case 'Mandarina':
      case 'Naranja':
        console.log(fruta +" es de color Rojo o Anaranjado");
        break;
    default:
        console.log("Fruta no encontrada");
}