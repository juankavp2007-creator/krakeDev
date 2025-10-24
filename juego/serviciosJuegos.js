obtenerAleatorio=function(){
    let aleatorio=Math.random();
    let numeroMulti=aleatorio*3;

    let numeroEn=parseInt(numeroMulti);
 
    let random=numeroEn+1;

    return random;
}

generarElemento=function(){
    let PiedraPapelOtijera
    let randomDe3 = obtenerAleatorio();
    if(randomDe3==1){
        PiedraPapelOtijera="Piedra"
    }

    if(randomDe3==2){
        PiedraPapelOtijera="Papel"
    }

    if(randomDe3==3){
        PiedraPapelOtijera="Tijera"
    }

    return PiedraPapelOtijera
}

determinarGanador=function(eleccionJugador1, eleccionJugador2){
    let ganadorDterminado
    let jugador1=eleccionJugador1;
    let jugador2=eleccionJugador2;

    
    if (jugador1=="Piedra" && jugador2=="tijera"){
        ganadorDterminado=1
    }

    if (jugador1=="Papel" && jugador2=="Piedra"){
        ganadorDterminado=1
    }

    if (jugador1=="Tijera" && jugador2=="Papel"){
        ganadorDterminado=1
    }


    if (jugador1=="Tijera" && jugador2=="Piedra"){
        ganadorDterminado=2
    }

    if (jugador1=="Piedra" && jugador2=="Papel"){
        ganadorDterminado=2
    }

    if (jugador1=="Papel" && jugador2=="Tijera"){
        ganadorDterminado=2
    }


    if (jugador2=="Piedra" && jugador1=="Tijera"){
        ganadorDterminado=2
    }

    if (jugador2=="Papel" && jugador1=="Piedra"){
        ganadorDterminado=2
    }

    if (jugador2=="Tijera" && jugador1=="Papel"){
        ganadorDterminado=2
    }


    if (jugador2=="Tijera" && jugador1=="Piedra"){
        ganadorDterminado=1
    }

    if (jugador2=="Piedra" && jugador1=="Papel"){
        ganadorDterminado=1
    }

    if (jugador2=="Papel" && jugador1=="Tijera"){
        ganadorDterminado=1
    }

    if (jugador1==jugador2){
        ganadorDterminado=0
    }

    return ganadorDterminado
}

generarRuta=function(nombre){
    let ruta=nombre
    if(nombre=="Piedra"){
        ruta="./Imagenes/PIEDRA.png"
    }

    if(nombre=="Papel"){
        ruta="./Imagenes/PAPEL.png"
    }

    if(nombre=="Tijera"){
        ruta="./Imagenes/TIJERA.png"
    }

    return ruta

}
