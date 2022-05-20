// Definicion de arreglo que almacenara los contactos
var arreglo = []

function guardar(){
    // Bandera para definir si existen errores
    flag = 0
    let elemento_nombre = document.getElementById("name")
    let elemento_edad = document.getElementById("edad")
    let correo = document.getElementById('mail')

    // Creamos el objeto
    let contacto = new Object()
    // Asignamos 
    contacto.nombre = elemento_nombre.value
    contacto.edad = elemento_edad.value
    contacto.mail = correo.value

    if(elemento_nombre.value == ""){
        flag = 1
    }

    if(elemento_edad.value == ""){
        flag = 1
    }

    if( correo.value == ""){
        // No se ingreso el correo para el usuario
        flag = 1
    }

    // Dejamos los campos vacios
    elemento_nombre.value = ""
    elemento_edad.value = ""
    correo.value = ""

    // Validamos si existen errores o no
    if(flag == 0 ){
        console.log(contacto)
        arreglo.push(contacto)
    }else{
        alert("No paso las validaciones :(")
    }


    
}


function list(){
    console.log(arreglo)
}