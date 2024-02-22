require('dotenv').config();
const token = process.env.token;
const Discord = require('discord.js'),
Events = require('discord.js'),
{ REST, Routes } = require('discord.js'),
{ SlashCommandBuilder } = require('discord.js'),
Client = new Discord.Client({
    //L'intent 32767 nous permet d'avoir tout les intents
    intents: 32767
    });
Client.commands = [];

const rest = new REST().setToken(token);
const command = new SlashCommandBuilder()
.setName('ping')
.setDescription("return pong");
Client.commands.push(command);
(async () => {
	try {
		console.log(`Started refreshing ${Client.commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands("1205874900003455006", "1011773050716442704"),
			{ body: Client.commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();

Client.once("ready", Client => {
    console.log("Client pret");
});

Client.login(token);

Client.on("messageCreate", async message =>{
    if(message.author.bot || !message.content=="ping")return;
    message.reply("connard");
});

Client.on("interactionCreate", async interaction =>{
    if(interaction.commandName == "ping"){
        interaction.reply({content : "pong", ephemeral:true});
    }
});