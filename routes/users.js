const helpers = require('../helpers/users');

function itemRoutes(fastify, options, done) {


   //Add user when authorization success
   fastify.post('/users', helpers.createUser)

   //adding params
   fastify.get('/items/:id', helpers.getUser)

   

   done();
}

module.exports = itemRoutes