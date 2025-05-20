/*
    Ejercicio: Convertir un número a cadena usando toString()

    Instrucciones:
    1. Declara una variable llamada numero y asígnale el valor 12345.
    2. Usa el método toString() para convertir el número a una cadena.
    3. Muestra en consola el tipo de dato antes y después de la conversión.
*/

const numero = 12345;

console.log("Antes de convertir:", typeof numero); // number

const numeroComoCadena = numero.toString();

console.log("Después de convertir:", typeof numeroComoCadena); // string
console.log("Valor convertido:", numeroComoCadena); // "12345"