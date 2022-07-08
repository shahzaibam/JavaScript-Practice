// var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

function printError(elemId, mensaje) {
    document.getElementById(elemId).innerHTML = mensaje;
}

let numMax = 10;

function validateName(numMax) {
    var name = document.getElementById("name").value;

    if(name == "") {
        printError("nameErr","please enter your name");
    }else {
        //validar longitud

        if(name.length > numMax  ) {
            printError("dniErr", "numero muy largo")
        }

        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false){
            printError("nameErr", "el patron no se cumple")
        }else{
            printError("nameErr","");
    
        }

    }
}


function validarDNI() {
    var numDni = document.getElementById("dni").value;
    var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    var numero = parseInt.numDni.substring(0, numDni.length - 2)
    var letra_intro = numDni(numDni.length - 1)
    var letra_ok = letras[numero%23]
    if(letra_intro != letra_ok) {
        printError("dniErr", "letra Dni eeronea");
    }else {
        printError("dniErr", "")
    
    }
}