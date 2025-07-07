
// Claro, aquí tienes una explicación línea por línea del código:
// const numeros = [1, 2, 3, 4];
//
// Se declara un arreglo llamado numeros que contiene los valores 1, 2, 3 y 4.

/*const res = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);*/
// Se utiliza el método reduce para sumar todos los elementos del arreglo.
// reduce toma una función y un valor inicial (en este caso, 0).
// La función recibe dos parámetros: acumulador (el resultado acumulado hasta el momento) y numero (el elemento actual del arreglo).
// En cada iteración, suma el acumulador con el número actual.
// Al final, res tendrá el valor total de la suma de todos los elementos del arreglo.

//console.log(res); // Resultado: 10
// Imprime el resultado de la suma (10) en la consola.
//
// Resumen:
// El código suma todos los números del arreglo numeros usando reduce y muestra el resultado (10) en la consola.
//
// Gotcha:
// Si el arreglo estuviera vacío y no se diera un valor inicial (el 0), reduce lanzaría un error. Siempre es buena práctica proporcionar un valor inicial cuando se usa reduce.

const numeros = [1, 2, 3, 4];
const res = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);
console.log(res); // Resultado: 10

