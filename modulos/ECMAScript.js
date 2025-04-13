/**para usar estas funciones se tiene que exportar  eh el index.html poner
 * <script type="module" src="script.js"></script>
 * y en el script.js poner import { sumar, restar } from './funciones.js';
 */

/*******************  index.html ************************* */
<script type="module" src="script.js"></script>

/********************** en el archivo de script.js    ******************** */
 //importando las funciones sumar y restar del archivo funciones.js
// En JavaScript, las funciones pueden ser declaradas de varias maneras. Una de ellas es mediante
//  una expresión de función (function expression).
import { sumar, restar } from './funciones.js';
const resultado = sumar(5, 3); // Llamada a la función sumar

console.log(resultado); // Imprime el resultado de la suma en la consola


/*************************************./funciones.js ************************************************************** */


// En JavaScript, las funciones pueden ser declaradas de varias maneras. Una de ellas es mediante
//  una expresión de función (function expression).
// En este caso, la función se asigna a una variable y no tiene un nombre específico.


export function sumar ( n1, n2) { //funcion declarada con parametros
    return n1 + n2; //funcion con retorno
}

export function restar ( n1, n2) { //funcion declarada con parametros
    return n1 - n2; //funcion con retorno
}


/********************************************* */