validarEstructura = function (placa, idComponente) {
    let existenErrores = false
    let cmpPlacaLon
    let cmpMayus1
    let Mayus1
    let Mayus2
    let Mayus3
    let cmpMayus2
    let cmpMayus3
    let cmpGuion
    let Guion
    let cmpNam1
    let Nam1
    let cmpNam2
    let Nam2
    let cmpNam3
    let Nam3
    let cmpNam4
    let Nam4

    cmpPlacaLon = placa.length;
    if (cmpPlacaLon == 7 || cmpPlacaLon == 8) {
        mostrarTexto(idComponente, "")
    } else {
        existenErrores = true
        mostrarTexto(idComponente, "Caracteres inexactos ")
    }

    if (placa.length > 0) {
        cmpMayus1 = placa.charCodeAt(0)
        Mayus1 = esMayuscula(cmpMayus1)
        if (Mayus1 == false) {
            existenErrores = true
            mostrarTexto(idComponente, "DEBE SER UNA LETRA MAYUSCULA ")
        }
    }

    if (placa.length > 0) {
        cmpMayus2 = placa.charCodeAt(1)
        Mayus2 = esMayuscula(cmpMayus2)
        if (Mayus2 == false) {
            existenErrores = true
            mostrarTexto(idComponente, "DEBE SER UNA LETRA MAYUSCULA ")
        }
    }

    if (placa.length > 0) {
        cmpMayus3 = placa.charCodeAt(2)
        Mayus3 = esMayuscula(cmpMayus3)
        if (Mayus3 == false) {
            existenErrores = true
            mostrarTexto(idComponente, "DEBE SER UNA LETRA MAYUSCULA ")
        }
    }

    if (placa.length > 0) {
        cmpGuion = placa.charCodeAt(3)
        Guion = esGuion(cmpGuion)
        if (Guion == false) {
            existenErrores = true
            mostrarTexto(idComponente, "DEBE SER UN GION ")
        }
    }

    if (placa.length > 0) {
        cmpNam1 = placa.charCodeAt(4)
        Nam1 = esDigito(cmpNam1)
        if (Nam1 == false) {
            existenErrores = true
            mostrarTexto(idComponente, "DEBE SER UN NUMERO ")
        }
    }

    if (placa.length > 0) {
        cmpNam2 = placa.charCodeAt(5)
        Nam2 = esDigito(cmpNam2)
        if (Nam2 == false) {
            existenErrores = true
            mostrarTexto(idComponente, "DEBE SER UN NUMERO ")
        }
    }

    if (placa.length > 0) {
        cmpNam3 = placa.charCodeAt(6)
        Nam3 = esDigito(cmpNam3)
        if (Nam3 == false) {
            existenErrores = true
            mostrarTexto(idComponente, "ESTRUCTURA INCORRECTA PARA EL PICO Y PLACA ")
        }
    }

    if (placa.length > 0) {
        cmpNam4 = placa.charCodeAt(7)
        Nam4 = esDigito(cmpNam4)
        if (Nam4 == false) {
            existenErrores = true
            mostrarTexto(idComponente, "ESTRUCTURA INCORRECTA PARA EL PICO Y PLACA ")
        }
    }
    return existenErrores

}

obtenerProvincia=function(placa, idComponente){
    let plagaAsignada=false
    if(placa.length > 0){
        let Provincia1 = placa.charCodeAt(0)
        if(Provincia1==65){
            plagaAsignada=true
            mostrarTexto(idComponente, "Azuay ")
        }
    }

    if(placa.length > 0){
        let Provincia2 = placa.charCodeAt(0)
        if(Provincia2==66){
            plagaAsignada=true
            mostrarTexto(idComponente, "Bolivar ")
        }
    }

    if(placa.length > 0){
        let Provincia3 = placa.charCodeAt(0)
        if(Provincia3==85){
            plagaAsignada=true
            mostrarTexto(idComponente, "Cañar ")
        }
    }

    if(placa.length > 0){
        let Provincia4 = placa.charCodeAt(0)
        if(Provincia4==67){
            plagaAsignada=true
            mostrarTexto(idComponente, "Carchi ")
        }
    }

    if(placa.length > 0){
        let Provincia5 = placa.charCodeAt(0)
        if(Provincia5==88){
            plagaAsignada=true
            mostrarTexto(idComponente, "Cotopaxi ")
        }
    }

    if(placa.length > 0){
        let Provincia6 = placa.charCodeAt(0)
        if(Provincia6==72){
            plagaAsignada=true
            mostrarTexto(idComponente, "Chimborazo ")
        }
    }

    if(placa.length > 0){
        let Provincia7 = placa.charCodeAt(0)
        if(Provincia7==79){
            plagaAsignada=true
            mostrarTexto(idComponente, "El Oro ")
        }
    }

    if(placa.length > 0){
        let Provincia8 = placa.charCodeAt(0)
        if(Provincia8==69){
            plagaAsignada=true
            mostrarTexto(idComponente, "Esmeraldas ")
        }
    }

    if(placa.length > 0){
        let Provincia9 = placa.charCodeAt(0)
        if(Provincia9==87){
            plagaAsignada=true
            mostrarTexto(idComponente, "Galapagos ")
        }
    }

    if(placa.length > 0){
        let Provincia10 = placa.charCodeAt(0)
        if(Provincia10==71){
            plagaAsignada=true
            mostrarTexto(idComponente, "Guayas ")
        }
    }

    if(placa.length > 0){
        let Provincia11 = placa.charCodeAt(0)
        if(Provincia11==73){
            plagaAsignada=true
            mostrarTexto(idComponente, "Imbabura ")
        }
    }

    if(placa.length > 0){
        let Provincia12 = placa.charCodeAt(0)
        if(Provincia12==76){
            plagaAsignada=true
            mostrarTexto(idComponente, "Loja ")
        }
    }

    if(placa.length > 0){
        let Provincia13 = placa.charCodeAt(0)
        if(Provincia13==82){
            plagaAsignada=true
            mostrarTexto(idComponente, "Los Rios ")
        }
    }

    if(placa.length > 0){
        let Provincia14 = placa.charCodeAt(0)
        if(Provincia14==77){
            plagaAsignada=true
            mostrarTexto(idComponente, "Manabi ")
        }
    }

    if(placa.length > 0){
        let Provincia15 = placa.charCodeAt(0)
        if(Provincia15==86){
            plagaAsignada=true
            mostrarTexto(idComponente, "Morona Santiago ")
        }
    }

    if(placa.length > 0){
        let Provincia16 = placa.charCodeAt(0)
        if(Provincia16==78){
            plagaAsignada=true
            mostrarTexto(idComponente, "Napo ")
        }
    }

    if(placa.length > 0){
        let Provincia17 = placa.charCodeAt(0)
        if(Provincia17==83){
            plagaAsignada=true
            mostrarTexto(idComponente, "Pastaza ")
        }
    }

    if(placa.length > 0){
        let Provincia18 = placa.charCodeAt(0)
        if(Provincia18==80){
            plagaAsignada=true
            mostrarTexto(idComponente, "Pichincha ")
        }
    }

    if(placa.length > 0){
        let Provincia19 = placa.charCodeAt(0)
        if(Provincia19==75){
            plagaAsignada=true
            mostrarTexto(idComponente, "Sucumbios ")
        }
    }

    if(placa.length > 0){
        let Provincia20 = placa.charCodeAt(0)
        if(Provincia20==81){
            plagaAsignada=true
            mostrarTexto(idComponente, "Orellana ")
        }
    }

    if(placa.length > 0){
        let Provincia21 = placa.charCodeAt(0)
        if(Provincia21==84){
            plagaAsignada=true
            mostrarTexto(idComponente, "Tungurahua ")
        }
    }

    if(placa.length > 0){
        let Provincia22 = placa.charCodeAt(0)
        if(Provincia22==90){
            plagaAsignada=true
            mostrarTexto(idComponente, "Zamora Chinchipe ")
        }
    }

    if(placa.length > 0){
        let Provincia23 = placa.charCodeAt(0)
        if(Provincia23==89){
            plagaAsignada=true
            mostrarTexto(idComponente, "Santa Elena ")
        }
    }

    if(placa.length > 0){
        let Provincia24 = placa.charCodeAt(0)
        if(Provincia24==74){
            plagaAsignada=true
            mostrarTexto(idComponente, "Santo Domingo de los Tsachilas ")
        }
    }

    if(placa.length > 0){
        let ProvinciaNo = placa.charCodeAt(0)
        if(ProvinciaNo==68 || ProvinciaNo==70 || ProvinciaNo==165){
            plagaAsignada=false
        }
    }

    return plagaAsignada

}

obtenerTipoVehiculo=function(placa, idComponente){
    let tipoLicencias=false
    if(placa.length > 0){
        let topA = placa.charCodeAt(1)
        if(topA==65){
            tipoLicencias=true
            mostrarTexto(idComponente, "Licencia tipo A= para motocicletas ")
        }
    }

    if(placa.length > 0){
        let topB = placa.charCodeAt(1)
        if(topB==66){
            tipoLicencias=true
            mostrarTexto(idComponente, "Licencia tipo B= Para automóviles, camionetas ligeras ")
        }
    }

    if(placa.length > 0){
        let topF = placa.charCodeAt(1)
        if(topF==70){
            tipoLicencias=true
            mostrarTexto(idComponente, "Licencia tipo F= Exclusiva para personas con discapacidad ")
        }
    }

    if(placa.length > 0){
        let topC = placa.charCodeAt(1)
        if(topC==67){
            tipoLicencias=true
            mostrarTexto(idComponente, "Licencia tipo C= Para taxis, expresos escolares ")
        }
    }

    if(placa.length > 0){
        let topD = placa.charCodeAt(1)
        if(topD==68){
            tipoLicencias=true
            mostrarTexto(idComponente, "Licencia tipo D= Para servicio de pasajeros en rutas específicas ")
        }
    }

    if(placa.length > 0){
        let topE = placa.charCodeAt(1)
        if(topE==69){
            tipoLicencias=true
            mostrarTexto(idComponente, "Licencia tipo E= Para camiones pesados y extragrandes ")
        }
    }

    if(placa.length > 0){
        let topG = placa.charCodeAt(1)
        if(topG==71){
            tipoLicencias=true
            mostrarTexto(idComponente, "Licencia tipo G= Se otorga para conducir maquinaria de construcción ")
        }
    }

    return tipoLicencias;

}

obtenerDiaPicoyPlaca=function(placa, idComponente){
    let tienePicoYPlaca=false
    if(placa.length > 0){
        let picoYplacaD1 = placa.charCodeAt(7)
        if(picoYplacaD1==49 || picoYplacaD1==50){
            tienePicoYPlaca=true
            mostrarTexto(idComponente, "Pico y placa= LUNES")
        }

        let picoYplac2D1 = placa.charCodeAt(6)
        if(picoYplac2D1==49 || picoYplac2D1==50){
            tienePicoYPlaca=true
            mostrarTexto(idComponente, "Pico y placa= LUNES")
        }
    }

    if(placa.length > 0){
        let picoYplacaD2 = placa.charCodeAt(7)
        if(picoYplacaD2==51 || picoYplacaD2==52){
            tienePicoYPlaca=true
            mostrarTexto(idComponente, "Pico y placa= MARTES")
        }

        let picoYplac2D2 = placa.charCodeAt(6)
        if(picoYplac2D2==51 || picoYplac2D2==52){
            tienePicoYPlaca=true
            mostrarTexto(idComponente, "Pico y placa= MARTES")
        }
    }

    if(placa.length > 0){
        let picoYplacaD3 = placa.charCodeAt(7)
        if(picoYplacaD3==53 || picoYplacaD3==54){
            tienePicoYPlaca=true
            mostrarTexto(idComponente, "Pico y placa= MIERCOLES")
        }

        let picoYplac2D3 = placa.charCodeAt(6)
        if(picoYplac2D3==53 || picoYplac2D3==54){
            tienePicoYPlaca=true
            mostrarTexto(idComponente, "Pico y placa= MIERCOLES")
        }
    }

    if(placa.length > 0){
        let picoYplacaD4 = placa.charCodeAt(7)
        if(picoYplacaD4==55 || picoYplacaD4==56){
            tienePicoYPlaca=true
            mostrarTexto(idComponente, "Pico y placa= JUEVES")
        }

        let picoYplac2D4 = placa.charCodeAt(6)
        if(picoYplac2D4==55 || picoYplac2D4==56){
            tienePicoYPlaca=true
            mostrarTexto(idComponente, "Pico y placa= JUEVES")
        }
    }

    if(placa.length > 0){
        let picoYplacaD5 = placa.charCodeAt(7)
        if(picoYplacaD5==48 || picoYplacaD5==57){
            tienePicoYPlaca=true
            mostrarTexto(idComponente, "Pico y placa= VIERNES")
        }

        let picoYplac2D5 = placa.charCodeAt(6)
        if(picoYplac2D5==48 || picoYplac2D5==57){
            tienePicoYPlaca=true
            mostrarTexto(idComponente, "Pico y placa= VIERNES")
        }
    }

    return tienePicoYPlaca

}