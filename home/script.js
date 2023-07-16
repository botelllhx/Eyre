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

    campo.value = "R$ " + parseFloat(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}


$("#calendario").datepicker({
    showButtonPanel: true,
    dateFormat: 'dd/mm/yy',
    numberOfMonths: 1,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    onSelect: function (selectedDate) {
        var minDate = $(this).datepicker('getDate');
        if (minDate) {
            minDate.setDate(minDate.getDate() + 1);
            $("#calendario2").datepicker("option", "minDate", minDate);
        }
    }
});


$(function () {
    $("#calendario2").datepicker({
        showButtonPanel: true,
        dateFormat: 'dd/mm/yy',
        numberOfMonths: 1,
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    });
});


function trocaImagem() {
    document.getElementById("minha-imagem").src = "./home/imagens/paisagem2.jpg";
}

function retornaImagem() {
    document.getElementById("minha-imagem").src = "./home/imagens/paisagem.jpg";
}

