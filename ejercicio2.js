function validarContrasena(contrasena) {

    if(contrasena.length < 8){
        return false;
    }

    for (let i=0; i<contrasena.length; i++) {
        let caracter = contrasena[i];

        if(caracter >= '0' && caracter <= '9') {
            
        }
    }
};

validarContrasena("shd737dshadk");