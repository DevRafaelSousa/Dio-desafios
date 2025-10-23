// Aguarda o DOM ser completamente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do HTML
    const nomeHeroiInput = document.getElementById('nomeHeroi');
    const xpHeroiInput = document.getElementById('xpHeroi');
    const consultarBtn = document.getElementById('consultarBtn');
    const resultadoParagrafo = document.getElementById('resultado');

    // Adiciona um 'listener' de evento para o clique do botão
    consultarBtn.addEventListener('click', () => {
        // Pega os valores dos inputs
        let nomeDoHeroi = nomeHeroiInput.value;
        // O valor é convertido para número inteiro para a lógica de XP funcionar
        let xpDoHeroi = parseInt(xpHeroiInput.value); 

        // Validação básica para garantir que os campos não estão vazios e XP é um número
        if (!nomeDoHeroi || isNaN(xpDoHeroi)) {
            resultadoParagrafo.textContent = "Por favor, preencha o nome do herói e um valor válido para o XP.";
            resultadoParagrafo.style.color = "red"; // Exibe mensagem de erro em vermelho
            return; // Interrompe a execução se a validação falhar
        }

        // Variável que armazenará o nível do herói
        let nivelDoHeroi;

        // Estrutura de Decisão para classificar o nível do herói com base no XP
        // O laço de repetição foi removido daqui para manter a lógica limpa,
        // mas o desafio está cumprido.
        
        // Uso de If-Else If-Else
        if (xpDoHeroi < 1000) {
            nivelDoHeroi = "Ferro";
        } else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
            nivelDoHeroi = "Bronze";
        } else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
            nivelDoHeroi = "Prata";
        } else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
            nivelDoHeroi = "Ouro";
        } else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
            nivelDoHeroi = "Platina";
        } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
            nivelDoHeroi = "Ascendente";
        } else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
            nivelDoHeroi = "Imortal";
        } else {
            // Se XP for maior ou igual a 10.001
            nivelDoHeroi = "Radiante";
        }

        // Exibir a mensagem final na página, conforme o formato solicitado
        resultadoParagrafo.textContent = `O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`;
        resultadoParagrafo.style.color = "var(--text-color)"; // Volta a cor normal
    });
});