
//  
//  El método reduce en JavaScript se utiliza para iterar sobre un array y reducirlo a un único valor. 
// Este método toma una función de callback y un valor inicial como argumentos. Es especialmente útil 
// para realizar operaciones acumulativas, como sumar números, concatenar cadenas o construir objetos.
//  
//  Desglose del código:
//  Aquí tienes un array de números.
//  const numeros = [1, 2, 3, 4, 5];
//  Callback de reduce:
//  
//  (acumulador, numeroActual) => acumulador + numeroActual: Esta es la función que 
// se ejecuta en cada iteración.
//  acumulador: Es el valor acumulado hasta el momento.
//  numeroActual: Es el elemento actual del array que se está procesando.
//  En cada iteración, se suma el numeroActual al acumulador.
//  Valor inicial:
//  
//  El segundo argumento de reduce es 0. Este es el valor inicial del acumulador.
//  Proceso:

//  Iteración 1: acumulador = 0, numeroActual = 1 → acumulador = 0 + 1 = 1
//  Iteración 2: acumulador = 1, numeroActual = 2 → acumulador = 1 + 2 = 3
//  Iteración 3: acumulador = 3, numeroActual = 3 → acumulador = 3 + 3 = 6
//  Iteración 4: acumulador = 6, numeroActual = 4 → acumulador = 6 + 4 = 10
//  Iteración 5: acumulador = 10, numeroActual = 5 → acumulador = 10 + 5 = 15
//  El resultado final es 15, que se asigna a la variable suma.
//  
//  Esto imprime: La suma de los números es: 15.
//  
//  Resumen:
//  reduce toma un array y lo "reduce" a un único valor aplicando una función acumulativa. En este caso, suma todos los números del array. Es una herramienta poderosa para trabajar con datos en arrays.


// Array de números
const numeros = [1, 2, 3, 4, 5];

// Usando reduce para calcular la suma
const suma = numeros.reduce((acumulador, numeroActual) => {
    return acumulador + numeroActual;
}, 0);

console.log(`La suma de los números es: ${suma}`);

// Resultado: La suma de los números es: 15

// El resultado final es 15, que se asigna a la variable suma.
// Esto imprime: La suma de los números es: 15


//   Otro ejemplo: Encontrar el producto de todos los números en el array
//   Usando reduce para calcular el producto
//   El método reduce en JavaScript se utiliza para iterar sobre un array y reducirlo a un único valor.
//   Este método toma una función de callback y un valor inicial como argumentos. Es especialmente útil
//   para realizar operaciones acumulativas, como sumar números, concatenar cadenas o construir objetos.
//   Desglose del código:
//   Aquí tienes un array de números.
//   const numeros = [1, 2, 3, 4, 5];
//   Callback de reduce:
//   (acumulador, numeroActual) => acumulador * numeroActual: 
//   Esta es la función que se ejecuta en cada iteración.
//   acumulador: Es el valor acumulado hasta el momento.
//   numeroActual: Es el elemento actual del array que se está procesando.
//   En cada iteración, se multiplica el numeroActual por el acumulador.
//   Valor inicial:
//   El segundo argumento de reduce es 1. Este es el valor inicial del acumulador.
//   Proceso:
//   Iteración 1: acumulador = 1, numeroActual = 1 → acumulador = 1 * 1 = 1
//   Iteración 2: acumulador = 1, numeroActual = 2 → acumulador = 1 * 2 = 2
//   Iteración 3: acumulador = 2, numeroActual = 3 → acumulador = 2 * 3 = 6
//   Iteración 4: acumulador = 6, numeroActual = 4 → acumulador = 6 * 4 = 24
//   Iteración 5: acumulador = 24, numeroActual = 5 → acumulador = 24 * 5 = 120
//   El resultado final es 120, que se asigna a la variable producto.
//   Esto imprime: El producto de los números es: 120.
//   Array de números

const producto = numeros.reduce((acumulador, numeroActual) => {
    return acumulador * numeroActual;
}, 1);

console.log(`El producto de los números es: ${producto}`);

// Resultado: El producto de los números es: 120

////  otro ejemplo

//   Iteración 1: acc = 10,  item = 2 →  acc = 10 + 2 = 12
//   Iteración 2: acc = 12,  item = 4 →  acc = 12 + 4 = 16
//   Iteración 3: acc = 16,  item = 6 →  acc = 16 + 6 = 22
//   Iteración 4: acc = 22,  item = 8 →  acc = 22 + 8 = 30
//   Iteración 5: acc = 30,  item = 10 → acc = 30 + 10 = 40
//   El resultado final es 40, que se asigna a la variable suma.
//   Esto imprime: La suma de los números es: 40.
//   Resumen:
//   reduce toma un array y lo "reduce" a un único valor aplicando una función acumulativa.
//   En este caso, suma todos los números del array. Es una herramienta poderosa para
//  trabajar con datos en arrays.



const numbers = [2,4,6,8,10]; //array de numeros

const res = numbers.reduce((acc, item) => {
    return acc = acc + item; //retorna un acumulado del total
}, 10) //retorna un acumulado del total