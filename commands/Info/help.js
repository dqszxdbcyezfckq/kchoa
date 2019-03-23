const Discord = require('discord.js');
const fs = require("fs");
const config = require('../../config.json')
exports.run = async (client, message, params) => {

  try {
    if (message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]){
      prefixes[message.guild.id] = {
        prefixes: config.prefix
      };
    }
    let prefix = prefixes[message.guild.id].prefixes;
  if (!params[0]) {
    if (!message.channel.nsfw) {
      fs.readdir('./commands/Fun/', (err, filesfun) => {
        if (err) console.error(err);
        fs.readdir('./commands/canvas/', (err, filescanvas) => {
          if (err) console.error(err);
          fs.readdir('./commands/Image/', (err, filesimg) => {
            if (err) console.error(err);
            fs.readdir('./commands/Social/', (err, filessoc) => {
              if (err) console.error(err);
              fs.readdir('./commands/NSFW/', (err, filesnsfw) => {
                if (err) console.error(err);
                fs.readdir('./commands/Admin/', (err, filesadmin) => {
                  if (err) console.error(err);
                  fs.readdir('./commands/Mod/', (err, filesmod) => {
                    if (err) console.error(err);
                    fs.readdir('./commands/Info/', (err, filesinfo) => {
                      if (err) console.error(err);
  
      const FunHelp = new Discord.RichEmbed()
      .setTitle(`Liste des commandes de la catégorie fun`)
      .setDescription(`(Il y a un total de **${filesfun.length + filescanvas.length + filesimg.length}** commandes dans cette catÃ©gorie)\n\nUtilise **${prefix}help <commande>** pour plus d'infos sur une commande`)
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .addField("Divers", `${client.commands.filter(cmd => cmd.help.category =="divers").map(c => `\`\`${c.help.name}\`\``)}`)
      .addField("Image", `${client.commands.filter(cmd => cmd.help.category =="image").map(c => `\`\`${c.help.name}\`\``)}`)
      .addField("Canvas", `${client.commands.filter(cmd => cmd.help.category =="canvas").map(c => `\`\`${c.help.name}\`\``)}`)
      .addField("Jeux", `${client.commands.filter(cmd => cmd.help.category =="game").map(c => `\`\`${c.help.name}\`\``)}\n\nUtilise "ðŸ¡" pour revenir au menu de base`)
      .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
      const InfoHelp = new Discord.RichEmbed()
      .setTitle(`Liste des commandes de la catÃ©gorie info`)
      .setDescription(`(Il y a un total de **${filesinfo.length}** commandes dans cette catÃ©gorie)\n\nUtilise **${prefix}help <commande>** pour plus d'infos sur une commande`)
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .addField("Info", `${client.commands.filter(cmd => cmd.help.category =="info").map(c => `\`\`${c.help.name}\`\``)}`)
      .addField("Recherche", `${client.commands.filter(cmd => cmd.help.category =="recherche").map(c => `\`\`${c.help.name}\`\``)}\n\nUtilise "ðŸ¡" pour revenir au menu de base`)
      .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
      const ModHelp = new Discord.RichEmbed()
      .setTitle(`Liste des commandes de la catÃ©gorie mod`)
      .setDescription(`(Il y a un total de **${filesmod.length + filesadmin.length}** commandes dans cette catÃ©gorie)\n\nUtilise **${prefix}help <commande>** pour plus d'infos sur une commande`)
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .addField("Admin", `${client.commands.filter(cmd => cmd.help.category =="admin").map(c => `\`\`${c.help.name}\`\``)}`)
      .addField("Modo", `${client.commands.filter(cmd => cmd.help.category =="mod").map(c => `\`\`${c.help.name}\`\``)}\n\nUtilise "ðŸ¡" pour revenir au menu de base`)
      .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
      const NsfwHelp = new Discord.RichEmbed()
      .setTitle(`Liste des commandes de la catÃ©gorie nsfw`)
      .setDescription(`(Il y a un total de **${filesnsfw.length}** commandes dans cette catÃ©gorie)\n\nUtilise **${prefix}help <commande>** pour plus d'infos sur une commande`)
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .addField("Image", `${client.commands.filter(cmd => cmd.help.category =="porn").map(c => `\`\`${c.help.name}\`\``)}\n\nUtilise "ðŸ¡" pour revenir au menu de base`)
      .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
      const SocialHelp = new Discord.RichEmbed()
      .setTitle(`Liste des commandes de la catÃ©gorie social`)
      .setDescription(`(Il y a un total de **${filessoc.length}** commandes dans cette catÃ©gorie)\n\nUtilise **${prefix}help <commande>** pour plus d'infos sur une commande`)
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .addField("Action", `${client.commands.filter(cmd => cmd.help.category =="action").map(c => `\`\`${c.help.name}\`\``)}\n\nUtilise "ðŸ¡" pour revenir au menu de base`)
      .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
    const HelpEmbed = new Discord.RichEmbed()

    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setTitle("**Liste des catÃ©gories de commandes**")
    .setDescription("Utilise `" + prefix + "help_<catÃ©gorie>` pour avoir accÃ¨s au commande spÃ©cifique !")
    .addField("**CatÃ©gories**", `Utilise "ðŸ˜ˆ" pour avoir les commandes de modÃ©ration\nUtilise "ðŸ”¥" pour avoir les commandes d'info\nUtilise "ðŸ’»" pour avoir les commandes fun\nUtilise "ðŸŒ" pour avoir les commandes social\n\n\nPour fermer le help utilise "âŒ"`)
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
    async function f() {
  const emote = await message.channel.send(HelpEmbed);
        await  emote.react("🔥")
        await   emote.react("😈")
       await    emote.react("💻")
       await    emote.react("🍌")
    await   emote.react("🏡")
    
        const collector = emote.createReactionCollector((reaction, user) => user.id === message.author.id);

        collector.on('collect', async(reaction) => {
          if (reaction.emoji.name === "🔥") {
            emote.clearReactions(message.author.id);
            emote.edit(ModHelp)
            await emote.react("❌")
        }
        if (reaction.emoji.name === "😈") {
          emote.clearReactions(message.author.id)
          emote.edit(InfoHelp)
          await emote.react("❌")
      }
      if (reaction.emoji.name === "💻") {
        emote.clearReactions(message.author.id)
        emote.edit(FunHelp)
        await emote.react("❌")
    }
    if (reaction.emoji.name === "🍌") {
      emote.clearReactions(message.author.id)
      emote.edit(SocialHelp)
      await emote.react("❌")
  }
  if (reaction.emoji.name === "🏡") {
    emote.clearReactions(message.author.id)
    emote.delete()
    
  }
  if(reaction.emoji.name === "❌") {
    emote.clearReactions(message.author.id)
    emote.edit(HelpEmbed)
    await  emote.react("🔥")
    await   emote.react("😈")
   await    emote.react("💻")
   await    emote.react("🍌")
   await   emote.react("🏡")
  }
        })
      }f()
    });
  });
  });
  });
  });
  });
  });
  });
  

    } else {
      var HelpEmbed2 = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random() * 16777214) + 1)
    .setTitle("**Liste des catÃ©gories de commandes**")
    .setDescription("Utilise `" + prefix + "help_<catÃ©gorie>` pour avoir accÃ¨s au commande spÃ©cifique !")
    .addField("**CatÃ©gories**", `**${prefix}help_mod** (Commande de modÃ©ration)\n**${prefix}help_info** (Commande informative)\n**${prefix}help_fun** (Commande de jeux)\n**${prefix}help_social** (Commande d'action)\n**${prefix}help_nsfw** (Commande pornographique)`)
    .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
    message.channel.send(HelpEmbed2)

    }

  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      var HelpEmbed3 = new Discord.RichEmbed()
      .setTitle(`Commande: ${command.help.name}`)
      .setColor(Math.floor(Math.random() * 16777214) + 1)
      .setDescription("**Description**: " + command.help.description + "\n**Rappel**: Les \"<>\" ne sont pas Ã  utiliser lors de l'Ã©xecution de la commande.")
      .addField("**Utilisation**:", `${command.help.usage2 ? `${prefix+command.help.usage}\n${prefix+command.help.usage2}` : `${prefix+command.help.usage}`} `)
      .addField("**Aliase**:", `${command.conf.aliases.join(", ")}` || "Il n'y a pas d'aliase.")
      .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp()
      message.channel.send(HelpEmbed3);    
      message.react("ðŸ‘")
    }
  }
} catch(err) {
  console.error(err);
  return message.channel.send(':x: | Une erreur c\'est produite lors du traitement de la commande.\nVeuillez envoyer un report de la commande si ce message persiste');
};

};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'aide'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Montre tout les commandes existantes sur le bot',
  usage: 'help <command>',
  category: 'info'
};
