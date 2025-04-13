let mensaje;
mensaje = 'Hola Mundo!';
console.log(mensaje);
/*********************************** */

let cliente ="Juan";
cliente = 30
console.log(cliente);  // Cambia el valor de cliente a un número
/*********************************** */

let precio
precio = 1000
console.log(precio);  // Cambia el valor de precio a un número
/*********************************** */
let producto = "Laptop";
producto = 1500
console.log(producto);  // Cambia el valor de producto a un número
/*********************************** */

let precios
console.log(precios);  // Imprime undefined porque precios no ha sido inicializado
/*********************************** */

const productoConst = "Laptop";
// productoConst = 1500; // Esto causará un error porque no se puede reasignar una constante

const persona = {
    nombre: "Juan",
    edad: 30,
};      // Esto es un objeto
persona.nombre = "Pedro"; // Esto es válido, ya que estamos modificando una propiedad del objeto

/************************************************ */
const numero = 20.20; // número decimal
const numeroEntero = 20; // número entero
const numeroGrande = 12345678901234567890n; // BigInt (número grande)
const booleano = true; // booleano (true o false)
const numero4 = "4"; // cadena de texto que representa un número


console.log(numero); // Imprime 20.2
console.log(numeroEntero); // Imprime 20
console.log(numeroGrande); // Imprime 12345678901234567890n
console.log(booleano); // Imprime true
console.log(numero4); // Imprime "4" como cadena de texto
console.log(typeof numero); // Imprime "number"
 /**************************************************** */
const descuento = null; // valor nulo
console.log(descuento); // Imprime null
console.log(typeof descuento); // Imprime "object" (esto es un comportamiento peculiar de JavaScript)

//strings o cadenas de texto
let alumno = 'Juan'; // cadena de texto
console.log(alumno); // Imprime "Juan"
console.log(alumno.length); // Imprime la longitud de la cadena (4)
console.log(alumno.toUpperCase()); // Convierte la cadena a mayúsculas (JUAN)
console.log(alumno.toLowerCase()); // Convierte la cadena a minúsculas (juan)
console.log(alumno.charAt(0)); // Imprime el primer carácter de la cadena (J)
console.log(alumno.indexOf('a')); // Imprime la posición de la primera aparición de 'a' (1)
console.log(alumno.substring(1, 3)); // Imprime una subcadena desde el índice 1 hasta el 3 (ua)
console.log(alumno.replace('Juan', 'Pedro')); // Reemplaza 'Juan' por 'Pedro' (Pedro)
console.log(alumno.split('')); // Convierte la cadena en un array de caracteres (['J', 'u', 'a', 'n'])
console.log(alumno.split(' ')); // Convierte la cadena en un array de palabras (['Juan'])
console.log(alumno.trim()); // Elimina espacios en blanco al principio y al final (Juan)
console.log(alumno.startsWith('J')); // Verifica si la cadena comienza con 'J' (true)
console.log(alumno.endsWith('n')); // Verifica si la cadena termina con 'n' (true)
console.log(alumno.includes('u')); // Verifica si la cadena contiene 'u' (true)
console.log(alumno.repeat(3)); // Repite la cadena 3 veces (JuanJuanJuan)
console.log(alumno.slice(1, 3)); // Imprime una subcadena desde el índice 1 hasta el 3 (ua)
console.log(alumno.concat(' Pérez')); // Concatena ' Pérez' a la cadena (Juan Pérez)
console.log(alumno.padStart(10, '0')); // Agrega ceros al principio hasta que la longitud sea 10 (00000Juan)
console.log(alumno.padEnd(10, '0')); // Agrega ceros al final hasta que la longitud sea 10 (Juan00000)
console.log(alumno.localeCompare('Juan')); // Compara la cadena con 'Juan' (0, son iguales)
console.log(alumno.localeCompare('Pedro')); // Compara la cadena con 'Pedro' (-1, 'Juan' es menor que 'Pedro')
console.log(alumno.localeCompare('Ana')); // Compara la cadena con 'Ana' (1, 'Juan' es mayor que 'Ana')
console.log(alumno.valueOf()); // Imprime el valor primitivo de la cadena (Juan)
console.log(alumno.charCodeAt(0)); // Imprime el código de carácter del primer carácter (J: 74)
console.log(alumno.codePointAt(0)); // Imprime el punto de código del primer carácter (J: 74)
console.log(alumno.normalize()); // Normaliza la cadena (Juan)
console.log(alumno.toLocaleUpperCase()); // Convierte la cadena a mayúsculas según la configuración regional (JUAN)
console.log(typeof alumno); // Imprime el tipo de dato (string)
console.log(alumno instanceof String); // Verifica si 'alumno' es una instancia de String (false)

let miMensaje = 'Hola Mundo!';
let MIMENSAJE = 'Hola Mundo!';
let mi_mensaje = 'Hola Mundo!';
console.log(miMensaje);
console.log(MIMENSAJE);
console.log(mi_mensaje);

const mensajes = 'Hola Mundo!';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
console.log(apiUrl); 

