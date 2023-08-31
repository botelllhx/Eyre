//========================BOTOES========================
function showPaymentForm(paymentMethod) {
    var paymentForms = document.getElementsByClassName("payment-form");
    for (var i = 0; i < paymentForms.length; i++) {
        paymentForms[i].style.display = "none";
    }
    document.getElementById(paymentMethod + "-form").style.display = "block";
}

document.addEventListener('DOMContentLoaded', function () {
    showPaymentForm('alterarDados'); // Substitua 'alterarDados' pelo método de pagamento padrão
    
    // Exibir o botão "DETALHES SOBRE A VIAGEM"
    const buttonDetalhesViagem = document.querySelector(".botaoDetalhesViagem");
    buttonDetalhesViagem.style.display = "block";
});

//====================BOTAO BILHETE DE VIAGEM======================
function toggleSelectionCategoria(categoria) {
    const turisticoContent = document.getElementById("historicoSalvadorDetalhes-form");
    const historicoForm = document.getElementById("historico-form");
    
    // Inverter a visibilidade do conteúdo
    turisticoContent.style.display = turisticoContent.style.display === "none" ? "block" : "none";
    historicoForm.style.display = historicoForm.style.display === "none" ? "block" : "none";
}

//CAMPO NOME
function habilitarEdicaoNome() {
    var campoNome = document.getElementById("campoNome");
    campoNome.readOnly = false;
    campoNome.focus();
}

function limparTextoNome() {
    var campoNome = document.getElementById("campoNome");
    if (campoNome.value === "Nome") {
        campoNome.value = "";
    }
}

function recuperarOpacidadeNome() {
    var campoNome = document.getElementById("campoNome");
    campoNome.style.opacity = 1;
}

function toTitleCase(str) {
    return str.replace(/\b\w+/g, function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}

function transformarPalavras() {
    let campoNome = document.getElementById("campoNome");
    campoNome.value = toTitleCase(campoNome.value);
    var tecla = event.which || event.keyCode;
    if (tecla >= 48 && tecla <= 57) {
        event.preventDefault();
    }
}

//CAMPO NASCIMENTO
function habilitarEdicaoNascimento() {
    var campoNome = document.getElementById("campoNascimento");
    campoNome.readOnly = false;
    campoNome.focus();
}

function limparTextoNascimento() {
    var campoNome = document.getElementById("campoNascimento");
    if (campoNome.value === "Nascimento") {
        campoNome.value = "";
    }
}

function recuperarOpacidadeNascimento() {
    var campoNome = document.getElementById("campoNascimento");
    campoNome.style.opacity = 1;
}

//CAMPO CPF
function habilitarEdicaoCPF() {
    var campoNome = document.getElementById("campoCPF");
    campoNome.readOnly = false;
    campoNome.focus();
}

function limparTextoCPF() {
    var campoNome = document.getElementById("campoCPF");
    if (campoNome.value === "CPF") {
        campoNome.value = "";
    }
}

function recuperarOpacidadeCPF() {
    var campoNome = document.getElementById("campoCPF");
    campoNome.style.opacity = 1;
}

function formatCPF() {
    const cpfInput = document.getElementById('campoCPF');
    let cpf = cpfInput.value.replace(/\D/g, '');

    if (cpf.length > 3 && cpf.length <= 6) {
        cpf = cpf.replace(/(\d{3})(\d+)/, '$1.$2');
    } else if (cpf.length > 6 && cpf.length <= 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    } else if (cpf.length > 9 && cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4');
    }

    cpfInput.value = cpf;
}

//CAMPO CEP
function formatCEP() {
    const cepInput = document.getElementById('campoCEP');
    const rawValue = cepInput.value.replace(/[^\d]/g, '');

    if (rawValue.length <= 5) {
        cepInput.value = rawValue;
    } else {
        cepInput.value = `${rawValue.slice(0, 5)}-${rawValue.slice(5, 8)}`;
    }
}

function limparTextoCEP() {
    const cepInput = document.getElementById('campoCEP');
    cepInput.value = '';
}

function recuperarOpacidadeCEP() {
    const cepInput = document.getElementById('campoCEP');
    cepInput.style.opacity = 1;
}

function habilitarEdicaoCEP() {
    const cepInput = document.getElementById('campoCEP');
    cepInput.removeAttribute('readonly');
    cepInput.focus(); // Adicione esta linha para focar no campo após habilitar a edição
}

//CAMPO EMAIL
function habilitarEdicaoEmail() {
    var campoNome = document.getElementById("campoEmail");
    campoNome.readOnly = false;
    campoNome.focus();
}

function limparTextoEmail() {
    var campoNome = document.getElementById("campoEmail");
    if (campoNome.value === "E-mail") {
        campoNome.value = "";
    }
}

function recuperarOpacidadeEmail() {
    var campoNome = document.getElementById("campoEmail");
    campoNome.style.opacity = 1;
}

//CAMPO TELEFONE
function habilitarEdicaoTelefone() {
    var campoNome = document.getElementById("campoTelefone");
    campoNome.readOnly = false;
    campoNome.focus();
}

function limparTextoTelefone() {
    var campoNome = document.getElementById("campoTelefone");
    if (campoNome.value === "Telefone") {
        campoNome.value = "";
    }
}

function recuperarOpacidadeTelefone() {
    var campoNome = document.getElementById("campoTelefone");
    campoNome.style.opacity = 1;
}

function formatTelefone() {
    const telefoneInput = document.getElementById('campoTelefone');
    telefoneInput.addEventListener('keyup', formatTelefone);
    let telefone = telefoneInput.value.replace(/\D/g, '');

    if (telefone.length >= 11 && telefone.length <= 11) {
        telefone = telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    } else if (telefone.length >= 6 && telefone.length <= 9) {
        telefone = telefone.replace(/(\d{4,5})(\d{4})/, '$1-$2');
    }

    telefoneInput.value = telefone;
}

//CAMPO SENHA
function habilitarEdicaoSenha() {
    var campoNome = document.getElementById("campoSenha");
    campoNome.readOnly = false;
    campoNome.focus();
}

function limparTextoSenha() {
    var campoNome = document.getElementById("campoSenha");
    if (campoNome.value === "Senha") {
        campoNome.value = "";
    }
}

function recuperarOpacidadeSenha() {
    var campoNome = document.getElementById("campoSenha");
    campoNome.style.opacity = 1;
}

//CAMPO CONFIRMA SENHA
function habilitarEdicaoConfirmaSenha() {
    var campoNome = document.getElementById("campoConfirmaSenha");
    campoNome.readOnly = false;
    campoNome.focus();
}

function limparTextoConfirmaSenha() {
    var campoNome = document.getElementById("campoConfirmaSenha");
    if (campoNome.value === "Confirma Senha") {
        campoNome.value = "";
    }
}

function recuperarOpacidadeConfirmaSenha() {
    var campoNome = document.getElementById("campoConfirmaSenha");
    campoNome.style.opacity = 1;
}

// TROCAR TELA AO CLICAR NOS BOTÕES E MUDAR DE COR
function showPaymentForm(paymentMethod) {
    var paymentForms = document.getElementsByClassName("payment-form");
    for (var i = 0; i < paymentForms.length; i++) {
        paymentForms[i].style.display = "none";
    }
    document.getElementById(paymentMethod + "-form").style.display = "block";

    var buttons = document.getElementsByClassName("botoesMudarOpcoes");
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
}

// MODAL POLITICA DE PRIVACIDADE
function abrirModal() {
    document.getElementById('modalPoliticaPrivacidade').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modalPoliticaPrivacidade').style.display = 'none';
}

function abrirTextoModal() {

}

// Adicione um evento de clique ao documento
document.addEventListener('click', function (event) {
    var modal = document.getElementById('modalTermosCondicoes');

    // Verifique se o clique ocorreu fora do modal e se o modal está aberto
    if (event.target === modal && modal.style.display === 'block') {
        fecharModalTermos();
    }
});

function abrirModalTermos() {
    var modal = document.getElementById('modalTermosCondicoes');
    modal.style.display = 'block';
}

function fecharModalTermos() {
    var modal = document.getElementById('modalTermosCondicoes');
    modal.style.display = 'none';
}

document.addEventListener('click', function (event) {
    var modal = document.getElementById('modalPoliticaPrivacidade');

// Verifique se o clique ocorreu fora do modal e se o modal está aberto
    if (event.target === modal && modal.style.display === 'block') {
        fecharModalTermos();
    }
});

function abrirModalTermos() {
    var modal = document.getElementById('modalPoliticaPrivacidade');
    modal.style.display = 'block';
}

function fecharModalTermos() {
    var modal = document.getElementById('modalPoliticaPrivacidade');
    modal.style.display = 'none';
}

// OCULTAR RESPOSTAS 
function mostrarResposta(numeroPergunta) {
    var resposta = document.getElementById("resposta" + numeroPergunta);
    if (resposta.style.display === "none") {
        resposta.style.display = "block";
    } else {
        resposta.style.display = "none";
    }
}

// barra de rolagem 
var scrollContainer = document.getElementById('scrollContainer');
scrollContainer.scrollLeft = -100; // Ajuste o valor conforme necessário

//CAMPO DADOS MORADIA
async function fetchAddressData(input) {
    const cep = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (cep.length >= 5) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if (!data.erro) {
                document.getElementById('ruaInput').value = data.logradouro || '';
                document.getElementById('cidadeInput').value = data.localidade || '';
                document.getElementById('estadoInput').value = data.uf || '';
                document.getElementById('paisInput').value = 'Brasil';
            }
        } catch (error) {
            console.error('Error fetching address data:', error);
        }
    }
}

//===================CEP=================
function habilitarEdicaoCep() {
    var campoNome = document.getElementById("cepInput");
    campoNome.readOnly = false;
    campoNome.focus();
}

function limparTextoCep() {
    var campoNome = document.getElementById("cepInput");
    if (campoNome.value === "Cep") {
        campoNome.value = "";
    }
}

function recuperarOpacidadeCep() {
    var campoNome = document.getElementById("Cep");
    campoNome.style.opacity = 1;
}

//=================RUA=================
function habilitarEdicaoRua() {
    var campoNome = document.getElementById("ruaInput");
    campoNome.readOnly = false;
    campoNome.focus();
}

function limparTextoRua() {
    var campoNome = document.getElementById("ruaInput");
    if (campoNome.value === "Cep") {
        campoNome.value = "";
    }
}

function recuperarOpacidadeRua() {
    var campoNome = document.getElementById("Rua");
    campoNome.style.opacity = 1;
}

//=============NUMERO================
function limitarInput(inputElement) {
    inputElement.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '').substr(0, 5);
    });
}

function habilitarEdicaoNumero() {
    var campoNome = document.getElementById("numeroInput");
    campoNome.readOnly = false;
    campoNome.focus();
}

//==============COMPLEMENTO================
function limitarAlfanumericos(inputElement) {
    inputElement.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-Z0-9\s]/g, '' ).substr(0, 30);
    });
}

function habilitarEdicaoComplemento() {
    var campoNome = document.getElementById("complementoInput");
    campoNome.readOnly = false;
    campoNome.focus();
}

//==============CIDADE===============
function habilitarEdicaoCidade() {
    var campoNome = document.getElementById("cidadeInput");
    campoNome.readOnly = false;
    campoNome.focus();
}

function limparTextoCidade() {
    var campoNome = document.getElementById("cidadeInput");
    if (campoNome.value === "Cep") {
        campoNome.value = "";
    }
}

function recuperarOpacidadeCidade() {
    var campoNome = document.getElementById("Cidade");
    campoNome.style.opacity = 1;
}

//=================ESTADO==============
function habilitarEdicaoEstado() {
    var campoNome = document.getElementById("estadoInput");
    campoNome.readOnly = false;
    campoNome.focus();
}

function limparTextoEstado() {
    var campoNome = document.getElementById("estadoInput");
    if (campoNome.value === "Cep") {
        campoNome.value = "";
    }
}

function recuperarOpacidadeEstado() {
    var campoNome = document.getElementById("Estado");
    campoNome.style.opacity = 1;
}

//==================PAIS===================
function habilitarEdicaoPais() {
    var campoNome = document.getElementById("paisInput");
    campoNome.readOnly = false;
    campoNome.focus();
}

function limparTextoPais() {
    var campoNome = document.getElementById("paisInput");
    if (campoNome.value === "Cep") {
        campoNome.value = "";
    }
}

function recuperarOpacidadePais() {
    var campoNome = document.getElementById("Pais");
    campoNome.style.opacity = 1;
}