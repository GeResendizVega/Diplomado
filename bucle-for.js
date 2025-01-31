/*
Variable de control x
inializacion : x = 0
condicion : x < 10 - Ejecucion mientras la condicion sea verdadera 
actualizacion: x= x + 1
*/

//  x++ = (x = x + 1)


// imprime numeros del 1+4

/*for (let x=1; x<5; x=x+1){
console.log(x);
}*/


// Sumar los numeros que hay entre 1 y el limite dado 
/*let suma= 0;
let limite = 100;

for (let x = 1; x <= limite; x++){
    suma += x; // ->  suma = suma + x ;
    
    }*/
    //console.log(`la suma de todos los numeros del 1 al ${limite} es ${suma}`);



    // Arreglos 
    //lista de objetos o valores 

   /* const edades = [15,17,33,28,40,50,14,10,25];
    

    for (let i = 1; i < edades.length ; i++){
        console.log(edades[i]);
    if (edades[i] >= 18 ){
        console.log("Es mayor de edad ")
    }else{
        console.log("Es menor de edad ")
    }
}*/



const numeros = [-2,-3,-7,10,5,-8,0,10,-10,20,30,-40,50];
let resultado = 0;
    

for (let i = 1; i < numeros.length ; i++){
   // console.log(edades[i]);
   if (numeros[i] > 0){
   resultado = resultado + numeros[i];
   }
}
console.log('el resultado es '+ resultado);



/*
Ejercicio:
Dado un arreglo de números, calcular la suma de todos los números positivos. números = [-2,-3,-7, 10, 5, -8, 0, 10, -10, 20, 30, -40, 50]
 
🎭
🔥
🎨
❓
 */
//listar las peliculas  y su categoria 

//console.log(peliculas.length);
//console.log(`${peliculas[0].titulo} - ${peliculas[0].genero}`);



const peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Avengers: Endgame", genero: "Acción" },
    { titulo: "Buscando a Nemo", genero: "Animación" },
    { titulo: "Pulp Fiction", genero: "Drama" },
    { titulo: "Gladiador", genero: "Acción" },
    { titulo: "Toy Story", genero: "Animación" },
  ];
 
console.log(peliculas.length);
console.log(`🎨 Animación: ${peliculas[5].titulo} - ${peliculas[5].genero}`);
 
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

// Ejercicio 2: Filtrar la pelicula por bussqueda 

// Ejercicio 3: Cuantas peliculas hay por genero.

for (let i = 1; i < peliculas.length ; i++){

}


 
 

