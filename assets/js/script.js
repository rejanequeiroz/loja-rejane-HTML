let nome = document.querySelector('#nome')
let erroNome = document.querySelector('#erroNome')


let email = document.querySelector('#email')
let erroEmail = document.querySelector('#erroEmail')

let assunto = document.querySelector('#assunto')
let erroAssunto = document.querySelector('#erroAssunto')

let nomeOK = false
let emailOK = false
let assuntoOK = false

let mapa = document.querySelector('#mapa')

function validaNome(){
    if(nome.value.length < 3 ){
        erroNome.innerHTML = 'Nome Invalido'
    }else{
        erroNome.innerHTML = ''
        nomeOK = true
    }
}

function validaEmail(){
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        erroEmail.innerHTML = 'Email Invalido'
    }else{
        erroEmail.innerHTML = ''
        emailOK = true
    }
}

function validaAssunto(){
    if(assunto.value.length > 10){
        erroAssunto.innerHTML = 'limite de caracteres excedido (o limite 100 caracteres) '
    }else{
        erroAssunto.innerHTML = ''
        assuntoOK = true
    }
}

function enviar(){
    if(nomeOK && emailOK && assuntoOK){
        alert('Email enviado com sucesso')
    }else{
        alert('preencha as informaçoes corretamente !')
    }
   
}

function mapaZoom(){
    mapa.style.width = '600px'
    mapa.style.height = '400px'

}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}