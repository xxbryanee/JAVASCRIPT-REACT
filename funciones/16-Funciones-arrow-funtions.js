// En JavaScript, las funciones pueden ser declaradas de varias maneras. Una de ellas es mediante una expresión de función (function expression).
// En este caso, la función se asigna a una variable y no tiene un nombre específico.
// Las funciones son bloques de código reutilizables que pueden ser invocados en cualquier parte del programa.
function sumar(numero1 = 0, numero2 = 0) { //funcion declarada con parametros
    console.log (numero1 + numero2); //funcion con retorno
}  

sumar(1, 2); //3
sumar(3, 4); //7
sumar(5, 6); //11
sumar(7, 8); //15

/*los arrow functions son una forma más concisa de escribir funciones en JavaScript.
Son especialmente útiles para funciones de una sola línea o para funciones que no 
requieren un cuerpo de función completo.*/
// En JavaScript, las funciones pueden ser declaradas de varias maneras.
//  Una de ellas es mediante una expresión de función (function expression).
// En este caso, la función se asigna a una variable y no tiene un nombre específico.

const sumar = (numero1 = 0, numero2 = 0) => console.log (numero1 + numero2); //funcion flecha

sumar(1, 2); //3
sumar(3, 4); //7
sumar(5, 6); //11

//**************************************arrow functtions argumentos opcionales
const saludarConNombreOpcional = function(nombre = 'Juan'){ //parametro por defecto
    console.log(`hola ${nombre}`)
  }
  
  const saludarConNombre2 = (nombre) => { //funcion flecha
    console.log(`hola ${nombre}`)
  }
  saludarConNombre2('Juan') //hola Juan