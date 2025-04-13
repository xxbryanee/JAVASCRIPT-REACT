const url= "https://jsonplaceholder.typicode.com/posts";

fetch(url)
.then((response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Convierte la respuesta a JSON
})

.then((data) => {
    // Procesa los datos recibidos
    console.log(data.slice(0, 10)); // Muestra solo los primeros 10 elementos
})

.catch((error) => {
    console.error("Hubo un problema con la petición Fetch:", error); // Manejo de errores
});

/***************************  Esto puede ser otro metodo para llamar una API ASYNC & AWIT  ************************************** */
const consultarAPI = async () => {
   try {
    const response = await fetch(url); // Realiza la solicitud a la API
    // Verifica si la respuesta es exitosa
    if (!response.ok) {
        throw new Error("Error en la respuesta de la red: " + response.statusText); // Manejo de errores
    }
    const data = await response.json(); // Convierte la respuesta a JSON
    console.log(data.slice(0, 10)); // Muestra solo los primeros 10 elementos
    // Aquí puedes agregar más lógica para procesar los datos recibidos
   }
   catch (error) {
       console.error("Error al consultar la API:", error); // Manejo de errores
   }
}   

consultarAPI(); // Llama a la función para realizar la consulta a la API
// El Fetch API es una interfaz moderna para realizar solicitudes HTTP en JavaScript.