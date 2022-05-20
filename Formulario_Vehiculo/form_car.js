
var arreglo = []

function Registrar(){
    let element_Marca = document.getElementById("Marca")
    let element_Modelo = document.getElementById("Modelo")
    let element_Anio = document.getElementById("Anio")

    
    CampText = 0

    let contacto = new Object()
        contacto.Marca = element_Marca.value
        contacto.Modelo = element_Modelo.value
        contacto.Anio = element_Anio.value

        console.log(element_Marca.value)

    if(element_Marca.value =="Seleccione Marca"){
        CampText = 1
    }
    if(element_Modelo.value == ""){
        CampText = 1
    }
    if (element_Anio.value == ""){
        CampText = 1
    }

    if(CampText == 0){

        arreglo.push(contacto)
        console.log(contacto)
        
    element_Marca.value = ""
    element_Modelo.value = ""
    element_Anio.value = ""

    }else{
        alert("Error. Debe Ingrese texto")
    }
}

function Listar(){
    console.log(arreglo)
    
}