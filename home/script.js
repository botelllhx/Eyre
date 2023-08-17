$(document).ready(function () {
    $('#scrollButton').on('click', function (event) {
        event.preventDefault();

        var target = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    });
});

function formatarMoeda(campo) {
    var valor = campo.value.replace(/\D/g, '');
    var quantidadeDigitos = valor.length;

    if (quantidadeDigitos === 0) {
        campo.value = '';
        return;
    }

    if (quantidadeDigitos < 3) {
        valor = '0'.repeat(3 - quantidadeDigitos) + valor;
    }

    var parteInteira = valor.slice(0, -2);
    var parteDecimal = valor.slice(-2);
    valor = parteInteira + '.' + parteDecimal;

    campo.value = parseFloat(valor);
}

function trocaImagem() {
    document.getElementById("minha-imagem").src = "./home/imagens/paisagem2.jpg";
}

function retornaImagem() {
    document.getElementById("minha-imagem").src = "./home/imagens/paisagem.jpg";
}
