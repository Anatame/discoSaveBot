const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: "Name cannot be blank!"
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;