const { client } = require('./utils/discord')
const db = require('./models');
const PORT = 5000;
const fastify = require('fastify')({ logger: true })

client.on("guildCreate", guild => { // This event fires when a guild is created or when the bot is added to a guild.
	guild.fetchAuditLogs({type: "BOT_ADD", limit: 1}).then(log => { // Fetching 1 entry from the AuditLogs for BOT_ADD.
		log.entries.first().executor.send(`Thank you for adding me to ${guild.name}!`).catch(e => console.error(e)); // Sending the message to the executor.
		console.log(log.entries.first().executor.id)

		let userID = log.entries.first().executor.id
		let userName = log.entries.first().executor.username
		let guidID = guild.id

		let channels = guild.channels.cache.map((ch) => {
			return {channelID: ch.id, channelName: ch.name}
		})

		let data = {
			id: userID,
			username: userName,
			guild: {
				id: guild.id,
				guildName: guild.name,
				guildChannels: channels
			}
		}
		
		db.User.countDocuments({
			id: userID,
	  }, function (err, count) {
				 if (!count > 0) {
					  db.User.create(data)
					  .then(function (newUser) {
							console.log(newUser)
					  })
				 } else {
					  console.log("User already exists")
				 }
			})

	});
});

client.on("guildDelete", guild => { // This event fires when a guild is created or when the bot is added to a guild.
	console.log(`Kicked from ${guild.id}`)
});


// module.exports = {client};

fastify.register(require('./routes/users'))

const start = async () => {
	try {
		await fastify.listen(PORT)
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
}

start();

