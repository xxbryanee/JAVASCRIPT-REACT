// Ejemplo de uso de JSON.parse y JSON.stringify en JavaScript

// Cadena JSON de ejemplo
const jsonString = '{"name": "John", "age": 30, "isStudent": false}';

// Parsear la cadena JSON a un objeto de JavaScript
const parsedObject = JSON.parse(jsonString);

console.log("Objeto Parseado:", parsedObject);
// Salida: Objeto Parseado: { name: 'John', age: 30, isStudent: false }

// Accediendo a las propiedades del objeto parseado
console.log("Nombre:", parsedObject.name); // Salida: Nombre: John
console.log("Edad:", parsedObject.age);   // Salida: Edad: 30

// Modificando el objeto
parsedObject.age = 31;

// Convertir el objeto de nuevo a una cadena JSON
const updatedJsonString = JSON.stringify(parsedObject);

console.log("Cadena JSON Actualizada:", updatedJsonString);
// Salida: Cadena JSON Actualizada: {"name":"John","age":31,"isStudent":false}