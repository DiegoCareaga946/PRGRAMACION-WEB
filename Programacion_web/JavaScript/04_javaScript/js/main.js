import { obtenerTareas } from "./storage.js"
import { procesadorTarea, agregarTarea } from "./tareas.js";

let contenedorPrincipal = document.querySelector(".homework-container")
let boton_agregar = document.getElementById("add");

boton_agregar.addEventListener('click', procesadorTarea);

function mostrarTareas() {
    contenedorPrincipal.innerHTML = '';
    let tareas = JSON.parse(localStorage.getItem('tareas') || []);
    tareas.forEach((tarea) => {
        agregarTarea(tarea);
    });
}

window.onload = () => {
    obtenerTareas();
    mostrarTareas();
}
