
// Ejemplo de uso de Symbol en JavaScript

// Crear un símbolo único
const id = Symbol('id');

// Crear un objeto con una propiedad usando el símbolo
const user = {
    name: 'Juan',
    age: 30,
    [id]: 12345 // Propiedad con clave Symbol
};

// Acceder a las propiedades del objeto
console.log(user.name); // 'Juan'
console.log(user.age); // 30

// Acceder a la propiedad con Symbol
console.log(user[id]); // 12345

// Verificar que el símbolo es único
const anotherId = Symbol('id');
console.log(id === anotherId); // false

// Listar propiedades del objeto (Symbol no aparece en un for...in o Object.keys)
console.log(Object.keys(user)); // ['name', 'age']
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id) ]

// Ejemplo práctico: usar Symbol para evitar colisiones en propiedades
const mySymbol = Symbol('uniqueProperty');
user[mySymbol] = 'Valor único';
console.log(user[mySymbol]); // 'Valor único'