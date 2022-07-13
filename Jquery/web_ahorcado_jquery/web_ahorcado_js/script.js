let contadorErrores = 0;
let secretWords = ["coche", "casa", "pollo", "garbanzo"];
let secretWord = secretWords[Math.floor(Math.random() * secretWords.length)];
let currentWord = secretWord.replace(/./g, "_ ");
$("#current_word").html = currentWord;
//document.querySelector("#current_word").innerHTML = currentWord;

evaluaLetra = _ => {
    //Recojo la letra introducida por el usuario
    let letra = $("#letra").val();
    //let letra = document.querySelector("#letra").value;
    //Obtengo la posición de dicha letra en la palabra secreta(si no está, será -1)
    let posicionCoincidencia = secretWord.indexOf(letra);
    //Evalúo si la letra está dentro de la palabra
    if (posicionCoincidencia >= 0) {
        //Si la letra es encontrada, el siguiente bucle se encarga de sustituir el guión bajo de currentWord por la letra pertinente
        for (i in secretWord) {
            if (secretWord[i] == letra) {
                currentWord = currentWord.replaceAt(i * 2, letra);
            }
        }
        $("#current_word").html(currentWord);
        // document.querySelector("#current_word").innerHTML = currentWord;
        $("#letra").val("");
        // document.querySelector("#letra").value = "";
    } else {
        contadorErrores++;
        var movimiento = -310 * contadorErrores;
        if (contadorErrores > 3) {
            //document.querySelector('.message').style.display = 'block';
            $('#message').css("display",'block');
        } else {
            $("#ahorcado").css("background-position", `${ movimiento }px 0px`)
        }
    }
    if (currentWord.indexOf("_") < 0) {
        $("#juego").html('<span style="font-size:4em">VICTORIA</span>')
    }
    //document.querySelector("#contador").innerHTML = contadorErrores;
    $("#contador").html("Fallos : " + contadorErrores);
}


String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

$('#btn').on('click', evaluaLetra);