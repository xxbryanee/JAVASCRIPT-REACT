

// Combinar arrays
const frutas = ['manzana', 'banana', 'naranja'];
const vegetales = ['zanahoria', 'brócoli', 'espinaca'];
const alimentos = [...frutas, ...vegetales]; // Combina ambos arrays
console.log(alimentos); // ['manzana', 'banana', 'naranja', 'zanahoria', 'brócoli', 'espinaca']

// Copiar y extender objetos
const persona = { nombre: 'Juan', edad: 30 };
const personaActualizada = { ...persona, ciudad: 'Madrid' }; // Copia y agrega propiedades
console.log(personaActualizada); // { nombre: 'Juan', edad: 30, ciudad: 'Madrid' }

// Pasar elementos de un array como argumentos
const numeros = [1, 2, 3];
const suma = (a, b, c) => a + b + c;
console.log(suma(...numeros)); // 6


// Crear un nuevo array excluyendo un elemento específico
const numerosFiltrados = numeros.filter(num => num !== 2);
console.log(numerosFiltrados); // [1, 3]
