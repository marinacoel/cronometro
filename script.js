const Estado = {
    ZERADO: 0,
    EXECUTANDO: 1,
    PAUSADO: 2
} 

var segundos = 0
var minutos = 0
var hora= 0
var intervalo
var estado = Estado.ZERADO


function iniciarCronometro(){
    console.log(estado)
    if (estado ==  Estado.ZERADO){
        cronometro()
        intervalo = setInterval(cronometro, 1000)
        estado = Estado.EXECUTANDO
    } 
    else if (estado == Estado.PAUSADO){
        intervalo = setInterval(cronometro, 1000)
        estado = Estado.EXECUTANDO
    }
}

function pausarCronometro(){
   clearInterval(intervalo)
   estado = Estado.PAUSADO   
}

function reiniciarCronometro(){
    clearInterval(intervalo)
    segundos=0
    minutos=0
    hora=0
    document.getElementById('cronometro').innerText='00:00:00'
    estado ==  Estado.ZERADO
}

function doisDigitos(digitos){
    if(digitos<10){
        return('0'+digitos)
    }
    else{
        return(digitos)
    }
}

function cronometro(){
    segundos++
    if(segundos==60){
        minutos++
        segundos=0

        if(minutos==60){
            minutos=0
            hora++
            }
    }
   
    document.getElementById('cronometro').innerText=doisDigitos(hora)+":"+doisDigitos(minutos)+':'+doisDigitos(segundos)
}