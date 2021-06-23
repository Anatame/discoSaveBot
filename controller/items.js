const {client} = require('../utils/discord.js');

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
   const data = req.body
   console.log(data.name)
   reply.send(data.name)
   client.channels.cache.get(`856609332288421898`).send(data.name)
}

module.exports = {
   getItems,
   getItem,
   addItem,
}