const Discord = require('discord.js');
exports.run = (client, message) => {

        var PingEmbed = new Discord.RichEmbed()
.setColor(Math.floor(Math.random() * 16777214) + 1)
.addField("Cliquer sur le lien ci dessous pour m'ajouter", "https://discordapp.com/api/oauth2/authorize?client_id=" + client.user.id + "&permissions=8&scope=bot")
.setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

message.channel.send(PingEmbed);

}
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['invitation'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'invite',
    description: 'Donne le lien pour m\'ajouter sur le serv de votre choix',
    usage: 'invite'
  };
