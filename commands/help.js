module.exports = {
    name: "help",
    description: "Shows all commands",
    execute(message, args) {

        const Discord = require('discord.js');

        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Help with commands')
            .setDescription('Here are all the commands args you can use!')
            .addField('calc', 'plus minus multiply divide')
            .addField('randomc', 'rgb hex')
            .addField('purge', 'Number of messages to delete')
            .addField('change', 'rem, px, %')
            .addField('colorcheck', 'hex')
            .setTimestamp();

            message.channel.send({embeds: [embed]});


    }
}