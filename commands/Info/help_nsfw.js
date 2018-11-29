const Discord = require('discord.js');
const fs = require("fs");
const config = require('../../config.json')
exports.run = (client, message, params) => {
  if (message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;

  if (!message.channel.nsfw) return message.channel.send(":x: | Ce n'est pas un channel NSFW.")

  fs.readdir('./commands/NSFW/', (err, filesinfo) => {
    if (err) console.error(err);
     

    var HelpEmbed = new Discord.RichEmbed()
    .setTitle(`Liste des commandes de la catégorie nsfw`)
    .setDescription(`(Il y a un total de **${filesinfo.length}** commandes dans cette catégorie)\n\nUtilise **${prefix}help <commande>** pour plus d'infos sur une commande`)
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .addField("Image", "`4k`, `amateur`, `asian`, `cosplay`, `dick`, `gif`, `hentai`, `milf`, `public`, `pussy`, `snapchat`, `uniform`")
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

    message.channel.send(HelpEmbed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hn', 'helpnsfw'],
  permLevel: 0
};

exports.help = {
  name: 'help_nsfw',
  description: 'Montre tout les commandes fun du bot',
  usage: 'help_nsfw'
};