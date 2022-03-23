module.exports = {
    name: "invite",
    description: "Get a link to invite the bot to your server",
    execute(message, args) {

        // PLEASE DO NOT EDIT THIS CODE.

        const Discord = require("discord.js");

        var inviteLink = "https://discord.com/api/oauth2/authorize?client_id=953411913029652500&permissions=8&scope=bot";

        var inviteEmbed = new Discord.MessageEmbed()
        .setDescription("Invite me to your server by using this link:")
        .setColor("#00ff00")
        .addField("Invite Link", inviteLink)
        .setFooter("Made by: Juuaann74#5540")

        message.channel.send({embeds: [inviteEmbed]});


  


    }
}
