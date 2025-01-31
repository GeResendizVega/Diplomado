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

    