let tareas = [];

export function obtenerTareas(){
    return tareas = JSON.parse(localStorage.getItem('tareas') || []);
}

export function actualizarLocalStorage(tareas) {
    return localStorage.setItem('tareas', JSON.stringify(tareas));
}