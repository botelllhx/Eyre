function deletarOpcaoSelect(event) {
    let alvo = event.target.parentNode;
    if (alvo.tagName === "BUTTON") {
        alvo = alvo.parentNode;
    }
    const icone = alvo.parentNode.parentNode.querySelector(`.opcoesSelect li[id=\"${alvo.id}\"] i`)
    icone.classList.add("d-none");
    alvo.remove();
}

function mudarTipoExtra(event){
    const alvo = event.target.parentNode;
    const tipoExtra = alvo.getAttribute("data-tipo-extra");
    console.log(tipoExtra);
    switch (tipoExtra) {
        case "SERVICOS":
            alvo.setAttribute("data-tipo-extra", "CONDICOES");
            break;
        case "CONDICOES":
            alvo.setAttribute("data-tipo-extra", "SERVIÇO_PRINCIPAL");
            break;
        default:
            console.log("asd");
            alvo.setAttribute("data-tipo-extra", "SERVICOS");
            break;
    }
}

Array.from(document.querySelectorAll(".selectMultiplo")).forEach((sel) => {
    const opcoesSelect = sel.querySelector(".opcoesSelect");
    opcoesSelect.addEventListener('click', function (event) {
        let alvo = false;
        if (event.target.tagName === "LI") {
            alvo = event.target;
        } else if (event.target.parentNode.tagName === "LI") {
            alvo = event.target.parentNode;
        }
        if (alvo) {
            const conteudo = sel.parentNode.querySelector(".conteudoSelect");
            const classListIcone = alvo.querySelector("i").classList;
            if (classListIcone.contains("d-none")) {
                const codigoHTML = `<li class="list-group-item" id="${alvo.id}" data-id="${alvo.getAttribute("data-id")}" data-tipo-extra="SERVICOS"><span onclick="mudarTipoExtra(event)">${alvo.id}</span><button onclick="deletarOpcaoSelect(event)"><i class="bi bi-trash"></i></button></li>`;
                conteudo.innerHTML += codigoHTML;
                classListIcone.remove("d-none");
            } else {
                classListIcone.add("d-none");
                conteudo.querySelector("li[id=\"" + alvo.id + "\"]").remove();
            }
        }
    });
});

const inputElement = document.getElementById('uploadImagens');
const imagePreviewContainer = document.getElementById('imagePreview');
const imagemInputFile = document.getElementById('imagemInputFile');
imagePreviewContainer.addEventListener("click", () => {
    inputElement.click();
});
imagemInputFile.addEventListener("click", () => {
    inputElement.click();
});

inputElement.addEventListener('change', function () {
    imagePreviewContainer.innerHTML = '';
    const files = Array.from(inputElement.files);

    files.forEach(file => {
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.classList.add("zIndexImgs");
            img.src = URL.createObjectURL(file);
            imagePreviewContainer.appendChild(img);
        }
    });
});

function formatTelefone() {
    const telefoneInput = document.getElementById('telefone');
    telefoneInput.addEventListener('keyup', formatTelefone);
    let telefone = telefoneInput.value.replace(/\D/g, '');
  
    if (telefone.length >= 11 && telefone.length <= 11) {
      telefone = telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
    } else if (telefone.length >= 6 && telefone.length <= 9) {
      telefone = telefone.replace(/(\d{4,5})(\d{4})/, '$1-$2');
    }
  
    telefoneInput.value = telefone;
  }