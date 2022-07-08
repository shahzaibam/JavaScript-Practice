var input = document.getElementById("input");
let temporal = 0;
let operacion = "";

function add(num) {
    if (num == 0) {
        if (input.value[input.value.length - 1] != 0 || input.value.length > 1) {
            input.value = input.value + num;

        } else if (num == ".") {
            if (input.value[input.value.length - 1] != "." && input.value != "") {
                input.value = input.value + num;

            }
        }
    }
    else {

        input.value = input.value + num;
    }
}


function cleanInput() {
    if (input.value != "") {
        input.value = ""
    } else {
        temporal = 0;
        operacion = "";
    }
}

function operacionFuntion(operador) {
    operacion = operador;
    temporal = input.value;
    input.value = eval(temporal + operacion + input.value);
}