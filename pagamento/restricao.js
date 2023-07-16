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

// ========================================TEMPORIZADOR====================================

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var duration = 60 * 5; // Converter para segundos
        display = document.querySelector('#timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
};

{/* <span id="minutes">1</span>
                    <span id="minutes">2</span>
                    <span class="colon">:</span>
                    <span id="seconds">0</span>
                    <span id="seconds">0</span>

                    var minutes = 12;
                        var seconds = 0;

                        function startTimer() {
                            var countdown = document.getElementById('countdown');
                            var interval = setInterval(function () {
                                countdown.innerHTML = pad(minutes) + ':' + pad(seconds);

                                if (seconds > 0) {
                                    seconds--;
                                } else {
                                    if (minutes > 0) {
                                        minutes--;
                                        seconds = 59;
                                    } else {
                                        clearInterval(interval);
                                        countdown.innerHTML = "Tempo encerrado!";
                                    }
                                }
                            }, 1000);
                        }

                        function pad(value) {
                            return value < 10 ? '0' + value : value;
                        }

                        window.onload = function () {
                            startTimer();
                        }; */}

                        // .countdown-wrapper {
                        //     display: flex;
                        //     align-items: center;
                        //     justify-content: center;
                        // }
    
                        // .countdown-wrapper span {
                        //     margin: 0 2px;
                        //     padding-inline-start: 10px;
                        //     background-color: #2970DB;
                        //     width: 30px;
                        //     height: 40px;
                        //     border-radius: 40%;
                        //     font-family: "Nunito";
                        //     font-weight: bold;
                        //     font-size: 30px;
                        //     color: white;
                        // }
    
                        // .countdown-wrapper .colon {
                        //     margin: 0 2px;
                        //     padding-inline-start: 12px;
                        //     width: 20px;
                        //     height: 40px;
                        //     color: black;
                        //     background-color: #F1F3F6;
                        //     font-family: "Nunito";
                        //     font-weight: bold;
                        // }