export const state = {
  numCadena1: "",
  numCadena2: "",
  operator: "",
  operacionResultante: "",
  yaHayResultado: false,
  num1: "",
  num2: ""
};

export function resetState() {
  state.numCadena1 = "";
  state.numCadena2 = "";
  state.operator = "";
  state.operacionResultante = "";
  state.yaHayResultado = false;
  state.num1 = "";
  state.num2 = "";
}

export function obtenerBotones() {
    return document.querySelectorAll(".calculator-button");
}