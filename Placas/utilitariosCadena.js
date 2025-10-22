let hayErrores = false
esMayuscula = function (caracter) {
    if (caracter < 65 || caracter > 90 ) {
        hayErrores = true
    }
    if(caracter==165){
        hayErrores = false  
    }else{
        hayErrores = false
    }

    return !hayErrores
}

esGuion = function (caracter) {
    if (caracter != 45) {
        hayErrores = true
    } else {
        hayErrores = false
    }

    return !hayErrores
}

esDigito = function (caracter) {
    if (caracter < 48 || caracter > 57) {
        hayErrores = true
    } else {
        hayErrores = false
    }

    return !hayErrores
}