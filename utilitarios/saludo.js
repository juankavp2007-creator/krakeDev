saludar = function(){
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let Estatura=recuperarFloat("txtEstatura");
    let bienvenidos="Bienvenido "+nombre+" "+apellido;
    mostrarTexto("result",bienvenidos);
    mostrarImagen("ldlimg","./imagen/7NcB.gif")
    mostrarTextoEnCaja("txtNombre","")

}
