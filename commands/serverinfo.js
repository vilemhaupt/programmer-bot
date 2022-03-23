module.exports = {
    name: "serverinfo",
    description: "Gives you information about the server you are in",
    execute(message, args) {

        const Discord = require("discord.js");

        var embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Server Info')
        .addField('Name', `${message.guild.name}`)
        .addField('ID', `||${message.guild.id}||`)
        .addField('Created At', `${message.guild.createdAt}`)   
        .addField('Members', `${message.guild.memberCount}`)
        .addField('Region', `${message.guild.preferredLocale}`)
        .addField('Roles', `${message.guild.roles.cache.size}`)
        .addField('Channels', `${message.guild.channels.cache.size}`)




        message.channel.send({embeds: [embed]});

    }
}