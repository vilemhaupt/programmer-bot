module.exports = {
    name: "botinfo",
    description: "shows bot info",
    execute(message, args) {

        const { Client, Intents } = require("discord.js");


        const client = new Client({
            intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
            disableEveryone: true,
        });

        const sc = client.guilds.cache.size;

        const Discord = require("discord.js");

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Bot Information')
        .setDescription('Here are all information about the bot!')
        .addField('Server count', `${client.guilds.cache.size}`)
        .addField('User count', `${client.users.cache.size}`)
        .addField(`Channel count`, `${client.channels.cache.size}`)
        .addField('My Developer', `<@!306057389235240962>`)
        .addField('Ping bot', `${Date.now() - message.createdTimestamp}ms`)
        .addField('API Ping', `${Math.round(client.ws.ping)}ms`)
        
    
        message.channel.send({embeds: [embed]});


    }
}