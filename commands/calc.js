module.exports = {
    name: "calc",
    description: "Calculates the given equation",
    execute(message, args) {

        const Discord = require('discord.js');

        if (!args[0]) return message.channel.send("Please provide an operation (plus/minus/divide/multiply)");



        if (!args[1].match(/^[0-9]+$/)) return message.channel.send("Please provide a number");
        if (!args[2].match(/^[0-9]+$/)) return message.channel.send("Please provide a number");






        if (args[0] === "plus"){



            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Calculator')
            .setDescription(`${args[1]} + ${args[2]} = ${parseInt(args[1]) + parseInt(args[2])}`)
            .setTimestamp();
            message.channel.send({embeds: [embed]});

        }

        if (args[0] === "minus"){

            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Calculator')
            .setDescription(`${args[1]} - ${args[2]} = ${parseInt(args[1]) - parseInt(args[2])}`)
            .setTimestamp();
            message.channel.send({embeds: [embed]});


        }

        if (args[0] === "multiply"){

            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Calculator')
            .setDescription(`${args[1]} * ${args[2]} = ${parseInt(args[1]) * parseInt(args[2])}`)

            .setTimestamp();
            message.channel.send({embeds: [embed]});

        }

        if (args[0] === "divide"){

            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Calculator')
            .setDescription(`${args[1]} / ${args[2]} = ${parseInt(args[1]) / parseInt(args[2])}`)
            .setTimestamp();
            message.channel.send({embeds: [embed]});


        }



        


    }
}