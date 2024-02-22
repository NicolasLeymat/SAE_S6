module.exports = {
    name: 'interactionCreate',
    async execute(interaction, Client){
        if(interaction.isChatInputCommand()){
            const { commands } = Client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if(!command) return;
            try{
                await command.execute(interaction, Client)
            }catch(error){
                console.error(error);
                await interaction.reply({ 
                    content: 'Something went wrong while executing the command',
                    ephemeral: true
                });
            }
        }
    }
}