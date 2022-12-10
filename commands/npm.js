const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('Node')
        .setDescription('Give you instructions to install npm (node package manager)'),
    
    async run(Interaction) {

        const Nodejs = "https://nodejs.org/en/download/";

        const nodepackagemanager = new EmbedBuilder()
        .setTitle('Concorde')
        .setColor('Orange')
        .setDescription('This the main tool if you\'re working with JavaScript. To install packages, use "node i <package name>", We recommend use pnpm')
        .setFields(
            { name: "Node.js Download", value: Nodejs }
        )

        Interaction.reply({ embeds: [nodepackagemanager], ephemeral: false })
    }
}