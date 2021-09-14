//Relógio
window.addEventListener("load", watch)

function watch() {
    var data = new Date()
    var hours = data.getHours()
    var minutes = data.getMinutes()
    var seconds = data.getSeconds()
    var tempo = `${hours}:${minutes}:${seconds}`
    var mensagem = document.getElementById('relogio')
    if (hours < 10) {
        var tempo = `0${hours}:${minutes}:${seconds}`
    } else if (minutes < 10) {
        var tempo = `${hours}:0${minutes}:${seconds}`
    } else if (seconds < 10) {
        var tempo = `${hours}:${minutes}:0${seconds}`
    } else {
        var tempo = `${hours}:${minutes}:${seconds}`
    }
    mensagem.innerHTML = 'Hora atual: ' + tempo
}
setInterval(watch, 1000)

//variáveis do Cronometro
var hh = 0
var mm = 0
var ss = 0
var cron;
var input = document.getElementById('paraTodos')
input.innerHTML = `<input id="definir" type="button" value="Definir">`
document.getElementById('definir').addEventListener("click", start)

//Função do botão "Definir" 
function start() {
    if (Number(document.getElementById('numero').value) == 0) {
        alert("Digite um número maior que zero.")
        document.getElementById('numero').value = ''
    } else {
        input.removeEventListener('click', start)
        cron = setInterval(timer, 1000)

        //Função que dará vida ao despertador
        function setarTime() {

            var num = Number(document.getElementById('numero').value) * 60
            var cron2 = setInterval(Cronometro, 1000)
            document.getElementById('numero').value = ''

            //função que irá decrementar os minutos do input "num"
            function Cronometro() {
                num--
                if (num == 0) {
                    //Quando o valor chegá a 0, tudo irá parar e zerar.
                    clearInterval(cron2)
                    clearInterval(cron)
                    hh = 0
                    mm = 0
                    ss = 0
                    document.getElementById('mostrador').innerHTML = "00:00"
                    var mens = document.getElementById('mens')
                    mens.innerHTML = `<audio id="musica" src="AssetsPomodoro/song.mp3" autoplay></audio>`
                    input.innerHTML = `<input id = "terminar" type="button" value="Terminar"></input>`
                    document.getElementById('terminar').addEventListener("click", replay)

                    function replay() {
                        mens.innerHTML = `<audio id="musica" src=""></audio>`
                        input.innerHTML = `<input id="definir" type="button" value="Definir">`
                        document.getElementById('definir').addEventListener("click", start)
                    }
                }
            }

            //variáveis do botão parar
            input.innerHTML = ` <input id="parar" type="button" value="Parar" >`
            document.getElementById('parar').addEventListener('click', parar)

            //Quando clicado, tudo para.
            function parar() {
                input.innerHTML = `<input id="definir" type="button" value="Definir">`
                document.getElementById('definir').addEventListener("click", start)
                clearInterval(cron)
                clearInterval(cron2)
                mm = 0
                ss = 0
                document.getElementById('mostrador').innerHTML = "00:00"
            }
        }
        setarTime()

        // Iniciar cronograma
        function timer() {
            ss++
            if (ss == 60) {
                ss = 0
                mm++
            }

            var format = (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss)

            document.getElementById('mostrador').innerHTML = format
        }
    }

}

//script da Barra Lateral

document.getElementById('principal').addEventListener('click', abrir)
document.getElementById('btnFechar').addEventListener('click', fechar)

function abrir(){
    document.getElementById('menuOculto').style.width ='250px'
    
}

function fechar(){
    document.getElementById('menuOculto').style.width ='0'
    
}
