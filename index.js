const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const PORT = 5000;

const fastify = require('fastify')({ logger: true })

fastify.register(require('./routes/items'))

const start = async () => {
	try {
		await fastify.listen(PORT)
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
}

start();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
});

client.login(config.token);