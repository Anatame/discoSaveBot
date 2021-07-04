const helpers = require('../helpers/users');

function itemRoutes(fastify, options, done) {


   //Add user when authorization success
   // fastify.post('/users', helpers.createUser)

   fastify.post('/users/message', helpers.sendMessage)

   //adding params
   fastify.get('/users/:id', helpers.getUser)

   

   done();
}

module.exports = itemRoutes