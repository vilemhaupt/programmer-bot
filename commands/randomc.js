module.exports = {
    name: "randomc",
    description: "Generates a random color",
    execute(message, args) {

        var Discord = require('discord.js');

        var color = Math.floor(Math.random() * 16777215).toString(16);


        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);



         var rgbColor = "rgb(" + r + ", " + g + ", " + b + ")";

         var a = `rgb(${r},${g},${b})`.split("(")[1].split(")")[0];

         a = a.split(",");

         var b = a.map(function(x){             
            x = parseInt(x).toString(16);      
            return (x.length==1) ? "0"+x : x;  
        })

        b = "0x"+b.join("");

        var rgbColorCode = b;


        const hexColorEmbed = new Discord.MessageEmbed()
            .setTitle('Hex Color code')
            .setDescription("The color code is: #" + color)
            .setTimestamp()
            .setColor(`${color}`);

            
        const rgbColorEmbed = new Discord.MessageEmbed()
            .setTitle('RGB Color code')
            .setDescription("The color code is: " + rgbColor)
            .setTimestamp()
            .setColor(`${rgbColorCode}`);



        if (args[0] === "hex") {

            message.channel.send(`hex's code of color is: #${color}`);

            message.channel.send({embeds: [hexColorEmbed]});
        }

        if (args[0] === "rgb") {
                
                message.channel.send(`rgb's code of color is: ${rgbColor}`);
    
                message.channel.send({embeds: [rgbColorEmbed]});
        }

        if (!args[0]){
            message.channel.send("use `randomc rgb` or `randomc hex`");
        }

        










    }
}