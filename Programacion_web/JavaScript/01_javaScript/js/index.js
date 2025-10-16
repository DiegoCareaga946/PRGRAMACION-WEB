let menu;
do{
    console.log("");
    console.log("¡Bienvenido a la calculadora!");
    console.log("1) Suma");
    console.log("2) Resta");
    console.log("3) Multiplicación");
    console.log("4) División");
    console.log("5) Salir");
    
    menu = Number(prompt("Seleccione la operación: "));
    
    let valor;
    let valor2;
    let resultado;
    switch(menu){
        case 1:
            valor = Number(prompt("Primer numero: "));
            valor2 = Number(prompt("Segundo numero: "));
            if(valor >= 0 && valor2 >= 0){
                resultado = valor + valor2;
                console.log(resultado);
            }
            else{
                console.log("Los valores deben de ser iguales o mayores que 0");
            }
            break;
        case 2:
            valor = Number(prompt("Primer numero: "));
            valor2 = Number(prompt("Segundo numero: "));
            if(valor >= 0 && valor2 >= 0){
                resultado = valor - valor2;
                console.log(resultado);
            }
            else{
                console.log("Los valores deben de ser iguales o mayores que 0");
            }
            break;
        case 3:
            valor = Number(prompt("Primer numero: "));
            valor2 = Number(prompt("Segundo numero: "));
            if(valor >= 0 && valor2 >= 0){
                resultado = valor * valor2;
                console.log(resultado);
            }
            else{
                console.log("Los valores deben de ser iguales o mayores que 0");
            }
            break;
         case 4:
            valor = Number(prompt("Primer numero: "));
            valor2 = Number(prompt("Segundo numero: "));
            if(valor > 0 && valor2 > 0){
                resultado = valor / valor2;
                console.log(resultado);
            }
            else{
                console.log("Los valores deben de ser mayores que 0");
            }
            break;
        case 5:
            console.log("Saliste con exito")
            break;
        default:
            console.log("Digito no identificado")
            break;
    }
}while(menu != 5);