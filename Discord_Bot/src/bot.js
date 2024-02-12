require('dotenv').config();
const token = process.env.token;
const Discord = require('discord.js'),
Client = new Discord.Client({
    //L'intent 32767 nous permet d'avoir tout les intents
    intents: 32767
    }),
fs = require('fs');
Client.commands = new Discord.Collection(),
Client.cooldowns = new Discord.Collection();
Client.commandArray =  [];

const functionFolders = fs.readdirSync('./src/functions');
for (const folder of functionFolders) {
    const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith('.js'));
    for(const file of functionFiles) {
        require(`./functions/${folder}/${file}`)(Client);
    }
}

Client.handleEvents();
Client.handleCommands();
Client.login(token);