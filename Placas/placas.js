validarPlaca = function () {
    let erroresEstructura = false
    let asisgnarProvincias = false
    let validarLicencia = false
    let placa = document.getElementById("lblNota7").value;
    erroresEstructura = validarEstructura(placa, "error")
    if (erroresEstructura == true) {
        mostrarTexto("carac", "ESTRUCTURA INCORRECTA")
        mostrarTexto("carac2", "")
        mostrarTexto("carac3", "")
        mostrarTexto("carac4", "")
       
    } else if(erroresEstructura == false){
        mostrarTexto("carac", "ESTRUCTURA VALIDA")
        validarLicencia = obtenerTipoVehiculo(placa, "carac3")
        if (validarLicencia == false) {
            mostrarTexto("carac", "ESTRUCTURA INCORRECTA")
            mostrarTexto("error3", "LA LICENCIA NO EXISTE")
            mostrarTexto("carac3", "")

        } else {
            mostrarTexto("error3", "")
        }

        asisgnarProvincias = obtenerProvincia(placa, "carac2")
        if (asisgnarProvincias == false) {
            mostrarTexto("carac", "ESTRUCTURA INCORRECTA")
            mostrarTexto("error2", "LA LETRA NO TIENE ASIGNADA UNA PROVINCIA")
            mostrarTexto("carac2", "")

        } else {
            mostrarTexto("error2", "")
        }

        asisgnarProvincias = obtenerDiaPicoyPlaca(placa, "carac4")
        if (asisgnarProvincias == false) {
            mostrarTexto("carac", "ESTRUCTURA INCORRECTA PARA EL PICO Y PLACA")
            mostrarTexto("error4", "DEBE SER UN NUMERO")
            mostrarTexto("carac4", "")
        } else {
            mostrarTexto("error4", "")
        }

        

    }

}

limpiar = function () {
    mostrarTextoEnCaja("lblNota7", "")
    mostrarTexto("carac", "")
    mostrarTexto("carac2", "")
    mostrarTexto("carac3", "")
    mostrarTexto("carac4", "")
    mostrarTexto("error2", "")
    mostrarTexto("error3", "")
    mostrarTexto("error4", "")
}   