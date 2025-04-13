//aritmeticos
//suma
console.log(2 + 2);
//resta
console.log(2 - 2);
//multiplicacion        
console.log(2 * 2);
//division
console.log(2 / 2);
//modulo
console.log(2 % 2);
//incremento    
let i = 1;
console.log(i++);
console.log(i);
//decremento
let j = 1;
console.log(j--);
console.log(j);
//asignacion
let x = 10;  
x += 2;     // 12 x = x + 2
x *= 2;     // x = x * 2    
x -= 2;     //8 x = x - 2
console.log(x);
//comparacion
console.log(3 == 3);
console.log(3 != 3);
console.log(3 > 3);
//comparacion estricta
console.log(3 === 3);
console.log(3 !== 3);
//logicos
console.log(true && true);
console.log(true || false);
console.log(!true);
//ternario
let edad = 18;
let resultado = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(resultado);
//concatenacion
let nombre = "Juan";
let apellido = "Perez"; 
console.log(nombre + " " + apellido);
//typeof
console.log(typeof 1);
console.log(typeof "Hola");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
//precedencia de operadores
console.log(2 + 2 * 2);
console.log((2 + 2) * 2);
//operador de agrupacion
console.log(2 ** 3);

let a= true;
let b= false;

//and
console.log(a && b); // false
//or
console.log(a || b); // true
//not
console.log(!a); // false

//extra
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];   // [1, 2, 3, 4, 5]
console.log(arr2); // [1, 2, 3, 4, 5]

function sumarNumeros(...numeros) { 
    
}
sumarNumeros(1, 2, 3, 4, 5, 6); // 21
//spread operator

let edad = 17;
let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad"; // Eres menor de edad
console.log(mensaje); // Eres menor de edad
// operador ternario
// operador de agrupacion