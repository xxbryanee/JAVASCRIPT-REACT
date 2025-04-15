// Ejercicio: Gestión de tareas con LocalStorage

// Función para agregar una tarea
function agregarTarea(tarea) {
    // Obtener tareas existentes o inicializar un array vacío
    // Verificar si la tarea ya existe
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];  
    tareas.push(tarea); // Agregar la nueva tarea al array
    // Guardar el array actualizado en LocalStorage
    localStorage.setItem('tareas', JSON.stringify(tareas)); // Convertir el array a JSON y guardarlo
    // Mostrar un mensaje de éxito
    console.log(`Tarea "${tarea}" agregada.`);  
}

// Función para listar todas las tareas
function listarTareas() {
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    console.log("Tareas guardadas:");
    tareas.forEach((tarea, index) => {
        console.log(`${index + 1}. ${tarea}`);
    });
}

// Función para eliminar una tarea por índice
function eliminarTarea(indice) {
    let tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    if (indice >= 0 && indice < tareas.length) {
        let tareaEliminada = tareas.splice(indice, 1);
        localStorage.setItem('tareas', JSON.stringify(tareas));
        console.log(`Tarea "${tareaEliminada}" eliminada.`);
    } else {
        console.log("Índice inválido.");
    }
}

// Ejemplo de uso
agregarTarea("Aprender JavaScript");
agregarTarea("Practicar React");
listarTareas();
eliminarTarea(0);
listarTareas();