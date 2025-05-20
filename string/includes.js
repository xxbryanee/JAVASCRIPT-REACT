const frase = "Me gusta programar en JavaScript";

// Usamos includes para verificar si la frase contiene la palabra "programar"
if (frase.includes("programar")) {
    console.log("La frase contiene la palabra 'programar'.");
} else {
    console.log("La frase NO contiene la palabra 'programar'.");
}
// Salida: La frase contiene la palabra 'programar'.



// Usamos includes para verificar si la frase contiene la palabra "Python"
if (frase.includes("Python")) {
    console.log("La frase contiene la palabra 'Python'.");
} else {
    console.log("La frase NO contiene la palabra 'Python'.");
}   
// Salida:    
// La frase NO contiene la palabra 'Python'.


//// El método includes() se utiliza para determinar si una cadena de texto contiene otra cadena de texto.
// Devuelve true si la cadena de texto se encuentra dentro de la cadena original, y false en caso contrario.
// Es sensible a mayúsculas y minúsculas, por lo que "programar" y "Programar" se consideran diferentes.
//
// Ejemplo de uso:
// const cadena = "Hola, mundo!";
// console.log(cadena.includes("mundo")); // true
// console.log(cadena.includes("Mundo")); // false
// console.log(cadena.includes("Hola")); // true
// console.log(cadena.includes("Hola", 5)); // false (comienza a buscar desde el índice 5)
// console.log(cadena.includes("")); // true (siempre devuelve true si la cadena está vacía)
//
// En resumen, includes() es útil para verificar la presencia de una subcadena dentro de otra cadena.
// Se puede usar en cadenas de texto y devuelve un valor booleano.
// También se puede especificar un índice desde el cual comenzar la búsqueda.
//
// Recuerda que includes() es sensible a mayúsculas y minúsculas, así que ten cuidado al usarlo.
// También puedes usar includes() en arreglos para verificar si un elemento está presente en el arreglo.
// En ese caso, devuelve true si el elemento se encuentra en el arreglo y false en caso contrario.
// Ejemplo de uso en arreglos:
// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros.includes(3)); // true
// console.log(numeros.includes(6)); // false
// console.log(numeros.includes(3, 2)); // false (comienza a buscar desde el índice 2)
// console.log(numeros.includes(3, -2)); // true (comienza a buscar desde el índice -2)
// console.log(numeros.includes(3, -5)); // false (comienza a buscar desde el índice -5)
// En resumen, includes() es una función versátil que se puede usar tanto en cadenas de texto como en arreglos.
// En cadenas de texto, verifica la presencia de una subcadena y devuelve un valor booleano.
// En arreglos, verifica la presencia de un elemento y también devuelve un valor booleano.
// Recuerda que includes() es sensible a mayúsculas y minúsculas en cadenas de texto.
// En arreglos, verifica la presencia de un elemento y también devuelve un valor booleano.
// En resumen, includes() es una función versátil que se puede usar tanto en cadenas de texto como en arreglos.
// En cadenas de texto, verifica la presencia de una subcadena y devuelve un valor booleano.
// En arreglos, verifica la presencia de un elemento y también devuelve un valor booleano.
// Recuerda que includes() es sensible a mayúsculas y minúsculas en cadenas de texto.
// En arreglos, verifica la presencia de un elemento y también devuelve un valor booleano.
// En resumen, includes() es una función versátil que se puede usar tanto en cadenas de texto como en arreglos.