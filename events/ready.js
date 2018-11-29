const chalk = require('chalk');
const Discord = require('discord.js');
const fs = require("fs");
const config = require('../config.json')
const purplecolor = chalk.keyword('purple');

module.exports = client => { // eslint-disable-line no-unused-vars
  console.log(purplecolor(`${client.user.username} en ligne. \n` + 'Connecté dans:\n' + client.guilds.array()));
 //client.user.setGame('//help pour plus d\'info', 'https://www.twitch.tv/ryvalgaming')//stream
  //client.user.setAvatar("https://cdn.discordapp.com/attachments/515913352430747665/515917419198545930/rainbow.gif");//avatar

  client.user.setActivity(`${client.users.get('281125214098685954').username}#5682`, {type: "WATCHING"});
  

};
