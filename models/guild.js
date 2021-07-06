const mongoose = require('mongoose')
require('mongoose-long')(mongoose);
const {Types: {Long}} = mongoose;

const guildSchema = new mongoose.Schema({

    id: { type: Long },
    icon: { type: String},
        guildName: { type: String },
        guildChannels: [{
            channelID: { type: Long },
            channelName: { type: String}
        }]
})

const Guild = mongoose.model('Guild', guildSchema);

module.exports = Guild;