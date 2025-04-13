
/**
 * Array de tecnologías utilizadas en desarrollo web.
 * @constant {string[]} tecnologias - Lista de tecnologías como strings.
 */

/**
 * Array de números de ejemplo.
 * @constant {number[]} numeros - Lista de números.
 */

/**
 * Función de ejemplo para utilizar con el método filter.
 * Imprime cada elemento del array 'tecnologias' en la consola.
 * @function ejemploFilter
 * @param {string} tech - Elemento actual del array 'tecnologias'.
 */

/**
 * Filtra el array 'tecnologias' para excluir el elemento 'HTML'.
 * @constant {string[]} tecnologias2 - Nuevo array que contiene las tecnologías
 * que no son 'HTML'.
 * @param {function} callback - Función que evalúa cada elemento del array.
 * @returns {string[]} Nuevo array con los elementos que cumplen la condición.
 */

/**
 * Imprime el nuevo array generado por el método filter y el array filtrado.
 * @function console.log
 * @param {string[]} nuevoArray - Array generado por el método filter.
 * @param {string[]} tecnologias2 - Array filtrado que excluye 'HTML'.
 */

/*************************************************************************************** */


const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']; //array de strings   
const numeros = [1, 2, 3, 4, 5]; //array de numeros


const ejemploFilter = (tech) => {
    console.log(tech); // Imprime cada elemento del array 'tecnologias' en la consola
const nuevoArray = tecnologias.filter(ejemploFilter) // HTML, CSS, JavaScript, React, Node.js
}


/****************************otro ejemplo con arrow funtion******************************************/ 

// Filtra el array 'tecnologias' para excluir el elemento 'HTML'  
const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML'); 

/****************************otro ejemplo con arrow funtion cuando es un solo parametro puedes eliminarlo******************************************/ 
// Filtra el array 'tecnologias' para excluir el elemento 'HTML'
// Si solo hay un parámetro en la función, puedes omitir los paréntesis

const nuevoArray1 = tecnologias.filter(tech => tech !== 'HTML'); 

console.log(nuevoArray1); // saca HTML

/****************************otro ejemplo con numero******************************************/ 
// Filtra el array 'numeros' para excluir los números menores o iguales a 1
const resultado = numeros.filter((numero) => numero > 1);

console.log(resultado); // [2, 3, 4, 5] - Filtra los números mayores a 1


/****************************otro ejemplo con INCLUDES ******************************************/ 
// Verifica si 'HTML' está en el array 'tecnologias'

const resultado2 = tecnologias.includes('HTML'); 
console.log(resultado2); // true - 'HTML' está presente en el array

/****************************otro ejemplo ******************************************/ 
const tecnologias2 = tecnologias.filter(function(tech) {
    if(tech !== 'HTML') {
        return tech; 
    }
    
})
// Aquí se imprime el nuevo array generado por el método filter, que contiene los 
// elementos que cumplen con la condición especificada
console.log(nuevoArray); 
console.log(tecnologias2); 
