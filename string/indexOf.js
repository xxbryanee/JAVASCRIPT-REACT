// Ejercicio: Buscar la posición de una palabra en una frase usando indexOf

const frase = "El perro corre rápido en el parque";
const palabra = "corre";

const posicion = frase.indexOf(palabra);

if (posicion !== -1) {
    console.log(`La palabra "${palabra}" se encuentra en la posición ${posicion}.`);
} else {
    console.log(`La palabra "${palabra}" no se encontró en la frase.`);
}
/*
Salida:
La palabra "corre" se encuentra en la posición 10.
*/