calcularValordescuento=function(monto,porcentajeDescuento){
    let descuento;
    descuento=monto*(porcentajeDescuento/100)
    return descuento;
}

calcularIva=function(monto){
    let IVA
    IVA=(monto)*(12/100);
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

