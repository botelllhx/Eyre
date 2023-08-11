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


function toggleCheck(checkbox) {
    const side = checkbox.getAttribute('data-side');
    const checkboxes = document.querySelectorAll(`[data-side="${side}"]`);
    const isCheckboxChecked = checkbox.classList.contains("checked");

    checkboxes.forEach((box) => {
        box.classList.remove("checked");
    });

    if (!isCheckboxChecked) {
        checkbox.classList.add("checked");
    }
}


function toggleSelection(button) {
    const buttons = document.querySelectorAll(".botaoSelecionar");

    buttons.forEach((btn) => {
        if (btn === button) {
            if (btn.classList.contains("selected")) {
                btn.classList.remove("selected");
                btn.innerText = "Selecionar";
            } else {
                btn.classList.add("selected");
                btn.innerText = "Selecionado";
            }
        } else {
            btn.classList.remove("selected");
            btn.innerText = "Selecionar";
        }
    });
}

let modalIndex = 0;

function abrirModal() {
    document.getElementById('meuModal').style.display = 'block';
    mostrarImagem(modalIndex);
}

function fecharModal() {
    document.getElementById('meuModal').style.display = 'none';
}

function mostrarImagem(index) {
    const imagens = document.getElementsByClassName('modal-conteudo');
    if (index >= 0 && index < imagens.length) {
        modalIndex = index;
        for (let i = 0; i < imagens.length; i++) {
            imagens[i].style.display = 'none';
        }
        imagens[modalIndex].style.display = 'block';
    }
}

function avancarImagem() {
    mostrarImagem(modalIndex + 1);
}

function retrocederImagem() {
    mostrarImagem(modalIndex - 1);
}

document.onkeydown = function (event) {
    event = event || window.event;
    if (event.keyCode == 37) {
        retrocederImagem();
    } else if (event.keyCode == 39) {
        avancarImagem();
    }
};


function abrirModalMapa() {
    var modal = document.getElementById('mapModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function fecharModalMapa() {
    var modal = document.getElementById('mapModal');
    if (modal) {
        modal.style.display = 'none';
    }
}
