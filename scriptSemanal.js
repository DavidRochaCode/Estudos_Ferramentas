function ir() {
    var acertos = Number(document.getElementById('acertos').value)
    var informaçao = document.getElementById('informaçao')
    var meta = 120
    var meta2 = Math.round( 100 - ((acertos * 100) / meta))
    var meta3 = Math.round(((acertos * 100) / meta))
    var resto = Math.round(((80 - meta3) / 100) * 120) 

    if (meta3 < 80) {
        document.getElementById('barra').style = `width: 70%;height: 20px;border-radius:10px;border: thin solid  #2d2a3b; margin: auto; background: linear-gradient(to right, #558077 0%, #558077 ${meta3}%, #fbc7d4 0%)`
        document.getElementById('shadow').style = 'height: 410px'
        document.getElementById('voltar').style=' margin-top: 5px;'
        informaçao.innerHTML = ''

        informaçao.innerHTML +=
        ` <section>
             <div id="barra">${meta3}%</div>
          </section>
       <div id="mensagem"><p>Em um total de 100%, você errou ${meta2}% das 120 questões.</br></br> Seu progresso foi de  ${meta3}%, porém a sua meta é de 80%. Sendo assim, a sua meta <strong>não foi alcançada</strong>. Dessa forma, para atingir o seu objetivo, você precisaria de mais ${80-meta3}%, ou seja , acertar mais ${resto} questões.</p></div>`
    } else {
        document.getElementById('barra').style = `width: 70%;height: 20px;border-radius:10px;border: thin solid  #2d2a3b; margin: auto; background: linear-gradient(to right, #558077 0%, #558077 ${meta3}%, #fbc7d4 0%)`
        document.getElementById('shadow').style = 'height: 360px'
        document.getElementById('voltar').style=' margin-top: 5px;'
        informaçao.innerHTML = ''

        informaçao.innerHTML +=
         `<section>
          <div id="barra">${meta3}%</div>
          </section>
          <div id="mensagem"><p>Parabéns.</br> Sua meta de 80% <strong> foi alcançada</strong> com um acerto de  ${meta3}%</p></div>`
    }
}