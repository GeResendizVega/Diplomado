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
let suma= 0;
let limite = 100;

for (let x = 1; x <= limite; x++){
    suma += x; // ->  suma = suma + x ;
    
    }
    console.log(`la suma de todos los numeros del 1 al ${limite} es ${suma}`);

