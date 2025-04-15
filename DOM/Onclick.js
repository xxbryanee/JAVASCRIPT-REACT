// Archivo: Onclick.js

// Función que se ejecuta al hacer clic en el botón
function handleClick() {
    const button = document.getElementById('myButton');
    button.textContent = '¡Me hiciste clic!';
}

// Crear el botón dinámicamente y agregarlo al DOM
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.id = 'myButton';
    button.textContent = 'Haz clic en mí';
    button.onclick = handleClick; // Asignar la función al evento onClick
    document.body.appendChild(button);
});
// Agregar un evento adicional para cambiar el color del botón al hacer doble clic
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    button.ondblclick = () => {
        button.style.backgroundColor = 'lightblue';
    };
});