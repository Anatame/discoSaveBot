const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json');

client.once('ready', () => {
   console.log('Ready!');
});

client.login(config.token);

const getItems = (req, reply) => {
   reply.send("All items")
}

const getItem = (req, reply) => {
   const id = req.params.id

   reply.send({
      test: id
   })
}

const addItem = (req, reply) => {
   const data = JSON.parse(req.body)
   console.log(data.name)
   reply.send(data.name)
   client.channels.cache.get(`856609332288421898`).send(data.name)
}

module.exports = {
   getItems,
   getItem,
   addItem,
}