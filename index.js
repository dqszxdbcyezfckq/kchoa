﻿const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const chalk = require('chalk');
const fs = require('fs');
require('./util/eventLoader')(client);
const bluecolor = chalk.keyword('blue');

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/Fun/', (err, filesfun) => {
  if (err) console.error(err);
  filesfun.forEach(f => {
    const props = require(`./commands/Fun/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

  fs.readdir('./commands/Image/', (err, filesimg) => {
    if (err) console.error(err);
    filesimg.forEach(f => {
      const props = require(`./commands/Image/${f}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });

fs.readdir('./commands/Info/', (err, filesinfo) => {
  if (err) console.error(err);
  filesinfo.forEach(f => {
    const props = require(`./commands/Info/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

fs.readdir('./commands/Mod/', (err, filesmod) => {
  if (err) console.error(err);
  filesmod.forEach(f => {
    const props = require(`./commands/Mod/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

  fs.readdir('./commands/Admin/', (err, filesadmin) => {
    if (err) console.error(err);
    filesadmin.forEach(f => {
      const props = require(`./commands/Admin/${f}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });

    fs.readdir('./commands/canvas/', (err, filescanvas) => {
      if (err) console.error(err);
      filescanvas.forEach(f => {
        const props = require(`./commands/canvas/${f}`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client.aliases.set(alias, props.help.name);
        });
      });

fs.readdir('./commands/Social/', (err, filessocial) => {
  if (err) console.error(err);
  filessocial.forEach(f => {
    const props = require(`./commands/Social/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

fs.readdir('./commands/NSFW/', (err, filesnsfw) => {
  if (err) console.error(err);
  filesnsfw.forEach(f => {
    const props = require(`./commands/NSFW/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });

  
  var totalcmd =  Math.floor(filesfun.length + filesinfo.length + filesmod.length + filessocial.length + filesnsfw.length + filesadmin.length + filesimg.length + filescanvas.length);
console.log(bluecolor(`Il y a un total de ${totalcmd} commandes 👍.`));
  });
});
});
});
});
});
});
});

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
const servers = config.servers;

function changeColor() {
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
}*/

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  const mod_role = message.guild.roles.find('name', config.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  const admin_role = message.guild.roles.find('name', config.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === config.ownerid) permlvl = 4;
  return permlvl;
};

client.login(process.env.TOKEN);
