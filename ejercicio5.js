const prompt = require('prompt-sync')();

let usuarios = [
    {"nombre": "Ana","edad": 25},
    {"nombre": "Andres","edad": 14},
    {"nombre": "Luisa","edad": 16}
];

let edadMinima = prompt("Ingresa la edad minima:");

function filtrarUsuarios(usuarios, edadMinima){
    for(let i=0; i<usuarios.length; i++){
        if(usuarios[i].edad >= edadMinima) {
            return usuarios[i];
        };
    };
};

console.log(filtrarUsuarios(usuarios, edadMinima));