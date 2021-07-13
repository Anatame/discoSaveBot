module.exports = function messageEmbed(data, Discord) {
   
   // let index = data.messageData.authorUsername.split("\\").indexOf("\\")
   // console.log(index)
   // let username = data.messageData.authorUsername.substring(0, index)

   const messageEmb = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setAuthor(data.messageData.authorUsername, data.messageData.authorAvatar, data.messageData.baseURI)
      .setDescription(data.messageData.message)
      .addField("Message Source", `[• Jump!](${data.messageData.baseURI})`)

      .setTimestamp()
   
   return messageEmb;
}



// const exampleEmbed = new Discord.RichEmbed()
// 	.setColor('#0099ff')
// 	.setTitle('Some title')
// 	.setURL('https://discord.js.org/')
// 	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
// 	.setDescription('Some description here')
// 	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
// 	.addField('Regular field title', 'Some value here')
// 	.addBlankField()
// 	.addField('Inline field title', 'Some value here', true)
// 	.addField('Inline field title', 'Some value here', true)
// 	.addField('Inline field title', 'Some value here', true)
// 	.setImage('https://i.imgur.com/wSTFkRM.png')
// 	.setTimestamp()
// 	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

// channel.send(exampleEmbed);


