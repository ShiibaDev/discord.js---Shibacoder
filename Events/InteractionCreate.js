const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(Interaction) {
        if (!Interaction.isChatInputCommand()) return;

        const command = Interaction.client.commands.get(Interaction.commandName);

        try {
            await command.run(Interaction);
        } catch (error) {
            console.error(error);
            await Interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
}