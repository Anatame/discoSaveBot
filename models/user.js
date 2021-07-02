const mongoose = require('mongoose')
require('mongoose-long')(mongoose);
const {Types: {Long}} = mongoose;

const userSchema = new mongoose.Schema({
    id:{
        type: Long,
        required: "Name cannot be blank!"
    },
    username: {
        type: String,
    },
    guild: [{
        id: { type: Long },
        guildName: { type: String },
        guildChannels: [{
            channelID: { type: Long },
            channelName: { type: String}
        }]
    }]

})

const User = mongoose.model('User', userSchema);

module.exports = User;