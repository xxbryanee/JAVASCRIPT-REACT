// Ejemplo de uso de valueOf en JavaScript

// valueOf es un método que devuelve el valor primitivo de un objeto.
// Por ejemplo, en objetos Number, devuelve el valor numérico.

const numero = new Number(42);

console.log(numero); // Muestra: [Number: 42]
console.log(numero.valueOf()); // Muestra: 42

// También se puede sobreescribir valueOf en objetos personalizados:

function Producto(precio) {
    this.precio = precio;
}

Producto.prototype.valueOf = function() {
    // Devuelve el precio como valor primitivo
    return this.precio;
};

const miProducto = new Producto(100);

console.log(miProducto + 50); // Muestra: 150
// Al sumar, JavaScript llama automáticamente a valueOf para obtener el valor primitivo

// Resumen:
// valueOf permite definir cómo un objeto se comporta cuando se espera un valor primitivo.