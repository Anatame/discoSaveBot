const {client} = require('../utils/discord.js');
// const db = require('../models');

exports.getUser = function (req, res) {
    // db.User.find()
    //     .then(function (Users) {
    //         res.json(Users);
    //     })
    //     .catch(function (err) {
    //         res.send(err)
    //     })
}

exports.createUser =  function (req, res) {
    // db.User.create(req.body)
    //     .then(function (newUser) {
    //         res.json(newUser)
    //     })
    
        const data = req.body
        console.log(data.name)
        // res.send(data.name)
        client.channels.cache.get(`856609332288421898`).send(data.name)
        
}

// exports.findUser = function (req, res) {
//     db.User.findById(req.params.UserID).then(function (User) {
//         res.json(User)
//     })
// }

// exports.updateUser = function (req, res) {
//     db.User.findOneAndUpdate({
//         _id: req.params.UserID
//     }, req.body, {
//         new: true
//     }).then(
//         function (User) {
//             res.send(User)
//         }
//     )
// }

// exports.deleteUser = function (req, res) {
//     db.User.remove({_id: req.params.UserID}).then(function () {
//         res.json({message: 'We deleted that shit!'})
//     })
// }

module.exports = exports;