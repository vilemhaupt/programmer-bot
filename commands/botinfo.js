module.exports = {
    name: "contact",
    description: "contact on the author",
    execute(message, args) {
            
        // PLEASE DO NOT EDIT THIS CODE.

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Contact')
        .setDescription('here you can contact my Developer')
        .addField('Email', `kontakt@vilemhaupt.eu`)
        .addField('Github repizotory', `github.com/vilemhaupt/programmer-bot`)
        .addField('My Developer', `<@!306057389235240962>`)
        
    
        message.channel.send({embeds: [embed]});
    
    }
}