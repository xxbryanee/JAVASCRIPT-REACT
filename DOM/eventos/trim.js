/*
Ejercicio con trim en JavaScript

¿Para qué sirve trim?
El método trim() se utiliza para eliminar los espacios en blanco al inicio y al final de una cadena de texto.

Ejemplo:
*/

const textoConEspacios = "   Hola, mundo!   ";
console.log("Antes de trim:", `"${textoConEspacios}"`);

const textoSinEspacios = textoConEspacios.trim();
console.log("Después de trim:", `"${textoSinEspacios}"`);

// Salida:
// Antes de trim: "   Hola, mundo!   "
// Después de trim: "Hola, mundo!"