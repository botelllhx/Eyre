import { FormDestino } from "./FormDestino";

export function enviar(){
    fd = new FormDestino(1, 2, 3);
    alert(JSON.parse(fd));
}

// Função para converter para js