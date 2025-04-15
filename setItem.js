// Ejemplo de uso de localStorage.setItem

// Guardar un valor en el almacenamiento local
localStorage.setItem('nombre', 'Juan');

// Recuperar el valor almacenado
const nombre = localStorage.getItem('nombre');
console.log(`El nombre almacenado es: ${nombre}`);

// Actualizar el valor almacenado
localStorage.setItem('nombre', 'Carlos');

// Verificar el valor actualizado
const nuevoNombre = localStorage.getItem('nombre');
console.log(`El nombre actualizado es: ${nuevoNombre}`); //