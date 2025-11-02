import { obtenerBotones } from "./state.js";


export function manejarEntrada(tecla) {
    if (tecla === "Enter") tecla = "=";
    if (tecla === "*") tecla = "x";
    if (tecla === "Backspace") tecla = "CE";
    
    if (!/[0-9+\-x/=CE]/.test(tecla)) return;
    
    const buttons = obtenerBotones();
    if(!buttons || buttons.length === 0) return;
    
    buttons.forEach(button => {
        if (button.textContent === tecla) {
            button.click();
        }
    });
}