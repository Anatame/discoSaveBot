const mongoose = require('mongoose');

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/discoSaveBeta", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.Promise = Promise;

module.exports.User = require("./user")