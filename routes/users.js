const helpers = require('../helpers/users');

function itemRoutes(fastify, options, done) {


   //adding params
   fastify.get('/items/:id', helpers.getUser)

   fastify.post('/items', helpers.createUser)

   done();
}

module.exports = itemRoutes