function itemRoutes(fastify, options, done) {

   fastify.get('/items', (req, reply) => {
      reply.send({
         test: "Hello"
      })
   })

   //adding params
   fastify.get('/items/:id', (req, reply) => {

      const id = req.params.id

      reply.send({
         test: id
      })
   })

   done();
}

module.exports = itemRoutes