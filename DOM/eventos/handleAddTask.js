// handleAddTask.js

// Esta función agrega una nueva tarea a una lista de tareas.
// Recibe el evento del formulario y una función para actualizar
//  el estado de las tareas.

function handleAddTask(event, tareas, setTareas) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const nuevaTarea = event.target.elements.tarea.value.trim();

    if (nuevaTarea.length === 0) {
        alert('Por favor, escribe una tarea.');
        return;
    }

    // Agrega la nueva tarea al arreglo de tareas
    setTareas([...tareas, { texto: nuevaTarea, completada: false }]);

    // Limpia el campo de entrada
    event.target.reset();
}

export default handleAddTask;