const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('return pong'),
    cooldown: 60,
    async execute(interaction, Client){
        await interaction.reply('Pong!');
    }
}