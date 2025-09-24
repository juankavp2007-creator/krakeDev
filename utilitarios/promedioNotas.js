calcularPromedioNotas=function(){
    let cmpNota1
    let cmpNota2
    let cmpNota3
    let cmpPromedio
    let Promedio
    let cmpImagen;
    let cmpImagen2;

    cmpNota1=recuperarFloat("lblNota1");

    cmpNota2=recuperarFloat("lblNota2");

    cmpNota3=recuperarFloat("lblNota3");

    cmpPromedio=calcularPromedio(cmpNota1,cmpNota2,cmpNota3);
    Promedio=cmpPromedio.toFixed(2);
    mostrarTexto("lblPromedio",Promedio);
    if(Promedio<5 && Promedio>0){
        cmpImagen=document.getElementById("imgVerificar");
        cmpImagen.src="./imagen/soy-un-fracaso-total-finn.gif"
    }else if(Promedio>=5 && Promedio<=8){
        cmpImagen2=document.getElementById("imgVerificar");
        cmpImagen2.src="./imagen/succes-bro.gif"
    }else if(Promedio>8 && Promedio<=10){
        cmpImagen2=document.getElementById("imgVerificar");
        cmpImagen2.src="./imagen/the-simpsons-mr-burns.gif"
        
    }else if(Promedio<0 || Promedio>10){
        mostrarTexto("lblPromedio","DATOS INCORRECTOS");
        cmpImagen2=document.getElementById("imgVerificar");
        cmpImagen2.src="./imagen/mmt-error-error.gif"
    }

}