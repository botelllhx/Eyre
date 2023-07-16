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

    campo.value = "R$ " + parseFloat(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}