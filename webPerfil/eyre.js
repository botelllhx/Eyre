//========================BOTOES========================
function showPaymentForm(paymentMethod) {
    var paymentForms = document.getElementsByClassName("payment-form");
    for (var i = 0; i < paymentForms.length; i++) {
        paymentForms[i].style.display = "none";
    }
    document.getElementById(paymentMethod + "-form").style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
    showPaymentForm('alterarDados'); // Substitua 'alterarDados' pelo método de pagamento padrão
});

let botaoDetalhesVisivel = true;

function toggleSelectionCategoria(categoria) {
    const historicoForm = document.getElementById("historico-form");
    const turisticoContent = document.getElementById("historicoSalvadorDetalhes-form");
    const buttonDetalhesViagem = document.querySelector(".botaoDetalhesViagem");

    if (categoria === "historicoSalvadorDetalhes" && botaoDetalhesVisivel) {
        botaoDetalhesVisivel = false;

        buttonDetalhesViagem.style.display = "none"; // Oculta o botão "DETALHES SOBRE A VIAGEM"
        turisticoContent.style.display = "block"; // Exibe o conteúdo do formulário

        historicoForm.style.display = "none"; // Oculta a seção de histórico de viagens
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const buttonDetalhesViagem = document.querySelector(".botaoDetalhesViagem");
    buttonDetalhesViagem.style.display = "block";
});
//------------------------------------------------------

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
//----------------------------------------------------------

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
//------------------------------------------------------------

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
//----------------------------------------------------------------------------------

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
//--------------------------------------------------------------

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
//--------------------------------------------------------------

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
//------------------------------------------------------------------------------------------------

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
//------------------------------------------------------------------------------------------------

// MODAL POLITICA DE PRIVACIDADE

function abrirModal() {
    document.getElementById('modalPoliticaPrivacidade').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modalPoliticaPrivacidade').style.display = 'none';
}

function abrirTextoModal() {
    
}
//------------------------------------------------------------------------------------------------

// MODAL TERMOS E CONDIÇÕES

// function abrirModalTermos() {
//     document.getElementById('modalTermosCondicoes').style.display = 'block';
// }

// function fecharModalTermos() {
//     document.getElementById('modalTermosCondicoes').style.display = 'none';
// }

// Adicione um evento de clique ao documento
document.addEventListener('click', function(event) {
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

document.addEventListener('click', function(event) {
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
//------------------------------------------------------------------------------------------------

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