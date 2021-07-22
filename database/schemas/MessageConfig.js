const mongoose = require('mongoose');
mongoose.connect(process.env.dbURL || 'mongodb://localhost:27017/discoSave',  {useUnifiedTopology:true, useNewUrlParser:true});

const userSchema = new mongoose.Schema({
      id: Number,
})

module.exports = mongoose.model("User", userSchema)