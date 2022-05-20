
var arreglo = []
var obj = new Object()

function Example(){

    flag= 0 

    let element_name=  document.getElementById("nombre")
    let element_edad=  document.getElementById("edad")
    

    let contacto = new Object()
    contacto.nombre= element_name.value
    contacto.edad = element_edad.value

    
    if(element_name.value == ""){
        flag = 1
    }

    if(element_edad.value == ""){
        flag = 1
    }
    
    if (flag == 0){
        
    arreglo.push(contacto)
    console.log(contacto)

    element_name.value = ""
    element_edad.value = ""

    }else{
        alert("Debe llenar Todos los campos")
    }




}

function list(){
    console.log(arreglo)
}