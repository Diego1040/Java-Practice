
function Entry(){

    
    let nombre = document.getElementById("Nombre")
    console.log(nombre.value)

    if (nombre.value ==""){
        alert("Error. Datos No Validos")
    }else{
        alert("Datos Recibidos")
    }

    let apellido = document.getElementById("Apellido")
    console.log(apellido.value)

    let genero = document.getElementById("Genero")
    console.log(genero.value)

    let correo = document.getElementById("Correo")
    console.log(correo.value)

    let comentarios = document.getElementById("Comentarios")
    console.log(comentarios.value)

    let ValidarEdad = document.getElementById("ValidarEdad")
    console.log(ValidarEdad)





    

}

// Recibir Datos nulos
function Nombre(){
    let elem = document.getElementById("Nombre")
    let msj = ""

    if (elem.value == ""){
        msj = "Debe Completar el campo nombre"
        
    }else{
        msj ="recibido"
    }
    
}






