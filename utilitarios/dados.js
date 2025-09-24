jugar=function(){
    let aleatorio
    aleatorio=lanzarDado();
    mostrarTexto("lblNumero",aleatorio)
    if(aleatorio>3){
        mostrarTexto("ldlsesulta","El numero es mayor a 3: GANASTE")
    }else{
        mostrarTexto("ldlsesulta","El numero es menor a 3: PERDISTE")
    }
}


lanzarDado=function(){
    let aleatorio
    let numeroMulti
    let numeroEn
    let suma
    aleatorio=Math.random()
    numeroMulti=aleatorio*6

    numeroEn=parseInt(numeroMulti);
 
    suma=numeroEn+1;

    return suma;
}