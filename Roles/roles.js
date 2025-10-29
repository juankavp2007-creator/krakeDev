let esNuevo = false

let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 }
]


mostrarOpcionEmpleado = function () {

    mostrarComponente("divEmpleado")
    ocultarComponente("divRol")
    ocultarComponente("divResumen")

    
    mostarEmpleados()

    deshabilitarComponente("txtCedula")
    deshabilitarComponente("txtNombre")
    deshabilitarComponente("txtApellido")
    deshabilitarComponente("txtSueldo")

    deshabilitarComponente("btnGuardar")

}

mostrarOpcionRol = function () {
    mostrarComponente("divRol")
    ocultarComponente("divEmpleado")
    ocultarComponente("divResumen")
    
    deshabilitarComponente("btbGuardarRol")
}

mostrarOpcionResumen = function () {
    mostrarComponente("divResumen")
    ocultarComponente("divEmpleado")
    ocultarComponente("divRol")
    
    
    mostrarRoles()
    mostrarTotales()
}


mostarEmpleados = function () {

    let compTabla = document.getElementById("tablaEmpleados")

    let contenidoTabla = "<table><tr> <th>CEDULA</th> <th>NOMBRE</th> <th>APELLIDO</th> <th>SUELDO</th> </tr>"
    let elementoEmpleado

    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i]
        contenidoTabla +=
            "<tr>" +
            "<td>" + elementoEmpleado.cedula + "</td>" +
            "<td>" + elementoEmpleado.nombre + "</td>" +
            "<td>" + elementoEmpleado.apellido + "</td>" +
            "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>"

    }

    contenidoTabla += "</table>"
    compTabla.innerHTML = contenidoTabla


}





ejecutarNuevo = function () {
    esNuevo = true
    if (esNuevo == true) {

        habilitarComponente("txtCedula")
        habilitarComponente("txtNombre")
        habilitarComponente("txtApellido")
        habilitarComponente("txtSueldo")

        habilitarComponente("btnGuardar")

        console.log("esNuevo: " + esNuevo)


    } else {
        esNuevo = false
    }
    
}



buscarEmpleado = function (cedula) {
    let elementoEmpleado
    let elementoEncontrado = null

    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i]

        if (elementoEmpleado.cedula == cedula) {
            elementoEncontrado = elementoEmpleado
            break;
        }

    }
    return elementoEncontrado
}


agregarEmpleado = function (empleado) {
    let empleadoA_Agregar = buscarEmpleado(empleado.cedula)
    let existeEmpleado = false

    if (empleadoA_Agregar == null) {
        empleados.push(empleado)
        existeEmpleado = true
    }
    

    return existeEmpleado

}



esDigito = function (caracter) {
    let cumpleCondicion = false
    let rangoInferior = 48; 
    let rangoSuperior = 57; 
    let char = caracter.charCodeAt(0)

    if (char <= rangoSuperior && char >= rangoInferior) {
        cumpleCondicion = true
    }
    console.log(caracter + " cumple esDigito: " + cumpleCondicion)
    return cumpleCondicion

}

validarCedula = function (cadenaCedula) {

    let longitudCadena = cadenaCedula.length
    let condicionCumple = false
    let mensajeErrorCedula = ""


    
    if (longitudCadena == 10) {


        for (let i = 0; i < longitudCadena; i++) {
            let charActual = cadenaCedula[i]
            let condicionActual = esDigito(charActual)

            if (condicionActual == true) {
                if (i == 0) {
                    condicionCumple = true
                }
            }

            console.log("char actual es: '" + charActual + "' condicion " + condicionCumple)
            

            condicionCumple = condicionCumple && condicionActual

        }

        if (condicionCumple == false) {
            mensajeErrorCedula = "No cumple condicion de todos deben ser digitos"
        }



    } else {
        mensajeErrorCedula = "Numero de digitos en cedula debe ser de 10"
    }

    console.log("\nCONDICION GENERAL DE CEDULA ES: " + condicionCumple + "\n")

    mostrarTexto("lblErrorCedula", mensajeErrorCedula)


    return condicionCumple

}


esMayuscula = function (caracter) {
    let cumpleCondicion = false
    let rangoInferior = 65;
    let rangoSuperior = 90;
    let char = caracter.charCodeAt(0)

    if (char <= rangoSuperior && char >= rangoInferior) {
        cumpleCondicion = true
    }
    console.log(caracter + " cumple esMayuscula: " + cumpleCondicion)
    return cumpleCondicion
}

validarNombreO_Apellido = function (cadenaNombreApellido) {

    let longitudCadena = cadenaNombreApellido.length
    let condicionCumple = false
    let mensajeErrorCadena = ""


    
    if (longitudCadena >= 3) {


        for (let i = 0; i < longitudCadena; i++) {
            let charActual = cadenaNombreApellido[i]
            let condicionActual = esMayuscula(charActual)

            if (condicionActual == true) {
                if (i == 0) {
                    condicionCumple = true
                }
            } else if (condicionActual == false) {
                condicionCumple = false
                break;
            }

            console.log("char actual es: '" + charActual + "' condicion " + condicionCumple)
            

            condicionCumple = condicionCumple && condicionActual



        }

        if (condicionCumple == false) {
            mensajeErrorCadena = "No cumple condicion de todos deben ser Mayusculas"

        }

    } else {
        mensajeErrorCadena = "Numero caracteres en este campo debe ser mayor a 3"
    }


    console.log(mensajeErrorCadena)
    

    let valorNombre_local = recuperarTexto("txtNombre");
    let valorApellido_local = recuperarTexto("txtApellido")
    let nombreComponenteError;

    if (cadenaNombreApellido === valorNombre_local) {
        nombreComponenteError = "lblErrorNombre"
        habilitarComponente("txtNombre")
    } else if (cadenaNombreApellido === valorApellido_local) {
        nombreComponenteError = "lblErrorApellido"
        habilitarComponente("txtApellido")
    } else {
        mensajeErrorCadena = "otro error"
    }

    console.log("\nCONDICION GENERAL DE CADENA " + cadenaNombreApellido + " ES: " + condicionCumple + "\n")

    mostrarTexto(nombreComponenteError, mensajeErrorCadena)


    return condicionCumple

}

validarFloat = function (valorFlotante) {
    let valorA_Validar = valorFlotante
    let condicionCumple = false
    let mensajeErrorFloat = ""
    if (valorA_Validar > 400 && valorA_Validar < 5000) {
        condicionCumple = true
    } else {
        mensajeErrorFloat = "valor debe ser entre 400 y 5000"
    }
    mostrarTexto("lblErrorSueldo", mensajeErrorFloat)
    console.log("\nCONDICION GENERAL DE SUELDO ES: " + condicionCumple + "\n")
    

    return condicionCumple



}



guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido")
    let valorSueldo = recuperarFloat("txtSueldo")

    let nuevoEmpleado = {}
    let datosEmpleado = {}



   
    if (validarCedula(valorCedula) & validarNombreO_Apellido(valorNombre) & validarNombreO_Apellido(valorApellido) & validarFloat(valorSueldo)) {

        console.log("EJECUTADO VALORES CORRECTOS")

        nuevoEmpleado = {
            cedula: valorCedula,
            nombre: valorNombre,
            apellido: valorApellido,
            sueldo: valorSueldo
        }

        let empleadoAgregado = agregarEmpleado(nuevoEmpleado)
        esNuevo = empleadoAgregado
        if (esNuevo == true) {
            alert("Empleado Guardado Correctamente");
            esNuevo = false

        } else if (esNuevo == false) {
            datosEmpleado = {
                cedula: valorCedula,
                nombre: valorNombre,
                apellido: valorApellido,
                sueldo: valorSueldo
            }
            modificarEmpleado(datosEmpleado)
            alert("Empleado: " + datosEmpleado.nombre + " con cedula: " + datosEmpleado.cedula+" FUE MODIFICADO EXITOSAMENTE") 
        }
      
    }

    mostrarOpcionEmpleado();



}



modificarEmpleado = function (empleado) {
    let empleadoEncontrado = buscarEmpleado(empleado.cedula)

    if (empleadoEncontrado != null) {
        empleadoEncontrado.nombre = empleado.nombre
        empleadoEncontrado.apellido = empleado.apellido
        empleadoEncontrado.sueldo = empleado.sueldo

    }

}


ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtBusquedaCedula")
    let empleado = buscarEmpleado(valorCedula)


    if (empleado == null) {
        alert("empleado no encontrado")
        esNuevo = true

    } else {

        mostrarTextoEnCaja("txtCedula", empleado.cedula)
        mostrarTextoEnCaja("txtNombre", empleado.nombre)
        mostrarTextoEnCaja("txtApellido", empleado.apellido)
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo)
        
        deshabilitarComponente("txtCedula")
        habilitarComponente("txtNombre")
        habilitarComponente("txtApellido")
        habilitarComponente("txtSueldo")
        habilitarComponente("btnGuardar")


    }


}

limpiar =function(){
    esNuevo=false
    console.log("FUNCION LIMPIAR")
    let cadenaVacia = ""
    mostrarTextoEnCaja("txtCedula", cadenaVacia)
    mostrarTextoEnCaja("txtNombre", cadenaVacia)
    mostrarTextoEnCaja("txtApellido", cadenaVacia)
    mostrarTextoEnCaja("txtSueldo", cadenaVacia)
    mostrarOpcionEmpleado()
}

