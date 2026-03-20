//============SIMULAR DINERO AUTOMATICO ===========
const prompt = require('prompt-sync')();
let saldoActual = Number(prompt("Ingrese el saldo actual: "));
let montoRetirar = Number(prompt("Ingrese el monto a retirar: "));
 
function retirarDinero(saldo, monto) {
    if (saldo > monto) {
         let nuevoSaldo = saldo - monto;
        console.log("Este es su Nuevo saldo: " + nuevoSaldo)
    }
    else{
      console.log("Fondo insuficiente");
     
    }
   
}
 
retirarDinero(saldoActual, montoRetirar)
 