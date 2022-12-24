// Function to test code.
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('design')
        .setDescription('Need some applications to design pictures or 3D models? We got you'),

    async run(Interaction) {
        var ProfilePhoto = "https://steamuserimages-a.akamaihd.net/ugc/947328169457231320/AEA74DB7BAD24CB9702738DBF1BA515A7F1AE3DC/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";

        const DesignEmbed = new EmbedBuilder()
            .setColor('Orange')
            .setAuthor({ name: 'Shibacoder', iconURL: ProfilePhoto })
            .setTitle('Diseño 💻')
            .setDescription('Para poder diseñar, necesitaras algunas aplicaciones que son usadas por profesionales, Aqui tenemos 2 aplicaciones, con diferentes usos\n\n')
            .setFields(
                { name: '**GIMP**', value: 'Puedes editar y diseñar fotos, es utilizado por diseñadores profesionales, y es Open Source', inline: false },
                { name: '.', value: 'https://www.gimp.org/', inline: true },
                { name: '**Blender**', value: 'Es utilizado para diseño de objetos 3D', inline: false },
                { name: '.', value: 'https://www.blender.org/', inline: true }
            )
        
        await Interaction.reply({ embeds: [DesignEmbed], ephimeral: false })
    }
}