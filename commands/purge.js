module.exports = {
    name: "purge",
    description: "Purges a certain amount of messages",

    execute(message, args) {

        if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("You don't have permission to use this command!");

        if(!args[0]) return message.channel.send("Please specify the amount of messages you want to delete!");

        if(isNaN(args[0])) return message.channel.send("Please specify a number!");

        if(args[0] > 100) return message.channel.send("Please specify a number less than 100!");
        
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`Purged ${args[0]} messages!`);
        });

        

    }
}