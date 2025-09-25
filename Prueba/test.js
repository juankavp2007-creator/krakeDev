saludar = function(){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let resultado = generarSaludo(nombre,apellido);
    console.log(resultado);
}

