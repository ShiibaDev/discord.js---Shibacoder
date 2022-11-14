const { Client, Collection, GatewayIntentBits, Events, EmbedBuilder } = require('discord.js');
const { TechnologyClubId } = require('../config.json');
const fs = require('node:fs');
const client = new Client({
    intents: [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,]
});

module.exports = {
    name: Events.InteractionCreate,
    async execute(Interaction) {
        // No permission embed reply:
        var ProfilePhoto = "https://steamuserimages-a.akamaihd.net/ugc/947328169457231320/AEA74DB7BAD24CB9702738DBF1BA515A7F1AE3DC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";

        const NoPerm = new EmbedBuilder()
            .setColor('Red')
            .setAuthor({ name: 'Shibacoder', iconURL: ProfilePhoto })
            .setDescription('Server without required permissions')

        if (!Interaction.isChatInputCommand()) return;

        client.servercommands = new Collection();

        const ServercommandsFiles = fs.readdirSync(__dirname+"/guildcommands/").filter(file => file.endsWith("js"))

        for (const file of ServercommandsFiles) {
            const subServer = require(__dirname+`/guildcommands/${file}`)
            client.servercommands.set(subServer.data.name, subServer);
        };

        const command = Interaction.client.commands.get(Interaction.commandName);

        try {


            const GuildCommand = client.servercommands.get(Interaction.commandName)

            if (!GuildCommand) {
                await command.run(Interaction);
            }

            if (Interaction.commandName == "rules") {
                if (Interaction.guild.id == TechnologyClubId) {
                    GuildCommand.run(Interaction, client)
                } else if (Interaction.guild.id !== TechnologyClubId) {
                    Interaction.reply({ embeds: [NoPerm], ephemeral: true })
                }
            }
        } catch (error) {
            console.error(error);
            await Interaction.reply({ content: `There was an error while executing this command! \`\`\`bat\n${error}\`\`\` `, ephemeral: true });
        }
    }
}