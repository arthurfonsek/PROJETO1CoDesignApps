document.addEventListener('DOMContentLoaded', function() {
    
    botao = document.getElementById('botao_login')
    botao.addEventListener('click', function(event){
        usuario = document.querySelectorAll('input')[0].value
        localStorage.setItem('nome',usuario)
    })
});