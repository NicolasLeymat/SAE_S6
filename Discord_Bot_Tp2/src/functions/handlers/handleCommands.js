const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const fs = require('fs');

module.exports = (Client) => {
    Client.handleCommands = async() => {
        const commandsFolder = fs.readdirSync('./src/commands');
        for(const folder of commandsFolder){
            const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
            const { commands, commandArray} = Client
            for(const file of commandFiles){
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                //console.log(`Command : ${command.data.name} has passed throught the handler`);
            }
        }
        //Id de l'application 
        const clientId = '1205874900003455006';
        //Id du serveur sur lequel le bot est
        const guildId = '';
        const rest = new REST({version: '10'}).setToken(process.env.token);
        try{
            console.log("Started refreshing application (/) commands.");

            await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
                body : Client.commandArray,});
        
            console.log("Successfully reloaded application (/) commands.");
        }catch(error){
            console.error(error);
        }
    }
}