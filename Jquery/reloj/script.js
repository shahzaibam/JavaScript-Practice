var fechaHora = new Date()
// document.getElementById("#reloj").innerHTML = fechaHora;

var hora = fechaHora.getHours;
var minutos = fechaHora.getMinutes;
var segundos = fechaHora.getSeconds;

document.getElementById("reloj").innerHTML = fechaHora

if(hora < 10) {hora = "0" + hora}
if(minutos < 10) {minutos = "0" + minutos}
if(segundos < 10) {segundos = "0" + segundos}

window.onload = function () {
    setInterval(fechaHora, 1000)
}
