

//manipular 
const heading = document.querySelector('.heading'); // Selecciona el primer elemento con la clase 'heading'
const enlaces = document.querySelectorAll('.navegacion a'); // Selecciona todos los enlaces dentro de la clase 'navegacion'


heading.textContent = 'Nuevo Heading'; // Cambia el contenido de texto del elemento seleccionado
heading.classList.add('nueva-clase'); // Agrega una nueva clase al elemento seleccionado
heading.id = 'nuevo-id'; // Cambia el id del elemento seleccionado
heading.style.backgroundColor = 'red'; // Cambia el color de fondo del elemento seleccionado

heading.removeAttribute('id'); // Elimina el atributo id del elemento seleccionado
heading.setAttribute('data-id', '123'); // Agrega un nuevo atributo data-id al elemento seleccionado

const inputNombre = document.querySelector('#nombre'); // Selecciona el elemento con el id 'nombre'
inputNombre.value = 'Nuevo Nombre'; // Cambia el valor del input seleccionado


// Agrega una nueva clase a cada enlace seleccionado
enlaces.forEach((enlace) => enlace.classList.add('nueva-clase')); 

// Agrega el atributo target a cada enlace seleccionado
enlaces.forEach((enlace) => enlace.setAttribute('target', '_blank')); 