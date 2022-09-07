require('dotenv').config()
const Discord = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');

const token = process.env.TOKEN;

const commandLoader = require('./commandLoader');
const mySqlConnector = require('./mySqlConnector');

const bot = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
})

commandLoader.load(bot);
mySqlConnector.connect();


bot.on('messageCreate', async(message) => {

    if (message.content.startsWith("!")) {
        let words = message.content.split(' ');
        const commandName = words.shift().slice(1);

        if (bot.commands.has(commandName)) {
            bot.commands.get(commandName).run(bot, message, words);
        } else {
            await message.channel.send(`The ${commandName} command does not exist.`);
        }
    }

});


bot.login(token)
    .then(() =>
        console.log('connexion ok')
    ).catch(error => {
    console.error(error);
});
