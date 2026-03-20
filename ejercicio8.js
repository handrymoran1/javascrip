//======CONVERTIR MONEDA =========
const prompt = require('prompt-sync')();
let montoSolicitado = Number(prompt("Ingrese el monto en pesos COP: "));
let monedaConversion = Number(prompt("Ingrese la opcion de moneda de conversion:\n 1. USD \n 2.EUR \n"));
 
function convertirMoneda(monto, monedaDestino) {
    if (monedaDestino === 1){
        const unUSD = 3663
        let cambioMoneda = monto / unUSD;
        console.log(`Su monto en dolares es: ${Math.round(cambioMoneda)}`);
       
    }
    else if (monedaDestino === 2){
        const UnEUR = 4240
        let cambioMoneda = monto / UnEUR;
        console.log(`Su monto en dolares es: ${Math.round(cambioMoneda)}`);
    }
    else{
        console.log("No se reconoce la MONEDA")
    }
}
 
convertirMoneda(montoSolicitado, monedaConversion)