import { calcular } from "./math.js";
import { manejarEntrada } from "./logic.js";

document.addEventListener('keydown', function(event) {
    const tecla = event.key;
    document.activeElement.blur();
    event.preventDefault();
    manejarEntrada(tecla);
    calcular()
});