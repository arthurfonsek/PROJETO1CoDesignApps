document.addEventListener('DOMContentLoaded', function() {

    botao = document.getElementById('botao_login')
    botao.addEventListener('click', function(event){
        usuario = document.querySelectorAll('input')[0].value
        if(usuario == ""){
            usuario = "João_Default"
        }
        dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]
        meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
        
        utc = Date.now()
        data_hora = new Date(utc)
        date = data_hora.getDate()
        weekday = data_hora.getDay()
        month = data_hora.getMonth()
        hour = data_hora.getHours()
        minute = data_hora.getMinutes()
        if(minute < 10){
            minute = "0"+String(minute)
        }else{
            minute = String(minute)
        }
        timestamp = String(dias[weekday]) + ", " + String(date+1) + " de " + String(meses[month]) + " " + String(hour)+":"+minute

        localStorage.setItem('nome',usuario)
        localStorage.setItem('account_age',timestamp)
    })
});