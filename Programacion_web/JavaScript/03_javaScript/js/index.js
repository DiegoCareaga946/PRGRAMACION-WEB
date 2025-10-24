const buttons = document.querySelectorAll(".calculator-button");
let textOperation = document.getElementById("text");
let textHistory = document.getElementById("textHistory");

let num1;
let num2;
let numCadena1 = "";
let numCadena2 = "";
let operacionResultante = "";

let yaHayResultado = 0;

let operator = "";

document.addEventListener('keydown', function(event){
    const tecla = event.key;
    document.activeElement.blur();
    event.preventDefault();
    manejarEntrada(tecla);
})

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        if(button.textContent === "CE"){
            textOperation.textContent = "";
            operacionResultante = "";
            operator = "";
            numCadena1 = "";
            numCadena2 = "";
            yaHayResultado = 0;
            return;
        }
        if(yaHayResultado === 0){
            if(operator === "" && (button.textContent === "+" || button.textContent === "-" || button.textContent === "x" || button.textContent === "/")){
                operator = button.textContent;
                operacionResultante = operacionResultante + operator;
                textOperation.textContent = operacionResultante;
            }
            else if(operator === ""){
                num1 = button.textContent;
                numCadena1 = numCadena1 + num1;
                operacionResultante = operacionResultante + num1;
                textOperation.textContent = operacionResultante;
            }
            else if(operator !== ""){
                num2 = button.textContent;
                numCadena2 = numCadena2 + num2;
                operacionResultante = operacionResultante + num2;
                textOperation.textContent = operacionResultante;
            }
        }
            if(button.textContent === "="){
                
                yaHayResultado = 1;
                let resultadoNuevo;
                let resultado = "";

                switch(operator){
                    case "+":
                        resultado = parseInt(numCadena1) + parseInt(numCadena2);
                        textOperation.textContent = "";
                        textOperation.textContent = resultado;
                        break;
                    case "/":
                        if(parseInt(numCadena2) > 0){
                            resultado = parseInt(numCadena1) / parseInt(numCadena2);
                            textOperation.textContent = "";
                            textOperation.textContent = resultado;
                        }
                        else {
                            textOperation.textContent = "Error"
                        }
                        break;
                    case "x":
                        resultado = parseInt(numCadena1) * parseInt(numCadena2);
                        textOperation.textContent = "";
                        textOperation.textContent = resultado;
                        break;
                    case "-":
                        resultado = parseInt(numCadena1) - parseInt(numCadena2);
                        textOperation.textContent = "";
                        textOperation.textContent = resultado;
                        break;
                }
                
                resultadoNuevo = document.createElement('label');
                resultadoNuevo.textContent = operacionResultante + resultado;
                textHistory.appendChild(resultadoNuevo);
            }
    });
});

function manejarEntrada(tecla) {
    if (tecla === "Enter") tecla = "=";
    if (tecla === "*") tecla = "x";
    if (tecla === "Backspace") tecla = "CE";

    if (!/[0-9+\-x/=CE]/.test(tecla)) return;

    buttons.forEach(button => {
        if (button.textContent === tecla) {
            button.click();
        }
    });
}