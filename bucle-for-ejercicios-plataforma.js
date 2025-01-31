    /*************************************************************************************/
    /***************ejercicios de la plataforma */

    /*
    EJERCICIO  #1: Imprimir números del 1 al 10
    Escribe un programa que imprima los números del 1 al 10.
    */


    for (let i = 1; i <= 10; i++) {
        console.log("Numero "+ i);
    }


    /*
        EJERCICIO 2: Sumar números del 1 al 100
        Escribe un programa que sume los números del 1 al 100 y muestre el resultado.
    */

    let suma = 0;
    for (let i = 1; i <= 100; i++) {
        suma += i;
    }
        console.log("la suma de numeros del 1-100 es "+suma);


    /* 
    EJERCICIO 3: Imprimir elementos de un array 
     Escribe un programa que imprima todos los elementos de un array.
      TIP: un array es = let array = [1, 2, 3, 4, 5];
    */

    let array = [1, 2, 3, 4, 5];
    for (let i = 0; i < array.length; i++) {
    console.log("arary en la posicion "+[i]+" es "+array[i]);
    }


    /* 
    EJERCICIO 4: Imprimir Numeros pares del 1 al 20
     Escribe un programa que imprima todos los números pares del 1 al 20.
    */
   

    for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log("Numero par"+i);
        }
    }

    /* 
    EJERCICIO 5: Imprimir  una cadena de texto al reves 
    Escribe un programa que imprima una cadena de texto al revés.
    */

    let texto = "soy cadena al reves";
    let textoalreves = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoalreves += texto[i];
    }
    console.log(textoalreves);

    /* 
    EJERCICIO 6: Encontrar el numero maximo de un array  
    Escribe un programa que encuentre el número máximo en un array.
    */

    let arrayNumeros = [3, 5, 7, 2, 8, 1];
    let numMaximo = arrayNumeros[0];
    for (let i = 1; i < arrayNumeros.length; i++) {
        if (arrayNumeros[i] > numMaximo) {
            numMaximo = arrayNumeros[i];
        }
    }
    console.log("Soy el numero maximo del array "+numMaximo);


    /* 
    EJERCICIO 7: Calcular el factorial 
    Escribe un programa que calcule el factorial de un número dado..
    */

    let numero = 5;
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log("El factorial del numero "+numero+" es "+factorial);

