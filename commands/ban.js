module.exports = {
    name: "ban",
    description: "Bans a user from the server",
    Permissions: ["BAN_MEMBERS","ADMINISTRATOR"],

    execute(message, args) {

        const member = message.mentions.members.first();
        const reason = args[1];

        if (!member) return message.channel.send("Please provide a user to ban");
        if (!reason) return message.channel.send("Please provide a reason for the ban");

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You do not have permission to ban members");

        if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("You do not have permission to ban members");

        if (member.id === message.author.id) return message.reply({ content: `❌ | You cannot ban yourself!` });

        if (message.member.roles.highest.position < member.roles.highest.position) {
            message.reply({content: `❌ | You cannot ban user who have higher role than you...`});
        }

        try {
            member.send(`Banned from ${message.guild.name} for ${reason}`);
        } catch(e) {
            message.channel.send(`${member} has closed PM`)
        }
        
        setTimeout(() => member.ban({ reason: reason}), 3000);

        message.channel.send(`${member} has been banned for ${reason}`);

    
    }
            
        
}