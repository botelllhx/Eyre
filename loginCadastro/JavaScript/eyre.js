function formatCPF() {
  const cpfInput = document.getElementById('cpfInput');
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

// ----------------------------------------------------------------------------

function formatTelefone() {
  const telefoneInput = document.getElementById('telefoneInput');
  telefoneInput.addEventListener('keyup', formatTelefone);
  let telefone = telefoneInput.value.replace(/\D/g, '');

  if (telefone.length >= 11 && telefone.length <= 11) {
    telefone = telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
  } else if (telefone.length >= 6 && telefone.length <= 9) {
    telefone = telefone.replace(/(\d{4,5})(\d{4})/, '$1-$2');
  }

  telefoneInput.value = telefone;
}

// ----------------------------------------------------------------------------

function toTitleCase(str) {
  return str.replace(/\b\w+/g, function (word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
}

function transformarPalavras() {
  let campoNome = document.getElementById("nome");
  campoNome.value = toTitleCase(campoNome.value);
  var tecla = event.which || event.keyCode;
  if (tecla >= 48 && tecla <= 57) {
    event.preventDefault();
  }
}


// ----------------------------------------------------------------------------

var senhaInput = document.getElementById("password");

senhaInput.addEventListener("input", function () {
  if (senhaInput.value.length > 12) {
    senhaInput.value = senhaInput.value.slice(0, 12);
  }
});

// ----------------------------------------------------------------------------

function togglePasswordVisibility(inputId, iconId) {
  var passwordInput = document.getElementById(inputId);
  var eyeIcon = document.getElementById(iconId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
    passwordInput.parentElement.classList.add("show-password");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
    passwordInput.parentElement.classList.remove("show-password");
  }
}

// ----------------------------------------------------------------------------


function redirectToHome() {
  window.location.href = "../index.html";
}