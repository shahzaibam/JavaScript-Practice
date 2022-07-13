
$(".container").hide("slow")

let turno = 0;
const tablero = []


const jugadores = {
    jugador1 : prompt("escribe el 1"),
    jugador2 : prompt("escribe el 2"),
}

console.log(jugadores)

alert(jugadores.jugador1)

document.getElementById("player1").innerHTML = jugadores.jugador1;
document.getElementById("player2").innerHTML = jugadores.jugador2;

const buttonPulsado = (e, pos) => {

    turno++;
    const btn = e.target;
    const color = turno % 2 ? "green" : "yellow";
    btn.style.backgroundColor = color;
    tablero[pos] = color;
    if (haGanado()) {
        
        if(color == "green") {
            alert("enhorabueno " + jugadores.jugador1);

        }else if(color == "yellow") {
            alert("enhorabueno " + jugadores.jugador2);
            
        }
        
    } 
        
}

// let playerOne = prompt("Enter Player one Name");
// let playerTwo = prompt("Enter Player two Name");

// console.log(playerOne)

const haGanado = () => {
    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
        return true;
    } else if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) {
        return true;
    } else if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) {
        return true;
    } else if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) {
        return true;
    } else if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) {
        return true;
    } else if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) {
        return true;
    } else if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) {
        return true;
    } else if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]) {
        return true;
    } else if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]) {
        return true;
    } else {
        return false;
    }
}


function inicializar() {
    if(    $("#jugar").on("click")) {
        $(".container").show("slow")
    }

}



var arr = document.querySelectorAll("button")
console.log(arr)

arr.forEach((obj, i) => obj.addEventListener("click", (e) => buttonPulsado(e, i)));
