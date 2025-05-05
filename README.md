# FURIA Bot - WhatsApp Experience for True Fans

Um bot interativo feito com [venom-bot](https://github.com/orkestral/venom) para conectar fãs da FURIA com o time de CS:GO de forma divertida, personalizada e **exclusiva**. Com comandos criativos, interações semanais e suporte para envio de áudio, vídeo e análises no estilo "comentarista", o bot é um canal direto para a comunidade mostrar seu apoio ao time.

## ⚙️ Tecnologias Utilizadas

- Node.js
- Venom-Bot
- Puppeteer (modo headless atualizado)
- JavaScript puro (sem frameworks pesados)

---

## 📲 Funcionalidades

| Comando         | Descrição                                                                 |
|----------------|--------------------------------------------------------------------------|
| `!desafiododia` | Envia o desafio do dia para o fã mandar um áudio ou vídeo mostrando sua torcida. |
| `!comentarista` | Um desafio especial: analise o desempenho da FURIA como se explicasse pra sua avó ou fosse o Fallen. O tipo muda toda semana! |
| `!mindsetfurioso` | Envia uma frase motivacional no estilo FURIA para começar o dia com sangue nos olhos. |
| `!live`         | Mostra o placar atual da FURIA, se estiver jogando. Caso contrário, avisa que não há partidas no momento. |
|  Mensagens programadas | O bot envia automaticamente alertas animados em dias de jogo, ex: “BOM DIA! ACORDA QUE HOJE TEM FURIA! 🔥”. *(Em breve com agendamento)* |

---

##  Controle de Acesso

Este bot **só responde a um número autorizado** para garantir exclusividade e segurança durante o desenvolvimento/teste. Todos os outros números são ignorados automaticamente.

---

## Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/furiabot.git
cd furiabot
npm install
node index.js
```
