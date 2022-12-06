const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { ProfilePhoto } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lib')
        .setDescription('C++, Python and JavaScript libraries.'),

    async run(Interaction) {
        const librariesList = new EmbedBuilder()
            .setColor('Yellow')
            .setAuthor({ name: 'Shibacoder', iconURL: ProfilePhoto })
            .setTitle('Libraries 📔')
            .setDescription('Every library you need is here.')
            .setFields(
                { name: 'MingGW', value: 'Is used to install C/C++ basic libs, is open sources and free. https://www.mingw-w64.org/' },
                { name: 'Python Microsoft Store', value: 'Is Python, but from Microsoft Store. https://apps.microsoft.com/store/detail/python-310/9PJPW5LDXLZ5' },
                { name: 'Python', value: 'Python, is a modenr language, easy to learn and to use, very well payed job with Data Science uses Python. https://www.python.org/' },
                { name: 'Git', value: 'This tool is very useful for collaborations https://git-scm.com/downloads' }
            )
        await Interaction.reply({ embeds: [librariesList] })
    }
}