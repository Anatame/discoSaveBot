const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');

const messageEmbed = require('./messageEmbed') 

client.once('ready', () => {
   console.log('Ready!');
   client.user.setActivity(`you`, { type: 'LISTENING' });
});


client.login(config.token || process.env.token);

module.exports = { client, Discord, messageEmbed };


// // inside a command, event listener, etc.
