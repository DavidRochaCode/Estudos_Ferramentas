function ir(){
    var escolha= document.getElementsByName('estatistica')
    var link= document.getElementById('linke')

    if(escolha[0].checked){
        link.href='indexDiaria.html'
    } else if(escolha[1].checked){
        link.href='indexSemanal.html'
    } else if(escolha[2].checked){
        link.href='indexMensal.html'
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