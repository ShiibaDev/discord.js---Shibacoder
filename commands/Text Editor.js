const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ComponentType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("editor")
        .setDescription("If you need a text editor to start coding, here you got"),

    async run(Interaction) {
        var ProfilePhoto = "https://steamuserimages-a.akamaihd.net/ugc/947328169457231320/AEA74DB7BAD24CB9702738DBF1BA515A7F1AE3DC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
    
        // Links for the user
        const OptionsSelectorEmbed = new EmbedBuilder()
            // .setAuthor({ name: "Concorde", iconURL: "" })
            .setTitle("Shibacoder - Editor Selector")
            .setColor('Random')
            .setDescription("Requiring a Text Editor or an IDE to start coding? Select a editor here")
            .setFields(
                { name: "Editors Available:", value: "We actually know about:" },
                { name: "Visual Studio Code", value: "An intelligent IDE, uses a little bit of memory, but not that heavy" },
                { name: "Notepad++", value: "Open source Text editor, lightweight and don't uses a big amount of memory" }
            )

            // Embeds (Text editor)
        const VisualStudioCode = new EmbedBuilder()
            .setTitle('Visual Studio Code')
            .setURL('https://code.visualstudio.com/')
            .setColor('Blue')
            .setDescription("If you require a text editor, we give you Visual Studio code and if you need optimization, notepad++")

        const Notepad = new EmbedBuilder()
            .setColor('Yellow')
            .setAuthor({ name: 'Shibacoder', iconURL: ProfilePhoto, value: ' - Notepad++' })
            .setDescription("If you need a optimized text editor, you can chose this one")
            .setFields(
               { name: 'Notepad++ - ', value: 'https://notepad-plus-plus.org/downloads/' }
            )

        const VSCode = new EmbedBuilder()
            .setColor('Blue')
            .setTitle('Visual Studio Code Website')
            .setURL('https://code.visualstudio.com/learn')
            .setDescription("Need a to quickly edit a file? Use this IDE inside the web browser. Is Visual Studio Code in the browser.")
        
        const Classic_Notepad = new EmbedBuilder()
            .setTitle('Notepad')
            .setColor('Random')
            .setDescription('Just open the notepad from windows')

        const EditorOptions = new ActionRowBuilder()
                .addComponents(
                    new SelectMenuBuilder()
                        .setCustomId('select')
                        .setPlaceholder('Please, select a text Editor')
                        .addOptions(
                            {
                                label: 'Visual Studio Code',
                                description: 'Intelligent and can be used to code multiple languages',
                                value: 'first_option'
                            },
                            {
                                label: 'Notepad++',
                                description: 'This is a lightweight Text editor, can be used to code multiple languages, but only those supported',
                                value: 'second_option'
                            },
                            {
                                label: 'Visual Studio Code Web',
                                description: 'IDE in the cloud, code in the website with your account',
                                value: 'third_option'
                            },
                            {
                                label: 'Default Notepad',
                                description: 'Bro, it default on windows, idk',
                                value: 'Notepadlol'
                            }
                        ),
                )
        
        Respond = await Interaction.reply({ embeds: [OptionsSelectorEmbed], ephemeral: true, components: [EditorOptions], fetchReply: true })
        const filter = i => i.customId === 'select';
        Respond.awaitMessageComponent({ filter, max: 1, componentType: ComponentType.SelectMenu, time: 60000, errors: ['time'] }).then (Interaction => {
            const OptionSelector = Interaction.values

            if (OptionSelector == "first_option") {
                Interaction.reply({ embeds: [VisualStudioCode], ephemeral: true })
            }
            
            if (OptionSelector == "second_option") {
                Interaction.reply({ embeds: [Notepad], ephemeral: true })
            }

            if (OptionSelector == "third_option") {
                Interaction.reply({ embeds: [VSCode], ephemeral: true})
            }

            if (OptionSelector == "Notepadlol") {
                Interaction.reply({ embeds: [Classic_Notepad], ephemeral: true })
            }
        }).catch((err) => {
            console.error(err)
        }) // Afk
    } // We gonna update this one to show something special.
    // Version Stable 0.0.0.1 [Text Editor]
    // Version Stable: 0.0.0.1
}