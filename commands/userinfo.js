module.exports = {
    name: "userinfo",
    description: "Gives you information about the user you mention",
    execute(message, args) {

        var Discord = require("discord.js");

        var embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setDescription(`Information about ${message.author.username}#${message.author.discriminator}`)
        .setTitle('User Info')
        .addField('Username', `${message.author.username}`)
        .addField('ID', `||${message.author.id}||`)
        .addField('Created At', `${message.author.createdAt}`)
        .addField('Joined At', `${message.member.joinedAt}`)
        .setThumbnail(`${message.author.avatarURL()}`)
        .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`)


        .setTimestamp()

        message.channel.send({embeds: [embed]});

    }
}