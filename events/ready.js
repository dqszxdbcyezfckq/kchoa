const chalk = require('chalk');
const Discord = require('discord.js');
const fs = require("fs");
const config = require('../config.json')
const purplecolor = chalk.keyword('purple');
const invites = {};

module.exports = client => {
  
  client.guilds.forEach(g => {
  g.fetchInvites().then(guildInvites => {
    invites[g.id] = guildInvites;
    });
  });
  console.log(purplecolor(`${client.user.username} en ligne. \n` + 'Connecté dans:\n' + client.guilds.array() + invites));
 //client.user.setGame('//help pour plus d\'info', 'https://www.twitch.tv/ryvalgaming')//stream
  //client.user.setAvatar("https://cdn.discordapp.com/attachments/515913352430747665/515917419198545930/rainbow.gif");//avatar

  client.user.setActivity(`//help pour recevoir les commandes`);

  /*if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
      setInterval(changeColor, config.speed);*/

};
