module.exports = {
    name: "change",
    description: "Changes a 1 value, to another value.",
    execute(message, args) {

        if (args[1] > 10000000000 || args[1] < 1) return message.channel.send("Please provide a number between 1 and 10000000000");

        if (!args[0]) {
            return message.channel.send("Please specify a value to change. (rem/px/%)");
        }


        if (args[0] == "rem") {

            var rem = args[1] * 0.0625;

            if (!args[1]){
                message.channel.send("Please specify a value to transfer. (PX to REM)");
            }

            if (args[1]){
                message.channel.send(`${args[1]}px is ${rem}rem`);
            }



        }

        if (args[0] == "px") {

            var px = args[1] * 16;

            if (!args[1]){
                message.channel.send("Please specify a value to transfer. (REM to PX)");
            }

            if (args[1]){
                message.channel.send(`${args[1]}rem is ${px}px`);
            }

        }

        if (args[0] == "%") {
                
                var percent = args[1] * 6.25;
    
                if (!args[1]){
                    message.channel.send("Please specify a value to transfer. (PX to %)");
                }
    
                if (args[1]){
                    message.channel.send(`${args[1]}px is ${percent}%`);
                }
    
        }
        

    }

}