const prompt = require('prompt-sync')();

let texto = prompt("Ingrese un texto:");

function contarPalabras(frase) {
    let palabras = frase.split(" ");
    return palabras.length;
}

console.log(contarPalabras(texto));