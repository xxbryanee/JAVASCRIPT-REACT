// Concepto:
// Una promesa (Promise) en JavaScript es un objeto que representa la eventual finalización 
// (o falla) de una operación asíncrona y su valor resultante.


//resolve: cuando la operación es exitosa
//reject: cuando la operación falla
// Ejercicio: Simular una operación asíncrona (por ejemplo, obtener datos de un servidor)
function obtenerDatosUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: "Juan", edad: 25 });
            } else {
                reject("Usuario no encontrado");
            }
        }, 2000); // Simula una espera de 2 segundos
    });
}
obtenerDatosUsuario


// Uso de la promesa
obtenerDatosUsuario(1)
    .then(usuario => {
        console.log("Usuario encontrado:", usuario);
    })
    .catch(error => {
        console.error("Error:", error);
    });