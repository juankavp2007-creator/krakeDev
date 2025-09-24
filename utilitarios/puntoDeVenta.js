calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    nombreProducto=recuperarTexto("txtProducto")

    precioProducto=recuperarFloat("txtPrecio")
   

    cantidad=recuperarInt("txtCantidad")
    
    porcentajeDescuento=recuperarInt("txtPorcentajeDescuento")
    

    valorSubtotal=calcularSubtotal(precioProducto,cantidad);
    mostrarTexto("lblSubtotal",valorSubtotal);

    valorDescuento=calcularValordescuento(valorSubtotal,porcentajeDescuento);
    mostrarTexto("lblDescuento",valorDescuento)
    
    valorIVA=calcularIva(valorSubtotal,valorDescuento)
    let decimal=valorIVA.toFixed(3);
    mostrarTexto("lblValorIVA",decimal)

    valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA)
    let decima=valorTotal.toFixed(3);
    mostrarTexto("lblTotal",decima)

    let resumen=document.getElementById("lblResumen");
    resumen.innerText="Valor a pagar por "+cantidad+" "+nombreProducto+" con "+decimal+"% "+"de descuento: USD "+decima


    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */

    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
    //7. Mostrar el resultado en el componente lblDescuento
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    //9. Mostrar el resultado en el componente lblValorIVA    
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    //11. Mostrar el resultado en el componente lblTotal
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
            
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */

}
limpiar = function () {
    let nom=document.getElementById("txtProducto");
    nom.value="0"
    let can=document.getElementById("txtCantidad");
    can.value="0"
    let pre=document.getElementById("txtPrecio");
    pre.value="0"
    let por=document.getElementById("txtPorcentajeDescuento");
    por.value="0"
    let sub=document.getElementById("lblSubtotal");
    sub.innerText="0.0"
    let des=document.getElementById("lblDescuento");
    des.innerText="0.0"
    let iv=document.getElementById("lblValorIVA");
    iv.innerText="0.0"
    let tot=document.getElementById("lblTotal");
    tot.innerText="0.0"
    let res=document.getElementById("lblResumen");
    res.innerText="0"
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */