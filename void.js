// Ejemplo de uso de 'void' en JavaScript

// La palabra clave 'void' se usa para evaluar una expresión y devolver
//  'undefined'.
// Es útil cuando queremos ejecutar una función pero no queremos 
// que retorne ningún valor.

// Ejercicio: Crear un botón que muestre un mensaje en la consola usando 'void'

function mostrarMensaje() {
    console.log("¡Hola! Este mensaje se muestra usando void.");
}

// Simulamos el clic de un botón usando void
void mostrarMensaje();

// También se puede usar en enlaces HTML para evitar que cambien la página:
// <a href="javascript:void(0)" onclick="alert('Hola!')">Haz clic aquí</a>