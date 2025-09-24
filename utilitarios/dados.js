jugar=function(){
    let aleatorio
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio)
    if(aleatorio>3){
        console.log("ES MAYOR A 3")
        console.log("GANASTE")
    }else{
        console.log("ES menor A 3")
        console.log("PERDISTE")
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