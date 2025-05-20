// Ejemplo de uso de toFixed en JavaScript

// Supongamos que tenemos un número decimal
let numero = 3.14159265359;

// Queremos mostrar este número con solo 2 decimales
let numeroConDosDecimales = numero.toFixed(2);

// toFixed(2) convierte el número a un string con 2 decimales
console.log(numeroConDosDecimales); // Salida: "3.14"

// También podemos usar toFixed para redondear a 0 decimales
let numeroRedondeado = numero.toFixed(0);
console.log(numeroRedondeado); // Salida: "3"

// Recuerda: el resultado de toFixed siempre es un string
console.log(typeof numeroConDosDecimales); // Salida: "string"

// Si necesitas el resultado como número, puedes convertirlo:
let comoNumero = Number(numeroConDosDecimales);
console.log(comoNumero); // Salida: 3.14
console.log(typeof comoNumero); // Salida: "number"