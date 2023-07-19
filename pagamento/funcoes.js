//===================================TEMPORIZADOR===========================
var minutes = 12;
var seconds = 0;

function startTimer() {
  var countdown = document.getElementById('countdown');

  function updateTimer() {
    countdown.innerHTML = pad(minutes) + ':' + pad(seconds);

    seconds = (seconds - 1 + 60) % 60;
    minutes = seconds === 59 ? minutes - 1 : minutes;

    if (minutes === 0 && seconds === 0) {
      clearInterval(interval);
      countdown.innerHTML = "Tempo encerrado!";
    }
  }

  updateTimer();
  var interval = setInterval(updateTimer, 1000);
}

function pad(value) {
  return value.toString().padStart(2, '0');
}

window.onload = function () {
  startTimer();
};

// =========================================carato cvv ======================================

function validarEntrada(event) {
  let keyCode = event.keyCode || event.which;

  // Permite apenas números (códigos ASCII entre 48 e 57)
  if (keyCode < 48 || keyCode > 57) {
    event.preventDefault();
  }

  // Limita a entrada a 3 dígitos
  let cvv = event.target.value;
  if (cvv.length >= 3) {
    event.target.value = cvv.slice(0, 3);
  }
}

// ====================================cartao nome tirular======================================

function formatarNome(event) {
  let nome = event.target.value;

  // Remove todos os caracteres não alfabéticos e números
  nome = nome.replace(/[^a-zA-Z\s]/g, '');

  // Converte a primeira letra de cada palavra para maiúscula
  nome = nome.replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });

  event.target.value = nome;
}

function validarDigitacao(event) {
  let keyCode = event.keyCode || event.which;

  // Impede a digitação de números e caracteres especiais
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 33 && keyCode <= 47) || (keyCode >= 58 && keyCode <= 64) || (keyCode >= 91 && keyCode <= 96) || (keyCode >= 123 && keyCode <= 126)) {
    event.preventDefault();
  }
}

// =======================================PARCELAMENTO===================================
function atualizarTotal() {
  const selectParcelas = document.getElementById("parcelas");
  const valorTotalElement = document.querySelector(".valor h1");

  const valorTotal = 1500; // Substitua pelo valor total real
  const parcelasSelecionadas = parseInt(selectParcelas.value);

  let valorParcela;
  if (parcelasSelecionadas <= 12) {
    valorParcela = valorTotal / parcelasSelecionadas;
  } else {
    valorParcela = valorTotal;
  }

  valorTotalElement.textContent = `R$${valorParcela.toFixed(2)}`;
}

// =======================================BOTÃO===================================

function showPaymentForm(paymentMethod) {
  var paymentForms = document.getElementsByClassName("payment-form");
  for (var i = 0; i < paymentForms.length; i++) {
    paymentForms[i].style.display = "none";
  }
  document.getElementById(paymentMethod + "-form").style.display = "block";
}

//======================================COPIAR BOLETO==========================
function copiarCodigoBarras() {
  var codigoBarras = document.getElementById("codigoBarras");
  var range = document.createRange();
  range.selectNode(codigoBarras);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Código de barras copiado: " + codigoBarras.innerText);
}

//===============================COPIAR PIX==============================
function copiarCodigoPix() {
  var codigoPix = document.getElementById("codigoPix");
  var textArea = document.createElement("textarea");
  textArea.value = codigoPix.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Código Pix copiado: " + codigoPix.innerText);
}