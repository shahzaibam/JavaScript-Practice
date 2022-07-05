let text = "AAABBBCCCDDDEEEFFFGGGHHHIIIJJJKKKLLLMMMNNNOOO";
console.log(text.length);

let stri = "Bananas, Kiwis";
let particio = stri.slice(7,14);
console.log(particio);

let palabra = "Shzaib";
console.log(palabra.replace("Shzaib","Shah Zaib"));

let palabra_dos = "quiero ser mayuscula";
console.log(palabra_dos.toUpperCase());

let palabra_tres = "QUIERO SER MINUSCULA";
console.log(palabra_tres.toLowerCase());

let palabra_cuatro = "Concatename con la palabra cinco";

let palabra_cinco = ", No quiero";

console.log(palabra_cuatro.concat(palabra_cinco));

let palabra_seis = "Hola Me llamo Shah y estoy programando";
console.log(palabra_seis.indexOf("programando")); //empieza buscando desde el principio

let palabra_siete = "Hola me llamo Shah y estoy programando";
console.log(palabra_siete.lastIndexOf("programando", 26)); //le estoy diciendo que empiece a contar desde la opcion 26 hacia atrás, como no lo encuentra sale -1

let nombre = "Shah Zaib";
let primer_apellido = "Asghar";
let segundo_apellido = "Munir";

console.log(`Hola Sr. ${nombre}, es verdad que sus apellidos son, ${primer_apellido} y ${segundo_apellido}`);


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

let getNumber;
getNumber = prompt("Give me a number to multiply");

let getNumberParsed;
getNumberParsed = parseInt(getNumber)


for (let i = 1; i < 11; i++) {
    document.write(`
        <ul>
            <li>${getNumberParsed} x ${i} = ${getNumberParsed * i}</li>
        </ul>
    `);
}
