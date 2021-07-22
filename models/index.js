const mongoose = require('mongoose');

mongoose.set("debug", true);
mongoose.connect(process.env.dbURL || "mongodb://localhost/discoSaveBeta", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = Promise;

module.exports.Guild = require("./guild")