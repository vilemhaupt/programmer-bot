module.exports = {
    name: "commands",
    description: "Shows all commands",
    execute(message, args) {

        const Discord = require('discord.js');

        const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Commands')
            .setDescription('Here are all the commands you can use!')
            .addField('purge', 'Deletes a certain amount of messages')
            .addField('randomc', 'Sends a random color')
            .addField('invite', 'Sends the invite link of the bot')
            .addField('avatar', 'Sends the avatar of the user')
            .addField('serverinfo', 'Sends the server information')
            .addField('userinfo', 'Sends the user information')
            .addField('calc', 'Calculates a math expression')
            .addField('change', 'Can change 1 value to another')
            .addField('help', 'Help command')
            .addField('colorcheck', 'Print a (hex)color in an embed')
	    .addField('ban', 'Ban a user from server')
	    .addField('kick', 'Kick a user from server')
            .addField('botinfo', 'Sends the bot information')
            .addField('contact', 'Sends the contact')

            .setTimestamp();

            message.channel.send({embeds: [embed]});


    }
}