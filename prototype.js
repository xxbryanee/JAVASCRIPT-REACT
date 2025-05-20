// Ejemplo sencillo usando prototype en JavaScript

// Creamos una función constructora para Persona
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Agregamos un método al prototipo de Persona
Persona.prototype.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
};

// Creamos una nueva instancia de Persona
const persona1 = new Persona("Ana", 30);

// Usamos el método del prototipo
persona1.saludar(); // Salida: Hola, mi nombre es Ana y tengo 30 años.
/*
El "prototype" en JavaScript es un mecanismo por el cual los objetos pueden heredar propiedades 
y métodos de otros objetos. 
Cada función en JavaScript tiene una propiedad llamada "prototype". Cuando creas un objeto usando 
una función constructora (como Persona), 
ese objeto hereda las propiedades y métodos definidos en el prototype de la función constructora. 
Esto permite compartir funcionalidades entre todas las instancias creadas a partir de esa función,
 ahorrando memoria y promoviendo la reutilización de código.
*/
