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
   const name = req.body.name
   console.log(name)

   reply.send(name)
}

module.exports = {
   getItems,
   getItem,
   addItem,
}