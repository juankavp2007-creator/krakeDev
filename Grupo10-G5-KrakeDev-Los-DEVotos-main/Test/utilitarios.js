mostrarTexto = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;

}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}
mostrarImgane = function(idComponente,rutaImg){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src = rutaImg;
}
recuperarTexto = function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value; 
    return valorIngresado;
}
recuperarInt = function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorDecimal=parseFloat(valorCaja);
    return valorDecimal
}