// Rolar página pra baixo botão Começar

$(document).ready(function () {
    $('#scrollButton').on('click', function (event) {
        event.preventDefault();

        var target = $($(this).attr('href'));
        var scrollOffset = 0;
        var scrollSpeed = 1300;

        if ($(window).width() < 768) {
            scrollOffset = 58;
            scrollSpeed = 1400;
        }

        var scrollPosition = target.offset().top - scrollOffset;

        $('html, body').animate({
            scrollTop: scrollPosition
        }, scrollSpeed);
    });
});


// Formata moeda para real e limita digitos

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


// Troca imagens de dicas de lugar

var interval;

function trocaImagem() {
    document.getElementById("minha-imagem").src = "./home/imagens/paisagem2.jpg";
}

function retornaImagem() {
    document.getElementById("minha-imagem").src = "./home/imagens/paisagem.jpg";
}

function isMobile() {
    return window.innerWidth < 768;
}

if (isMobile()) {
    interval = setInterval(function () {
        trocaImagem();
        setTimeout(retornaImagem, 1000);
    }, 3000);
} else {
    var minhaImagem = document.getElementById("minha-imagem");
    minhaImagem.addEventListener('mouseover', trocaImagem);
    minhaImagem.addEventListener('mouseout', retornaImagem);
}


// Ocultar imagem cifrão no input Orçamento

var isImagemCifraoVisible = true;

function ocultarImagemCifrao() {
    if (isImagemCifraoVisible) {
        var input = document.getElementById("orcamento");
        input.classList.add("ocultar-imagem");
        isImagemCifraoVisible = false;
    }
}


function toggleCustomCheck(element) {
    element.classList.toggle("checked");
}


// Botão pra retornar para o topo

var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $('button.back-to-top').addClass('show');
    } else {
        $('button.back-to-top').removeClass('show');
    }
});

$('button.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});

var skeleton = '<div class="skeleton"><div class="skeleton-wrapper"><div class="skeleton-wrapper-inner"><div class="skeleton-wrapper-body"><div class="skeleton-avatar"></div><div class="skeleton-author"></div><div class="skeleton-label"></div><div class="skeleton-content-1"></div><div class="skeleton-content-2"></div><div class="skeleton-content-3"></div></div></div></div></div>';
for (var i = 0; i < 10; i++) {
    $('#content').append(skeleton);
}

Waves.attach('button.back-to-top', 'waves-effect');
Waves.init();


// Função para definir um cookie

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}


// Função para obter o valor de um cookie

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


// Função para ativar o contraste

function ativarContraste() {
    document.body.classList.add("alto-contraste");
    setCookie("contrasteAtivo", "true", 30); // Armazena o estado do contraste por 30 dias
    var ativaContraste = document.querySelector(".imgContrasteAtivo");
    ativaContraste.src = "./home/imagens/contrasteBranco.png";

    var desativaContraste = document.querySelector(".imgContrasteDesativado");
    desativaContraste.src = "./home/imagens/no-contrasteBranco.png";

    var logo = document.querySelector(".logo");
    logo.src = "./home/imagens/logoEyreRodapeBranco.png";

    var lampada = document.querySelector(".lampada");
    lampada.src = "./home/imagens/lampadaBranca.png"

    var logoRodape = document.querySelector(".imgLogoEyreRodape");
    logoRodape.src = "./home/imagens/logoEyreRodapeBranco.png";

    var instagram = document.querySelector(".instagram");
    instagram.src = "./home/imagens/instagramBranco.png";

    var twitter = document.querySelector(".twitter");
    twitter.src = "./home/imagens/twitterBranco.png";

    var linkedin = document.querySelector(".linkedin");
    linkedin.src = "./home/imagens/linkedinBranco.png";

    var facebook = document.querySelector(".facebook");
    facebook.src = "./home/imagens/facebookBranco.png";

    var cifrao = document.querySelector(".imgCifrao");
    cifrao.src = "./home/imagens/cifraoBranco.png";

    var localizacaoPartida = document.querySelector(".botaoPartida");
    localizacaoPartida.src = "./home/imagens/localizacaoBranca.png";

    var localizacaoDestino = document.querySelector(".botaoDestino");
    localizacaoDestino.src = "./home/imagens/localizacaoBranca.png";

    var calendario = document.querySelector(".DateInput");
    calendario.src = "./home/imagens/calendarioHomeBranco.png";

    var appstore = document.querySelector(".Appstore");
    appstore.src = "./home/imagens/socialAppstoreBranco.png";

    var googleplay = document.querySelector(".Googleplay");
    googleplay.src = "./home/imagens/socialGoogleplayBranco.png";
}


// Função para desativar o contraste

function desativarContraste() {
    document.body.classList.remove("alto-contraste");
    setCookie("contrasteAtivo", "false", 30);
    var ativaContraste = document.querySelector(".imgContrasteAtivo");
    ativaContraste.src = "./home/imagens/contraste.png";

    var desativaContraste = document.querySelector(".imgContrasteDesativado");
    desativaContraste.src = "./home/imagens/no-contraste.png";

    var logo = document.querySelector(".logo");
    logo.src = "./home/imagens/logoEyreRodape.png";

    var lampada = document.querySelector(".lampada");
    lampada.src = "./home/imagens/lampada.png"

    var logoRodape = document.querySelector(".imgLogoEyreRodape");
    logoRodape.src = "./home/imagens/logoEyreRodape.png";

    var instagram = document.querySelector(".instagram");
    instagram.src = "./home/imagens/instagram.png";

    var twitter = document.querySelector(".twitter");
    twitter.src = "./home/imagens/twitter.png";

    var linkedin = document.querySelector(".linkedin");
    linkedin.src = "./home/imagens/linkedin.png";

    var facebook = document.querySelector(".facebook");
    facebook.src = "./home/imagens/facebook.png";

    var cifrao = document.querySelector(".imgCifrao");
    cifrao.src = "./home/imagens/cifrao.png";

    var localizacaoPartida = document.querySelector(".botaoPartida");
    localizacaoPartida.src = "./home/imagens/localizacaoCinza.png";

    var localizacaoDestino = document.querySelector(".botaoDestino");
    localizacaoDestino.src = "./home/imagens/localizacaoCinza.png";

    var calendario = document.querySelector(".DateInput");
    calendario.src = "./home/imagens/calendarioHome.png";

    var appstore = document.querySelector(".Appstore");
    appstore.src = "./home/imagens/socialAppstore.png";

    var googleplay = document.querySelector(".Googleplay");
    googleplay.src = "./home/imagens/socialGoogleplay.png";
}


// Verifica se o contraste estava ativo anteriormente (usando cookie)

var contrasteAtivo = getCookie("contrasteAtivo");
if (contrasteAtivo === "true") {
    ativarContraste();
}

document.getElementById("ativarContraste").addEventListener("click", ativarContraste);
document.getElementById("desativarContraste").addEventListener("click", desativarContraste);


// Redirecionamentos de links

var imgLogoEyreRodape = document.querySelector('.imgLogoEyreRodape');
imgLogoEyreRodape.addEventListener('click', function () {
    window.location.href = './index.html';
});

var imgLogoEyreTopo = document.querySelector('.logo');
imgLogoEyreTopo.addEventListener('click', function () {
    window.location.href = './index.html';
});

function abrirEmNovaGuia(url) {
    window.open(url, '_blank');
}

const instagramIcon = document.getElementById('instagramIcon');
instagramIcon.addEventListener('click', function () {
    const instagramURL = 'https://www.instagram.com';
    abrirEmNovaGuia(instagramURL)
});

const twitterIcon = document.getElementById('twitterIcon');
twitterIcon.addEventListener('click', function () {
    const twitterURL = 'https://twitter.com';
    abrirEmNovaGuia(twitterURL)
});

const linkedinIcon = document.getElementById('linkedinIcon');
linkedinIcon.addEventListener('click', function () {
    const linkedinURL = 'https://www.linkedin.com';
    abrirEmNovaGuia(linkedinURL);
});

const facebookIcon = document.getElementById('facebookIcon');
facebookIcon.addEventListener('click', function () {
    const facebookURL = 'https://www.facebook.com';
    abrirEmNovaGuia(facebookURL);
});

const appstoreIcon = document.getElementById('appstoreIcon');
appstoreIcon.addEventListener('click', function () {
    const appstoreURL = 'https://www.apple.com/app-store';
    abrirEmNovaGuia(appstoreURL);
});

const googleplayIcon = document.getElementById('googleplayIcon');
googleplayIcon.addEventListener('click', function () {
    const googleplayURL = 'https://play.google.com';
    abrirEmNovaGuia(googleplayURL);
});

const emailLink = document.getElementById('emailLink');
emailLink.addEventListener('click', function () {
    const outlookWebURL = 'https://outlook.live.com';
    abrirEmNovaGuia(outlookWebURL);
});


// Aumento, diminuição e restauração do tamanho da fonte

document.querySelector('.metade-esquerda-fonte').addEventListener('click', function () {
    aumentarFonte();
});

document.querySelector('.metade-direita-fonte').addEventListener('click', function () {
    diminuirFonte();
});

document.querySelector('.metade-meio-fonte').addEventListener('click', function () {
    restaurarFonte();
});

function aumentarFonte() {
    const textoConvidativo = document.querySelector('.textoConvidativo p');
    const entrarOuCadastrar = document.querySelector('.entrarOuCadastrar h3');
    const botaoComecar = document.querySelector('.botaoComecar');
    const tituloDestino = document.querySelector('.tituloDestino');
    const dica = document.querySelector('.dica');
    const botaoOrcamento = document.querySelector('.botaoOrcamento');
    const botaoPartida = document.querySelector('.botaoPartida');
    const botaoDestino = document.querySelector('.botaoDestino');
    const DateInput = document.querySelector('.DateInput');
    const divCheckBox = document.querySelector('.divCheckBox span');
    const botaoJornadas = document.querySelector('.botaoJornadas');
    const tituloAvaliacoes = document.querySelector('.tituloAvaliacoes');
    const avaliacaoIndividualRafael = document.querySelector('.avaliacaoIndividualRafael');
    const nomeAvaliadorRafael = document.querySelector('.nomeAvaliadorRafael');
    const avaliacaoIndividualKaik = document.querySelector('.avaliacaoIndividualKaik');
    const nomeAvaliadorKaik = document.querySelector('.nomeAvaliadorKaik');
    const avaliacaoIndividualAllan = document.querySelector('.avaliacaoIndividualAllan');
    const nomeAvaliadorAllan = document.querySelector('.nomeAvaliadorAllan');
    const paises = document.querySelector('.paises');
    const regioes = document.querySelector('.regioes');
    const cidades = document.querySelector('.cidades');
    const bairros = document.querySelector('.bairros');
    const aeroportos = document.querySelector('.aeroportos');
    const hoteis = document.querySelector('.hoteis');
    const locaisInteresse = document.querySelector('.locaisInteresse');
    const casasApartamentos = document.querySelector('.casasApartamentos');
    const apartamentos = document.querySelector('.apartamentos');
    const resorts = document.querySelector('.resorts');
    const villas = document.querySelector('.villas');
    const hostels = document.querySelector('.hostels');
    const camaCafe = document.querySelector('.camaCafe');
    const casasHospedes = document.querySelector('.casasHospedes');
    const latam = document.querySelector('.latam');
    const azul = document.querySelector('.azul');
    const gol = document.querySelector('.gol');
    const united = document.querySelector('.united');
    const formasPagamento = document.querySelector('.formasPagamento');
    const email = document.querySelector('.email');
    const conecteConosco = document.querySelector('.conecteConosco');
    const baixarAplicativo = document.querySelector('.baixarAplicativo');
    const endereco = document.querySelector('.endereco');


    textoConvidativo.classList.add('aumentar-fonte-textoConvidativo');
    entrarOuCadastrar.classList.add('aumentar-fonte-entrarOuCadastrar');
    botaoComecar.classList.add('aumentar-fonte-botaoComecar');
    tituloDestino.classList.add('aumentar-fonte-tituloDestino');
    dica.classList.add('aumentar-fonte-dica');
    botaoOrcamento.classList.add('aumentar-fonte-botaoOrcamento');
    botaoPartida.classList.add('aumentar-fonte-botaoPartida');
    botaoDestino.classList.add('aumentar-fonte-botaoDestino');
    DateInput.classList.add('aumentar-fonte-DateInput');
    divCheckBox.classList.add('aumentar-fonte-divCheckBox');
    botaoJornadas.classList.add('aumentar-fonte-botaoJornadas');
    tituloAvaliacoes.classList.add('aumentar-fonte-tituloAvaliacoes');
    avaliacaoIndividualRafael.classList.add('aumentar-fonte-avaliacaoIndividualRafael');
    nomeAvaliadorRafael.classList.add('aumentar-fonte-nomeAvaliadorRafael');
    avaliacaoIndividualKaik.classList.add('aumentar-fonte-avaliacaoIndividualKaik');
    nomeAvaliadorKaik.classList.add('aumentar-fonte-nomeAvaliadorKaik');
    avaliacaoIndividualAllan.classList.add('aumentar-fonte-avaliacaoIndividualAllan');
    nomeAvaliadorAllan.classList.add('aumentar-fonte-nomeAvaliadorAllan');
    paises.classList.add('aumentar-fonte-paises');
    regioes.classList.add('aumentar-fonte-regioes');
    cidades.classList.add('aumentar-fonte-cidades');
    bairros.classList.add('aumentar-fonte-bairros');
    aeroportos.classList.add('aumentar-fonte-aeroportos');
    hoteis.classList.add('aumentar-fonte-hoteis');
    locaisInteresse.classList.add('aumentar-fonte-locaisInteresse');
    casasApartamentos.classList.add('aumentar-fonte-casasApartamentos');
    apartamentos.classList.add('aumentar-fonte-apartamentos');
    resorts.classList.add('aumentar-fonte-resorts');
    villas.classList.add('aumentar-fonte-villas');
    hostels.classList.add('aumentar-fonte-hostels');
    camaCafe.classList.add('aumentar-fonte-camaCafe');
    casasHospedes.classList.add('aumentar-fonte-casasHospedes');
    latam.classList.add('aumentar-fonte-latam');
    azul.classList.add('aumentar-fonte-azul');
    gol.classList.add('aumentar-fonte-gol');
    united.classList.add('aumentar-fonte-united');
    formasPagamento.classList.add('aumentar-fonte-formasPagamento');
    email.classList.add('aumentar-fonte-email');
    conecteConosco.classList.add('aumentar-fonte-conecteConosco');
    baixarAplicativo.classList.add('aumentar-fonte-baixarAplicativo');
    endereco.classList.add('aumentar-fonte-endereco');


    textoConvidativo.classList.remove('diminuir-fonte-textoConvidativo');
    entrarOuCadastrar.classList.remove('diminuir-fonte-entrarOuCadastrar');
    botaoComecar.classList.remove('diminuir-fonte-botaoComecar');
    tituloDestino.classList.remove('diminuir-fonte-tituloDestino');
    dica.classList.remove('diminuir-fonte-dica');
    botaoOrcamento.classList.remove('diminuir-fonte-botaoOrcamento');
    botaoPartida.classList.remove('diminuir-fonte-botaoPartida');
    botaoDestino.classList.remove('diminuir-fonte-botaoDestino');
    DateInput.classList.remove('diminuir-fonte-DateInput');
    divCheckBox.classList.remove('diminuir-fonte-divCheckBox');
    botaoJornadas.classList.remove('diminuir-fonte-botaoJornadas');
    tituloAvaliacoes.classList.remove('diminuir-fonte-tituloAvaliacoes');
    avaliacaoIndividualRafael.classList.remove('diminuir-fonte-avaliacaoIndividualRafael');
    nomeAvaliadorRafael.classList.remove('diminuir-fonte-nomeAvaliadorRafael');
    avaliacaoIndividualKaik.classList.remove('diminuir-fonte-avaliacaoIndividualKaik');
    nomeAvaliadorKaik.classList.remove('diminuir-fonte-nomeAvaliadorKaik');
    avaliacaoIndividualAllan.classList.remove('diminuir-fonte-avaliacaoIndividualAllan');
    nomeAvaliadorAllan.classList.remove('diminuir-fonte-nomeAvaliadorAllan');
    paises.classList.remove('diminuir-fonte-paises');
    regioes.classList.remove('diminuir-fonte-regioes');
    cidades.classList.remove('diminuir-fonte-cidades');
    bairros.classList.remove('diminuir-fonte-bairros');
    aeroportos.classList.remove('diminuir-fonte-aeroportos');
    hoteis.classList.remove('diminuir-fonte-hoteis');
    locaisInteresse.classList.remove('diminuir-fonte-locaisInteresse');
    casasApartamentos.classList.remove('diminuir-fonte-casasApartamentos');
    apartamentos.classList.remove('diminuir-fonte-apartamentos');
    resorts.classList.remove('diminuir-fonte-resorts');
    villas.classList.remove('diminuir-fonte-villas');
    hostels.classList.remove('diminuir-fonte-hostels');
    camaCafe.classList.remove('diminuir-fonte-camaCafe');
    casasHospedes.classList.remove('diminuir-fonte-casasHospedes');
    latam.classList.remove('diminuir-fonte-latam');
    azul.classList.remove('diminuir-fonte-azul');
    gol.classList.remove('diminuir-fonte-gol');
    united.classList.remove('diminuir-fonte-united');
    formasPagamento.classList.remove('diminuir-fonte-formasPagamento');
    email.classList.remove('diminuir-fonte-email');
    conecteConosco.classList.remove('diminuir-fonte-conecteConosco');
    baixarAplicativo.classList.remove('diminuir-fonte-baixarAplicativo');
    endereco.classList.remove('diminuir-fonte-endereco');
}

function diminuirFonte() {
    const textoConvidativo = document.querySelector('.textoConvidativo p');
    const entrarOuCadastrar = document.querySelector('.entrarOuCadastrar h3');
    const botaoComecar = document.querySelector('.botaoComecar');
    const tituloDestino = document.querySelector('.tituloDestino');
    const dica = document.querySelector('.dica');
    const botaoOrcamento = document.querySelector('.botaoOrcamento');
    const botaoPartida = document.querySelector('.botaoPartida');
    const botaoDestino = document.querySelector('.botaoDestino');
    const DateInput = document.querySelector('.DateInput');
    const divCheckBox = document.querySelector('.divCheckBox span');
    const botaoJornadas = document.querySelector('.botaoJornadas');
    const tituloAvaliacoes = document.querySelector('.tituloAvaliacoes');
    const avaliacaoIndividualRafael = document.querySelector('.avaliacaoIndividualRafael');
    const nomeAvaliadorRafael = document.querySelector('.nomeAvaliadorRafael');
    const avaliacaoIndividualKaik = document.querySelector('.avaliacaoIndividualKaik');
    const nomeAvaliadorKaik = document.querySelector('.nomeAvaliadorKaik');
    const avaliacaoIndividualAllan = document.querySelector('.avaliacaoIndividualAllan');
    const nomeAvaliadorAllan = document.querySelector('.nomeAvaliadorAllan');
    const paises = document.querySelector('.paises');
    const regioes = document.querySelector('.regioes');
    const cidades = document.querySelector('.cidades');
    const bairros = document.querySelector('.bairros');
    const aeroportos = document.querySelector('.aeroportos');
    const hoteis = document.querySelector('.hoteis');
    const locaisInteresse = document.querySelector('.locaisInteresse');
    const casasApartamentos = document.querySelector('.casasApartamentos');
    const apartamentos = document.querySelector('.apartamentos');
    const resorts = document.querySelector('.resorts');
    const villas = document.querySelector('.villas');
    const hostels = document.querySelector('.hostels');
    const camaCafe = document.querySelector('.camaCafe');
    const casasHospedes = document.querySelector('.casasHospedes');
    const latam = document.querySelector('.latam');
    const azul = document.querySelector('.azul');
    const gol = document.querySelector('.gol');
    const united = document.querySelector('.united');
    const formasPagamento = document.querySelector('.formasPagamento');
    const email = document.querySelector('.email');
    const conecteConosco = document.querySelector('.conecteConosco');
    const baixarAplicativo = document.querySelector('.baixarAplicativo');
    const endereco = document.querySelector('.endereco');


    textoConvidativo.classList.remove('aumentar-fonte-textoConvidativo');
    entrarOuCadastrar.classList.remove('aumentar-fonte-entrarOuCadastrar');
    botaoComecar.classList.remove('aumentar-fonte-botaoComecar');
    tituloDestino.classList.remove('aumentar-fonte-tituloDestino');
    dica.classList.remove('aumentar-fonte-dica');
    botaoOrcamento.classList.remove('aumentar-fonte-botaoOrcamento');
    botaoPartida.classList.remove('aumentar-fonte-botaoPartida');
    botaoDestino.classList.remove('aumentar-fonte-botaoDestino');
    DateInput.classList.remove('aumentar-fonte-DateInput');
    divCheckBox.classList.remove('aumentar-fonte-divCheckBox');
    botaoJornadas.classList.remove('aumentar-fonte-botaoJornadas');
    tituloAvaliacoes.classList.remove('aumentar-fonte-tituloAvaliacoes');
    avaliacaoIndividualRafael.classList.remove('aumentar-fonte-avaliacaoIndividualRafael');
    nomeAvaliadorRafael.classList.remove('aumentar-fonte-nomeAvaliadorRafael');
    avaliacaoIndividualKaik.classList.remove('aumentar-fonte-avaliacaoIndividualKaik');
    nomeAvaliadorKaik.classList.remove('aumentar-fonte-nomeAvaliadorKaik');
    avaliacaoIndividualAllan.classList.remove('aumentar-fonte-avaliacaoIndividualAllan');
    nomeAvaliadorAllan.classList.remove('aumentar-fonte-nomeAvaliadorAllan');
    paises.classList.remove('aumentar-fonte-paises');
    regioes.classList.remove('aumentar-fonte-regioes');
    cidades.classList.remove('aumentar-fonte-cidades');
    bairros.classList.remove('aumentar-fonte-bairros');
    aeroportos.classList.remove('aumentar-fonte-aeroportos');
    hoteis.classList.remove('aumentar-fonte-hoteis');
    locaisInteresse.classList.remove('aumentar-fonte-locaisInteresse');
    casasApartamentos.classList.remove('aumentar-fonte-casasApartamentos');
    apartamentos.classList.remove('aumentar-fonte-apartamentos');
    resorts.classList.remove('aumentar-fonte-resorts');
    villas.classList.remove('aumentar-fonte-villas');
    hostels.classList.remove('aumentar-fonte-hostels');
    camaCafe.classList.remove('aumentar-fonte-camaCafe');
    casasHospedes.classList.remove('aumentar-fonte-casasHospedes');
    latam.classList.remove('aumentar-fonte-latam');
    azul.classList.remove('aumentar-fonte-azul');
    gol.classList.remove('aumentar-fonte-gol');
    united.classList.remove('aumentar-fonte-united');
    formasPagamento.classList.remove('aumentar-fonte-formasPagamento');
    email.classList.remove('aumentar-fonte-email');
    conecteConosco.classList.remove('aumentar-fonte-conecteConosco');
    baixarAplicativo.classList.remove('aumentar-fonte-baixarAplicativo');
    endereco.classList.remove('aumentar-fonte-endereco');


    textoConvidativo.classList.add('diminuir-fonte-textoConvidativo');
    entrarOuCadastrar.classList.add('diminuir-fonte-entrarOuCadastrar');
    botaoComecar.classList.add('diminuir-fonte-botaoComecar');
    tituloDestino.classList.add('diminuir-fonte-tituloDestino');
    dica.classList.add('diminuir-fonte-dica');
    botaoOrcamento.classList.add('diminuir-fonte-botaoOrcamento');
    botaoPartida.classList.add('diminuir-fonte-botaoPartida');
    botaoDestino.classList.add('diminuir-fonte-botaoDestino');
    DateInput.classList.add('diminuir-fonte-DateInput');
    divCheckBox.classList.add('diminuir-fonte-divCheckBox');
    botaoJornadas.classList.add('diminuir-fonte-botaoJornadas');
    tituloAvaliacoes.classList.add('diminuir-fonte-tituloAvaliacoes');
    avaliacaoIndividualRafael.classList.add('diminuir-fonte-avaliacaoIndividualRafael');
    nomeAvaliadorRafael.classList.add('diminuir-fonte-nomeAvaliadorRafael');
    avaliacaoIndividualKaik.classList.add('diminuir-fonte-avaliacaoIndividualKaik');
    nomeAvaliadorKaik.classList.add('diminuir-fonte-nomeAvaliadorKaik');
    avaliacaoIndividualAllan.classList.add('diminuir-fonte-avaliacaoIndividualAllan');
    nomeAvaliadorAllan.classList.add('diminuir-fonte-nomeAvaliadorAllan');
    paises.classList.add('diminuir-fonte-paises');
    regioes.classList.add('diminuir-fonte-regioes');
    cidades.classList.add('diminuir-fonte-cidades');
    bairros.classList.add('diminuir-fonte-bairros');
    aeroportos.classList.add('diminuir-fonte-aeroportos');
    hoteis.classList.add('diminuir-fonte-hoteis');
    locaisInteresse.classList.add('diminuir-fonte-locaisInteresse');
    casasApartamentos.classList.add('diminuir-fonte-casasApartamentos');
    apartamentos.classList.add('diminuir-fonte-apartamentos');
    resorts.classList.add('diminuir-fonte-resorts');
    villas.classList.add('diminuir-fonte-villas');
    hostels.classList.add('diminuir-fonte-hostels');
    camaCafe.classList.add('diminuir-fonte-camaCafe');
    casasHospedes.classList.add('diminuir-fonte-casasHospedes');
    latam.classList.add('diminuir-fonte-latam');
    azul.classList.add('diminuir-fonte-azul');
    gol.classList.add('diminuir-fonte-gol');
    united.classList.add('diminuir-fonte-united');
    formasPagamento.classList.add('diminuir-fonte-formasPagamento');
    email.classList.add('diminuir-fonte-email');
    conecteConosco.classList.add('diminuir-fonte-conecteConosco');
    baixarAplicativo.classList.add('diminuir-fonte-baixarAplicativo');
    endereco.classList.add('diminuir-fonte-endereco');
}

function restaurarFonte() {
    const textoConvidativo = document.querySelector('.textoConvidativo p');
    const entrarOuCadastrar = document.querySelector('.entrarOuCadastrar h3');
    const botaoComecar = document.querySelector('.botaoComecar');
    const tituloDestino = document.querySelector('.tituloDestino');
    const dica = document.querySelector('.dica');
    const botaoOrcamento = document.querySelector('.botaoOrcamento');
    const botaoPartida = document.querySelector('.botaoPartida');
    const botaoDestino = document.querySelector('.botaoDestino');
    const DateInput = document.querySelector('.DateInput');
    const divCheckBox = document.querySelector('.divCheckBox span');
    const botaoJornadas = document.querySelector('.botaoJornadas');
    const tituloAvaliacoes = document.querySelector('.tituloAvaliacoes');
    const avaliacaoIndividualRafael = document.querySelector('.avaliacaoIndividualRafael');
    const nomeAvaliadorRafael = document.querySelector('.nomeAvaliadorRafael');
    const avaliacaoIndividualKaik = document.querySelector('.avaliacaoIndividualKaik');
    const nomeAvaliadorKaik = document.querySelector('.nomeAvaliadorKaik');
    const avaliacaoIndividualAllan = document.querySelector('.avaliacaoIndividualAllan');
    const nomeAvaliadorAllan = document.querySelector('.nomeAvaliadorAllan');
    const paises = document.querySelector('.paises');
    const regioes = document.querySelector('.regioes');
    const cidades = document.querySelector('.cidades');
    const bairros = document.querySelector('.bairros');
    const aeroportos = document.querySelector('.aeroportos');
    const hoteis = document.querySelector('.hoteis');
    const locaisInteresse = document.querySelector('.locaisInteresse');
    const casasApartamentos = document.querySelector('.casasApartamentos');
    const apartamentos = document.querySelector('.apartamentos');
    const resorts = document.querySelector('.resorts');
    const villas = document.querySelector('.villas');
    const hostels = document.querySelector('.hostels');
    const camaCafe = document.querySelector('.camaCafe');
    const casasHospedes = document.querySelector('.casasHospedes');
    const latam = document.querySelector('.latam');
    const azul = document.querySelector('.azul');
    const gol = document.querySelector('.gol');
    const united = document.querySelector('.united');
    const formasPagamento = document.querySelector('.formasPagamento');
    const email = document.querySelector('.email');
    const conecteConosco = document.querySelector('.conecteConosco');
    const baixarAplicativo = document.querySelector('.baixarAplicativo');
    const endereco = document.querySelector('.endereco');


    textoConvidativo.classList.remove('aumentar-fonte-textoConvidativo');
    entrarOuCadastrar.classList.remove('aumentar-fonte-entrarOuCadastrar');
    botaoComecar.classList.remove('aumentar-fonte-botaoComecar');
    tituloDestino.classList.remove('aumentar-fonte-tituloDestino');
    dica.classList.remove('aumentar-fonte-dica');
    botaoOrcamento.classList.remove('aumentar-fonte-botaoOrcamento');
    botaoPartida.classList.remove('aumentar-fonte-botaoPartida');
    botaoDestino.classList.remove('aumentar-fonte-botaoDestino');
    DateInput.classList.remove('aumentar-fonte-DateInput');
    divCheckBox.classList.remove('aumentar-fonte-divCheckBox');
    botaoJornadas.classList.remove('aumentar-fonte-botaoJornadas');
    tituloAvaliacoes.classList.remove('aumentar-fonte-tituloAvaliacoes');
    avaliacaoIndividualRafael.classList.remove('aumentar-fonte-avaliacaoIndividualRafael');
    nomeAvaliadorRafael.classList.remove('aumentar-fonte-nomeAvaliadorRafael');
    avaliacaoIndividualKaik.classList.remove('aumentar-fonte-avaliacaoIndividualKaik');
    nomeAvaliadorKaik.classList.remove('aumentar-fonte-nomeAvaliadorKaik');
    avaliacaoIndividualAllan.classList.remove('aumentar-fonte-avaliacaoIndividualAllan');
    nomeAvaliadorAllan.classList.remove('aumentar-fonte-nomeAvaliadorAllan');
    paises.classList.remove('aumentar-fonte-paises');
    regioes.classList.remove('aumentar-fonte-regioes');
    cidades.classList.remove('aumentar-fonte-cidades');
    bairros.classList.remove('aumentar-fonte-bairros');
    aeroportos.classList.remove('aumentar-fonte-aeroportos');
    hoteis.classList.remove('aumentar-fonte-hoteis');
    locaisInteresse.classList.remove('aumentar-fonte-locaisInteresse');
    casasApartamentos.classList.remove('aumentar-fonte-casasApartamentos');
    apartamentos.classList.remove('aumentar-fonte-apartamentos');
    resorts.classList.remove('aumentar-fonte-resorts');
    villas.classList.remove('aumentar-fonte-villas');
    hostels.classList.remove('aumentar-fonte-hostels');
    camaCafe.classList.remove('aumentar-fonte-camaCafe');
    casasHospedes.classList.remove('aumentar-fonte-casasHospedes');
    latam.classList.remove('aumentar-fonte-latam');
    azul.classList.remove('aumentar-fonte-azul');
    gol.classList.remove('aumentar-fonte-gol');
    united.classList.remove('aumentar-fonte-united');
    formasPagamento.classList.remove('aumentar-fonte-formasPagamento');
    email.classList.remove('aumentar-fonte-email');
    conecteConosco.classList.remove('aumentar-fonte-conecteConosco');
    baixarAplicativo.classList.remove('aumentar-fonte-baixarAplicativo');
    endereco.classList.remove('aumentar-fonte-endereco');


    textoConvidativo.classList.remove('diminuir-fonte-textoConvidativo');
    entrarOuCadastrar.classList.remove('diminuir-fonte-entrarOuCadastrar');
    botaoComecar.classList.remove('diminuir-fonte-botaoComecar');
    tituloDestino.classList.remove('diminuir-fonte-tituloDestino');
    dica.classList.remove('diminuir-fonte-dica');
    botaoOrcamento.classList.remove('diminuir-fonte-botaoOrcamento');
    botaoPartida.classList.remove('diminuir-fonte-botaoPartida');
    botaoDestino.classList.remove('diminuir-fonte-botaoDestino');
    DateInput.classList.remove('diminuir-fonte-DateInput');
    divCheckBox.classList.remove('diminuir-fonte-divCheckBox');
    botaoJornadas.classList.remove('diminuir-fonte-botaoJornadas');
    tituloAvaliacoes.classList.remove('diminuir-fonte-tituloAvaliacoes');
    avaliacaoIndividualRafael.classList.remove('diminuir-fonte-avaliacaoIndividualRafael');
    nomeAvaliadorRafael.classList.remove('diminuir-fonte-nomeAvaliadorRafael');
    avaliacaoIndividualKaik.classList.remove('diminuir-fonte-avaliacaoIndividualKaik');
    nomeAvaliadorKaik.classList.remove('diminuir-fonte-nomeAvaliadorKaik');
    avaliacaoIndividualAllan.classList.remove('diminuir-fonte-avaliacaoIndividualAllan');
    nomeAvaliadorAllan.classList.remove('diminuir-fonte-nomeAvaliadorAllan');
    paises.classList.remove('diminuir-fonte-paises');
    regioes.classList.remove('diminuir-fonte-regioes');
    cidades.classList.remove('diminuir-fonte-cidades');
    bairros.classList.remove('diminuir-fonte-bairros');
    aeroportos.classList.remove('diminuir-fonte-aeroportos');
    hoteis.classList.remove('diminuir-fonte-hoteis');
    locaisInteresse.classList.remove('diminuir-fonte-locaisInteresse');
    casasApartamentos.classList.remove('diminuir-fonte-casasApartamentos');
    apartamentos.classList.remove('diminuir-fonte-apartamentos');
    resorts.classList.remove('diminuir-fonte-resorts');
    villas.classList.remove('diminuir-fonte-villas');
    hostels.classList.remove('diminuir-fonte-hostels');
    camaCafe.classList.remove('diminuir-fonte-camaCafe');
    casasHospedes.classList.remove('diminuir-fonte-casasHospedes');
    latam.classList.remove('diminuir-fonte-latam');
    azul.classList.remove('diminuir-fonte-azul');
    gol.classList.remove('diminuir-fonte-gol');
    united.classList.remove('diminuir-fonte-united');
    formasPagamento.classList.remove('diminuir-fonte-formasPagamento');
    email.classList.remove('diminuir-fonte-email');
    conecteConosco.classList.remove('diminuir-fonte-conecteConosco');
    baixarAplicativo.classList.remove('diminuir-fonte-baixarAplicativo');
    endereco.classList.remove('diminuir-fonte-endereco');
}
