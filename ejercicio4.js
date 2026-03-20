const prompt = require('prompt-sync')();

let cantidadNotas = prompt("Digita la cantidad de notas:");

let arraynotas = [];

function pedirNotas(cantidadNotas) {
    for(let i=1; i<=cantidadNotas; i++) {
        let nota = Number(prompt(`Ingrese la nota ${i}: `))
        arraynotas.push(nota);
    }
    return arraynotas;
}

console.log(pedirNotas(cantidadNotas));

function calcularPromedio(notas) {
    let promedio = 0;
    let totalPromedio = 0;
    for(let i=0; i<notas.length; i++) {
        promedio += notas[i];   
    }
    totalPromedio = promedio / notas.length;
    return totalPromedio;
}

console.log(calcularPromedio(arraynotas));


