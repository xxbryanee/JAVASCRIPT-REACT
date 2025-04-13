
// El Fetch API es una interfaz moderna para realizar solicitudes HTTP en JavaScript.

const url= "https://jsonplaceholder.typicode.com/comments"; // URL de la API
const url2= "https://jsonplaceholder.typicode.com/todos"; // URL de la API
const url3= "https://jsonplaceholder.typicode.com/photos"; // URL de la API

const consultarAPI = async () => {
    try {
     const inicio = performance.now(); // Marca el tiempo de inicio

    // Espera a que todas las promesas se resuelvan

     const response = await fetch(url); // Realiza la solicitud a la API
     const data = await response.json(); // Convierte la respuesta a JSON
     console.log(data); 


     const response2 = await fetch(url2); // Realiza la solicitud a la API
     const data2 = await response2.json(); // Convierte la respuesta a JSON
     console.log(data2); 

     const response3 = await fetch(url3); // Realiza la solicitud a la API
     const data3 = await response3.json(); // Convierte la respuesta a JSON
     console.log(data3); 

        const final = performance.now(); // Marca el tiempo de finalización
          // Llama a la segunda API
        console.log(`resultado de la primer funcion: ${final - inicio} ms`); // Muestra el tiempo de ejecución
      
    }
    catch (error) {
        console.error("Error al consultar la API:", error); // Manejo de errores
    }
 }

 consultarAPI(); // Llama a la función para realizar la consulta a la API


 /*********************************otro ejemplo pero mas resumido al ejeplo de arriba *********************************************** */
 
 const consultarAPI2 = async () => {
    try {
     const inicio = performance.now(); // Marca el tiempo de inicio

     const [response, response2, response3] = await Promise.all([
        fetch(url), // Realiza la solicitud a la API
        fetch(url2), // Realiza la solicitud a la API
        fetch(url3)  // Realiza la solicitud a la API
     ]); // Espera a que todas las promesas se resuelvan

     const [data, data2, data3] = await Promise.all([
        response.json(), // Convierte la respuesta a JSON
        response2.json(), // Convierte la respuesta a JSON
        response3.json()  // Convierte la respuesta a JSON
     ]); // Espera a que todas las promesas se resuelvan


     console.log(data); 
     console.log(data2); 
     console.log(data3); 

        const final = performance.now(); // Marca el tiempo de finalización
          // Llama a la segunda API
        console.log(`resultado de la segunda funcion: ${final - inicio} ms`); // Muestra el tiempo de ejecución
      
    }
    catch (error) {
        console.error("Error al consultar la API:", error); // Manejo de errores
    }
 }

 consultarAPI2(); // Llama a la función para realizar la consulta a la API
