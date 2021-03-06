const {
	client
} = require("./utils/discord");
const db = require("./models");
const fastify = require("fastify")({
	logger: true
});

let channels

client.on("guildCreate", async (guild) => {

	
		channels = [];
		guild.channels.cache.forEach((ch) => {
			if (ch.type != "voice" && ch.type != "category") {
				channels.push({
					channelID: ch.id,
					channelName: ch.name
				});
			}
		});

		console.log(channels);

		let data = {
			id: guild.id,
			icon: guild.iconURL(),
				guildName: guild.name,
				guildChannels: channels,
		};

		db.Guild.countDocuments({
				id: guild.id,
			},
			function (err, count) {
				if (!count > 0) {
					db.Guild.create(data).then(function (newGuild) {
						console.log(newGuild);
					});
				} 
			}
		);
	});

client.on("guildDelete", (guild) => {
	// This event fires when a guild is created or when the bot is added to a guild.
	console.log(`Kicked from ${guild.id} onwer id = ${guild.ownerID}`);
	db.Guild.deleteOne({ id: guild.id }, () => {
		console.log("deleted")
	});
});

// module.exports = {client};

fastify.register(require("./routes/users"));

const start = async () => {
	try {
		await fastify.listen(process.env.PORT || 5000, process.env.HOST || '::');
		console.log(`server listening on ${fastify.server.address().port}`)
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

start();