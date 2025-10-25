ejecutarValidacion = function () {
    let password = recuperarTexto("txtPassword")
    let mensajeError = validarPassword(password)

    if(mensajeError===""){
        mensajeError="La cadena de Password es correcta "
    }


    mostrarTexto("lblError", mensajeError)

}

validarPassword = function (password) {
    let longCadena = password.length

    let UnaMayuscula= false
    let UnDigito= false
    let UnCaracter= false

    let mensajeError= ""


    if (longCadena<=16 && longCadena>=8) {

        for(i=0;i<=longCadena;i++) {
            caracter = password.charAt(i)
            console.log("analizando caracter: " + caracter + " en posicion :" + i)

            if(esCaracterEspecial(caracter)) {
                UnCaracter = true
            }
            if(esDigito(caracter)) {
                UnDigito = true
            }
            if(esMayuscula(caracter)) {
                UnaMayuscula = true
            }
          

        }

        console.log("resultado: "+UnCaracter+" "+UnDigito+" "+UnaMayuscula)

        if (UnCaracter == false) {
            mensajeError += " debe de haber al menos un caracter especial ";
        }
        if (UnDigito == false) {
            mensajeError += " debe de haber al menos un dígito ";
        }
        if (UnaMayuscula == false) {
            mensajeError += " debe de haber al menos una letra mayúscula ";
        }



    } else {
        mensajeError += " no cumple el tamanio de cadena entre 8 y 16 caracteres"
        
    }
    console.log(mensajeError)

    return mensajeError



}


esMayuscula = function (caracter) {
    let Condicion = false
    let rangoIn = 65;
    let rangoSu = 90;
    let cmpCarac = caracter.charCodeAt(0)

    if (cmpCarac <= rangoSu && cmpCarac >= rangoIn) {
        Condicion = true
    }
    console.log(caracter + " cumple esMayuscula: " + Condicion)
    return Condicion
}
esMinuscula = function (caracter) {
    let Condicion = false
    let rangoIn = 97; 
    let rangoSu = 122; 
    let cmpCarac = caracter.charCodeAt(0)

    if (cmpCarac <= rangoSu && cmpCarac >= rangoIn) {
        Condicion = true
    }
    console.log(caracter + " cumple esMinuscula: " + Condicion)

    return Condicion

}

esDigito = function (caracter) {
    let Condicion = false
    let rangoIn = 48; 
    let rangoSu = 57; 
    let cmpCarac = caracter.charCodeAt(0)

    if (cmpCarac <= rangoSu && cmpCarac >= rangoIn) {
        Condicion = true
    }
    console.log(caracter + " cumple esDigito: " + Condicion)
    return Condicion

}

esCaracterEspecial = function (caracter) {
    let Condicion = false;
    let caracterEspecial = caracter.charCodeAt(0);

    
    if (
        (caracterEspecial >= 33 && caracterEspecial <= 47) ||
        (caracterEspecial >= 58 && caracterEspecial <= 64) ||  
        (caracterEspecial >= 91 && caracterEspecial <= 96) ||  
        (caracterEspecial >= 123 && caracterEspecial <= 126)   
    ) {
        Condicion = true;
    }

    console.log(caracter + " cumple los Caracteres Especiales: " + Condicion);
    return Condicion;
}
