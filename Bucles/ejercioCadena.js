ejecutarPrueba1=function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
    let mensaje2=recuperarTexto("txtCadena");
    cadenaInvertida(mensaje2)
}

recorrerCadena=function(cadena){
    let caracter;
    for(let posicion=0;posicion<cadena.length;posicion++){
        caracter=cadena.charAt(posicion);
        console.log("caracter "+caracter+" posicion "+posicion);
    }
}

cadenaInvertida=function(cadena){
    let caracter;
    let CadenaT=cadena.length-1;
    let invertido="";
    for(let posicion=CadenaT;posicion>=0;posicion--){
        caracter=cadena.charAt(posicion);
        invertido=invertido+caracter
        mostrarTexto("Hola",invertido)
        console.log("caracter "+caracter+" posicion "+posicion);
        

    }
    return invertido
}