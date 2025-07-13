/* Un callback es una función que se pasa como argumento a otra función y que se ejecuta 
después de que se completa cierta tarea. En JavaScript, los callbacks son comunes en 
funciones asincrónicas, como las que manejan eventos o llamadas a API.

Aquí tienes un ejemplo simple de cómo se puede usar un callback:*/

function operateOnNumber(num, callback) {
  const result = num * 3; // Multiplicamos el número por 2
  callback(result); // Llamamos al callback pasando el resultado
}

/* 2.- Creamos un callback que muestra el resultado.*/

function showResult(result) {
  console.log('El resultado es: '  +  result);
}

 /*3.- Llamamos a la función operateOnNumber, pasando un número y el callback. */

 operateOnNumber(5, showResult); // Esto imprimirá: "El resultado es: 10"

 /*En este caso, showResult es el callback que se ejecuta después de que
se calcula el resultado en operateOnNumber. Este patrón es muy útil para manejar 
 la lógica que se debe ejecutar una vez que una operación asíncrona o un cálculo ha terminado.*/