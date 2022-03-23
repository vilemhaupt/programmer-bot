module.exports = {
    name: "ping",
    description: "shows bot ping",
    execute(message, args) {

        const { Client, Intents } = require("discord.js");

        const Discord = require("discord.js");

        const client = new Client({
            intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
            disableEveryone: true,
        });

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Bot Pings')
        .addField('Ping bot', `${Date.now() - message.createdTimestamp}ms`)
        .addField('API Ping', `${Math.round(client.ws.ping)}ms`)
        .setTimestamp();



        message.channel.send({embeds: [embed]});


    }
}