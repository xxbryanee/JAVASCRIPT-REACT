// Ejemplo de uso de "target" en un evento

// Creamos un botón en el DOM
const button = document.createElement('button');
button.textContent = 'Haz clic aquí';
document.body.appendChild(button);

// Agregamos un evento al botón
button.addEventListener('click', (event) => {
    // "event.target" se refiere al elemento que disparó el evento
    console.log('Elemento que disparó el evento:', event.target);
    alert(`Has hecho clic en: ${event.target.textContent}`);
});

// Si haces clic en el botón, verás en la consola y en la alerta
// el texto del botón que disparó el evento.