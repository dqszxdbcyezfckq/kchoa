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
   

    fs.readdir('./commands/Fun/', (err, filesinfo) => {
      if (err) console.error(err);
      fs.readdir('./commands/canvas/', (err, filescanvas) => {
        if (err) console.error(err);
        fs.readdir('./commands/Image/', (err, filesimg) => {
          if (err) console.error(err);

      var HelpEmbed = new Discord.RichEmbed()
    .setTitle(`Liste des commandes de la catégorie fun`)
    .setDescription(`(Il y a un total de **${filesinfo.length + filescanvas.length + filesimg.length}** commandes dans cette catégorie)\n\nUtilise **${prefix}help <commande>** pour plus d'infos sur une commande`)
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .addField("Divers", `${client.commands.filter(cmd => cmd.help.category =="divers").map(c => `\`\`${c.help.name}\`\``)}`)
    .addField("Image", `${client.commands.filter(cmd => cmd.help.category =="image").map(c => `\`\`${c.help.name}\`\``)}`)
    .addField("Canvas", `${client.commands.filter(cmd => cmd.help.category =="canvas").map(c => `\`\`${c.help.name}\`\``)}`)
    .addField("Jeux", `${client.commands.filter(cmd => cmd.help.category =="game").map(c => `\`\`${c.help.name}\`\``)}`)
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()

    message.channel.send(HelpEmbed);

    });
  });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hf', 'helpfun'],
  permLevel: 0
};

exports.help = {
  name: 'help_fun',
  description: 'Montre tout les commandes fun du bot',
  usage: 'help_fun'
};
