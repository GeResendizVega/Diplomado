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

  iconDrama = "🎭";
  iconAccion = "🔥";
  iconanimacion= "🎨";
  console.log(" .................EJERCICIO 1.................\n ")
  for (let i = 1; i < peliculas.length ; i++){
    if (peliculas[i].genero == "Drama"){
        console.log(iconDrama+" "+ peliculas[i].genero+" : "+peliculas[i].titulo);

    }else  if (peliculas[i].genero == "Acción"){
        console.log(iconAccion+" "+ peliculas[i].genero+" : "+peliculas[i].titulo);

    }else  if (peliculas[i].genero == "Animación"){
        console.log(iconanimacion+" "+ peliculas[i].genero+" : "+peliculas[i].titulo);

    }

  }






// Ejercicio 2: Filtrar la pelicula por bussqueda 
console.log("\n .................EJERCICIO 2.................\n ")
let busqueda = "Toy Story";
for (let i = 1; i < peliculas.length ; i++){
//    console.log(peliculas[i].titulo +" -> " + busqueda );
    if (busqueda === peliculas[i].titulo ){
        console.log(`La pelicula ${busqueda} su genero es ${peliculas[i].genero}`);
    }
}




// Ejercicio 3: Cuantas peliculas hay por genero.
let generoDrama = 0;
let generoAnimacion = 0;
let generoAccion = 0;
let singenero = 0 ;
console.log("\n .................EJERCICIO 3.................\n ")
for (let i = 0; i < peliculas.length ; i++){
        if (peliculas[i].genero  == "Drama"){
            generoDrama =  generoDrama + 1;
        }else if (peliculas[i].genero  == "Animación"){ 
            generoAnimacion = generoAnimacion + 1;
        }else if (peliculas[i].genero  == "Acción"){ 
            generoAccion = generoAccion + 1 ;
        }else{
            singenero = singenero +1;
        } 
    }

    console.log("Peliculas de Drama 🎭 son "+generoDrama
             +"\nPeliculas de Animación 🎨 son "+generoAnimacion
             +"\nPeliculas de Accion 🔥 son "+generoAccion
             +"\nPeliculas sin genero  son "+singenero
    );







