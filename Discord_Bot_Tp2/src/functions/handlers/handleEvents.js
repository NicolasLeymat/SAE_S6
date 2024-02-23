const fs = require('fs');
const { MessageReaction } = require('discord.js');

module.exports = (Client) => {
    Client.handleEvents = async () => {
        const eventsFolder = fs.readdirSync(`./src/events`);
        for(const folder of eventsFolder){
            const eventsFiles = fs
            .readdirSync(`./src/events/${folder}`)
            .filter(file => file.endsWith('.js'));
            for(const file of eventsFiles){
                const event = require(`../../events/${folder}/${file}`);
                if(event.once) Client.once(event.name, (...args) => event.execute(...args, Client));
                else Client.on(event.name, (...args) => event.execute(...args, Client));
                //console.log(file);
            }
        }
    }
}