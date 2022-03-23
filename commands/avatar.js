module.exports = {
    name: "avatar",
    description: "Shows the avatar of the user",
    execute(message, args) {
            
            const Discord = require('discord.js');
    
            const embed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Avatar')
                .setImage(message.author.avatarURL())
                .setTimestamp();
    
            message.channel.send({embeds: [embed]});
    
    }
}