let puntosUsuarios = 0
let puntosComputador = 0

jugar = function (seleccionado) {
    let cmpElemento1 = generarElemento();

    let cmpRuta = generarRuta(cmpElemento1);
    mostrarImagen("imgDado", cmpRuta);

    let cmpGanador = determinarGanador(seleccionado, cmpElemento1);
    if (cmpGanador == 1) {
        mostrarTexto("puntos", "GANASTE LA PARTIDA")
        puntosUsuarios = puntosUsuarios + 1
        mostrarTexto("puntos3", puntosUsuarios)
        if(puntosUsuarios == 5 ){
            mostrarTexto("puntos", "GANASTE EL JUEGO")
        }else if(puntosComputador == 5 ){
            mostrarTexto("puntos", "EL COMPUTADOR TE HA VENCIDO")
        }
    } else if (cmpGanador == 2) {
        mostrarTexto("puntos", "PERDISTE LA PARTIDA")
        puntosComputador = puntosComputador + 1
        mostrarTexto("puntos2", puntosComputador)
        if(puntosComputador == 5 ){
            mostrarTexto("puntos", "EL COMPUTADOR TE HA VENCIDO")
        }
    } else if (cmpGanador == 0) {
        mostrarTexto("puntos", "EMPATE")
    }


}

limpiar=function(){
    mostrarTexto("puntos", "--")
    mostrarTexto("puntos2", "--")
    mostrarTexto("puntos3", "--")
    puntosUsuarios = 0
    puntosComputador = 0

}