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



    client.commands.get(command).execute(message, args);

});



client.login(config.token).catch(err => {
    console.log("Error: " + err);
})
