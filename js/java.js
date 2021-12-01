document.addEventListener('DOMContentLoaded', function() {
    
    botao = document.getElementById('botao_login');
    botao.addEventListener('click', function(event){
        usuario = document.querySelectorAll('input')[0].value
        console.log(usuario)
        localStorage.setItem('nome',usuario);
    })

    document.getElementById("voltar").addEventListener("click", function(){;
        window.history.back();
    });
});