const mongoose = require('mongoose')

const MessageConfigSchema = new mongoose.Schema({
   message: {
         type: 'string',
   }
})

module.exports = mongoose.model("MessageConfig", MessageConfigSchema)