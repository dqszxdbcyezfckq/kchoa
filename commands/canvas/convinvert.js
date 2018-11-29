const talkedRecently = new Set();
const Discord = require('discord.js');
const fs = require('fs');
let type = "convinvert"
exports.run = (client, message, args) => {
 
    let member = message.mentions.members.first() || message.member;
    message.channel.startTyping();
    message.channel.send({
      files: [{
        attachment: `https://www.arcadia-api.xyz/api/v1/${type}?url=${member.user.displayAvatarURL}`,
        name: `${type}.gif`
      }]
    })
    message.channel.stopTyping();
}



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: `${type}`,
    description: `Envoie une image ${type}.`,
    usage: `${type}`
  };