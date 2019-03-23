const Discord = require('discord.js');
const chat = require("nekos.life")
exports.run = (client, message, args) => {
  const neko = new chat();

  try {
    async function work() {
        let owo = await neko.getSFWChat({text: args.join(" ")});
        console.log(owo);
        var Reponse = new Discord.RichEmbed()
        .setDescription(owo.response)
        message.channel.send(owo.response)
}

work()
        

    } catch(err) {
      console.error(err);
      return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste');
    };

    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['toi'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'toi',
    description: 'Envoie une image aléatoire de chat',
    usage: 'toi',
    category: 'image'
  };