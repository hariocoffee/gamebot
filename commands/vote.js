module.exports = {
    name: 'vote',
    aliases: ['voting'],
    description: 'Returns MapleRoyals voting website',
    execute(message, args) {
      message.channel.send('Here\'s the link for the Voting:\n https://mapleroyals.com/?page=vote');
	},
};

