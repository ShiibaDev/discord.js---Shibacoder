const { Routes, REST, Client } = require('discord.js');
const { token, ClientId, TechnologyClubId } = require('./config.json');

require('dotenv').config();
const fs = require('node:fs');

const commands = [];
const guildcommands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const guildOnlyCommands = fs.readdirSync('./Events/guildcommands').filter(file => file.endsWith('.js'));


// Global
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// Guild Only
for (const guildfile of guildOnlyCommands) {
    const gldcommand = require(`./Events/guildcommands/${guildfile}`);
    guildcommands.push(gldcommand.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(`${token}`);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(ClientId),
            { body: commands },
        );

    try {
        console.log('Guild Only commands online');

        const data = await rest.put(
            Routes.applicationGuildCommands(ClientId, TechnologyClubId),
            { body: guildcommands },
        );

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    } 
})();