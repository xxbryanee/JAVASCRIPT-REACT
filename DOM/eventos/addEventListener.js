// Ejemplo sencillo de uso de addEventListener en JavaScript

// Creamos un botón en el documento
const boton = document.createElement('button');
boton.textContent = 'Haz clic aquí';
document.body.appendChild(boton);

// Agregamos un evento al botón
boton.addEventListener('click', function() {
    alert('¡Has hecho clic en el botón!');
});