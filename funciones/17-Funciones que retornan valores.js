// En JavaScript, las funciones pueden ser declaradas de varias maneras. Una de ellas es mediante una expresión de función (function expression).
// En este caso, la función se asigna a una variable y no tiene un nombre específico.
// Las funciones son bloques de código reutilizables que pueden ser invocados en cualquier parte del programa.
const sumar = function(numero1 = 0, numero2 = 0) { //funcion declarada con parametros
    return numero1 + numero2//funcion con retorno
}  

const resultado = sumar(1, 2); //3
console.log(resultado); //3

/****************otro ejejmplo de otra forma con la misma sintaxis *********** */

function sumar(numero1 = 0, numero2 = 0) { //funcion declarada con parametros
    return numero1 + numero2; //funcion con retorno
}
const resultado2 = sumar(1, 2); //3
console.log(resultado2); //3


/****************otro ejejmplo de otra forma con la misma sintaxis *********** */

//funcion declarada con parametros
const sumar2 = (numero3 = 0, numero4 = 0) => numero3 + numero4; //funcion con retorno
//funcion con retorno
const resultado3 = sumar2(1, 2); //3
console.log(resultado3); //3
// En este caso, la función se asigna a una variable y no tiene un nombre específico.