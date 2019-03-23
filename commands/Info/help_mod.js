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

  fs.readdir('./commands/Admin/', (err, filesinfo) => {
    if (err) console.error(err);
    fs.readdir('./commands/Mod/', (err, filesinfo2) => {
      if (err) console.error(err);

    /*var HelpEmbed = new Discord.RichEmbed()
    .setTitle(`Liste des commandes de la catégorie mod`)
    .setDescription(`(Il y a un total de **${filesinfo.length + filesinfo2.length}** commandes dans cette catégorie)\n\nUtilise **${prefix}help <commande>** pour plus d'infos sur une commande`)
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .addField("Admin", "`ban`, `lockdown`, `unban`, `prefix`")
    .addField("Modo", "`kick`, `mute`, `tempmute`, `purge`, `addrole`, `removerole`")
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

    message.channel.send(HelpEmbed);*/

    var HelpEmbed = new Discord.RichEmbed()
    .setTitle(`Liste des commandes de la catégorie mod`)
    .setDescription(`(Il y a un total de **${filesinfo.length + filesinfo2.length}** commandes dans cette catégorie)\n\nUtilise **${prefix}help <commande>** pour plus d'infos sur une commande`)
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .addField("Admin", `${client.commands.filter(cmd => cmd.help.category =="admin").map(c => `\`\`${c.help.name}\`\``)}`)
    .addField("Modo", `${client.commands.filter(cmd => cmd.help.category =="mod").map(c => `\`\`${c.help.name}\`\``)}`)
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

    message.channel.send(HelpEmbed);
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hm', 'helpmod'],
  permLevel: 0
};

exports.help = {
  name: 'help_mod',
  description: 'Montre tout les commandes fun du bot',
  usage: 'help_mod'
};