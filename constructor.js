// Un constructor es un método especial dentro de una clase que se utiliza 
// para inicializar los objetos creados a partir de esa clase.

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Ejemplo de uso:
const persona1 = new Persona('Ana', 30);
persona1.saludar(); // Hola, mi nombre es Ana y tengo 30 años.