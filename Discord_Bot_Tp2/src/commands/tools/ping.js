const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('return pong'),
    async execute(interaction, Client){
        const message = `API Lantecy : ${Client.ws.ping}\n` 
        await interaction.reply(message);
    }
}