module.exports = {
    name: "kick",
    description: "Kick a user from the server",
    Permissions: ["KICK_MEMBERS", "ADMINISTRATOR"],

    execute(message, args) {

        const member = message.mentions.members.first();
        const reason = args[1];

        if (!member) return message.channel.send("Please provide a user to kick");
        if (!reason) return message.channel.send("Please provide a reason for the kick");

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You do not have permission to kick members");

        if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send("You do not have permission to kick members");

        if (member.id === message.author.id) return message.reply({ content: `❌ | You cannot kick yourself!` });

        if (message.member.roles.highest.position < member.roles.highest.position) {
            message.reply({content: `❌ | You cannot kick user who have higher role than you...`});
        }

        try {
            member.send(`Kicked from ${message.guild.name} for ${reason}`);
        } catch(e) {
            message.channel.send(`${member} has closed PM`)
        }
        
        setTimeout(() => member.kick({ reason: reason}), 3000);

        message.channel.send(`${member} has been kicked for ${reason}`);

    
    }
            
        
}