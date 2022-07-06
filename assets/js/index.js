// let text = "AAABBBCCCDDDEEEFFFGGGHHHIIIJJJKKKLLLMMMNNNOOO";
// console.log(text.length);

// let stri = "Bananas, Kiwis";
// let particio = stri.slice(7, 14);
// console.log(particio);

// let palabra = "Shzaib";
// console.log(palabra.replace("Shzaib", "Shah Zaib"));

// let palabra_dos = "quiero ser mayuscula";
// console.log(palabra_dos.toUpperCase());

// let palabra_tres = "QUIERO SER MINUSCULA";
// console.log(palabra_tres.toLowerCase());

// let palabra_cuatro = "Concatename con la palabra cinco";

// let palabra_cinco = ", No quiero";

// console.log(palabra_cuatro.concat(palabra_cinco));

// let palabra_seis = "Hola Me llamo Shah y estoy programando";
// console.log(palabra_seis.indexOf("programando")); //empieza buscando desde el principio

// let palabra_siete = "Hola me llamo Shah y estoy programando";
// console.log(palabra_siete.lastIndexOf("programando", 26)); //le estoy diciendo que empiece a contar desde la opcion 26 hacia atrás, como no lo encuentra sale -1

// let nombre = "Shah Zaib";
// let primer_apellido = "Asghar";
// let segundo_apellido = "Munir";

// console.log(`Hola Sr. ${nombre}, es verdad que sus apellidos son, ${primer_apellido} y ${segundo_apellido}`);


//pedir numeros y sumarlos

// let primerNumero;
// primerNumero = prompt("Dame el primer numero");

// let segundoNumero;
// segundoNumero = prompt("Dame el segundo numero");

// let primerNumeroparsed = parseInt(primerNumero);
// let segundoNumeroparsed = parseInt(segundoNumero);

// let resultado = primerNumeroparsed + segundoNumeroparsed;
// document.write(`El resultado de esta suma es ` + resultado)

//let resultado;
//resultado = document.write(primerNumero + segundoNumero);


//pedir numeros y decir cual es mas grande

// let firstNumber;
// firstNumber = prompt("Give me the first number");

// let secondNumber;
// secondNumber = prompt("Give me the second number");

// let firstNumberParsed;
// firstNumberParsed = parseInt(firstNumber);

// let secondNumberParsed;
// secondNumberParsed = parseInt(secondNumber);

// if(firstNumberParsed > secondNumberParsed) {
//     document.write(`<br> El numero más grande es ` + firstNumberParsed)
// }else {
//     document.write(`<br> El número más grande es ` + secondNumberParsed)
// }



//tabla de multiplicar

// let getNumber;
// getNumber = prompt("Give me a number to multiply");

// let getNumberParsed;
// getNumberParsed = parseInt(getNumber)

// for (let x = 1; x < 11; x++) {
//     for (let i = 1; i < 11; i++) {
//         document.write(`
//         <div>
//             <ul>
//                 <li>${x} x ${i} = ${x * i}</li>
//             </ul>
//         </div>
//         `);
//     }
// }

// var lent = new Array(4);
// console.log(lent.length)


// const cars = []
// console.log(cars.length)

// cars.push("Saab", "Volvo", "Seat", "Mercedes", "Bugatti", "Range Rover", "Honda", "Ferrari", "Ford", "Peugeot")
// console.log(cars.length)

// for (let i = 0; i < cars.length; i++) {
//     document.write(`
//         <ul>
//             <li> ${cars[i]} </li>
//         </ul>

//     `)
// }

// for (let i=1; i<11; i++) {
//     cars.push(prompt(`${i} Escribe diez coches`)) 
//     document.write(`
//         <p>
//             ${i}. ${cars[i-1]}
//         </p> <br/>
//     `)
// }

// console.log(cars[2])

// console.log(cars.length)
// document.write(cars.length)

// const num = [3,4,1,2]

// function bubbleSort (n) {
//     for(let i=0; i<n.length-1; i++){
//         for(let j=0; j<n.length-1; j++){
//             if(n[j] > n[j+1]) {
//                 let aux = n[j]
//                 n[j] = n[j+1]
//                 n[j+1] = aux
//             }
//         }
//     }
//     return n;
// }

// console.log(bubbleSort(num))

//          [0,1,2,3,4,5,6]
// const num = [2,1,10,5,4,3,0]
//           1,2,5,4,3,0,10 --> primera vuelta,, índice 0 del for 1
//           1,2,4,3,0,5,10 --> segunda vuelta,, índice 1 del for 1
//           1,2,3,0,4,5,10 --> tercera vuelta,, índice 2 del for 1
//           1,2,0,3,4,5,10 --> cuarta vuelta,, índice 3 del for 1
//           1,0,2,3,4,5,10 --> quinta vuelta,, índice 4 del for 1
//           0,1,2,3,4,5,10 --> sexta vuelta,, índice 5 del for 1

const num = []

for (let i=1; i<15; i++) {
    num.push(prompt(`${i}. escribe un numero`)) 
}

console.log(num)
document.write(`
    ${num} <br> <br> 
    ${num.length} <br> <br>
    `);

function bubbleSort (n) {

    for (let i = 0; i < n.length - 1; i++) {
        for (let j = 0; j < n.length - 1; j++) {
            if (n[j] > n[j+1]) {
                let aux = n[j]
                n[j] = n[j+1]
                n[j+1] = aux
            };
        };
    }
    return n;
}
console.log(bubbleSort(num))

document.write(`<br/> <br/>
    ${bubbleSort(num)}
    `);







