const DateExt = require('./utils/date');

function handleCommand(client, message) {
    const content = message.body.trim().toLowerCase();

    if (content === "!desafiododia") {
        client.sendText(message.from, `🔥 Desafio do Dia:  
Manda UM ÁUDIO ou VÍDEO gritando ‘VAMO FURIAAAA’, pode falar mais se quiser, desde haja o grito de GUERRA, como se tivesse visto um clutch 1x5 do FalleN.  
Os melhores vão aparecer pro time depois. Se joga!`);
    }

    else if (content === "!mindsetfurioso") {
        client.sendText(message.from, `🧠 Mentalidade FURIOSA:  
‘A selva é pra quem tem coragem. Quem entra no servidor com medo, perde no aquecimento.’  
Agora bora treinar o clutch mental. #MindsetFurioso`);
    }

    else if (content === "!live") {
        const jogoAgora = false;
        if (jogoAgora) {
            client.sendText(message.from, `🟢 FURIA tá AO VIVO agora!  
Mapa: Mirage  
Placar: FURIA 8 x 6 NAVI`);
        } else {
            client.sendText(message.from, `🔴 Não tem jogo agora...  
Mas quem é FURIA treina até no day off. Vai assistir um highlight. #SempreFURIA`);
        }
    }

    else if (content === "!comentarista") {
        const week = new Date().getWeekNumber();
        const lances = [
            "FalleN puxou a AWP e limpou o bomb!",
            "KSCERATO deu HS no meio com 180° de flick!",
            "Yuurih entrou na B e fez double kill!",
        ];
        const lance = lances[Math.floor(Math.random() * lances.length)];

        if (week % 2 === 0) {
            client.sendText(message.from, `🎙️ Modo Comentarista:  
Mande um áudio como se você estivesse explicando isso pra sua vó.  
Lance: "${lance}"`);
        } else {
            client.sendText(message.from, `🎙️ Modo Comentarista:  
Mande um áudio como se você fosse o FalleN na entrevista pós-jogo!  
Lance: "${lance}"  
`);
        }
    }

    else if (content === "!help") {
        client.sendText(message.from, `🦁 Comandos disponíveis:  
!desafiododia  
!comentarista  
!mindsetfurioso  
!live  
#SempreFURIA`);
    }
}

module.exports = handleCommand;
