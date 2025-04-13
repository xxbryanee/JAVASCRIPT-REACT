//funciones - function Expression


// En JavaScript, las funciones pueden ser declaradas de varias maneras. Una de ellas es mediante una expresión de función (function expression).
// En este caso, la función se asigna a una variable y no tiene un nombre específico.

// Las funciones son bloques de código reutilizables que pueden ser invocados en cualquier parte del programa.
const sumar = function(numero1, numero2) { //funcion expresion
    console.log (numero1 + numero2); //funcion con retorno
}

sumar(1, 2); //3
sumar(3, 4); //7
/************************************************************************ */

// En este caso, la función se asigna a una variable y no tiene un nombre específico.
// Las funciones son bloques de código reutilizables que pueden ser invocados en cualquier parte del programa.
sumar (1, 2); //3
sumar (3, 4); //7
// En JavaScript, las funciones pueden ser declaradas de varias maneras. Una de ellas es mediante una expresión de función (function expression).
// En este caso, la función se asigna a una variable y no tiene un nombre específico.
// Las funciones son bloques de código reutilizables que pueden ser invocados en cualquier parte del programa.
function sumar(numero1 = 0, numero2 = 0) { //funcion declarada con parametros
    console.log (numero1 + numero2); //funcion con retorno
}   

