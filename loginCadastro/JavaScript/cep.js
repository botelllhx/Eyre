$('#cep').blur(function () {
    var cep = this.value.replace(/[^0-9]/, "");
    if (cep.length != 8) {
        return false;
    }

    var url = 'https://viacep.com.br/ws/' + cep + '/json/';


    $.getJSON(url, function (dadosRetorno) {
        try {
            
            $('#rua').val(dadosRetorno.logradouro);
            $('#bairro').val(dadosRetorno.bairro);
            $('#cidade').val(dadosRetorno.localidade);
            $('#estado').val(dadosRetorno.uf);
        } catch (ex) { }
    });
});