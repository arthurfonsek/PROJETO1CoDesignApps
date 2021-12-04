document.addEventListener('DOMContentLoaded', function() {
    
    nome = document.querySelector("#nome")
    data = document.querySelector("#data")
    nome.innerHTML = localStorage.getItem("nome")
    data.innerHTML = localStorage.getItem("account_age")

    document.getElementById("voltar").addEventListener("click", function(){;
        window.history.back();
    });
});