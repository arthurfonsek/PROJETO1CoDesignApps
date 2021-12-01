document.addEventListener('DOMContentLoaded', function() {
    botao = document.querySelector('button');
    botao.addEventListener('click', function(event){
        usuario = document.querySelectorAll('input')[0].value
        console.log(usuario)
        localStorage.setItem('nome',usuario);
    })

})