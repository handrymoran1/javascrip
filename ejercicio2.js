function validarContrasena(contrasena) {

    let validarNumero = false;
    let validarLetra = false;

    if(contrasena.length < 8){
        return false;
    }

    for (let i=0; i<contrasena.length; i++) {
        let caracter = contrasena[i];

        if(caracter >= '0' && caracter <= '9') {
            validarNumero = true;
        }

        if(caracter >= 'A' && caracter <= 'Z') {
            validarLetra = true;
        }
    }

    if(validarNumero && validarLetra) {
        return true;
    }
    
    return false;
}; 

console.log(validarContrasena("ffffffsdadadD3"));