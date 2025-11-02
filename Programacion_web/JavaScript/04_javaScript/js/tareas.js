import { actualizarLocalStorage, obtenerTareas } from "./storage.js"

let tareas = [] = obtenerTareas();
let contenedorPrincipal = document.querySelector(".homework-container");
let input = document.getElementById("texto");

function verificarTarea() {
    let texto = input.value.trim();

    if(!texto){
        input.style.border = "2px solid red";
        return false;
    }
    else{
        input.style.border = "2px solid green";
        return true;
    }
}

function crearTarea(texto) {
    const tarea = {
        id: crypto.randomUUID(),
        texto: texto,
        terminado: false
    };
    tareas.push(tarea);
    actualizarLocalStorage(tareas);

    return tarea;
}

export function procesadorTarea() {
    if(verificarTarea()) {
        const tarea = crearTarea(input.value.trim());
        agregarTarea(tarea);
    }
}

export function agregarTarea(tarea) {
    let contenedorTarea = document.createElement('div');
    contenedorTarea.classList.add('tarea');
    contenedorTarea.id = tarea.id;

    let nombreTarea = document.createElement('p');
    nombreTarea.textContent = tarea.texto;

    let checkbox = crearCheckbox(nombreTarea, tarea)

    contenedorTarea.append(checkbox);
    contenedorTarea.append(nombreTarea);

    let botonEliminar = crearBotonEliminar();

    contenedorTarea.append(botonEliminar);

    input.value = '';
    
    contenedorPrincipal.append(contenedorTarea);
}

function crearCheckbox(nombreTarea, tarea){
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarea.terminado;

    if (checkbox.checked) {
        nombreTarea.style.textDecoration = 'line-through';
    }

    checkbox.addEventListener('change', (e) => {
        cambiarTerminado(e.target.parentElement.id, e.target.checked);
        
        let parrafo = e.target.parentElement.getElementsByTagName('p')[0];
        if(parrafo) {
            parrafo.style.textDecoration = (e.target.checked) ? 'line-through' : 'none';
        }
    });

    return checkbox;
}

function crearBotonEliminar(){
    let botonEliminar = document.createElement('button');
    botonEliminar.classList.add('button-delete');
    botonEliminar.textContent = 'Eliminar';

    botonEliminar.addEventListener('click', (e) => {
        console.log("BotonEliminar")
        e.currentTarget.parentElement.remove();
        eliminarTarea(e.currentTarget.parentElement.id);
    })
    return botonEliminar;
}

function cambiarTerminado(id, terminado) {
    let marcarTerminada = tareas.find((tarea) => tarea.id == id);
    marcarTerminada.terminado = terminado;
    actualizarLocalStorage(tareas);
}

function eliminarTarea(id) {
    tareas = tareas.filter((tarea) => tarea.id != id);
    actualizarLocalStorage(tareas);
}