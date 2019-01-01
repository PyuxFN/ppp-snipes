const Discord = require('discord.js');

module.exports.run = async (bot,message,args) => {

    let em = new Discord.RichEmbed()
    .setTitle("Solo match starting now!")
    .setDescription("How To Play: Make sure your content is loaded. Make sure all of the members in your party are readied up. Go on the G of GO.")
    .setColor("#8600b3");

}

module.exports.help = {
    name: "solo"
}

