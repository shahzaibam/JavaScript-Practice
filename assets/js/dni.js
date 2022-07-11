// var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

function printError(elemId, mensaje) {
    document.getElementById(elemId).innerHTML = mensaje;
}



function validateName(numMax) {;
    var name = document.getElementById("name").value;

    if (name == "") {
        printError("nameErr", "please enter your name");
    } else {
        //validar longitud

        if (name.length > 12) {
            printError("nameCorrect", "")
            printError("nameErr", "numero muy largo")
        } var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) == false) {
            printError("nameCorrect", "")
            printError("nameErr", "el patron no se cumple")
        } else {
            printError("nameErr", "")
            printError("nameCorrect", "Correcto");

        }

    }
}


function validarDni() {
    // var numDni = document.getElementById("dniErr").value;

    // console.log("hola")

    // console.log(numDni.length)

    // var numero = parseInt.numDni.substring(0, numDni.length - 2)

    // var numeroDni = prompt("escribe tu numero de DNI");
    var letraDni  = prompt("escribe tu letra de DNI");
        // letraDni = letraDni.toLocaleUpperCase()


    if (numeroDni.length < 0 || numeroDni.length > 99999999) {
        document.write("Numero DNI erroneo.");
    } else {
        var letra_capturada = letraDni[numeroDni % 23];
        // if (letra_capturada != ["A",]) {
        //     document.write("Letra DNI incorrecta. ");
        // }
        // else {
        //     document.write("Numero y letra del DNI son correctos. ");
        // }

        var letras = ["a","b","c"]

        letras.forEach((item) => {
            for(let i = 0; i<letras.length - 1; i++){
                
                if(item[i] != letra_capturada) {
                    document.write("correcto")
                }
                else {
                    document.write("incorrccto")
                }
            }
        })

        document.write("<br>");
        document.write(" El DNI es : " + numeroDni + letraDni);
    }
    }

validarDni()


// var frutitas = [];

// for (var i=0; i<10; i++) {
//     frutitas.push(prompt(i + 1. + " escribe una fruta"))
// }

// console.log(frutitas.length)

// function show() {
//     frutitas.forEach((fruits) => {
//         document.write(fruits + "<br>")
//     })
// }

// show()

// var ordenar = []

// for (var i=0; i<2; i++) {
//     ordenar.push(prompt(i + 1. + " escribe un numero"))
// }


// function ordenarNumber(ordenar) {
//     for(let i=0; i< ordenar.length - 1; i++) {
//         for(let j = 0; j< 10; j++) {
//             if(ordenar[j] > ordenar[j+1]) {
//                 let aux = ordenar[j]
//                 ordenar[j] = ordenar[j+1]
//                 ordenar[j+1] = aux;
//             }
//         }
//     }

//     return ordenar;
// }

// console.log(ordenarNumber(ordenar))


const blackBtn = document.getElementById("black")
const whiteBtn = document.getElementById("white")
const body = document.getElementsByTagName("body")

blackBtn.addEventListener("click", function darkMode(event) {

    document.body.classList.toggle = "black"


});

// whiteBtn.addEventListener("click", function lightMode(event) {

//     event.target.style.background = "black"


// });


