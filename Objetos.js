
var arreglo = []
var obj = new Object()

function Example(){
    let element_name=  document.getElementById("nombre")
    let element_edad= document.getElementById("edad")
    

    let contacto = new Object()
    contacto.nombre= element_name.value
    contacto.edad = element_edad.value

    
    let variable2 = {
        nombre: element_name.value ,
        edad: element_edad.value

    
    
    }
    
    arreglo.push(contacto)
    console.log(contacto)
    console.log(variable2)
}

function list(){
    console.log(arreglo)
}