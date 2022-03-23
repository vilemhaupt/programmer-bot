module.exports = {
    name: "ping",
    description: "returns server ping",
    execute(message, args) {
            
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Bot Pings')
        .addField('Ping bot', `${Date.now() - message.createdTimestamp}ms`)
        .addField('API Ping', `${Math.round(client.ws.ping)}ms`)
        .setTimestamp();

         message.channel.send({embeds: [embed]});
    
    }
}