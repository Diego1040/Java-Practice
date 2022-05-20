alert("Hola mundo");
console.log("Hola mundo")

let variable = 45;
const constante = 10;
console.log(variable,constante);

// Prueba Console.log

function funcional(){
   let obj = document.getElementById("text")
    console.log(obj.value)
};

// Validar Edad

function validarEdad(){
    let edad = document.getElementById("edad").value
    console.log(edad)
    
    //--------------------------------------//
    let arreglo = (2 , 3, 4, 5 , 6 , 7)
    //--------------------------------------//
    

    if (edad < 18){
        document.getElementById("respuesta").innerHTML = "Es menor de edad"
        console.log("Es menor de edad")
    }else{
        document.getElementById("respuesta").innerHTML = "Es mayor de edad"
        console.log("es mayor de edad")


    //---------------------------------------//

    }for(let x =0; x <arreglo.length; x++){
        console.log(arreglo[x])
    }
    //---------------------------------------//
}

//Genero

function option(){

    let obj =document.getElementById("genero")
    console.log(obj.value)   


}

// Alert en consola con if statement


let funcion = () => {
    4>5?alert("Hola Mundo"):alert("else")

    
    if (4>5){
        alert("Hola Mundo")
    }else{
        alert("else")
    }
}


//Recibe datos de pantalla

let entry = () => {
    let arreglo = []

    //Forma Directa

    arreglo[0] = document.getElementById("input-1").value
    arreglo[1] = document.getElementById("input-2").value
    arreglo[2] = document.getElementById("input-3").value
    arreglo[3] = document.getElementById("input-4").value

    //Forma Automatica

    for (let i = 0; i <4; i++){
            arreglo[i] = document.getElementById("input-"+(i+1)).value   
    }

    //Escribiendo en pantalla

    for (let j = 0; j < 4; j++){
        window.setTimeout(function(){
            document.getElementById("p-"+(j+1)).innerHTML =
            arreglo[j]
        }, 1000)
    } console.log(arreglo)
    
}
