document.addEventListener('DOMContentLoaded', function () {
    const botaoacc = document.getElementById('btn-acessibilidade');
    const opacc = document.getElementById('opcoes-ac');
    var img = document.querySelector("#image");

    botaoacc.addEventListener('click', function () {
        botaoacc.classList.toggle('rotacao-botao');
        opacc.classList.toggle('apresenta-lista');
    })

    const FonteMaior = document.getElementById('aumentar-fonte');
    const FonteMenor = document.getElementById('diminuir-fonte');

    const mudacons = document.getElementById('alterna-contraste');

    let tamanhoAtual = 1;

    FonteMaior.addEventListener('click', function () {
        tamanhoAtual += 0.1;
        document.body.style.fontSize = `${tamanhoAtual}rem`
    })
    FonteMenor.addEventListener('click', function () {
        tamanhoAtual -= 0.1;
        document.body.style.fontSize = `${tamanhoAtual}rem`
    })
    mudacons.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    })
})

ScrollReveal().reveal('#inicio', { delay: 250 });
ScrollReveal().reveal('#cbjr', { delay: 250 });
ScrollReveal().reveal('#galeria', { delay: 250 });
ScrollReveal().reveal('#contato', { delay: 250 });