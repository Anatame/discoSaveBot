const {getItems, getItem} = require('../controller/items');

function itemRoutes(fastify, options, done) {

   //Options for get all 
   const getItemsOpts = {
      schema: {
         response: {
            200: {
               type: 'array',
               items: {
                  type: 'object',
                  properties: {
                     id: { type: 'string' },
                     name: { type: 'string' }
                  }
               }
            }
         }
      }
   }

   fastify.get('/items', getItems)

   //adding params
   fastify.get('/items/:id', getItem)

   done();
}

module.exports = itemRoutes