document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("voltar").addEventListener("click", function(){;
        window.history.back();
    });
    nome = document.querySelector(".nome")
    if((typeof(nome) != null) && (typeof(nome) != undefined)){
        types = [" postou um vídeo", " postou uma imagem", " criou uma comunidade", " divulgou um evento"]
        tipo_post = parseInt(nome.innerHTML)
        nome.innerHTML = "@"+localStorage.getItem('nome') + types[tipo_post] + ": "
    }
});