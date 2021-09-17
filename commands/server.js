module.exports = {
	name: 'server',
	description: 'Returns server details',
	execute(message, args) {
		try {
			message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
		}catch(err){
			throw "There seem's to be an error in your \"service.js\" code";
		}
	},
};