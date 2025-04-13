// Fetch API    
// El Fetch API es una interfaz moderna para realizar solicitudes HTTP en JavaScript.
// Permite realizar peticiones a servidores y manejar respuestas de manera más sencilla y flexible que el antiguo XMLHttpRequest.
//// El Fetch API utiliza Promesas, lo que facilita el manejo de operaciones asíncronas y la gestión de errores.
//// A continuación, se presenta un ejemplo básico de cómo utilizar el Fetch API para realizar una solicitud 
// GET a una API pública y manejar la respuesta.
//// En este caso, se utiliza la API de JSONPlaceholder, que es una API de prueba que devuelve datos ficticios en formato JSON.
//// En este ejemplo, se realiza una solicitud GET a la URL 'https://jsonplaceholder.typicode.com/posts' 
// y se manejan los datos recibidos en formato JSON.
// El resultado se muestra en la consola del navegador y se limita a los primeros 10 elementos de la respuesta.
// También se incluye una función para crear elementos HTML y mostrarlos en la página web.
// Se utiliza el método slice() para limitar la cantidad de productos mostrados a 10.

const url= "https://jsonplaceholder.typicode.com/posts";

fetch (url)
.then((response) => { //se puede poner respuesta o response
    if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Convierte la respuesta a JSON
})
.then((data) => {
    // Procesa los datos recibidos
    console.log(data.slice(0, 10)); // Muestra solo los primeros 10 elementos
})

.catch (error => {
    console.error("Hubo un problema con la petición Fetch:", error); // Manejo de errores
})