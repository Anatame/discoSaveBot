const getItems = (req, reply) => {
   reply.send("All items")
}

const getItem = (req, reply) => {
   const id = req.params.id

   reply.send({
      test: id
   })
}

module.exports = {
   getItems,
   getItem
}