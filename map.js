const numbers = [1, 2, 3, 4, 5];

// Usando map para crear un nuevo arreglo con los números al cuadrado
const squares = numbers.map(num => num * num);

console.log(squares); // [1, 4, 9, 16, 25]

/////////////////////////////////////////////////////////////////////
// Usando map para transformar un arreglo de objetos
const users = [
    { id: 1, name: 'Ana', age: 25 },
    { id: 2, name: 'Luis', age: 30 },
    { id: 3, name: 'Marta', age: 22 }
];

// Crear un nuevo arreglo con solo los nombres en mayúsculas
const userNamesUpper = users.map(user => user.name.toUpperCase());

console.log(userNamesUpper); // ['ANA', 'LUIS', 'MARTA']