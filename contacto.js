
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

    let genero = document.getElementById("Genero").value

    let gender = ""

    if (genero == 1){

        gender ="Hombre"
    
    }if(genero == 2){

        gender = "Mujer"
    }

    console.log(gender)


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



/////////////////////////

var arreglo = []
var obj = new Object()

function Example(){

    flag = 0

    let element_name= document.getElementById("nameE")
    let element_edad= document.getElementById("edadE")
    

    let contacto = new Object()
    contacto.nombre= element_name.value
    contacto.edad = element_edad.value

    if(element_name.value == ""){
        flag == 1
    }

    if(element_edad.value == ""){
        flag == 1
    }


    if(flag == 0){
        console.log(contacto)
        console.push(contacto)
    }
    
    element_name.value == ""
    element_edad.value == ""

    
    let variable2 = {
        nombre: element_name.value ,
        edad: element_edad.value
    
    
    }
   
}

function list(){
    console.log(arreglo)
}






