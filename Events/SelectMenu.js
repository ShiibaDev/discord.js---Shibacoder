const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(Interaction) {
        if (!Interaction.isSelectMenu()) return;
        console.log(Interaction);
    }
}