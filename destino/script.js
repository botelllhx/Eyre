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

    valor = valor.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    campo.value = "R$ " + valor + ".00";
}