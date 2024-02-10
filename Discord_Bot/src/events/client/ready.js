const { ActivityType } = require('discord.js');
module.exports = {
    name: 'ready',
    once: true,
    async execute(Client){
        const guild = Client.channels.cache.find(channel => channel.id === '1112005974639788114');
        const message = guild.messages.fetch('1112006112410079234');
        console.log(`Ready!!! ${Client.user.tag} is logged in and online`);
        const options = [
            {
                type: ActivityType.Watching,
                text: "Ratio",
                status: "online"
            }
        ];

        
    }
}