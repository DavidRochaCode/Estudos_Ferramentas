 function toggle() {

     var nome = document.getElementById('name').value
     var mens = document.getElementById('mensagem')
     localStorage.setItem('nome', nome)
     mens.innerHTML = ''
     if (nome.length == 0) {
         document.getElementById('popup').style = " background: linear-gradient(to right, #ff4157, #ff4157); text-align:center"
         var blur = document.getElementById('blur')
         blur.classList.toggle('active')
         var popup = document.getElementById('popup')
         popup.classList.toggle('active')
         mens.innerHTML += 'Por favor, insira um nome para prosseguir.'
     } else {
         document.getElementById('popup').style = " background: linear-gradient(to right, #182438, #243b55, #3f4c6b, #2c3e50)"
         var blur = document.getElementById('blur')
         blur.classList.toggle('active')
         var popup = document.getElementById('popup')
         popup.classList.toggle('active')

         mens.innerHTML += `Olá, <strong>${nome}</strong>. Ao clicar <strong><a id="link" href="indexHomePage.html" rel="next">aqui</a></strong>, você será direcionado(a) a uma página com algumas ferramentas que podem lhe auxiliar nos seus estudos. Escolha uma e aproveite.`
     }

 }