// Eventos del DOM -Clicks


// Selecciona el primer elemento con la clase 'heading'
const heading = document.querySelector('.heading'); 

 // Selecciona todos los enlaces dentro de la clase 'navegacion'
const enlaces = document.querySelectorAll('.navegacion a');


heading.addEventListener('click', () => {   
    // Cambia el contenido de texto del elemento seleccionado
   heading.textContent = 'Nuevo Heading'; 
})

enlaces.forEach((enlace) => {   
    enlace.addEventListener('click', (e) => { // Agrega un evento de clic a cada enlace
        console.log(e); // Imprime el evento en la consola
        // Previene el comportamiento por defecto del enlace (navegar a otra página)
        e.preventDefault(); 
         // Cambia el texto del enlace al que se hizo clic
        e.target.textContent = 'Nuevo Texto';
        console.log(e.target); // Imprime el texto del enlace en la consola
       
    })
})