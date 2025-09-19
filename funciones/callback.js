

//Un callback es una función que se pasa como argumento a otra función y se ejecuta después de que ocurre algún evento o se completa una tarea.
//La diferencia principal con las demás funciones es su propósito y uso:

//Funciones normales: Se llaman directamente cuando las necesitas.
//Callbacks: Se pasan como parámetros y la función que las recibe decide cuándo ejecutarlas.
//Por ejemplo, en tu código:

function ordenarArray(arr, callback) {
    const ordenado = [...arr].sort((a, b) => a - b);
    callback(ordenado); // Aquí se ejecuta el callback
}

//Aquí, callback no se ejecuta inmediatamente, sino cuando la función ordenarArray termina de ordenar el array.
//Esto permite manejar tareas asíncronas (como peticiones HTTP) o personalizar el comportamiento después de una operación.

//Gotcha:
//Un error común es olvidar que el callback puede ejecutarse en otro momento (por ejemplo, después de un delay), lo que puede causar confusión si esperas resultados inmediatos.

//Resumen:

//Un callback es una función que se pasa como argumento y se ejecuta dentro de otra función.
//Permite controlar el flujo de ejecución, especialmente en operaciones asíncronas.

// 1. Suma con callback
function suma(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}
// Resumen: Suma dos números y pasa el resultado a un callback.

// 2. Leer archivo simulado
function leerArchivo(nombre, callback) {
    setTimeout(() => callback(`Contenido de ${nombre}`), 100);
}
// Resumen: Simula la lectura de un archivo y pasa el contenido al callback.

// 3. Filtrar números pares
function filtrarPares(arr, callback) {
    const pares = arr.filter(num => num % 2 === 0);
    callback(pares);
}
// Resumen: Filtra números pares de un array y los pasa al callback.

// 4. Buscar elemento
function buscarElemento(arr, elemento, callback) {
    const encontrado = arr.includes(elemento);
    callback(encontrado);
}
// Resumen: Busca un elemento en un array y pasa true/false al callback.

// 5. Operación matemática genérica
function operar(a, b, operacion, callback) {
    const resultado = operacion(a, b);
    callback(resultado);
}
// Resumen: Realiza una operación matemática usando un callback.

// 6. Procesar texto
function procesarTexto(texto, callback) {
    const procesado = texto.trim().toUpperCase();
    callback(procesado);
}
// Resumen: Procesa un texto y pasa el resultado al callback.

// 7. Simular petición HTTP
function peticionHTTP(url, callback) {
    setTimeout(() => callback(`Respuesta de ${url}`), 200);
}
// Resumen: Simula una petición HTTP y pasa la respuesta al callback.

// 8. Ordenar array
function ordenarArray(arr, callback) {
    const ordenado = [...arr].sort((a, b) => a - b);
    callback(ordenado);
}
// Resumen: Ordena un array numérico y pasa el resultado al callback.

// 9. Validar usuario
function validarUsuario(usuario, callback) {
    const valido = usuario === "admin";
    callback(valido);
}
// Resumen: Valida si el usuario es "admin" y pasa true/false al callback.

// 10. Ejecutar después de delay
function ejecutarConDelay(callback, delay) {
    setTimeout(callback, delay);
}
// Resumen: Ejecuta un callback después de un tiempo especificado.