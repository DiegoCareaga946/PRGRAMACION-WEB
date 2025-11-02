import { state, resetState, obtenerBotones } from "./state.js";

const buttons = obtenerBotones();
let textOperation = document.getElementById("text");
let textHistory = document.getElementById("textHistory");

export function calcular(){
    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            if(button.textContent === "CE") {
                resetState();
            }
            if(state.yaHayResultado === 0){
                if(state.operator === "" && (button.textContent === "+" || button.textContent === "-" || button.textContent === "x" || button.textContent === "/")){
                    state.operator = button.textContent;
                    state.operacionResultante = state.operacionResultante + state.operator;
                    textOperation.textContent = state.operacionResultante;
                }
                else if(state.operator === ""){
                    num1 = button.textContent;
                    state.numCadena1 = state.numCadena1 + num1;
                    state.operacionResultante = state.operacionResultante + num1;
                    textOperation.textContent = state.operacionResultante;
                }
                else if(state.operator !== ""){
                    num2 = button.textContent;
                    state.numCadena2 = state.numCadena2 + num2;
                    state.operacionResultante = state.operacionResultante + num2;
                    textOperation.textContent = state.operacionResultante;
                }
            }
                if(button.textContent === "="){
                
                state.yaHayResultado = 1;
                let resultadoNuevo;
                let resultado = 0;

                switch(state.operator){
                    case "+":
                        resultado = parseInt(state.numCadena1) + parseInt(state.numCadena2);
                        textOperation.textContent = "";
                        textOperation.textContent = resultado;
                        break;
                    case "/":
                        if(parseInt(state.numCadena2) > 0){
                            resultado = parseInt(state.numCadena1) / parseInt(state.numCadena2);
                            textOperation.textContent = "";
                            textOperation.textContent = resultado;
                        }
                        else {
                            textOperation.textContent = "Error"
                        }
                        break;
                    case "x":
                        resultado = parseInt(state.numCadena1) * parseInt(state.numCadena2);
                        textOperation.textContent = "";
                        textOperation.textContent = resultado;
                        break;
                    case "-":
                        resultado = parseInt(state.numCadena1) - parseInt(state.numCadena2);
                        textOperation.textContent = "";
                        textOperation.textContent = resultado;
                        break;
                }
                
                resultadoNuevo = document.createElement('label');
                resultadoNuevo.textContent = state.operacionResultante + resultado;
                textHistory.appendChild(resultadoNuevo);
                }
        });
    });
}