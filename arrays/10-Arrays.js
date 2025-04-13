//array de objetos


const tecnologias = [20, 30, 40, 50, 60, 70, 80, 90, 100]; //array de numeros

console.table(tecnologias); //imprimiendo el array tecnologias en forma de tabla
console.log(tecnologias); //imprimiendo el array tecnologias en forma de lista
console.log(tecnologias[3]); //imprimiendo el elemento en la posicion 3 del array tecnologias



/**************en caso de JS los arrays pueden tener cualquier tipo de dato******************* */

const tecnologias1 = [20, 30, 40, 50, 60, 70, 80, "react.js"]; //array de numeros y string;

console.log(tecnologias1); //imprimiendo el array tecnologias1 en forma de lista
console.log(tecnologias1[3]); //imprimiendo el elemento en la posicion 3 del array tecnologias1



/**************arrays******************* */
const frutas = [
    { nombre: "manzana", color: "rojo" },
    { nombre: "banana", color: "amarillo" },
    { nombre: "uva", color: "morado" },
    { nombre: "naranja", color: "naranja" },
];
console.log(frutas[0].nombre); //manzana
console.log(frutas[1].color); //amarillo

//pushear agregar un elemento al final del array
frutas.push({ nombre: "kiwi", color: "verde" });//agregando un objeto al array frutas
console.log(frutas); //array frutas con kiwi agregado al final

//unshift agregar un elemento al inicio del array
frutas.unshift({ nombre: "sandia", color: "verde" });//agregando un objeto al inicio del array frutas
console.log(frutas); //array frutas con sandia agregado al inicio

//splice agregar un elemento en una posicion especifica del array
frutas.splice(2, 0, { nombre: "pera", color: "verde" });//agregando un objeto en la posicion 2 del array frutas
console.log(frutas); //array frutas con pera agregado en la posicion 2

//pop eliminar el ultimo elemento del array
frutas.pop(); //eliminando el ultimo elemento del array frutas
console.log(frutas); //array frutas sin el ultimo elemento

//shift eliminar el primer elemento del array
frutas.shift(); //eliminando el primer elemento del array frutas
console.log(frutas); //array frutas sin el primer elemento



/******/////////////////////************************////////**otro ejemplo****************************************** */
const numeros = new Array(1, 2, 3, 4, 5); //array de numeros
console.log(numeros.length); //5
console.log(numeros[0]); //1

//map   //recorre el array y devuelve un nuevo array con los resultados de la funcion
const numerosDoblados = numeros.map(function (numero) {
    return numero * 2; //multiplicando cada elemento del array por 2
});
console.log(numerosDoblados); //array con los numeros doblados [2, 4, 6, 8, 10]

/******///////////////////////////*************************//**otro ejemplo****************************************** */

//filter  //recorre el array y devuelve un nuevo array con los elementos que cumplen la condicion
const numerosPares = numeros.filter(function (numero) {
    return numero % 2 === 0; //filtrando los numeros pares
});
console.log(numerosPares); //array con los numeros pares [2, 4]

const result = numeros.filter((numero) => numero  !== 1);//filtrando los numeros que son diferentes de 1
console.log(result); //array con los numeros diferentes de 1 [2, 3, 4, 5]

//find  //recorre el array y devuelve el primer elemento que cumple la condicion
const numeroEncontrado = numeros.find(function (numero) {
    return numero === 3; //buscando el numero 3
});

numeros.find((numero) => numero === 3); //buscando el numero 3
console.log(numeroEncontrado); //3

//some  //recorre el array y devuelve true si al menos un elemento cumple la condicion
const hayNumeroPar = numeros.some(function (numero) {
    return numero % 2 === 0; //verificando si hay al menos un numero par
});
console.log(hayNumeroPar); //true

//every  //recorre el array y devuelve true si todos los elementos cumplen la condicion
const todosSonPares = numeros.every(function (numero) {
    return numero % 2 === 0; //verificando si todos los numeros son pares
});
console.log(todosSonPares); //false

//slice     
//slice  //devuelve una copia de una parte del array dentro de un nuevo array
console.log(numeros.slice(0, 3)); //devuelve los elementos desde el índice 0 hasta el índice 2 (sin incluir el índice 3)

//splice
// Reemplaza el elemento en el índice 1 con el valor 5 y devuelve el elemento eliminado
console.log(numeros.splice(1, 1, 5)); // [2]

//indexOf
// Busca el índice del elemento "pera" en el array frutas
const indiceManzana = frutas.findIndex((fruta) => fruta.nombre === "pera");
console.log(indiceManzana); // Devuelve el índice de "pera" o -1 si no se encuentra