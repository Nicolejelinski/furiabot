const venom = require('venom-bot');
const handleCommand = require('./commands'); // <-- ESTA LINHA AQUI

venom
    .create({
        session: 'furia-bot',
        headless: true,
        browserArgs: ['--headless=new', '--no-sandbox'],
        puppeteerOptions: {
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        }
    })

    .then((client) => start(client))
    .catch((err) => console.log(err));

function start(client) {
    client.onMessage(async (message) => {
        // Substitua pelo SEU número
        const allowedNumber = '5511988174313@c.us';

        if (
            message.from === allowedNumber &&
            message.body.startsWith("!")
        ) {
            handleCommand(client, message);
        }
    });
}

