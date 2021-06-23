const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');

client.once('ready', () => {
   console.log('Ready!');
   client.user.setActivity(`you`, { type: 'LISTENING' });
});


client.login(config.token);

module.exports = { client };



