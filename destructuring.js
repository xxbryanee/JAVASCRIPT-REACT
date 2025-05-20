// Ejemplo de destructuring en JavaScript
// Destructuring es una forma de extraer valores de arreglos o propiedades de objetos
// y asignarlos a variables individuales de manera más concisa.
// Destructuring de un objeto
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

const { nombre, edad, ciudad } = persona;   //  Destructuring de un objeto
// Asignación de propiedades del objeto a variables
console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`); 
// Imprime: Nombre: Juan, Edad: 30, Ciudad: Madrid
// Destructuring de un objeto anidado

// Destructuring de un array
const colores = ["rojo", "verde", "azul"];

const [primero, segundo, tercero] = colores;
console.log(`Primero: ${primero}, Segundo: ${segundo}, Tercero: ${tercero}`);

// Destructuring con valores predeterminados
const { pais = "España" } = persona;
console.log(`País: ${pais}`);