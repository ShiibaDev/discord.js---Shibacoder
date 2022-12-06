const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { ProfilePhoto } = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rules')
        .setDescription('Need remember those rules? Ok, here you got'),
    
    async run(Interaction) {
        const RulesEmbed = new EmbedBuilder()
            .setColor('Green')
            .setAuthor({ name: 'Shibacoder', iconURL: ProfilePhoto })
            .setTitle('Reglas 📜')
            .setDescription('Para ser organizados y mantener un orden en esta comunidad, hemos creado las siguientes reglas, faciles de seguir')
            .setFields(
                { name: '**1**', value: 'Favor, de no mostrar contenido explicito, ya sea en el perfil incluyendo el \'Banner\', no se tolera esta infraccion, inmediatamente sera reportado' },
                { name: '**2**', value: 'Las tareas, deben ser entregadas por su canal respectivo, poner en un comentario su nombre. Si se le encuentra similitud con otro usuario, se sospechara de plagio (Se vale StackOverlfow)' },
                { name: '**3**', value: 'No sobra mencionar seguir los terminos y condiciones de uso de Discord y cada uno de los productos a utilizar que sean mencionados y/o requeridos en los trabajos.' },
                { name: '**4**', value: 'Simple pero, mayormente se ignora, favor de no abusar de comandos de los bots, ya sea Shibacoder o algun bot oficial.\n A lo que se refiere a abusar es el spam de comandos en un canal y el mal uso de estos.' }
            )
        await Interaction.reply({ embeds: [RulesEmbed] })
    }
}