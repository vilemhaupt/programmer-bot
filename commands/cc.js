module.exports = {
    name: "cc",
    description: "get the color of a hex color code and print in embed",
    execute(message, args) {

        const Discord = require("discord.js");

        const hex = args[0];

        if(!hex) return message.channel.send("Please provide a hex color code");

        if (hex.charAt(0) !== "#") return message.channel.send("Please provide a hex color code");

        if (hex == "#fff") return message.channel.send("White is not a color");

        


        const embed = new Discord.MessageEmbed()
            .setColor(args[0])
            .setTitle("Color Checker (HEX)")
            .setDescription(`Requested color: ${args[0]}`)
            .setFooter("Requsted by " + message.author.tag, message.author.avatarURL());

            message.channel.send({embeds: [embed]});


    }

}