const {client} = require('../utils/discord.js');
const db = require('../models');



exports.createUser = function (req, res) {
    
    const data = req.body
    console.log(data);

    db.User.countDocuments({
        id: data.id,
    }, function (err, count) {
            if (!count > 0) {
                db.User.create({id: data.id, username: data.username})
                .then(function (newUser) {
                    console.log(newUser)
                    res.send('Created')
                })
            } else {
                console.log("User already exists")
            }
        });
}

exports.getUser = function (req, res) {
    const data = req.params
    db.User.find({id: data.id})
        .then(function (User) {
            res.send(User);
        })
        .catch(function (err) {
            res.send(err)
        })

}

exports.sendMessage = function (req, res) {
    const data = req.body
    console.log(data);
    client.channels.cache.get(data.channel).send(data.messageContent)
}

// exports.createUser =  function (req, res) {
//     db.User.create({id: '99'})
//         .then(function (newUser) {
//             console.log(newUser)
//         })
    
//         const data = req.body
//         console.log(data.name)
//         // res.send(data.name)
//         client.channels.cache.get(`856609332288421898`).send(data.name)
        
// }

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