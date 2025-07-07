/*Claro. Este código utiliza el método find de los arrays en JavaScript para buscar el primer elemento que cumpla una condición.

numbers es un array de números.
numbers.find(num => num > 10) busca el primer número mayor que 10.
La función flecha num => num > 10 es la condición: retorna true si el número es mayor que 10.
find devuelve el primer elemento que cumple la condición, en este caso 12.
console.log(found) imprime 12 en la consola.
Puntos clave:

find solo devuelve el primer elemento que cumple la condición, no todos.
Si ningún elemento cumple la condición, devuelve undefined.
¿Te gustaría ver cómo encontrar todos los elementos que cumplen la condición? */

const numbers = [5, 12, 8, 130, 44];

const found = numbers.find(num => num > 10);

console.log(found); // 12

// Buscar el primer número par en el array
const firstEven = numbers.find(num => num % 2 === 0);

console.log(firstEven); // 12