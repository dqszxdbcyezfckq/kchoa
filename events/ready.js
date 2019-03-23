const chalk = require('chalk');
const Discord = require('discord.js');
const fs = require("fs");
const config = require('../config.json')
const purplecolor = chalk.keyword('purple');

module.exports = client => {
  
 /*const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;*/

/*function changeColor() {
  for (let index = 0; index < servers.length; ++index) {
    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
        .catch(console.error);

    if(config.logging){
      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}*/// eslint-disable-line no-unused-vars
  console.log(purplecolor(`${client.user.username} en ligne. \n` + 'Connecté dans:\n' + client.guilds.array()));
 //client.user.setGame('//help pour plus d\'info', 'https://www.twitch.tv/ryvalgaming')//stream
  //client.user.setAvatar("https://cdn.discordapp.com/attachments/515913352430747665/515917419198545930/rainbow.gif");//avatar

  client.user.setActivity(`//help pour recevoir les commandes`);

  /*if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
      setInterval(changeColor, config.speed);*/

};
