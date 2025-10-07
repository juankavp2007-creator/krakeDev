calcularValordescuento=function(monto,porcentajeDescuento){
    let descuento;
    descuento=monto*(porcentajeDescuento/100)
    return descuento;
}

calcularIva=function(monto,descuento){
    let IVA
    IVA=(monto-descuento)*(12/100);
    return IVA;
}

calcularSubtotal=function(precio,cantidad){
    let Subtotal
    Subtotal=precio*cantidad;
    return Subtotal;
}

calcularTotal=function(subtotal,descuento,IVA){
    let total
    total=(subtotal-descuento)+IVA;
    return total;
}

calcularDescuentoPorVolumen=function(Subtotal,Cantidad){
 let cmpdescuento=Subtotal*Cantidad;
 if(Cantidad<3){
    mostrarTexto("lblDescu","0.0")
 }else if(Cantidad>=3 && Cantidad<=5){
    Cantidad=0.03
 }else if(Cantidad>=6 && Cantidad<=11){
    Cantidad=0.04
 }else if(Cantidad>=12){
    Cantidad=0.05
 }
 return cmpdescuento
}