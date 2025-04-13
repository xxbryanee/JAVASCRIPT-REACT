// Ejemplo de uso de findIndex en JavaScript

// Lista de objetos con información de usuarios
const usuarios = [
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "María", edad: 30 },
    { id: 3, nombre: "Carlos", edad: 35 },
    { id: 4, nombre: "Ana", edad: 28 }
];

// Encontrar el índice del usuario con el nombre "Carlos"
const indiceCarlos = usuarios.findIndex(usuario => usuario.id === 2);

if (indiceCarlos !== -1) {
    console.log(`El índice de Carlos es: ${indiceCarlos}`);
} else {
    console.log("Carlos no se encuentra en la lista.");
}

// Resultado esperado: El índice de Carlos es: 2