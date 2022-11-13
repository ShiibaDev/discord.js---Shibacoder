const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(Interaction) {
        if (!Interaction.isChatInputCommand()) return;

        const globalcommand = Interaction.client.commands.get(Interaction.commandName);

        try {
            await globalcommand.run(Interaction);
        } catch (error) {
            console.error(error);
            await Interaction.reply({ content: `There was an error while executing this command! \`\`\`bat\n${error}\`\`\` `, ephemeral: true });
        }
    }
}