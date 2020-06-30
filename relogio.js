function relogio(){

    let novaData = new Date();
    let hora = novaData.getHours();
    let minuto = novaData.getMinutes();
    let segundo = novaData.getSeconds();

    document.getElementById("hora").textContent = horaFormato(hora) + ":" + horaFormato(minuto) + ":" + horaFormato(segundo);
}

function start(){
    setInterval(relogio, 1000);
}

function horaFormato(numero){
    if(numero < 10){
        numero = '0' + numero;
    }
    return numero

}