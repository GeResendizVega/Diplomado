// Listar las peliculas y su categoria
// Salida esperada:
/*
    🎭 Drama: El Padrino
    🔥 Acción: Avengers: Endgame
    🎨 Animación: Buscando a Nemo
    🎭 Drama: Pulp Fiction
    🔥 Acción: Gladiador
    🎨 Animación: Toy Story
*/

const peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Buscando a Nemo", genero: "Animación" },
    { titulo: "Pulp Fiction", genero: "Drama" },
    { titulo: "Gladiador", genero: "Acción" },
    { titulo: "Toy Story", genero: "Animación" },
  ];







// Ejercicio 2: Filtrar la pelicula por bussqueda 

let busqueda = "Toy Story";
for (let i = 1; i < peliculas.length ; i++){
//    console.log(peliculas[i].titulo +" -> " + busqueda );
    if (busqueda === peliculas[i].titulo ){
        console.log(`La pelicula ${busqueda} su genero es ${peliculas[i].genero}`);
    }
}




// Ejercicio 3: Cuantas peliculas hay por genero.

let generoAccion;
let generoDrama;
let generoAnimacion;

for (let i = 1; i < peliculas.length ; i++){
    //    console.log(peliculas[i].titulo +" -> " + busqueda );
        if (peliculas[i].genero  ){
            //console.log(`La pelicula ${busqueda} su genero es ${peliculas[i].genero}`);
        }
    }







    /*************************************************************************************/
    /***************ejercicios de la plataforma */

    /**

    EJERCICIO  #1: Imprimir números del 1 al 10
    Escribe un programa que imprima los números del 1 al 10.
    */


    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }