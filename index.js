
const Discord = require("discord.js");

const { Client, Intents, MessageEmbed } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  disableEveryone: true,
});

const config = require("./settings.json");


client.once("ready", () => {
    console.log(`Logged as ${client.user.tag}!`);

    client.user.setPresence({
         activities: [{ name: `!help`, type: `LISTENING` }] 
    });


});

// command sender setup

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){


    const command = require(`./commands/${file}`);

    console.log(`Loading command: ${command.name}`);
 
    client.commands.set(command.name, command);

}





// command sending

client.on("message", message => {

    if(!message.content.startsWith(config.prefix) || message.author.bot) return;
  
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
  

  

    if(command === 'purge'){
        client.commands.get('purge').execute(message, args);
    }

    if(command === 'randomc'){
        client.commands.get('randomc').execute(message, args);
    }

    if(command === 'invite'){
        client.commands.get('invite').execute(message, args);
    }

    if(command === 'cmds'){
        client.commands.get('commands').execute(message, args);
    }

    
    if(command === 'cmd'){
        client.commands.get('commands').execute(message, args);
    }


    if(command === 'commands'){
        client.commands.get('commands').execute(message, args);
    }

    if (command === 'avatar'){
        client.commands.get('avatar').execute(message, args);
    }

    if (command === 'calc'){
        client.commands.get('calc').execute(message, args);
    }

    if (command === 'userinfo'){
        client.commands.get('userinfo').execute(message, args);
    }

    if (command === 'serverinfo'){
        client.commands.get('serverinfo').execute(message, args);
    }

    if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }

    if (command === 'change'){
        client.commands.get('change').execute(message, args);
    }

    if (command === 'colorcheck'){
        client.commands.get('colorcheck').execute(message, args);
    }

    if (command === 'cc'){
        client.commands.get('colorcheck').execute(message, args);
    }

    if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }

    if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }

    if (command === 'ping'){

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Bot Pings')
        .addField('Ping bot', `${Date.now() - message.createdTimestamp}ms`)
        .addField('API Ping', `${Math.round(client.ws.ping)}ms`)
        .setTimestamp();

    message.channel.send({embeds: [embed]});

    }


    if (command === 'botinfo'){

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

    if (command === 'contact'){

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




    // ||

});





client.login(config.token).catch(err => {
    console.log("Error: " + err);
})
