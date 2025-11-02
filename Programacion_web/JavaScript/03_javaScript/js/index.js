let buttons = document.querySelectorAll('.calculator-button');

buttons.forEach(button => {
    button.addEventListener('keydown', imprimir);
});

function imprimir() {
    console.log("hole");
}

function agregarCaracter(caracter) {

}